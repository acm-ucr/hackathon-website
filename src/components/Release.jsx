const Release = ({ release, children }) => {
  if (process.env.NODE_ENV === "development") return children;
  return release.START < new Date() && new Date() < release.END && children;
};

export default Release;
