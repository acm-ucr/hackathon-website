"use client";
import Error from "@/components/Error";

const NotFoundError = () => {
  return (
    <Error
      code="404"
      error="Page Not Found"
      message="The page you are looking for does not seem to exist."
    />
  );
};

export default NotFoundError;
