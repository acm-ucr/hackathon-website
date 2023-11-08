"use client";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/dynamic/Loading";
import Error from "./Error";
import { usePathname } from "next/navigation";
import RELEASES from "@/data/Releases";
import { ROUTES } from "@/data/ProtectedRoutes";

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const pathName = usePathname();

  const restrictions = ROUTES[pathName].restrictions;
  const title = ROUTES[pathName].title;

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
          <title>{title}</title>
          <div className="flex justify-center items-start w-full bg-hackathon-page h-screen pt-12 lg:pt-0 z-0">
            <div className={`w-[96%] h-full`}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
