import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confirmation = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti height={height} width={width} />
      <p>
        Thank you for filling out the application form. Please watch out for an
        email with an application status update.
      </p>
    </div>
  );
};

export default Confirmation;
