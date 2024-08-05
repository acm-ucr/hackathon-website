import { toast, ToastType } from "react-hot-toast";

const toaster: Record<ToastType, (message: string) => string> = {
  success: toast.success,
  error: toast.error,
  loading: toast.loading,
  blank: toast.custom,
  custom: toast.custom,
};

const Toaster = (message: string, type: ToastType): string => {
  return toaster[type](message);
};

export default Toaster;
