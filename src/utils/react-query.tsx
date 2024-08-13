import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryFunction,
} from "@tanstack/react-query";

export const ReactQuery = async ({
  children,
  query,
}: {
  children: React.ReactNode;
  query: QueryFunction;
}) => {
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey: ["/admin/checkin"],
    queryFn: query,
  });

  return (
    <HydrationBoundary state={dehydrate(client)}>{children}</HydrationBoundary>
  );
};
