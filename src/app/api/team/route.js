import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/user/Team";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { validate } from "src/utils/validate.js";

export async function POST() {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  try {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: " ",
    });

    const team = {
      name: randomName,
      links: {
        github: "",
        devpost: "",
        figma: "",
      },
      members: [{ email: user.email, name: user.name, uid: user.id }],
      status: 0,
    };
    const docRef = await addDoc(collection(db, "teams"), team);
    await updateDoc(doc(db, "users", user.id), {
      team: docRef.id,
    });
    return res.json(
      {
        message: "OK",
        items: { team: docRef.id },
      },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth, user } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  const { name, github, figma, devpost, members } = await req.json();

  const validation = {
    name: [name],
    github: [github],
    figma: [figma],
    devpost: [devpost],
    members: [members],
  };

  const results = validate(validation);

  if (!results.valid) {
    return res.json(
      { message: `Validation Error: ${results.message}` },
      { status: 400 }
    );
  }

  try {
    await updateDoc(doc(db, "teams", user.team), {
      name: name,
      links: {
        github: github,
        figma: figma,
        devpost: devpost,
      },
      members: members,
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const team = req.nextUrl.searchParams.get("teamid");

  try {
    const snapshot = await getDoc(doc(db, "teams", team));
    if (!snapshot.exists())
      return res.json({ message: "Invalid Team ID" }, { status: 500 });
    const { name, links, members } = snapshot.data();
    return res.json(
      {
        message: "OK",
        items: {
          name: name,
          github: links.github,
          devpost: links.devpost,
          figma: links.figma,
          members: members,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
