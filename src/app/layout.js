/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import Session from "@/components/Session";
import { Toaster } from "react-hot-toast";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
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
          <ReactQueryClientProvider>
            <Session session={session} refetchInterval={5 * 60}>
              <Toaster />
              {children}
            </Session>
          </ReactQueryClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
