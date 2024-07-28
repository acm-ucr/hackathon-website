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
            <Play onClick={resumeTimer} className="text-2xl mx-1" />
          </Tooltip>
        ) : (
          <Tooltip text="Pause">
            <Pause onClick={pauseTimer} className="text-2xl mx-1" />
          </Tooltip>
        )}
        {!collapsed && (
          <>
            <Tooltip text="Edit">
              <Pen onClick={openEditMode} className="text-2xl mx-1" />
            </Tooltip>
            <Tooltip text="Reset">
              <Undo2 onClick={resetTimer} className="text-2xl mx-1" />
            </Tooltip>
          </>
        )}
        <Tooltip text="Delete">
          <Trash2 onClick={onRemove} className="text-2xl mx-1" />
        </Tooltip>
      </>
    ) : (
      <>
        <Tooltip text="Save">
          <Check onClick={saveChanges} className={`text-2xl mx-1 `} />
        </Tooltip>
        <Tooltip text="Discard">
          <X onClick={discardChanges} className="text-2xl mx-1" />
        </Tooltip>
      </>
    )}
  </div>
);

export default TimerControls;
