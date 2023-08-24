import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
const CheckInfo = ({ info, events }) => {
  return info ? (
    <div className="flex flex-col items-center w-full justify-between h-full">
      <div className="flex items-center">
        <Image
          src={info.image}
          width={90}
          height={90}
          className="rounded-full mr-4"
        />
        <div>
          <p className="font-poppins text-3xl m-0 font-bold">{info.name}</p>
          <p className="font-poppins text-lg m-0">{info.email}</p>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4 w-full max-h-[70vh] overflow-scroll mt-3">
        {events.map((event, index) => (
          <div key={index} className="flex items-center justify-between w-full">
            <p className="text-xl">{event.name}</p>
            <div className="aspect-square bg-white border-[1px] border-black">
              <AiOutlineCheck
                className={`${
                  info[event.name] ? "text-hackathon-blue-100" : "text-white"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="w-full text-center">No info</p>
  );
};

export default CheckInfo;
