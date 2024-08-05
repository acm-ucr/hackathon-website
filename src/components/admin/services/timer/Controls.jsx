import { Trash2, Pen, Check } from "lucide-react";

const Controls = ({ edit, setEdit, onRemove }) => {
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
