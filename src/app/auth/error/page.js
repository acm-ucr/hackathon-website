"use client";
import Error from "@/components/Error";
import { useParams } from "next/navigation";

const AuthError = () => {
  const { error } = useParams();

  return (
    <Error
      code={401}
      error="NextAuth Error"
      message="A Next Auth Error Occurred"
      dev={error}
    />
  );
};

export default AuthError;
