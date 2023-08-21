import React from "react";
import { useZxing } from "react-zxing";

const ScanQRCode = ({ result, setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} className="w-full aspect-square -scale-x-100" />;
};

export default ScanQRCode;
