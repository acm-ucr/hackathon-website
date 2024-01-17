"use client";
// import { usePathname } from 'next/navigation'
import Checkbox from "../Checkbox";

const SelectAll = ({ toggle, onClick, required, text }) => {
  const lines = text.map((entry, index) => (
    <span key={index}>
      {entry}
      {index < text.length - 1 && <br />}
    </span>
  ));

  return (
    <div>
      <div>
        <p>{lines}</p>
      </div>
      <Checkbox
        className="w-1/2"
        toggle={toggle}
        text="By selecting this I agree to all of the above terms"
        onClick={onClick}
        required={required}
      />
    </div>
  );
};

export default SelectAll;
