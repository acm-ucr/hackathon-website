import Checkbox from "@/components/dynamic/Checkbox";

const Terms = ({ options, toggle, onClick }) => {
  return (
    <>
      <p className="mb-1 mt-3 font-semibold">
        Terms and Conditions
        <span className="text-red-500">*</span>
      </p>
      <ul className="pl-5 list-disc mb-4 text-sm">
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
