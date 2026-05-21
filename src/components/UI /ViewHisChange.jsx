import { RotateCw } from "lucide-react";
export default function ViewHisChange() {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 -mx-1 rounded-md text-xs text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer transition-colors duration-150">
      <RotateCw size={14} className="text-blue-500" />
      <span>View History Change</span>
    </div>
  );
}
