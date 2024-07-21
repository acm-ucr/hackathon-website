import { QUESTIONS } from "@/data/FAQ";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="flex w-8/12 overflow-hidden flex-col">
        {QUESTIONS.map((faq, index) => (
          <Item key={index} index={index} title={faq.question}>
            {faq.answer}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
