import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const auth = async (roles, accepted) => {
  const session = await getServerSession(authOptions);
  const userRoles = accepted
    ? Object.keys(session.user.status).map(
        (status) => session.user.status[status] === "accept"
      )
    : session.user.role;
  if (session.user) {
    if (!roles || roles.some((role) => userRoles.includes(role)))
      return {
        message: null,
        authCode: 200,
        uid: session.user.id,
        ...session.user,
      };
    else {
      return { message: `Forb/*  */idden Access`, authCode: 403 };
    }
  } else {
    return { message: "Invalid Authentication Credentials.", authCode: 401 };
  }
};
