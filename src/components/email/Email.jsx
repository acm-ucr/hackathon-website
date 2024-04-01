import Acceptance from "./Acceptance";
import Confirmation from "./Confirmation";
import Rejection from "./Rejection";

const Email = ({ id, name, position, preview }) => {
  if (id === "confirmation")
    return <Confirmation name={name} position={position} preview={preview} />;
  if (id === "acceptance")
    return <Acceptance name={name} position={position} preview={preview} />;
  if (id === "rejection")
    return <Rejection name={name} position={position} preview={preview} />;
};

export default Email;
