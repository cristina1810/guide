import { useState, useCallback } from "react";
import {
  Search,
  Info,
  ChevronRight,
  Menu,
  Cookie,
  Clipboard,
  ClipboardCheck,
  Box,
} from "lucide-react";
import { variables } from "../../data/content/data_layer.js";

const TYPE_TO_CSV = {
  "Universal Data Object": "UDO Variable",
  "Cookie Value": "First Party Cookie",
};

const initialData = variables.map((v, i) => ({
  id: i + 1,
  name: v.name,
  type: v.type,
  isDom: v.type === "DOM Variable",
  isCookie: v.type === "Cookie Value",
}));

const TYPE_STYLES = {
  "DOM Variable": {
    icon: <Box size={15} />,
    iconClass: "text-yellow-700 dark:text-yellow-400",
    badge: "text-gray-400 dark:text-zinc-500",
  },
  "Universal Data Object": {
    icon: <Menu size={15} strokeWidth={5} />,
    iconClass: "text-pink-800 dark:text-pink-400",
    badge: "text-gray-400 dark:text-zinc-500",
  },
  "Cookie Value": {
    icon: <Cookie size={15} />,
    iconClass: "text-orange-600 dark:text-orange-400",
    badge: "text-gray-400 dark:text-zinc-500",
  },
};

const RowIcon = ({ type }) => {
  const config = TYPE_STYLES[type] ?? TYPE_STYLES["Universal Data Object"];
  return (
    <div
      className={`w-6 h-6 flex items-center justify-center ${config.iconClass}`}
    >
      {config.icon}
    </div>
  );
};

const TypeBadge = ({ type }) => {
  const config = TYPE_STYLES[type] ?? TYPE_STYLES["Universal Data Object"];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${config.badge}`}
    >
      {type}
    </span>
  );
};

const Toast = ({ message, type }) => (
  <div
    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2
    px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium animate-bounce-once
    ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
  >
    {type === "success" ? <ClipboardCheck size={15} /> : null}
    {message}
  </div>
);

export default function DataLayer() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);

  const generateCsv = useCallback(() => {
    return initialData
      .filter((item) => !item.isDom)
      .map((item) => {
        const csvType = TYPE_TO_CSV[item.type] ?? "UDO Variable";
        return `${item.name},${csvType}`;
      })
      .join("\n");
  }, []);

  const handleCopyCsv = async () => {
    try {
      const csv = generateCsv();
      await navigator.clipboard.writeText(csv);
      setCopied(true);
      triggerToast(
        `${initialData.filter((i) => !i.isDom).length} variables copiadas al portapapeles`,
        "success",
      );
      setTimeout(() => setCopied(false), 2500);
    } catch {
      triggerToast("Error al copiar. Inténtalo de nuevo.", "error");
    }
  };

  const triggerToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = initialData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectableItems = filtered.filter((item) => !item.isDom);

  const toggleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

  const nonDomCount = initialData.filter((i) => !i.isDom).length;

  return (
    <div className="font-sans rounded-lg border border-gray-100 dark:border-zinc-600 text-sm">
      {toast && <Toast message={toast.message} type={toast.type} />}

      <div className="bg-white dark:bg-zinc-900">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-zinc-800">
          <div className="bg-white dark:bg-zinc-900 px-4 py-3 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-700 dark:text-zinc-200 ml-1">
                iQ Tag Management
              </span>
            </div>
            <ChevronRight
              size={14}
              className="text-gray-400 dark:text-zinc-500"
            />
            <span className="text-gray-700 dark:text-zinc-200 font-medium flex items-center gap-1">
              Data Layer
              <Info
                size={14}
                className="text-gray-400 dark:text-zinc-500 cursor-pointer hover:text-gray-600 dark:hover:text-zinc-300"
              />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCsv}
              title={`Copiar ${nonDomCount} variables al portapapeles (formato Tealium iQ Bulk Import)`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium border transition-all duration-200
              ${
                copied
                  ? "border-green-500 bg-green-500 text-white"
                  : "border-dashed border-green-400 dark:border-green-700 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30"
              }`}
            >
              {copied ? (
                <>
                  <ClipboardCheck size={13} />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Clipboard size={13} />
                  Copiar CSV
                  <span className="ml-0.5 bg-green-200 dark:bg-green-900/40 text-green-800 dark:text-green-400 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                    {nonDomCount}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800">
              <th className="w-12 px-4 py-2.5 text-left" />
              <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wider w-56">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className={`border-b border-gray-100 dark:border-zinc-800 transition-colors ${
                  selected.includes(item.id)
                    ? "bg-blue-50 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-800"
                    : "hover:bg-gray-50 dark:hover:bg-zinc-800"
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 pl-5">
                    <RowIcon type={item.type} />
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className="font-medium text-gray-800 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                    {item.name}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <TypeBadge type={item.type} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-zinc-600">
            <Search size={32} className="mb-2 opacity-30" />
            <p className="text-sm">No variables found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
