"use client";
import Error from "@/components/Error";

type Props = {
  error: {
    code: number;
    error: string;
    name: string;
    message: string;
    dev: string;
  };
};

const InternalError = ({ error: { code, name, message, dev } }: Props) => {
  return <Error code={code} name={name} message={message} dev={dev} />;
};

export default InternalError;
