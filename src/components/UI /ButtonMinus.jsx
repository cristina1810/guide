import { Minus } from "lucide-react";

export default function ButtonMinus() {
  return (
    <button
      type="button"
      aria-label="Quitar"
      title="Quitar"
      className="w-5 h-5 flex items-center justify-center border border-gray-300 dark:border-zinc-600 rounded text-blue-600 dark:text-blue-400 bg-white dark:bg-zinc-800 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-500 active:scale-95 transition-all duration-150 text-xs"
    >
      <Minus size={12} strokeWidth={4} />
    </button>
  );
}
