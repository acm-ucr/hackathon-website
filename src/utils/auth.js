import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const auth = async (admin = false, restrictions = []) => {
  const session = await getServerSession(authOptions);

  if (session.user) {
    if (admin) {
      if (
        !restrictions.some(
          (restriction) =>
            session.user.role.includes(restriction) &&
            session.user.status[restriction] !== "accept"
        )
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
