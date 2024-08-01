"use client";

import { useState } from "react";
import Status from "./Status";
import Questions from "./Questions";
import Confirmation from "./Confirmation";
import Button from "../../Button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import LOGO from "@/app/favicon.ico";
import { useRouter } from "next/navigation";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses,
  bypass = false,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y flex h-full w-full flex-col items-center font-poppins">
      <div className="mr-[10%] flex w-full flex-row justify-end space-x-4">
        <Button
          text="Back to Home"
          onClick={() => router.push("/")}
          loading={loading}
          color="green"
        />
        <Button
          text="Sign Out"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          loading={loading}
          color="green"
        />
      </div>
      <div className="flex w-10/12 flex-col items-center pb-12 pt-5 md:w-1/2 xl:w-1/3">
        <Image src={LOGO} className="m-4 w-1/3" alt="Logo" />
        <p className="m-0 w-full rounded-t-xl bg-hackathon-green-300 px-4 py-2 text-xl font-semibold">
          {header}
        </p>
        <div className="rounded-b-xl bg-white p-3">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
