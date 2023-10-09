import Title from "@/components/dynamic/admin/Title";
import { Col } from "react-bootstrap";

const Tab = ({ title, value }) => {
  return (
    <Col className="text-center w-full">
      <Title title={title} classes="text-2xl font-medium" />
      <Title title={value} classes="text-5xl font-extrabold" />
    </Col>
  );
};

export default Tab;
