import { Trash2, Pen, Check } from "lucide-react";

type props = {
  edit: boolean;
  setEdit: (value: boolean) => void;
  onRemove: () => void;
};

const Controls = ({ edit, setEdit, onRemove }: props) => {
  return (
    <div className="flex gap-4">
      {edit && (
        <>
          <Check onClick={() => setEdit(false)} />
          <Trash2 onClick={onRemove} />
        </>
      )}

      {!edit && (
        <>
          <Pen onClick={() => setEdit(true)} />
          <Trash2 onClick={onRemove} />
        </>
      )}
    </div>
  );
};
export default Controls;
