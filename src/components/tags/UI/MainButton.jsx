export default function MainButton({ onClick, className = "", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs rounded bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
