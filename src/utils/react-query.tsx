import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";

export const ReactQuery = async ({
  children,
  query,
  queryKey,
}: {
  children: React.ReactNode;
  query: QueryFunction;
  queryKey: QueryKey;
}) => {
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey,
    queryFn: query,
  });

  return (
    <HydrationBoundary state={dehydrate(client)}>{children}</HydrationBoundary>
  );
};
