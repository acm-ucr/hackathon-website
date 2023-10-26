"use client";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/dynamic/Loading";
import Error from "./Error";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";
import RELEASES from "@/data/Releases";

const ProtectedPage = ({ title, children, restrictions }) => {
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const pathName = usePathname();
  const navigation = RegExp(/user\/|admin\//).test(pathName);

  useEffect(() => {
    if (RELEASES.DYNAMIC[pathName] > new Date()) {
      setError({
        code: 423,
        error: "Locked Resource",
        message: "This resource has not been released",
      });
      return;
    }

    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }

    if (!session.user.roles && Object.keys(restrictions).length > 0) {
      setError({
        code: 403,
        error: "Unauthorized",
        message: "You do not have any assigned roles",
      });
      return;
    }

    const authorized = Object.entries(restrictions).some(([key, values]) =>
      Array.isArray(values)
        ? values.includes(session.user.roles[key])
        : session.user.roles[key] === values
    );

    if (!authorized && Object.keys(restrictions).length > 0) {
      setError({
        code: 403,
        error: "Unauthorized",
        message: "You do not have access this page",
      });
      return;
    }
    setConfirmed(true);
  }, [status]);

  return (
    <>
      {status === "loading" && <Loading />}
      {error && (
        <Error code={error.code} error={error.error} message={error.message} />
      )}
      {status === "authenticated" && confirmed && (
        <>
          {navigation && <Navigation />}
          <title>{title}</title>
          <div className="flex justify-center items-start w-full bg-hackathon-page z-0 h-screen pt-12 lg:pt-0">
            <div className={`${navigation ? "w-11/12" : "w-full"} h-full`}>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
