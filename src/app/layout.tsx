/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import SessionProvider from "@/components/Session";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = getServerSession();

  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} flex flex-col lg:flex-row h-full`}>
        <div className="flex w-full h-full">
          <SessionProvider session={session}>
            <Toaster />
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
