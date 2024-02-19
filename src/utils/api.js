import Fault from "./error";

export const api = async ({ url, method, body }) => {
  console.log(url, method, body);

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  console.log("data", data);

  if (data.error) {
    throw new Fault(
      500,
      "Internal Server Error",
      "Please Contact the Software Engineering Leads for Assistance",
      data.error
    );
  }

  return data;
};
