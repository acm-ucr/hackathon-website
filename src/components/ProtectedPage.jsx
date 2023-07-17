"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(status);
    if (status != "authenticated") {
      console.log("Not signed in");
      router.push("/login");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      console.log("Dont have admin permissions");
      router.push("/user/dashboard");
    }
  }, [status]);

  return (
    <>
      {status === "loading" && <>LOADING</>}
      {status === "authenticated" && (
        <div>
          <title>{title}</title>
          {children}
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
