import { useState } from "react";

export default function Toggle({ defaultEnabled = true }) {
  const [enabled, setEnabled] = useState(defaultEnabled);
  return (
    <button
      type="button"
      onClick={() => setEnabled((v) => !v)}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-blue-500 dark:bg-blue-600" : "bg-gray-300 dark:bg-zinc-600"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
          enabled ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
