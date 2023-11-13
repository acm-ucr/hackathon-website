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

    if (!session.user.roles && Object.keys(restrictions).length > 0) {
      throw new Fault(
        403,
        "Unauthorized",
        "You do not have any assigned roles"
      );
    }

    const authorized = Object.entries(restrictions).some(([key, values]) =>
      Array.isArray(values)
        ? values.includes(session.user.roles[key])
        : session.user.roles[key] === values
    );

    if (!authorized && Object.keys(restrictions).length > 0) {
      throw new Fault(403, "Unauthorized", "You do not have access this page");
    }
    setConfirmed(true);
  }, [status]);

  const navigation = RegExp(/user\/|admin\//).test(pathName);

  return (
    <>
      {status === "loading" && <Loading />}
      {confirmed && (
        <>
          <title>{title}</title>
          {navigation && <Navigation />}
          <div className="flex justify-center items-start w-full bg-hackathon-page h-screen pt-12 lg:pt-0 z-0">
            <div className={`w-[96%] h-full`}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
