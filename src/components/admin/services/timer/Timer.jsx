import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerStatus from "./TimerStatus";
import TimerControls from "./TimerControls";
import TimerEditMode from "./TimerEditMode";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-hot-toast";

const Timer = ({ name, onRemove }) => {
  const [paused, setPaused] = useState(true);
  const [total, setTotal] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [original, setOriginal] = useState(0);
  const [editedValue, setEditedValue] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const timerRef = useRef(null);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const resetTimer = () => {
    setTotal(original);
    setIsComplete(false);
    setPaused(true);
  };

  useEffect(() => {
    resetTimer();
    setEditedValue("");
  }, [isEditMode]);

  useEffect(() => {
    const calculateTime = (seconds) => {
      return {
        hours: Math.floor((seconds % 86400) / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
      };
    };

    setTime(calculateTime(total));

    if (total === 0) {
      setPaused(true);
      setIsComplete(true);
      return;
    }
    if (isComplete) {
      return;
    }

    if (paused) {
      return;
    }

    timerRef.current = setTimeout(() => {
      setTotal((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [paused, isComplete, total]);

  const pauseTimer = () => {
    setPaused(true);
  };

  const resumeTimer = () => {
    if (isComplete) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  };

  const openEditMode = () => {
    setEditMode(true);
    setEditedValue("");
  };

  const numberToDate = (num) => {
    const dateString = num.toString().padEnd(6, "0");
    return {
      hours: parseInt(dateString.substr(0, 2)),
      minutes: parseInt(dateString.substr(2, 2)),
      seconds: parseInt(dateString.substr(4, 2)),
    };
  };

  const saveChanges = () => {
    if (editedValue.length !== 6) {
      toast.error("Invalid time");
      return;
    }
    const { hours, minutes, seconds } = numberToDate(editedValue);

    setEditMode(false);

    const total = hours * 3600 + minutes * 60 + seconds;
    setOriginal(total);
    setTotal(total);
  };

  const inputOnChange = (value) => {
    setEditedValue(value);
  };

  const discardChanges = () => {
    setEditMode(false);
  };

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white p-4 rounded-xl mb-4 snap-start scroll-m-4 w-full mx-auto">
      <div className="w-full flex justify-between items-center">
        <button onClick={toggleCollapse} className="mx-1 text-2xl">
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
        <input
          className="text-3xl bg-transparent font-semibold outline-none pl-2 flex-grow"
          placeholder="Enter Name"
          defaultValue={name}
        />
        <div className="flex items-center">
          <TimerControls
            isEditMode={isEditMode}
            paused={paused}
            isComplete={isComplete}
            resumeTimer={resumeTimer}
            pauseTimer={pauseTimer}
            openEditMode={openEditMode}
            resetTimer={resetTimer}
            onRemove={onRemove}
            saveChanges={saveChanges}
            discardChanges={discardChanges}
            collapsed={collapsed}
          />
        </div>
      </div>

      {!collapsed && (
        <>
          {isEditMode ? (
            <TimerEditMode value={editedValue} onChange={inputOnChange} />
          ) : (
            <TimerDisplay time={time} />
          )}
          <TimerStatus isComplete={isComplete} paused={paused} />
        </>
      )}
      <Progress
        value={((original - total) / original) * 100}
        className="w-full mt-4"
      />
    </div>
  );
};

export default Timer;
