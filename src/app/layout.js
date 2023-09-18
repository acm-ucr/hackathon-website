/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <body className={`${poppins.variable} flex flex-col lg:flex-row`}>
          <Toaster />

          <div className="flex justify-center items-start w-full bg-hackathon-page z-0 h-screen pt-12 lg:pt-0">
            {children}
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
