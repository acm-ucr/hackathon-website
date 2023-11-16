"use client";
import Error from "@/components/dynamic/Error";

export default function InternalError({ error: { code, name, message } }) {
  return <Error code={code} error={name} message={message} />;
}
