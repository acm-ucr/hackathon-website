// import Fault from "@/utils/error";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import Fault from "@/utils/error";

export async function fetchTeamData(id) {
  const docRef = doc(db, "teams", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Fault(404, "Invalid Team ID", "Please get a new team invite");
  }
}
