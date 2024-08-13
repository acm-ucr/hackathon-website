import { X } from "lucide-react";

const Modal = ({ data, setModal }) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 h-3/4 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
      data-cy="modal"
    >
      <div
        className="flex items-center justify-between rounded-t-xl bg-hackathon-green-300 p-3"
        data-cy="modal-title"
      >
        <span className="text-3xl font-bold text-white">{data.title}</span>
        <X
          onClick={() => setModal(null)}
          className="text-xl text-white hover:cursor-pointer hover:!text-red-500"
          data-cy="modal-close"
        />
      </div>
      <div
        className="border-hackathon-darkgray relative flex h-full w-full justify-center rounded-b-xl border-b-2 bg-hackathon-green-300 px-3 py-2"
        data-cy="image-border"
      >
        <embed
          fill={true}
          className="h-full w-full object-cover"
          src={data.src}
          alt="Photo of the Judge"
          data-cy="modal-image"
        />
      </div>
    </div>
  );
};

export default Modal;
