import { Play, Pause, Undo2, Trash2, Pen, Check, X } from "lucide-react";
import Tooltip from "./Tooltip";

const TimerControls = ({
  isEditMode,
  paused,
  isComplete,
  resumeTimer,
  pauseTimer,
  openEditMode,
  resetTimer,
  onRemove,
  saveChanges,
  discardChanges,
  collapsed,
}) => (
  <div className="flex items-center *:px-4">
    {!isEditMode ? (
      <>
        {paused || isComplete ? (
          <Tooltip text="Resume">
            <Play onClick={resumeTimer} className="mx-1 text-2xl" />
          </Tooltip>
        ) : (
          <Tooltip text="Pause">
            <Pause onClick={pauseTimer} className="mx-1 text-2xl" />
          </Tooltip>
        )}
        {!collapsed && (
          <>
            <Tooltip text="Edit">
              <Pen onClick={openEditMode} className="mx-1 text-2xl" />
            </Tooltip>
            <Tooltip text="Reset">
              <Undo2 onClick={resetTimer} className="mx-1 text-2xl" />
            </Tooltip>
          </>
        )}
        <Tooltip text="Delete">
          <Trash2 onClick={onRemove} className="mx-1 text-2xl" />
        </Tooltip>
      </>
    ) : (
      <>
        <Tooltip text="Save">
          <Check onClick={saveChanges} className={`mx-1 text-2xl`} />
        </Tooltip>
        <Tooltip text="Discard">
          <X onClick={discardChanges} className="mx-1 text-2xl" />
        </Tooltip>
      </>
    )}
  </div>
);

export default TimerControls;
