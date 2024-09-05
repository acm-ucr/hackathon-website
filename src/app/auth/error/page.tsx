"use client";
import Error from "@/components/Error";
import { useParams } from "next/navigation";

interface Params {
  error?: string;
}

const AuthError = () => {
  const { error } = useParams() as Params;

  return (
    <Error
      code={401}
      name="NextAuth Error"
      message="A Next Auth Error Occurred"
      dev={error}
    />
  );
};

export default AuthError;
