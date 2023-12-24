export const api = async ({ url, method, body }) => {
  let data;
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
    });

    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  return data;
};
