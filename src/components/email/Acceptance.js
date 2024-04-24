import data from "@/data/Config";
import Template from "./Template";
import { Button, Section, Text } from "@react-email/components";

const Acceptance = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        🎉 Congratulations 🎉 You have been accepted into {data.name} as a{" "}
        <strong>{position}</strong>
      </Text>
      <Text>
        We will be using Discord as our primary communication platform regarding
        announcements, events, workshops, activities, and more!
      </Text>
      <Section className="text-center">
        <Button
          href={data.discord}
          className="bg-[#7289da] rounded text-white text-xs font-semibold no-underline text-center px-5 py-3"
        >
          Join Discord
        </Button>
      </Section>

      <Text>We look forward to seeing you there!</Text>
    </Template>
  );
};

export default Acceptance;
