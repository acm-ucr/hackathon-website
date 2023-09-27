import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TiPlus } from "react-icons/ti";
import { PAST } from "@/data/Tags";

const Filters = ({ filters, setFilters, setObjects, objects, input, page }) => {
  const handleClick = (filter) => {
    const filterValues = { ...filters, [filter]: !filters[filter] };
    setFilters(filterValues);

    setObjects &&
      setObjects(
        objects.map((a) => {
          let boolean = true;

          Object.entries(filterValues).map(([filter, value]) => {
            if (
              a.status[page] === filter &&
              value &&
              a.name.toLowerCase().match(input.toLowerCase())
            ) {
              boolean = false;
            }
          });
          return { ...a, hidden: boolean };
        })
      );
  };

  return (
    <Row className="w-fit">
      {Object.entries(filters).map(([filter, value], index) => (
        <Col
          className="px-1"
          key={index}
          onClick={() => handleClick(filter)}
          data-cy={filter + "-filter"}
        >
          <div
            className={`rounded hover:opacity-70 duration-300 ${
              value
                ? "text-white bg-hackathon-blue-100"
                : "text-hackathon-blue-100 bg-white"
            } cursor-pointer flex items-center w-fit m-0`}
          >
            <p className="my-0 mx-1 px-2 py-[2px] whitespace-nowrap">
              {PAST[filter] ? PAST[filter] : filter}
            </p>
            <TiPlus
              className={`duration-300 mt-[2px] mr-2 hover:opacity-80 ${
                value ? "-rotate-45" : ""
              }`}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Filters;
