import { toast } from "react-hot-toast";

const toaster = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        style: {
          backgroundColor: "#34D399",
          color: "#ffffff",
        },
      });
      break;
    case "error":
      toast.error(message, {
        style: {
          background: "#FF2800",
          color: "#ffffff",
        },
      });
      break;
    default:
      toast.error(message, {
        style: {
          background: "#FF2800",
          color: "#ffffff",
        },
      });
  }
};

export default toaster;
