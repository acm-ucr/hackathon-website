"use client";
import Error from "@/components/dynamic/Error";

export default function InternalError({ error: { code, name, message, dev } }) {
  return <Error code={code} error={name} message={message} dev={dev} />;
}
