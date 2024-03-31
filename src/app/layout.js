/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const RootLayout = ({ children, session }) => {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} flex flex-col lg:flex-row h-full`}>
        <div className="flex w-full h-full">
          <Session session={session} refetchInterval={5 * 60}>
            <Toaster />
            {children}
          </Session>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
