import { toast } from "react-hot-toast";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const toaster = (message, type) => {
  const icons = {
    success: <FaCheckCircle className="text-green-500" size="35px" />,
    error: <MdError className="text-red-500" size="35px" />,
  };

  return toast.custom(
    <div className="flex items-center justify-center bg-white pl-2 pr-5 md:pr-6 py-4 w-4/12 md:w-2/12 shadow-md rounded">
      {icons[type]}
      <div className="inline ps-4 text-sm font-normal text-black">
        {message}
      </div>
    </div>
  );
};

export default toaster;
