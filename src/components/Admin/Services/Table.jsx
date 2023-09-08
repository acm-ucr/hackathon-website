"use client";
import { Col, Row } from "react-bootstrap";
import Tag from "../Tag";
import { colors } from "@/data/Tags";

const Table = ({ data }) => {
  return (
    <Row>
      {data
        .filter((group) => !group.hidden)
        .map((group, index) => (
          <Col
            key={index}
            className="flex justify-between items-start p-2 !max-w-fit"
          >
            <div className="bg-white w-full p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <Tag color={colors["grayblue"]} text={group.name} />
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
                          colors[
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