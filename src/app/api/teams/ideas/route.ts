import { authenticate } from "@/utils/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";

export const POST = async (req: Request) => {
  const { auth, message } = await authenticate({
    participants: [1],
  });

  if (auth !== 200) {
    return Response.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  const { idea, languages, details, contact } = await req.json();

  try {
    await addDoc(collection(db, "ideas"), {
      idea,
      languages,
      details,
      contact,
    });
    return Response.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
