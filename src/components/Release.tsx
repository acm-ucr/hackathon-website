interface ReleaseInterface {
  START: Date;
  END: Date;
}

interface Props {
  release: ReleaseInterface;
  children: React.ReactNode;
}

const Release = ({ release, children }: Props): React.ReactNode => {
  if (process.env.NODE_ENV === "development") return children;
  return release.START < new Date() && new Date() < release.END && children;
};

export default Release;
