import { useState } from "react";

const Button = ({ onClick, text }) => {
  const [loading, setLoading] = useState(false);
  return (
    <button
      data-cy={`${text}-button`}
      disabled={loading}
      className="text-gray-800 py-1 hover:opacity-50 text-xl font-bold px-4 rounded-xl bg-hackathon-green-300 mt-3"
      onClick={() => {
        setLoading(true);
        onClick().then(() => setLoading(false));
      }}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
