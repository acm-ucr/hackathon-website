import { useState } from "react";
import SortIcon from "./SortIcon";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import {
  IoIosArrowDown,
  IoIosMail,
  IoMdDocument,
  IoIosRose,
} from "react-icons/io";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import { SiGithub, SiDevpost } from "react-icons/si";
import Link from "next/link";
import { colors } from "@/data/Tags";
import { FaPhoneAlt, FaCrown } from "react-icons/fa";
const icons = {
  github: <SiGithub className="mr-2" />,
  devpost: <SiDevpost className="mr-2" />,
  lead: <IoIosRose className="ml-1 text-hackathon-blue-200 text-lg" />,
  winner: <FaCrown className="ml-1 text-hackathon-yellow text-lg" />,
  phone: <FaPhoneAlt className="text-hackathon-blue-200 mx-1" />,
  email: <IoIosMail className="text-hackathon-blue-200 mr-1 text-lg" />,
  resume: <IoMdDocument className="text-hackathon-blue-200 mr-1 text-lg" />,
};

const listInfos = ["age", "gender", "grade", "major", "school", "size"];

const iconInfos = ["email", "phone", "resume"];
const Toggle = ({ eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div className="w-fit">
      <IoIosArrowDown
        onClick={decoratedOnClick}
        className={`hover:text-hackathon-blue-100 transition text-xl cursor-pointer duration-300 ease-in-out${
          activeEventKey === eventKey && "rotate-180"
        }`}
      />
    </div>
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
      <Accordion className="h-full overflow-y-scroll w-full bg-white">
        {objects.map(
          (object, index) =>
            !object.hidden && (
              <Row
                key={index}
                className={`first:border-0 border-t-[1px] border-hackathon-gray w-full flex justify-between items-center p-0 m-0 py-2 ${
                  object.selected ? "bg-green-100" : "bg-white"
                }`}
              >
                <Col className="p-0 flex justify-center items-center" xs>
                  <Checkbox
                    onClick={() => handleSelect(object)}
                    toggle={object.selected}
                  />
                </Col>
                {headers.map((header, index) => {
                  return (
                    header.text !== "" && (
                      <Col
                        key={index}
                        md={header.size}
                        className={`p-0 text-sm ${
                          header.text === "name" && "font-bold flex"
                        }`}
                      >
                        {header.hasTag && (
                          <Tag
                            text={
                              object[header.text].includes("https://")
                                ? "view"
                                : object[header.text]
                            }
                            color={colors[object[header.text]]}
                            onClick={
                              header.onClick
                                ? () => header.onClick(object)
                                : null
                            }
                          />
                        )}

                        {Array.isArray(object[header.text]) &&
                          object[header.text].map((element, index) => (
                            <p
                              className={`mb-0 text-sm ${
                                header.text === "members"
                                  ? "font-bold text-hackathon-blue-100"
                                  : header.text === "emails"
                                  ? "text-hackathon-placeholder"
                                  : ""
                              }`}
                              key={index}
                            >
                              {header.text === "links" ? (
                                <Link
                                  href={element.link}
                                  className="flex items-center m-0 p-0 text-black no-underline hover:!text-hackathon-blue-100 text-sm"
                                >
                                  {icons[element.name]}
                                  {element.link.replace("https://", "")}
                                </Link>
                              ) : (
                                element
                              )}
                            </p>
                          ))}

                        {!header.hasTag &&
                          !Array.isArray(object[header.text]) && (
                            <>
                              {object[header.text]}
                              {(object.position === header.symbol ||
                                object.status === header.symbol) &&
                                icons[header.symbol]}
                            </>
                          )}
                      </Col>
                    )
                  );
                })}

                {object.dropdown && (
                  <Col className="p-0 m-0 flex justify-center" xs>
                    <Toggle eventKey={index} />
                  </Col>
                )}
                {object.dropdown && (
                  <Col className="p-0" xs={12}>
                    <Accordion.Collapse eventKey={index}>
                      <Row className="pl-[8%]">
                        <div className="mt-2 flex text-xs">
                          {listInfos.map((listInfo, index) => {
                            return (
                              <p key={index}>{object[listInfo]}&nbsp;|&nbsp;</p>
                            );
                          })}
                        </div>
                        <div className="flex flex-wrap">
                          {iconInfos.map((iconInfo, index) => {
                            return (
                              <div
                                key={index}
                                className=" items-center m-0 flex text-sm w-1/3"
                              >
                                {icons[iconInfo]}
                                {object[iconInfo]}
                              </div>
                            );
                          })}
                        </div>
                      </Row>
                    </Accordion.Collapse>
                  </Col>
                )}
              </Row>
            )
        )}

        {objects.filter((object) => !object.hidden).length === 0 && (
          <p className="text-hackathon-darkgray font-poppins pt-3 text-center rounded-b-2xl w-full">
            {empty}
          </p>
        )}
      </Accordion>
    </div>
  );
};

export default Table;
