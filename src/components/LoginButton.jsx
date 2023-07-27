"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <button
      onClick={() => {
        if (session) {
          router.push("user");
        } else signIn("google");
      }}
    >
      Sign in
    </button>
  );
};

export default LoginButton;
