import { useZxing } from "react-zxing";

type props = {
  setResult: (value: string) => void;
};

const ScanQRCode = ({ setResult }: props) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} className="w-full" />;
};

export default ScanQRCode;
