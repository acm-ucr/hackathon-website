export const useMDXComponents = (components) => {
  return {
    h1: ({ children }) => <h1 className="text-5xl text-center">{children}</h1>,
    p: ({ children }) => <p>{children}</p>,
    ...components,
  };
};
