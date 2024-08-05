import { useState, useEffect } from "react";
import Controls from "./Controls";
import { Progress } from "@/components/ui/progress";
import { Pause, Play } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Timer = ({ onRemove }) => {
  const [edit, setEdit] = useState(false);
  const [play, setPlay] = useState(false);
  const [total, setTotal] = useState(60000);
  const [original, setOriginal] = useState(0);
  const [time, setTime] = useState({
    hours: "00",
    minutes: "01",
    seconds: "00",
  });

  const onChange = (value) => {
    if (!edit) return;

    const [hours, minutes, seconds] = value.match(/.{2}/g);

    setTime({
      hours,
      minutes,
      seconds,
    });

    setTotal(
      parseInt(hours) * (1000 * 60 * 60) +
        parseInt(minutes) * (1000 * 60) +
        parseInt(seconds) * 1000,
    );
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!play) return;

      const newSeconds = total - 1000;

      setTotal((prev) => prev - 1000);

      setTime({
        hours: Math.floor((newSeconds / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((newSeconds / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((newSeconds / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      });

      setOriginal((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(id);
  }, [play, total]);

  return (
    <div className="mb-4 flex scroll-m-4 flex-col items-center justify-between rounded-xl bg-white p-4">
      <div className="flex w-full items-center justify-between">
        <input
          disabled={!edit}
          className="flex-grow bg-transparent pl-2 text-3xl font-semibold outline-none"
          placeholder="Untitled Timer"
        />
        <Controls edit={edit} setEdit={setEdit} onRemove={onRemove} />
      </div>

      <InputOTP
        disabled={!edit}
        maxLength={6}
        onChange={onChange}
        value={time["hours"] + time["minutes"] + time["seconds"]}
        className="mt-4"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div className="mt-4">
        {play && !edit && <Pause onClick={() => setPlay(false)} />}
        {!play && !edit && <Play onClick={() => setPlay(true)} />}
      </div>

      <Progress
        value={(total / (original + total)) * 100}
        className="mt-4 w-full"
      />
    </div>
  );
};

export default Timer;
