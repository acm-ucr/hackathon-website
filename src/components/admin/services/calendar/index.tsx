import { ReactQuery } from "@/utils/react-query";
import { getEvents } from "./actions";
import Calendar from "./Calendar";

const Index = () => {
  return (
    <ReactQuery query={getEvents}>
      <Calendar />
    </ReactQuery>
  );
};

export default Index;
