import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const TimerEditMode = ({ value, onChange }) => (
  <InputOTP
    maxLength={6}
    onChange={(value) => onChange(value)}
    value={value}
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
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
);

export default TimerEditMode;
