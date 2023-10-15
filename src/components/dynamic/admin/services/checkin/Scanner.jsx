import { useZxing } from "react-zxing";

const ScanQRCode = ({ setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} className="w-1/2 aspect-square" />;
};

export default ScanQRCode;
