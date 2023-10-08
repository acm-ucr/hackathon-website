"use client";
import Title from "@/components/dynamic/admin/Title";
import PieChart from "@/components/dynamic/admin/services/PieChart";
import Tag from "@/components/dynamic/admin/Tag";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import charts from "../../../../../cypress/fixtures/pie_charts.json";
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
