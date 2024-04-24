const Release = ({ release, children }) => {
  return release.START < new Date() && new Date() < release.END && children;
};

export default Release;
