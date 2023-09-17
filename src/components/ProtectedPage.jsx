"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import UnauthorizedError from "./UnauthorizedError";
<<<<<<< HEAD
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

const ProtectedPage = ({ title, children, restrictions }) => {
  const pathName = usePathname();
=======

const ProtectedPage = ({ title, children, restrictions }) => {
>>>>>>> e5ed0aa (add 401 error")
  const { data: session, status } = useSession();
  const [unauthorizedError, setUnauthorizedError] = useState("");

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }
    if (!session.user.role) {
      console.log("No Role Assigned");
      router.push("/");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("hacker") &&
      !session.user.role
    ) {
      console.log("Have not register");
      setUnauthorizedError("You need login to access this page.");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      !session.user.role.includes("admin")
    ) {
      console.log("Dont have admin permissions");
      setUnauthorizedError("You do not have access this page.");
      return;
    }
  }, [status]);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : unauthorizedError ? (
        <UnauthorizedError message={unauthorizedError} />
      ) : (
        status === "authenticated" && (
          <div className="w-full flex justify-center h-full">
            <title>{title}</title>
            <div className="w-11/12 h-full">{children}</div>
          </div>
        )
      )}
    </>
  );
};

export default ProtectedPage;
