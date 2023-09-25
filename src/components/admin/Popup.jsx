import Button from "./Button";
import { LiaTimesSolid } from "react-icons/lia";

const Popup = ({ popup, onClick, setPopup, text }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 w-screen h-screen flex items-center justify-center"
      data-cy="popup"
    >
      <div className="bg-white flex flex-col items-center rounded-lg p-3 gap-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-bold m-0">{popup.title}</p>
          <LiaTimesSolid
            className="hover:cursor-pointer text-lg"
            onClick={() => setPopup({ ...popup, visible: false })}
          />
        </div>
        <p>{popup.text}</p>
        <div className="w-full flex justify-end gap-3">
          <Button
            color="grayOutline"
            text="cancel"
            size="text-lg"
            onClick={() => setPopup({ ...popup, visible: false })}
          />
          <Button
            color={popup.color}
            text={text}
            size="text-lg"
            onClick={() => {
              onClick();
              setPopup({ ...popup, visible: false });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
