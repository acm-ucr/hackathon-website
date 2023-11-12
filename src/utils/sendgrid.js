/* eslint-disable camelcase */
import sg from "@sendgrid/mail";

sg.setApiKey(process.env.SENDGRID_API_KEY);

const send = async ({ to, template_id, dynamic_template_data }) => {
  const msg = {
    from: "citrushack@gmail.com",
    to,
    template_id,
    dynamic_template_data,
  };

  sg.send(msg);
};

export default {
  send,
};
