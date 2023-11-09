"use client";

import { useState } from "react";
import Status from "./Status";
import Questions from "./Questions";
import Confirmation from "./Confirmation";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses,
  bypass = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1
  );

  return (
    <div className="w-full h-full overflow-scroll flex flex-col items-center font-poppins">
      <div className="w-10/12 md:w-1/2 xl:w-1/3 my-5">
        <p className="text-xl bg-hackathon-green-300 font-semibold px-4 py-2 rounded-t-xl m-0">
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
