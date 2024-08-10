"use client";
import { Session as SessionType } from "next-auth";
import { SessionProvider } from "next-auth/react";

type props = {
  children: React.ReactNode;
  session: SessionType | null;
};

const Session = ({ children, session }: props) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {children}
    </SessionProvider>
  );
};

export default Session;
