import { FaTimes } from "react-icons/fa";

const Modal = ({ data, setModal }) => {
  // const resumeURL = data.src + '#toolbar=0&navpanes=0';
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 h-2/3 rounded-xl">
      <div className="flex justify-between items-center p-3 rounded-t-xl bg-hackathon-green-200">
        <span className="text-3xl text-white font-bold">{data.title}</span>
        <FaTimes
          onClick={() => setModal(null)}
          className="hover:cursor-pointer text-white hover:!text-red-500 text-xl"
        />
      </div>
      <div className="bg-white px-3 rounded-b-xl py-2 border-x-2 border-b-2 border-hackathon-darkgray h-full">
        <iframe
          className="w-full h-full"
          src={data.src + "#toolbar=0&navpanes=0"}
        />
      </div>
    </div>
  );
};

export default Modal;
