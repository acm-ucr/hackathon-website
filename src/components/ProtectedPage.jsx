"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Error from "./Error";
import Navigation from "./Navigation";

const ProtectedPage = ({ title, children, restrictions }) => {
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }
    if (!session.user.role) {
      console.log("No Role Assigned");
      setError({
        code: 403,
        error: "Unauthorized",
        message: "Please Register First",
      });
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("hacker") &&
      !session.user.role
    ) {
      console.log("Have not register");
      setError({
        code: 401,
        error: "Unauthenticated User",
        message: "You need login to access this page",
      });
      return;
    }
    // single string role
    if (typeof session?.user.role == "string")
      if (
        status === "authenticated" &&
        restrictions.length > 0 &&
        !restrictions.includes(session.user.role)
      ) {
        console.log("Dont have admin permissions");

        setError({
          code: 403,
          error: "Unauthorized",
          message: "You do not have access this page",
        });
        return;
      }
      // array  role
      else {
        let authorized = false;
        if (restrictions.length > 0) {
          session.user.role.every((role) => {
            if (restrictions.includes(role)) {
              authorized = true;
              return false;
            }
            return true;
          });
        } else authorized = true;
        if (!authorized) {
          console.log("Dont have admin permissions");
          setError({
            code: 403,
            error: "Unauthorized",
            message: "You do not have access this page",
          });
          return;
        }
      }
  }, [status]);

  return (
    <>
      {status === "loading" && <Loading />}
      {error && (
        <Error code={error.code} error={error.error} message={error.message} />
      )}
      {status === "authenticated" && !error && (
        <>
          <Navigation />
          <title>{title}</title>
          <div className="flex justify-center items-start w-full bg-hackathon-page z-0 h-screen pt-12 lg:pt-0">
            <div className="w-11/12 h-full">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
