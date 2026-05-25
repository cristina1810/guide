export default function SecondaryButton({ onClick, className = "", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs border border-gray-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
