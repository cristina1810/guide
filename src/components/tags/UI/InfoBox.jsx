const colorMap = {
  red: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300",
  blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300",
  yellow: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800/50 text-yellow-700 dark:text-yellow-300",
  green: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300",
};

export default function InfoBox({ color = "blue", className = "", children }) {
  return (
    <div className={`border rounded-md px-3 py-2 text-xs ${colorMap[color] ?? colorMap.blue} ${className}`}>
      {children}
    </div>
  );
}
