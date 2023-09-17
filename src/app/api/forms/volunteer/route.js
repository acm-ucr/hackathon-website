import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.json({});
  const { phone, major, grade, gender, shirt, availability } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    console.log(session.user.id);
    await updateDoc(doc(db, "users", session.user.id), {
      phone: phone,
      major: major,
      grade: grade,
      gender: gender,
      shirt: shirt,
      availability: arrayUnion(...availability),
      role: arrayUnion("volunteer"),
    });
  }

  return res;
}
