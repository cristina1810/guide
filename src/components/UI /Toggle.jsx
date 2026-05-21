export default function Toggle({ checked = true }) {
  return (
    <label
      className="relative inline-flex items-center cursor-not-allowed"
      title={checked ? "Activado" : "Desactivado"}
      aria-label={checked ? "Activado" : "Desactivado"}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        disabled
        readOnly
      />
      <div
        className={`group peer bg-white dark:bg-gray-700 rounded-full transition-all duration-300 w-7 h-3.5 ring-2 after:duration-300 after:rounded-full after:absolute after:h-2.5 after:w-2.5 after:top-0.5 after:left-0.5 after:shadow-sm after:flex after:justify-center after:items-center peer-checked:after:translate-x-3.5 peer-hover:after:scale-95 opacity-80
        ${
          checked
            ? "ring-green-500 dark:ring-green-400 after:bg-green-500 dark:after:bg-green-400 peer-checked:after:bg-green-500 dark:peer-checked:after:bg-green-400 peer-checked:ring-green-500 dark:peer-checked:ring-green-400"
            : "ring-gray-300 dark:ring-gray-600 after:bg-gray-300 dark:after:bg-gray-500"
        }`}
      />
    </label>
  );
}
