export { SubmitButton };
function SubmitButton({ buttonName, onSubmit }) {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onSubmit}
        className="w-36 h-12 m-8  rounded-lg shadow-md border-solid border-1 border-slate-900 bg-slate-50  hover:bg-slate-200"
      >
        {buttonName}
      </button>
    </div>
  );
}
