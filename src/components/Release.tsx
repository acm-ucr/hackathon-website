type ReleaseType = {
  START: Date;
  END: Date;
};

type props = {
  release: ReleaseType;
  children: React.ReactNode;
};

const Release = ({ release, children }: props): React.ReactNode => {
  if (process.env.NODE_ENV === "development") return children;
  return release.START < new Date() && new Date() < release.END && children;
};

export default Release;
