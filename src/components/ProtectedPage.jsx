"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import UnauthorizedError from "./UnauthorizedError";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

const ProtectedPage = ({ title, children, restrictions }) => {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const [unauthorizedError, setUnauthorizedError] = useState("");

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
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
      restrictions.length > 0 &&
      !restrictions.includes(session.user.role)
    ) {
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
          <>
            <Navigation />
            <title>{title}</title>
            <div className="flex justify-center items-start w-full bg-hackathon-page z-0 h-screen pt-12 lg:pt-0">
              <div
                className={`${
                  !pathName.startsWith("/forms") && "w-11/12"
                } h-full`}
              >
                {children}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default ProtectedPage;
