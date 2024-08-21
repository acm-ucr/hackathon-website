import Email from "@/components/email/Email";
import { Resend, CreateEmailResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

interface params {
  email: string;
  id: string;
  name: string;
  position: string;
  subject: string;
  preview: boolean;
}

const send = async ({
  email,
  id,
  name,
  position,
  subject,
  preview,
}: params): Promise<CreateEmailResponse> => {
  const { data, error } = await resend.emails.send({
    from: "Hackathon <info@hackathon.com>",
    to: [email],
    subject: subject,
    text: `Hello ${name},\n\nYour position: ${position}\nPreview: ${preview}`,
    // eslint-disable-next-line new-cap
    react: Email({ id, name, position, preview }),
  });

  return { data, error };
};

export default send;
