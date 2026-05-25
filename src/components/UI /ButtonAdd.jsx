import { Plus } from "lucide-react";

export default function ButtonAdd() {
  return (
    <button
      type="button"
      aria-label="Añadir"
      title="Añadir"
      className="w-5 h-5 flex items-center justify-center border border-gray-300 dark:border-zinc-600 rounded text-blue-600 dark:text-blue-400 bg-white dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500 active:scale-95 transition-all duration-150 text-xs"
    >
      <Plus size={12} strokeWidth={4} />
    </button>
  );
}
