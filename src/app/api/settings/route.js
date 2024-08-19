import {
  collection,
  updateDoc,
  doc,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/auth";

const syncStatsWithDatabase = async () => {
  await Promise.all([
    updateRoleCounts("participants"),
    updateRoleCounts("volunteers"),
    updateRoleCounts("judges"),
    updateRoleCounts("mentors"),
    updateRoleCounts("committees"),
    updateRoleCounts("sponsors"),
    updateRoleCounts("admins"),
    updateRoleCounts("teams"),
  ]);
};
const getRoleCount = async (role, value, subType = null, subValue = null) => {
  if (role === "teams") {
    return (
      await getCountFromServer(
        query(collection(db, "teams"), where(`status`, "==", value)),
      )
    ).data().count;
  }

  if (subType) {
    return (
      await getCountFromServer(
        query(collection(db, "users"), where(`${subType}`, "==", subValue)),
      )
    ).data().count;
  }
  // if (value == "school") {
  //   return (
  //     await getCountFromServer(
  //       query(collection(db, "users"), where(`school`, "==", value)),
  //     )
  //   ).data().count;
  // }
  return (
    await getCountFromServer(
      query(collection(db, "users"), where(`roles.${role}`, "==", value)),
    )
  ).data().count;
};
const updateRoleCounts = async (role) => {
  const [roleMinusOneCount, roleZeroCount, roleOneCount] = await Promise.all([
    getRoleCount(role, -1),
    getRoleCount(role, 0),
    getRoleCount(role, 1),
    // getRoleCount("participants", "school"),
  ]);

  const shirtSizes = ["XS", "S", "M", "L", "XL"];
  const dietOptions = ["Halal", "Vegan"];

  const shirtCounts = await Promise.all(
    shirtSizes.map((size) => getRoleCount(role, 1, "shirt", size)),
  );

  const dietCounts = await Promise.all(
    dietOptions.map((option) => getRoleCount(role, 1, "diet", option)),
  );

  const updateData = {
    [`${role}.status.-1`]: roleMinusOneCount,
    [`${role}.status.0`]: roleZeroCount,
    [`${role}.status.1`]: roleOneCount,
    // [`participants.school`]: schoolCount,
  };

  shirtSizes.forEach((size, index) => {
    updateData[`${role}.shirt.${size}`] = shirtCounts[index];
  });

  dietOptions.forEach((option, index) => {
    updateData[`${role}.diet.${option}`] = dietCounts[index];
  });

  await updateDoc(doc(db, "statistics", "statistics"), updateData);
};
export const GET = async () => {
  const res = NextResponse;
  const { auth, message } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }
  try {
    syncStatsWithDatabase();
    return res.json({ status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
