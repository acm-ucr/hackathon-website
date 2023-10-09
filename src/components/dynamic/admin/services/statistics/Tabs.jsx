import { Row } from "react-bootstrap";
import Tab from "./Tab";

const Tabs = ({ counts }) => {
  return (
    <Row className="flex w-full mt-3">
      {Object.entries(counts).map(([title, count], index) => (
        <Tab key={index} title={title} value={count} />
      ))}
    </Row>
  );
};

export default Tabs;
