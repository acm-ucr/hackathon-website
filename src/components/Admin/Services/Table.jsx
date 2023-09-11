"use client";
import { Col, Row } from "react-bootstrap";
import Tag from "../Tag";
import { COLORS } from "@/data/Admin/Tags";

const Table = ({ data }) => {
  return (
    <Row className="overflow-y-scroll">
      {data
        .filter((group) => !group.hidden)
        .map((group, index) => (
          <Col
            xl={3}
            key={index}
            className="flex justify-between items-start p-2"
          >
            <div className="bg-white w-full p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <Tag color={COLORS["grayblue"]} text={group.name} />
                <p className="mb-0 text-hackathon-green-300 font-semibold">
                  table {group.table}
                </p>
              </div>
              {group.rounds.map((judges, index) => (
                <div key={index} className="flex items-center my-2">
                  <p className="font-semibold mb-0 mr-2">{index + 1}</p>
                  <div className="flex items-center">
                    {judges.map((judge, i) => (
                      <Tag
                        classes="mx-1"
                        color={
                          COLORS[
                            judge.split("_")[0] === "p"
                              ? "professor"
                              : judge.split("_")[0] === "i"
                              ? "industry"
                              : "student"
                          ]
                        }
                        key={i}
                        text={judge.slice(2, judge.length)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Table;
