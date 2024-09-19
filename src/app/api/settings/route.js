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
    updateRoleCounts("panels"),
    updateRoleCounts("teams"),
  ]);
};
const getRoleCount = async (role, value, subType, subValue) => {
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
        query(
          collection(db, "users"),
          where(`${subType}`, "==", subValue),
          where(`roles.${role}`, "==", value),
        ),
      )
    ).data().count;
  }
  if (role === "participants" && subType === "school") {
    return (
      await getCountFromServer(
        query(
          collection(db, "users"),
          where(`school`, "==", subValue),
          where(`roles.${role}`, "==", value),
        ),
      )
    ).data().count;
  }
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
  ]);

  const shirtSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const dietOptions = [
    "Halal",
    "Vegan",
    "Vegetarian",
    "Nut Allergy",
    "No Gluten",
    "Lactose Intolerant",
  ];
  const schoolOptions = [
    "University of California, Riverside",
    "New York University",
  ];

  const [schoolMinusOneCount, schoolZeroCount, schoolOneCount] =
    await Promise.all([
      Promise.all(
        schoolOptions.map((school) =>
          getRoleCount("participants", -1, "school", school),
        ),
      ),
      Promise.all(
        schoolOptions.map((school) =>
          getRoleCount("participants", 0, "school", school),
        ),
      ),
      Promise.all(
        schoolOptions.map((school) =>
          getRoleCount("participants", 1, "school", school),
        ),
      ),
    ]);

  const [shirtMinusOneCount, shirtZeroCount, shirtOneCount] = await Promise.all(
    [
      Promise.all(
        shirtSizes.map((size) => getRoleCount(role, -1, "shirt", size)),
      ),
      Promise.all(
        shirtSizes.map((size) => getRoleCount(role, 0, "shirt", size)),
      ),
      Promise.all(
        shirtSizes.map((size) => getRoleCount(role, 1, "shirt", size)),
      ),
    ],
  );

  const [dietMinusOneCount, dietZeroCount, dietOneCount] = await Promise.all([
    Promise.all(
      dietOptions.map((option) => getRoleCount(role, -1, "diet", option)),
    ),
    Promise.all(
      dietOptions.map((option) => getRoleCount(role, 0, "diet", option)),
    ),
    Promise.all(
      dietOptions.map((option) => getRoleCount(role, 1, "diet", option)),
    ),
  ]);

  const updateData = {
    [`${role}.status.-1`]: roleMinusOneCount,
    [`${role}.status.0`]: roleZeroCount,
    [`${role}.status.1`]: roleOneCount,
  };

  schoolOptions.forEach((school, index) => {
    updateData[`participants.school.-1.${school}`] = schoolMinusOneCount[index];
    updateData[`participants.school.0.${school}`] = schoolZeroCount[index];
    updateData[`participants.school.1.${school}`] = schoolOneCount[index];
  });

  shirtSizes.forEach((size, index) => {
    updateData[`${role}.shirt.-1.${size}`] = shirtMinusOneCount[index];
    updateData[`${role}.shirt.0.${size}`] = shirtZeroCount[index];
    updateData[`${role}.shirt.1.${size}`] = shirtOneCount[index];
  });

  dietOptions.forEach((option, index) => {
    updateData[`${role}.diet.-1.${option}`] = dietMinusOneCount[index];
    updateData[`${role}.diet.0.${option}`] = dietZeroCount[index];
    updateData[`${role}.diet.1.${option}`] = dietOneCount[index];
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
