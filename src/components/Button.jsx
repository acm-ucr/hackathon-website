const Submit = ({ onClick, text }) => {
  return (
    <button
      data-cy={`${text}-button`}
      className="text-gray-800 py-1 hover:opacity-50 text-xl font-bold w-1/3 rounded-xl bg-hackathon-green-300 mt-3"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Submit;
