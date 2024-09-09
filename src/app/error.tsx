"use client";
import Error from "@/components/Error";

type props = {
  error: {
    code: number;
    error: string;
    name: string;
    message: string;
    dev: string;
  };
};

const InternalError = ({ error: { code, name, message, dev } }: props) => {
  return <Error code={code} name={name} message={message} dev={dev} />;
};

export default InternalError;
