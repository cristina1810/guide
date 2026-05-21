export default function Input({ children }) {
  return (
    <div className="mb-4">
      <input
        value={children}
        readOnly
        className="w-64 border border-gray-300 dark:border-gray-600 rounded-md px-2.5 py-1.5 text-xs text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-150 hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-500"
      />
    </div>
  );
}
