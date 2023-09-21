const Release = ({ children, release }) => {
  return release < new Date() && <>{children}</>;
};

export default Release;
