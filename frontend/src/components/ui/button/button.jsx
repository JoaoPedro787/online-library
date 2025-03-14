const Button = ({ element, onClick }) => {
  const { text, color } = element;

  return (
    <button
      className={`p-4 px-10 text-xl font-bold ${color} text-white cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const SubmitButton = ({ element, onClick }) => {
  const { text } = element;

  return (
    <button
      className={`p-3 w-[400px] text-xl font-bold bg-slate-800 text-white cursor-pointer rounded-2xl max-[420px]:w-[300px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button, SubmitButton };
