"use client";
import { signIn } from "next-auth/react";

interface props {
  callback: string;
}

const SignIn = ({ callback }: props) =>
  void signIn("google", { callbackUrl: callback });

export default SignIn;
