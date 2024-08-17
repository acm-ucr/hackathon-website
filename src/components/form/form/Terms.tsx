import Checkbox from "@/components/Checkbox";

type terms = {
  options: string[];
  toggle: boolean;
  onClick: () => {};
};

const Terms: React.FC<terms> = ({ options, toggle, onClick }) => {
  return (
    <>
      <p className="mb-1 mt-3 font-semibold">
        Terms and Conditions
        <span className="text-red-500">*</span>
      </p>
      <ul className="mb-4 list-disc pl-5 text-sm">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <Checkbox
        toggle={toggle}
        text="By selecting this I agree to all of the above terms"
        onClick={onClick}
        color="bg-hackathon-green-300"
      />
    </>
  );
};

export default Terms;
