import Navigation from "@/components/engineering/Navigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Navigation />
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Layout;
