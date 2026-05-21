const variants = {
  info: {
    wrap: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50",

    title: "text-blue-800 dark:text-blue-300",
    text: "text-blue-700 dark:text-blue-300/90",
  },
  tip: {
    wrap: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50",

    title: "text-green-800 dark:text-green-300",
    text: "text-green-700 dark:text-green-300/90",
  },
  warning: {
    wrap: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/50",

    title: "text-amber-800 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-300/90",
  },
  danger: {
    wrap: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50",

    title: "text-red-800 dark:text-red-300",
    text: "text-red-700 dark:text-red-300/90",
  },
};

export default function Callout({ type = "warning", title, children }) {
  const v = variants[type] ?? variants.warning;

  return (
    <div
      className={`relative flex flex-col gap-0.5 rounded-lg border pl-5 pr-4 py-3.5 overflow-hidden ${v.wrap}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${v.bar}`} />
      {title && (
        <p className={`text-xs font-semibold leading-snug ${v.title}`}>
          {title}
        </p>
      )}
      <div className={`text-xs leading-relaxed ${v.text}`}>{children}</div>
    </div>
  );
}
