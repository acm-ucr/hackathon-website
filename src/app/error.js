"use client";
import Error from "@/components/dynamic/Error";

export default function InternalError() {
  return (
    <Error
      code="500"
      error="Internal Server Error"
      message="Please contact the web development team for assistance."
    />
  );
}
