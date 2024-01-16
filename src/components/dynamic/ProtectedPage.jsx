"use client";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/dynamic/Loading";
import { usePathname } from "next/navigation";
import RELEASES from "@/data/Releases";
import Fault from "@/utils/error";
import Navigation from "@/components/dynamic/Navigation";

const ProtectedPage = ({ children, restrictions, title }) => {
  const { data: session, status } = useSession();
  const [confirmed, setConfirmed] = useState(false);

  const pathName = usePathname();
  const initialRestrictions = resitrctions;
  const sur = session.user.roles;
  useEffect(() => {
    if (RELEASES.DYNAMIC[pathName] > new Date()) {
      throw new Fault(
        423,
        "Locked Resource",
        "This resource has not been released"
      );
    }

    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }

    if (!sur && Object.keys(initialRestrictions).length > 0) {
      throw new Fault(
        403,
        "Unauthorized",
        "You do not have any assigned roles"
      );
    }

    const authorized = Object.entries(initialRestrictions).some(
      ([key, values]) =>
        Array.isArray(values) ? values.includes(sur[key]) : sur[key] === values
    );

    if (!authorized && Object.keys(initialRestrictions).length > 0) {
      throw new Fault(403, "Unauthorized", "You do not have access this page");
    }
    setConfirmed(true);
  }, [status, pathName, initialRestrictions, sur]);

  const navigation = RegExp(/user\/|admin\//).test(pathName);

  return (
    <>
      {status === "loading" && <Loading />}
      {confirmed && (
        <>
          <title>{title}</title>
          {navigation && <Navigation />}
          <div className="flex justify-center items-start w-full bg-hackathon-page h-screen py-12 lg:py-0 z-0 overflow-x-hidden">
            <div className="w-11/12 h-full">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
