"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      console.log("Not signed in");
      router.push("/");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("hacker") &&
      !session.user.role
    ) {
      console.log("Have not register");
      router.push("/");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      console.log("Dont have admin permissions");
      router.push("/");
      return;
    }
  }, [status]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "authenticated" && (
        <div className="w-full flex justify-center h-full">
          <title>{title}</title>
          <div className="w-11/12 h-full">{children}</div>
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
