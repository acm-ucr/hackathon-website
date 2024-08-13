import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import Checkin from "./CheckIn";
import { getEvents } from "./actions";

const Index = async () => {
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey: ["/admin/checkin"],
    queryFn: getEvents,
  });

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <Checkin />
    </HydrationBoundary>
  );
};

export default Index;
