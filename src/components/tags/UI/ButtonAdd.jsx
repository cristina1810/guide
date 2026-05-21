export default function ButtonAdd({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-5 h-5 flex items-center justify-center text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-blue-300 dark:border-blue-600 rounded text-base leading-none"
    >
      +
    </button>
  );
}
