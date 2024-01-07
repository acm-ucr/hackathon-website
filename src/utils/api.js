export const api = async ({ url, method, body }) => {
  return await apiCallWithStatusCode({ url, method, body })["responseBody"];
};

export const apiCallWithStatusCode = async ({ url, method, body }) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return {
    responseBody: data,
    statusCode: response.status,
  };
};
