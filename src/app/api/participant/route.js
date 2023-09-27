import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;
  const { phone, major, age, school, grade, gender, shirt, diet } =
    await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await updateDoc(doc(db, "users", session.user.id), {
        phone: phone,
        major: major,
        age: age,
        school: school,
        grade: grade,
        gender: gender,
        shirt: shirt,
        diet: Object.keys(diet).map((key) => diet[key] && key),
      });
      return res.json({ message: "OK" }, { status: 200 });
    } catch (err) {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials." },
      { status: 401 }
    );
  }
}
