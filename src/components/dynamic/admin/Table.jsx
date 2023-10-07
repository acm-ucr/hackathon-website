import { useState } from "react";
import SortIcon from "./dashboards/SortIcon";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { IoIosArrowDown } from "react-icons/io";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import Link from "next/link";
import { COLORS } from "@/data/dynamic/Tags";
import Modal from "./dashboards/Modal";
import { ICONS } from "@/data/dynamic/admin/Icons";
import Loading from "../Loading";

const Toggle = ({ eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div className="w-fit">
      <IoIosArrowDown
        onClick={decoratedOnClick}
        className={`hover:text-hackathon-blue-100 transition text-xl cursor-pointer duration-300 ease-in-out ${
          activeEventKey === eventKey && "rotate-180"
        }`}
      />
    </div>
  );
};

const Table = ({
  headers,
  setHeaders,
  empty,
  setObjects,
  objects,
  Dropdown,
  statuses,
}) => {
  const [currentSort, setCurrentSort] = useState("name");
  const [modal, setModal] = useState(null);
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
  return !objects ? (
    <Loading />
  ) : (
    <div className="w-full rounded-xl overflow-hidden flex flex-col">
      {modal && <Modal data={modal} setModal={setModal} />}
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
      <Accordion
        data-cy="table"
        className="h-full overflow-y-scroll w-full bg-white"
      >
        {objects.map(
          (object, index) =>
            !object.hidden && (
              <Row
                data-cy={object.uid}
                key={index}
                className={`first:border-0 border-t-[1px] border-hackathon-gray-100  w-full flex justify-between items-center p-0 m-0 py-2 ${
                  object.selected ? "bg-green-100" : "bg-white"
                }`}
              >
                <Col
                  className="p-0 flex justify-center items-center"
                  data-cy="select"
                  xs
                >
                  <Checkbox
                    onClick={() => handleSelect(object)}
                    toggle={object.selected}
                  />
                </Col>
                {headers.map(
                  (header, index) =>
                    header.text !== "" && (
                      <Col
                        data-cy="element"
                        key={index}
                        md={header.size}
                        className={`p-0 text-sm ${
                          header.text === "name" && "font-bold flex"
                        }`}
                      >
                        {header.hasTag && (
                          <div data-cy={`${header.text}`}>
                            <Tag
                              text={
                                String(object[header.text]).includes("base64")
                                  ? "view"
                                  : object[header.text]
                              }
                              color={
                                String(object[header.text]).includes("base64")
                                  ? COLORS["view"]
                                  : COLORS[object[header.text]]
                              }
                              onClick={
                                header.onClick
                                  ? () => header.onClick(object, setModal)
                                  : null
                              }
                              statuses={statuses}
                            />
                          </div>
                        )}

                        {Array.isArray(object[header.text]) &&
                          object[header.text].map((element, index) => (
                            <p
                              className={`mb-0 text-sm ${
                                header.text === "members"
                                  ? "font-bold text-hackathon-blue-100"
                                  : header.text === "emails"
                                  ? "text-hackathon-gray-200"
                                  : ""
                              }`}
                              key={index}
                            >
                              {header.text === "links"
                                ? element.link !== "No Link" && (
                                    <Link
                                      href={element.link}
                                      className="w-11/12 flex items-center m-0 p-0 text-black no-underline hover:!text-hackathon-blue-100 text-sm"
                                    >
                                      {ICONS[element.name]}
                                      <p className="truncate w-11/12 ml-1 mb-0">
                                        {element.link.replace("https://", "")}
                                      </p>
                                    </Link>
                                  )
                                : element}
                            </p>
                          ))}

                        {!header.hasTag &&
                          !Array.isArray(object[header.text]) && (
                            <div
                              data-cy={`${header.text}`}
                              className="break-words"
                            >
                              {object[header.text]}
                            </div>
                          )}
                      </Col>
                    )
                )}

                {Dropdown && (
                  <>
                    <Col className="p-0 m-0 flex justify-center" xs>
                      <Toggle eventKey={index} />
                    </Col>
                    <Col className="p-0" xs={12}>
                      <Accordion.Collapse eventKey={index}>
                        <Row className="pl-[8%] pt-2">
                          <Dropdown object={object} icons={ICONS} />
                        </Row>
                      </Accordion.Collapse>
                    </Col>
                  </>
                )}
              </Row>
            )
        )}

        {objects.filter((object) => !object.hidden).length === 0 && (
          <p className="text-hackathon-gray-300 font-poppins pt-3 text-center rounded-b-2xl w-full">
            {empty}
          </p>
        )}
      </Accordion>
    </div>
  );
};

export default Table;
