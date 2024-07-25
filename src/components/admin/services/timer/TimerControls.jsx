import {
  FaPlay,
  FaPause,
  FaUndo,
  FaTrashAlt,
  FaPen,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
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
  invalid,
  collapsed,
}) => (
  <div className="flex items-center *:px-4">
    {!isEditMode ? (
      <>
        {paused || isComplete ? (
          <Tooltip text="Resume">
            <FaPlay onClick={resumeTimer} className="text-2xl mx-1" />
          </Tooltip>
        ) : (
          <Tooltip text="Pause">
            <FaPause onClick={pauseTimer} className="text-2xl mx-1" />
          </Tooltip>
        )}
        {!collapsed && (
          <>
            <Tooltip text="Edit">
              <FaPen onClick={openEditMode} className="text-2xl mx-1" />
            </Tooltip>
            <Tooltip text="Reset">
              <FaUndo onClick={resetTimer} className="text-2xl mx-1" />
            </Tooltip>
          </>
        )}
        <Tooltip text="Delete">
          <FaTrashAlt onClick={onRemove} className="text-2xl mx-1" />
        </Tooltip>
      </>
    ) : (
      <>
        <Tooltip text="Save">
          <FaCheck
            onClick={!invalid ? saveChanges : () => {}}
            className={`text-2xl mx-1 ${invalid ? "text-gray-500" : ""}`}
          />
        </Tooltip>
        <Tooltip text="Discard">
          <FaTimes onClick={discardChanges} className="text-2xl mx-1" />
        </Tooltip>
      </>
    )}
  </div>
);

export default TimerControls;
