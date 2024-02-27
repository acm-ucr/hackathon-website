export const useMDXComponents = (components) => {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl text-center my-2">{children}</h1>
    ),
    p: ({ children }) => <p>{children}</p>,
    h4: ({ children }) => (
      <h4 className="text-center my-2 text-gray-500 font-normal">{children}</h4>
    ),
    ...components,
  };
};
