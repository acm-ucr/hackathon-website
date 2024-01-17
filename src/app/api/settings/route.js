import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/auth";

async function syncStatsWithDatabase() {
  await updateRoleCounts("participants");
  await updateRoleCounts("volunteers");
  await updateRoleCounts("judges");
  await updateRoleCounts("mentors");
  await updateRoleCounts("committees");
  await updateRoleCounts("sponsors");
  await updateRoleCounts("admins");
  await updateRoleCounts("teams");
}
const getRoleCount = async (role, value) => {
  return (
    await getDocs(
      query(collection(db, "users"), where(`roles.${role}`, "==", value))
    )
  ).size;
};
async function updateRoleCounts(role) {
  const [roleMinusOneCount, roleZeroCount, roleOneCount] = await Promise.all([
    getRoleCount(role, -1),
    getRoleCount(role, 0),
    getRoleCount(role, 1),
  ]);

  await updateDoc(doc(db, "statistics", "statistics"), {
    [`${role}.-1`]: roleMinusOneCount,
    [`${role}.0`]: roleZeroCount,
    [`${role}.1`]: roleOneCount,
  });
}
export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }
  try {
    syncStatsWithDatabase();
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
