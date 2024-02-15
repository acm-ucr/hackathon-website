import { toast } from "react-hot-toast";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const toaster = (message, type) => {
  switch (type) {
    case "success":
      toast.custom(
        <div className="flex items-center justify-center bg-white pl-2 pr-5 md:pr-6 py-4 w-4/12 md:w-2/12 shadow-md rounded">
          <FaCheckCircle className=" text-green-500" />
          <div className="inline ps-4 text-sm font-normal text-black">
            {message}
          </div>
        </div>
      );
      break;
    case "error":
      toast.custom(
        <div className="flex items-center justify-center bg-white pl-2 pr-5 md:pr-6 py-4 w-4/12 md:w-2/12 shadow-md rounded">
          <MdError className=" text-red-500" size="35px" />
          <div className="inline ps-4 text-sm font-normal text-black">
            {message}
          </div>
        </div>
      );
      break;
    default:
      toast.custom(
        <div className="flex items-center justify-center bg-white pl-2 pr-5 md:pr-6 py-4 w-4/12 md:w-2/12 shadow-md rounded">
          <MdError className=" text-red-500" size="35px" />
          <div className="inline ps-4 text-sm font-normal text-black">
            {message}
          </div>
        </div>
      );
  }
};

export default toaster;
