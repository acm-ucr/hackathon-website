const Button = ({ onClick, text, loading }) => {
  return (
    <button
      disabled={loading}
      data-cy={`${text}-button`}
      className="text-gray-800 py-1 disabled:opacity-50 hover:opacity-50 text-xl font-bold px-4 rounded-xl bg-hackathon-green-300 mt-3"
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
