const send = async ({ email, id, name, position }) => {
  const body = {
    params: {
      NAME: name,
      POSITION: position,
    },
    to: [
      {
        email: email,
        name: name,
      },
    ],
    templateId: parseInt(id),
  };

  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.EMAIL_API_KEY,
    },
    body: JSON.stringify(body),
  });
};

export default {
  send,
};
