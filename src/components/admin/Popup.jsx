import Button from "./Button";
import { LiaTimesSolid } from "react-icons/lia";

const Popup = ({ popup, onClick, setPopup, text }) => {
  return (
    <div
      className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40"
      data-cy="popup"
    >
      <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-3">
        <div className="flex w-full items-center justify-between">
          <p className="m-0 text-lg font-bold">{popup.title}</p>
          <LiaTimesSolid
            className="text-lg hover:cursor-pointer"
            onClick={() => setPopup({ ...popup, visible: false })}
          />
        </div>
        <p>{popup.text}</p>
        <div className="flex w-full justify-end gap-3">
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
