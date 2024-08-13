/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";

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
  const session = await getServerSession(options);

  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} flex h-full flex-col lg:flex-row`}>
        <div className="flex h-full w-full">
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
