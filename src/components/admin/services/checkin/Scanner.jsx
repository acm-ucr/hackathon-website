import { useZxing } from "react-zxing";

const ScanQRCode = ({ setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <video
      ref={ref}
      className="2xl:w-1/2 xl:w-7/12 lg:w-3/4 aspect-square w-full"
    />
  );
};

export default ScanQRCode;
