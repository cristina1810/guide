export default function StepBox({ number }) {
  return (
    <span
      className="inline-flex items-center justify-center w-12 h-12 rounded-xl font-extrabold text-xl flex-none
      bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-800 dark:to-zinc-800 text-blue-700 dark:text-blue-400
      ring-1 ring-inset ring-blue-200/60 dark:ring-blue-500/40 shadow-sm
      tabular-nums tracking-tight select-none"
    >
      {String(number).padStart(2, "0")}
    </span>
  );
}
