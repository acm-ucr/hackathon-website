"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { usePathname } from "next/navigation";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);

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
      setError({
        code: 401,
        error: "Unauthenticated User",
        message: "You need login to access this page",
      });
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("committee") &&
      session.user.role !== "committee"
    ) {
      console.log("Dont have permissions");
      router.push("/");
      return;
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      console.log("Dont have admin permissions");
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
          <div
            className={`${!pathName.startsWith("/forms") && "w-11/12"} h-full`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
