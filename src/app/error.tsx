"use client";
import Error from "@/components/Error";

type Props = {
  code: any;
  error: any;
  name: any;
  message: any;
  dev: any;
};

const InternalError = ({ error: { code, name, message, dev } }: Props) => {
  return <Error code={code} name={name} message={message} dev={dev} />;
};

export default InternalError;
