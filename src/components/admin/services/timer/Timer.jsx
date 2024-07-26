import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerStatus from "./TimerStatus";
import TimerControls from "./TimerControls";
import TimerEditMode from "./TimerEditMode";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Timer({ name, onRemove }) {
  const [paused, setPaused] = useState(true);
  const [total, setTotal] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [original, setOriginal] = useState(0);
  const [editedValue, setEditedValue] = useState("");
  const [invalid, setInvalid] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const timerRef = useRef(null);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const resetTimer = () => {
    setTotal(original);
    setIsComplete(false);
    setPaused(true);
  };

  const openEditMode = () => {
    setEditMode(true);
    setEditedValue("");
    setInvalid(true);
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
    const dateObject = numberToDate(editedValue);

    if (dateObject.minutes > 59 || dateObject.seconds > 59) {
      setInvalid(true);
      return;
    }
    setEditMode(false);

    const total =
      dateObject.hours * 3600 + dateObject.minutes * 60 + dateObject.seconds;
    setOriginal(total);
    setTotal(total);
  };

  const inputOnChange = (value) => {
    if (value.length === 6) {
      const dateObject = numberToDate(value);
      if (dateObject.minutes > 59 || dateObject.seconds > 59) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    } else {
      setInvalid(true);
    }
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
            invalid={invalid}
            collapsed={collapsed}
          />
        </div>
      </div>

      {!collapsed && (
        <>
          {isEditMode ? (
            <TimerEditMode value={editedValue} OnChange={inputOnChange} />
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
}
