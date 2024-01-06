import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confirmation = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti height={height} width={width} />
      Thank you for filling out the application form. Please watch out for an
      email with an application status update.
    </>
  );
};

export default Confirmation;
