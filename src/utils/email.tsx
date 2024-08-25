import Email from "@/components/email/Email";
import { Resend } from "resend";

interface SendEmailParams {
  email: string;
  id: string;
  name: string;
  position: string;
  subject: string;
  preview: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async ({
  email,
  id,
  name,
  position,
  subject,
  preview,
}: SendEmailParams) => {
  const { data, error } = await resend.emails.send({
    from: "Hackathon <info@hackathon.com>",
    to: [email],
    subject: subject,
    text: preview,
    // eslint-disable-next-line new-cap
    react: Email({ id, name, position, preview }),
  });

  return { data, error };
};

export default send;
