import { QUESTIONS } from "@/data/FAQ";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex w-8/12 flex-col overflow-hidden">
        {QUESTIONS.map((faq, index) => (
          <Item key={index} title={faq.question}>
            {faq.answer}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
