import { toast } from "react-hot-toast";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const toaster = (message, type) => {
  switch (type) {
    case "success":
      toast.custom(consolidateToaster(message, type));
      break;
    case "error":
      toast.custom(consolidateToaster(message, type));
      break;
    default:
      toast.custom(consolidateToaster(message, type));
      break;
  }
};

const consolidateToaster = (message, type) => {
  const icon =
    type === "success" ? (
      <FaCheckCircle className="text-green-500" size="35px" />
    ) : (
      <MdError className="text-red-500" size="35px" />
    );
  return (
    <div className="flex items-center justify-center bg-white pl-2 pr-5 md:pr-6 py-4 w-4/12 md:w-2/12 shadow-md rounded">
      {icon}
      <div className="inline ps-4 text-sm font-normal text-black">
        {message}
      </div>
    </div>
  );
};

export default toaster;
