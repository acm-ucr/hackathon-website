import Checkbox from "@/components/dynamic/Checkbox";

const TermsConditions = ({
  star,
  options,
  toggle,
  text,
  onClick,
  required,
  color,
}) => {
  return (
    <>
      <p className="mb-1 mt-3 font-semibold">
        {"Terms and Conditions"}
        {star && <span className="text-red-500">*</span>}
      </p>
      <ul className="pl-5 list-disc mb-4">
        {options.map((option, index) => (
          <li key={index} className="pl-3">
            {option}
          </li>
        ))}
      </ul>
      <Checkbox
        className="w-1/2"
        toggle={toggle}
        text={text}
        onClick={onClick}
        required={required}
        color={color}
      />
    </>
  );
};

export default TermsConditions;
