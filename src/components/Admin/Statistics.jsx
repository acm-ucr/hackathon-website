import Title from "@/components/Admin/Title";
import PieChart from "@/components/Admin/PieChart";
import Tag from "@/components/Admin/Tag";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { charts } from "@/data/mock/PieCharts";
const Statistics = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Statistics" />
      <Row className="w-full h-full">
        {Object.entries(charts).map(([chart, value], index) => (
          <Col className="w-full" key={index} xs={value.size}>
            <Tag text={chart} withHover={false} color="green" />
            <PieChart data={value.data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Statistics;
