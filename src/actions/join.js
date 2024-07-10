import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import Fault from "@/utils/error";

export async function fetchTeam(id) {
  const docSnap = await getDoc(doc(db, "teams", id));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Fault(404, "Invalid Team ID", "Please get a new team invite");
  }
}
