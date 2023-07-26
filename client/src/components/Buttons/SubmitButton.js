const SubmitButton = ({ isFormValid, text }) => {
  const buttonClass = isFormValid
    ? 'bg-blue-500 hover:bg-blue-300'
    : 'bg-gray-200 cursor-not-allowed';

  const textColor = isFormValid ? 'text-white' : 'text-gray-400';

  return (
    <button
      className={`transition duration-200 ease-in-out py-2 px-4 rounded mt-4 ${buttonClass} ${textColor}`}
      type="submit"
      disabled={!isFormValid}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
