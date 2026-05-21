import { Copy } from "lucide-react";
export default function Duplicate() {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 -mx-1 rounded-md text-xs text-slate-700 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 cursor-pointer transition-colors duration-150">
      <Copy size={14} className="text-green-600" />
      <span>Duplicate</span>
    </div>
  );
}
