import React from "react";
import Title from "@/components/Admin/Title";
import PieChart from "@/components/Admin/PieChart";
import Tag from "@/components/Admin/Tag";
import { Row, Col } from "react-bootstrap";
import { charts } from "@/data/PieCharts";
const Statistics = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Statistics" />
      <Row className="w-full h-full">
        {Object.keys(charts).map((chart, index) => (
          <Col className="w-full" key={index} xs={charts[chart].size}>
            <Tag text={chart} withHover={false} color="student" />
            <PieChart data={charts[chart].data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Statistics;
