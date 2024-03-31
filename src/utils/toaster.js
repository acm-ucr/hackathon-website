import { toast } from "react-hot-toast";

const toaster = (message, type) => {
  return toast[type](message);
};

export default toaster;
