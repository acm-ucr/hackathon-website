import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchTeam(id) {
  const docSnap = await getDoc(doc(db, "teams", id));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
}
