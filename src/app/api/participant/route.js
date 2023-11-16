import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/user/Participant";
import { validate } from "src/utils/validate.js";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  const { phone, major, age, school, grade, gender, shirt, diet } =
    await req.json();

  const validatation = {
    phone: [phone],
    major: [major],
    age: [age],
    school: [school],
    grade: [grade],
    gender: [gender],
    shirt: [shirt],
    diet: [diet],
  };

  const results = validate(validatation);

  if (!results.valid) {
    return res.json(
      { message: `Validation Error: ${results.message}` },
      { status: 400 }
    );
  }

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      major: major,
      age: age,
      school: school,
      grade: grade,
      gender: gender,
      shirt: shirt,
      diet: diet,
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
