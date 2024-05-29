import { useZxing } from "react-zxing";

const ScanQRCode = ({ setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} className="md:w-1/2 aspect-square w-full" />;
};

export default ScanQRCode;
