type ReleaseType = {
  START: Date;
  END: Date;
};

type props = {
  release: ReleaseType | Date;
  children: React.ReactNode;
};

const Release = ({ release, children }: props): React.ReactNode => {
  if (process.env.NODE_ENV === "development") return children;

  if (release instanceof Date) {
    return release < new Date() ? children : null;
  }

  return release.START < new Date() && new Date() < release.END && children;
};

export default Release;
