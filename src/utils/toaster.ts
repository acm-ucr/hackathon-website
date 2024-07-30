import { toast, ToastType } from "react-hot-toast";

const toastMap: Record<ToastType, (message: string | JSX.Element) => string> = {
  success: toast.success,
  error: toast.error,
  loading: toast.loading,
  blank: toast.custom,
  custom: toast.custom,
};

const toaster = (message: string | JSX.Element, type: ToastType): string => {
  return toastMap[type](message);
};

export default toaster;
