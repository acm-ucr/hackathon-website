export const useMDXComponents = (components) => {
  return {
    h1: ({ children }) => (
      <h1 className="my-2 text-center text-5xl">{children}</h1>
    ),
    p: ({ children }) => <p>{children}</p>,
    h4: ({ children }) => (
      <h4 className="my-2 text-center font-normal text-gray-500">{children}</h4>
    ),
    ...components,
  };
};
