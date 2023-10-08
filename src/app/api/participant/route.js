import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate({
    participants: [-1, 0, 1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  const { phone, major, age, school, grade, gender, shirt, diet } =
    await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
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
}
