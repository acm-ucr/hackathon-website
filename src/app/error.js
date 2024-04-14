"use client";
import Error from "@/components/Error";

const InternalError = ({ error: { code, name, message, dev } }) => {
  return <Error code={code} error={name} message={message} dev={dev} />;
};

export default InternalError;
