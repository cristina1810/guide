import { useState } from "react";
import { ChevronDown, Plus, Info } from "lucide-react";

const initialConditions = [
  { id: 1, conjunction: "",    variable: "search_keyword", operator: "is defined",   value: "" },
  { id: 2, conjunction: "and", variable: "search_results", operator: "greater than", value: "0" },
];

const variables = ["search_keyword", "search_results", "page_url", "user_id"];
const operators = ["is defined", "is not defined", "equals", "greater than", "less than", "contains"];

function DotsVerticalIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <circle cx="10" cy="4"  r="1.5" />
      <circle cx="10" cy="10" r="1.5" />
      <circle cx="10" cy="16" r="1.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

export default function SearchExistRule() {
  const [name, setName]           = useState("Search and search exist");
  const [notes, setNotes]         = useState("");
  const [conditions, setConditions] = useState(initialConditions);
  const [openMenuId, setOpenMenuId] = useState(null);

  const updateCondition = (id, field, value) => {
    setConditions((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const needsValue = (operator) => !["is defined", "is not defined"].includes(operator);

  const inputClass = "w-full border border-gray-200 dark:border-zinc-600 rounded-sm px-3 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="flex items-start justify-center">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-5xl shadow-sm border border-gray-200 dark:border-zinc-700 rounded-sm">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800">
          <button className="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-gray-800 dark:text-zinc-100">
            {name || "Untitled"}
          </h1>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Properties */}
          <section>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-zinc-200 mb-4">Properties</h2>
            <div className="space-y-4 max-w-lg">
              <div>
                <label className="block text-xs text-gray-500 dark:text-zinc-400 mb-1">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-blue-500 dark:border-blue-500 rounded-sm px-3 py-1.5 text-sm text-gray-800 dark:text-zinc-100 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 dark:text-zinc-400 mb-1">Notes:</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 dark:border-zinc-600 rounded-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </section>

          {/* Conditions */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-zinc-200">Conditions</h2>
              <div className="flex items-center gap-2">
                <button className="text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300">
                  <Info size={16} className="flex-shrink-0" />
                </button>
                <button className="flex items-center gap-2 border border-gray-300 dark:border-zinc-600 rounded-sm px-3 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors min-w-48 justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span>Add a date range condition</span>
                  </div>
                  <ChevronDown />
                </button>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-zinc-700 rounded-sm overflow-hidden">
              {/* Table Header */}
              <div
                className="grid bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700"
                style={{ gridTemplateColumns: "80px 1fr 1fr 1fr auto" }}
              >
                <div className="px-4 py-2.5" />
                <div className="px-4 py-2.5 text-xs font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wide">Variable</div>
                <div className="px-4 py-2.5 text-xs font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wide">Operator</div>
                <div className="px-4 py-2.5 text-xs font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wide">Value</div>
                <div className="px-4 py-2.5 w-24" />
              </div>

              {/* Rows */}
              <div className="border-l-4 border-blue-500">
                {conditions.map((condition, index) => (
                  <div
                    key={condition.id}
                    className="grid items-center border-b border-gray-100 dark:border-zinc-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                    style={{ gridTemplateColumns: "80px 1fr 1fr 1fr auto" }}
                  >
                    <div className="px-4 py-2.5 text-xs text-gray-500 dark:text-zinc-400 font-medium">
                      {index === 0 ? "" : condition.conjunction}
                    </div>

                    {/* Variable */}
                    <div className="px-2 py-2">
                      <div className="relative flex items-center">
                        <span className="absolute left-2.5 text-gray-400 dark:text-zinc-500">
                          <MenuIcon />
                        </span>
                        <select
                          value={condition.variable}
                          onChange={(e) => updateCondition(condition.id, "variable", e.target.value)}
                          className="w-full border border-gray-200 dark:border-zinc-600 rounded-sm pl-7 pr-6 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                        >
                          {variables.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <span className="absolute right-2 text-gray-400 dark:text-zinc-500 pointer-events-none">
                          <ChevronDown />
                        </span>
                      </div>
                    </div>

                    {/* Operator */}
                    <div className="px-2 py-2">
                      <div className="relative">
                        <select
                          value={condition.operator}
                          onChange={(e) => updateCondition(condition.id, "operator", e.target.value)}
                          className="w-full border border-gray-200 dark:border-zinc-600 rounded-sm px-3 pr-6 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                        >
                          {operators.map((op) => <option key={op} value={op}>{op}</option>)}
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 pointer-events-none">
                          <ChevronDown />
                        </span>
                      </div>
                    </div>

                    {/* Value */}
                    <div className="px-2 py-2">
                      {needsValue(condition.operator) ? (
                        <input
                          type="text"
                          value={condition.value}
                          onChange={(e) => updateCondition(condition.id, "value", e.target.value)}
                          className={inputClass}
                        />
                      ) : (
                        <div className="w-full h-8" />
                      )}
                    </div>

                    {/* Actions */}
                    <div className="px-3 py-2 flex items-center gap-1">
                      <button className="p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors" title="Add condition">
                        <Plus size={16} />
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => setOpenMenuId(openMenuId === condition.id ? null : condition.id)}
                          className="p-1.5 text-gray-400 dark:text-zinc-500 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded transition-colors"
                          title="More options"
                        >
                          <DotsVerticalIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
