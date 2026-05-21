export default function StepCard({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800/80 rounded-xl shadow-[0px_12px_32px_rgba(40,52,57,0.06)] dark:shadow-[0px_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0px_18px_40px_rgba(40,52,57,0.09)] dark:hover:shadow-[0px_18px_40px_rgba(0,0,0,0.4)] border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300 ease-out overflow-hidden">
      {children}
    </div>
  );
}
