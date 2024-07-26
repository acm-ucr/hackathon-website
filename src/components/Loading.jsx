import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-3xl font-bold text-hackathon-blue-100">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-hackathon-blue-100" />
    </div>
  );
};

export default Loading;
