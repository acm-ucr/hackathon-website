type props = {
  release: Date;
  children: React.ReactNode;
};

const Release = ({ release, children }: props): React.ReactNode => {
  if (process.env.NODE_ENV === "development") return children;

  return release < new Date() && new Date() < release && children;
};

export default Release;
