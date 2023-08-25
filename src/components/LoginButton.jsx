"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <button
        onClick={() => {
          if (session) {
            router.push("user");
          } else signIn("google");
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default LoginButton;
