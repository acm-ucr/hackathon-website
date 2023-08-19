import React, { useState } from "react";
import SortIcon from "./SortIcon";
import { Row, Col, Accordion } from "react-bootstrap";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { IoIosArrowDown } from "react-icons/io";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";

const Toggle = ({ eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <IoIosArrowDown
      onClick={decoratedOnClick}
      className={`hover:text-hackathon-blue-100 transition text-xl cursor-pointer duration-300 ease-in-out ${
        activeEventKey === eventKey && "rotate-180"
      }`}
    />
  );
};

const Table = ({ headers, setHeaders, empty, setObjects, objects }) => {
  const [currentSort, setCurrentSort] = useState("name");

  const handleSelect = (object) => {
    setObjects(
      objects.map((a) => {
        if (a.uid === object.uid) {
          a.selected = !object.selected;
        }
        return a;
      })
    );
  };

  return (
    <div className="w-full rounded-xl overflow-hidden flex flex-col">
      <Row className="w-full py-2 text-sm flex text-white bg-hackathon-blue-200 justify-evenly px-0 m-0">
        <Col />
        {headers.map((header, index) => (
          <Col
            xs={header.size}
            key={index}
            className="font-semibold text-white flex items-center p-0"
          >
            {header.text}
            {header.icon && (
              <SortIcon
                index={index}
                currentSort={currentSort}
                setCurrentSort={setCurrentSort}
                name={header.text}
                headers={headers}
                setHeaders={setHeaders}
                setObjects={setObjects}
                objects={objects}
              />
            )}
          </Col>
        ))}
      </Row>
      <Accordion>
        {objects.map((object, index) => (
          <>
            <Row
              key={index}
              className={`first:border-0 border-t-[1px] border-hackathon-gray w-full flex justify-between items-center p-0 m-0 py-2 bg-white overflow-scroll ${
                object.selected ? "bg-green-100" : ""
              }`}
            >
              <Col
                className="font-semibold p-0 flex justify-center items-center"
                xs
              >
                <Checkbox
                  onClick={() => handleSelect(object)}
                  toggle={object.selected}
                />
              </Col>
              {headers.map((header, index) => {
                const color = "red";
                return (
                  <Col key={index} md={header.size} className="p-0">
                    {header.hasTag && (
                      <Tag text={object[header.text]} color={color} />
                    )}

                    {Array.isArray(object[header.text]) &&
                      object[header.text].map((element, index) => (
                        <p className="mb-0" key={index}>
                          {element}
                        </p>
                      ))}

                    {!header.hasTag &&
                      !Array.isArray(object[header.text]) &&
                      object[header.text]}
                  </Col>
                );
              })}

              {object.dropdown && (
                <Col className="p-0 m-0" xs>
                  <Toggle eventKey={index} />
                </Col>
              )}
            </Row>
            {object.dropdown && (
              <Accordion.Collapse eventKey={index}>
                <p className="mt-2 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Accordion.Collapse>
            )}
          </>
        ))}

        {objects.length === 0 && (
          <p className="text-hackathon-darkgray font-poppins pt-3 text-center rounded-b-2xl w-full">
            {empty}
          </p>
        )}
      </Accordion>
    </div>
  );
};

export default Table;
