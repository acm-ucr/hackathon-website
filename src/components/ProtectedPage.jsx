"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Error from "./Error";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

const ProtectedPage = ({ title, children, restrictions }) => {
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);
  const pathName = usePathname();
  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }
    if (!session.user.role || session.user.role.length < 1) {
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
      restrictions.includes("participants") &&
      !session.user.role
    ) {
      console.log("Have not registered");
      setError({
        code: 401,
        error: "Unauthenticated User",
        message: "You need login to access this page",
      });
      return;
    }
    const roles = session.user.role.filter(
      (role) => session.user.status[role] === "accept"
    );
    if (
      status === "authenticated" &&
      !(
        restrictions.length === 0 ||
        roles.some((role) => restrictions.includes(role))
      )
    ) {
      console.log("Unauthorized Permission");
      setError({
        code: 403,
        error: "Unauthorized",
        message: "You do not have access this page",
      });
      return;
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
            <div
              className={`${
                pathName.startsWith("/forms") ? "w-full" : "w-11/12"
              }  h-full`}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
