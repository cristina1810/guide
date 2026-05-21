export default function ButtonMinus({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-5 h-5 flex items-center justify-center text-blue-500 dark:text-blue-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-500 dark:hover:text-red-400 border border-blue-300 dark:border-blue-600 rounded text-base leading-none"
    >
      −
    </button>
  );
}
