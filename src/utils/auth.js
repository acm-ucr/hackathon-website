import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const authenticate = async (restrictions = {}) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    return { message: "Invalid Authentication Credentials.", auth: 401 };
  }

  const authorized = Object.entries(restrictions).some(([key, value]) =>
    value.includes(session.user.roles[key])
  );

  if (!authorized && Object.keys(restrictions).length > 0) {
    return { message: `Forbidden Access`, auth: 403 };
  }

  return {
    message: null,
    auth: 200,
    uid: session.user.id,
    user: session.user,
  };
};
