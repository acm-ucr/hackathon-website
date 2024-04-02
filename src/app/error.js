"use client";
import Error from "@/components/Error";

export default function InternalError({ error: { code, name, message, dev } }) {
  return <Error code={code} error={name} message={message} dev={dev} />;
}
