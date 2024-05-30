import { ITEMS } from "@/data/FAQ";
import { Accordion } from "react-bootstrap";
import Item from "./Item";
const FAQ = () => {
  return (
    <div className=" text-black flex justify-center w-full">
      <div className="flex justify-center items-center flex-col w-8/12 bg-hackathon-green-100">
        <div className="text-3xl font-bold text-black">FAQ</div>
        <Accordion className="w-full mt-8 text-sm md:text-base" alwaysOpen>
          {ITEMS.map(({ question, answer }, index) => (
            <Item
              question={question}
              answer={answer}
              key={index}
              index={index}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
