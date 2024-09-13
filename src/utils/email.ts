import Email from "@/components/email/Email";
import { Resend, CreateEmailResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

type ids = "confirmation" | "acceptance" | "rejection";

type positions =
  | "admins"
  | "committees"
  | "judges"
  | "mentors"
  | "volunteers"
  | "participants"
  | "interests"
  | "sponsors"
  | "panels"
  | "leads";
interface params {
  email: string;
  id: ids;
  name: string;
  position: positions;
  subject: string;
  preview: string;
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
