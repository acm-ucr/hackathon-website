import React from "react";
import Image from "next/image.js";
// import Title from "../../../components/Title.jsx"
import { QRCodeSVG } from "qrcode.react";
import LOGO from "../../../../public/LOGO.png";
import ProtectedPage from "@/components/ProtectedPage";

const user = {
  name: "Big Chungus",
  email: "big.chungus@email.com",
  pfp: LOGO,
};
const CheckinPage = () => {
  return (
    <ProtectedPage title="User | CheckIn" restrictions={["hacker"]}>
      <CheckIn />
    </ProtectedPage>
  );
};

export default CheckinPage;
