export default function SecondaryButton({ children }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-tight text-blue-700 dark:text-blue-400 bg-white dark:bg-transparent border border-blue-700/70 dark:border-blue-500/70 rounded-md cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-700 dark:hover:border-blue-400 hover:shadow-sm active:bg-blue-100 dark:active:bg-blue-900/40 transition-all duration-200 ease-out group">
      {children}
    </div>
  );
}