type API = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Object;
};

export const api = async ({ url, method, body }: API) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
