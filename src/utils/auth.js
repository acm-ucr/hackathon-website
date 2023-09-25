import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const auth = async (admin = false) => {
  const session = await getServerSession(authOptions);

  if (session.user) {
    if (admin) {
      if (
        session.user.role.includes("admins") &&
        session.user.status.admins === "accept"
      ) {
        return { message: null, authCode: 200, uid: session.user.id };
      } else {
        return { message: `Forbidden Access`, authCode: 403 };
      }
    } else {
      return { message: null, authCode: 200, uid: session.user.id };
    }
  } else {
    return { message: "Invalid Authentication Credentials.", authCode: 401 };
  }
};
