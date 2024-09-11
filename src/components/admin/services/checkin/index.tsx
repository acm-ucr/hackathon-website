import Checkin from "./CheckIn";
import { getEvents } from "./actions";
import { ReactQuery } from "@/utils/react-query";

const Index = async () => {
  return (
    <ReactQuery query={getEvents} queryKey={["/admin/checkin"]}>
      <Checkin />
    </ReactQuery>
  );
};

export default Index;
