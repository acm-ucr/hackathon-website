import Navigation from "@/components/engineering/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navigation />
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Layout;
