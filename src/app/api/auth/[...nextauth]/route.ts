import NextAuth from "next-auth";
import { options } from "@/utils/auth";

// eslint-disable-next-line new-cap
const handler = NextAuth(options);
export { handler as GET, handler as POST };
