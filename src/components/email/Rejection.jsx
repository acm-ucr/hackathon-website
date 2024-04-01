import data from "@/data/Config";
import Template from "./Template";
import { Text } from "@react-email/components";

const Rejection = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        Thank you for applying to {data.name} as a {position}. Unfortunately,
        due to particular circumstances we are unable to provide you a spot at{" "}
        {data.name}.
      </Text>
      <Text>
        However, we loved getting to know you and hope that you apply next year.
        If you have any questions, please reach out at {data.email}
      </Text>
    </Template>
  );
};

export default Rejection;
