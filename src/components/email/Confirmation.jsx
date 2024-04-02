import data from "@/data/Config";
import Template from "./Template";
import { Text } from "@react-email/components";

const Confirmation = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        Thank you for applying as a <strong>{position}</strong>!
      </Text>
      <Text>
        We appreciate your support towards {data.name}. Please keep an eye out
        for future {data.name} emails regarding updates and announcements.
      </Text>
    </Template>
  );
};

export default Confirmation;
