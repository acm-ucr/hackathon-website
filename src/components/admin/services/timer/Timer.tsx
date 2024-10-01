"use client";
import { useState } from "react";
import Clock from "./Clock";
import { v4 as uuidv4 } from "uuid";
import Title from "../../Title";
import { Button } from "@/components/ui/button";

type TimerType = {
  id: string;
};

const Timer = () => {
  const [timers, setTimers] = useState<TimerType[]>([]);

  const addTimer = () => {
    setTimers([
      ...timers,
      {
        id: uuidv4(),
      },
    ]);
  };

  const clearAll = () => {
    setTimers([]);
  };

  const deleteTimer = (id: string) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <div className="mb-4 flex gap-3">
        <Title title="Timer" />
        <Button onClick={addTimer}>+ add timer</Button>
        <Button variant="destructive" onClick={clearAll}>
          clear all
        </Button>
      </div>
      <div className="flex h-full flex-col overflow-y-scroll rounded-3xl bg-gray-200 p-4">
        {timers.length === 0 ? (
          <div className="flex h-full items-center justify-center text-2xl font-bold opacity-30">
            No Timers
          </div>
        ) : (
          timers.map((timer) => (
            <Clock key={timer.id} onRemove={() => deleteTimer(timer.id)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Timer;
