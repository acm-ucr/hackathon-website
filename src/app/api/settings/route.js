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
const getRoleCount = async (role, value) => {
  if (role === "teams") {
    return (
      await getCountFromServer(
        query(collection(db, "teams"), where(`status`, "==", value)),
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
    // getRoleCount(role, "L"),
    // getRoleCount(role, "diet")
  ]);

  await updateDoc(doc(db, "statistics", "statistics"), {
    [`${role}.-1`]: roleMinusOneCount,
    [`${role}.0`]: roleZeroCount,
    [`${role}.1`]: roleOneCount,
    // [`${role}.shirt.1.L`]: sizeCount,
    // [`${role}.diet.1.Halal`]: dietCount,
  });
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
