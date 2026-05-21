import { Info } from "lucide-react";

const colorVariants = {
  red: {
    container: "bg-red-50/80 dark:bg-red-900/20 border-red-100 dark:border-red-800/50 ring-red-200/50 dark:ring-red-700/30",
    icon: "text-red-700 dark:text-red-400",
    text: "text-red-800 dark:text-red-300",
  },
  blue: {
    container: "bg-blue-50/80 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/50 ring-blue-200/50 dark:ring-blue-700/30",
    icon: "text-blue-700 dark:text-blue-400",
    text: "text-blue-800 dark:text-blue-300",
  },
  yellow: {
    container: "bg-yellow-50/80 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/50 ring-yellow-200/50 dark:ring-yellow-700/30",
    icon: "text-yellow-700 dark:text-yellow-400",
    text: "text-yellow-800 dark:text-yellow-300",
  },
  green: {
    container: "bg-green-50/80 dark:bg-green-900/20 border-green-100 dark:border-green-800/50 ring-green-200/50 dark:ring-green-700/30",
    icon: "text-green-700 dark:text-green-400",
    text: "text-green-800 dark:text-green-300",
  },
};

export default function InfoBox({ children, color = "red" }) {
  const styles = colorVariants[color];

  return (
    <div
      role="note"
      className={`flex items-start gap-4 p-4 rounded-lg border ring-1 ring-inset shadow-sm my-4 ${styles.container}`}
    >
      <Info size={18} className={`mt-0.5 flex-shrink-0 ${styles.icon}`} aria-hidden="true" />
      <p className={`text-sm italic leading-relaxed ${styles.text}`}>
        {children}
      </p>
    </div>
  );
}
