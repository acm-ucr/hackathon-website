"use client";
import Error from "@/components/Error";

type ErrorProps = {
  code: number;
  error: string;
  name: string;
  message: string;
  dev: string;
};

type Props = {
  error: ErrorProps;
};

const InternalError = ({ error: { code, name, message, dev } }: Props) => {
  return <Error code={code} name={name} message={message} dev={dev} />;
};

export default InternalError;
