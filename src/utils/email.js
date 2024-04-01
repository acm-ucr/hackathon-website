import Email from "@/components/email/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async ({ email, id, name, position, subject, preview }) => {
  const { data, error } = await resend.emails.send({
    from: "Hackathon <info@hackathon.com>",
    to: [email],
    subject: subject,
    // eslint-disable-next-line new-cap
    react: Email({ id, name, position, preview }),
  });

  return { data, error };
};

export default send;
