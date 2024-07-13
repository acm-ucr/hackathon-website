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
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1
  );

  return (
    <div className="w-full h-full overflow-scroll-y flex flex-col items-center font-poppins">
      <div className="w-full flex flex-row justify-end space-x-8 mr-[10%]">
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
      <div className="w-10/12 md:w-1/2 xl:w-1/3 py-20 flex flex-col items-center">
        <Image src={LOGO} className="w-1/3 m-4" alt="Logo" />
        <p className="text-xl bg-hackathon-green-300 font-semibold px-4 py-2 rounded-t-xl m-0 w-full">
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
