"use client";
import Error from "@/components/dynamic/Error";
import { useParams } from "next/navigation";
const AuthError = () => {
  const { error } = useParams();
  return (
    <Error
      code={401}
      error={"NextAuth Error"}
      message={"An authentication error occurred"}
      dev={error}
    />
  );
};

export default AuthError;
