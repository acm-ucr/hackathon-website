import { Col, Row } from "react-bootstrap";
import Pie from "./Pie";
const data = [
  {
    id: "rejected",
    label: "rejected",
    value: 34,
  },
  {
    id: "accepted",
    label: "accepted",
    value: 56,
  },
  {
    id: "pending",
    label: "pending",
    value: 56,
  },
];

const Charts = ({ tab, config }) => {
  console.log(config);
  return (
    <Row className="h-full bg-hackathon-gray-100">
      {Object.entries(config).map(([key, value], index) => (
        <Col key={index} xl={3} className="p-0 m-0">
          {value === "pie" && <Pie data={data} />}
        </Col>
      ))}
    </Row>
  );
};

export default Charts;
