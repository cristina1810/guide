import { useState } from "react";
import Delete from "./UI/Delete";
import Duplicate from "./UI/Duplicate";
import ViewHisChange from "./UI/ViewHisChange";
import { Info } from "lucide-react";
import ButtonAdd from "./UI/ButtonAdd";
import ButtonMinus from "./UI/ButtonMinus";
import Toggle from "./UI/Toggle";

const SearchLowercase = () => {
  const [title, setTitle] = useState("Search Lowercase");
  const [allVarsLowerCase, setAllVarsLowerCase] = useState("no");
  const [lowerCaseArrayItems, setLowerCaseArrayItems] = useState(true);
  const [lowerCaseVars, setLowerCaseVars] = useState([
    { id: 1, value: "search_keyword (js)" },
  ]);

  return (
    <div className="rounded-lg border-gray-100 dark:border-zinc-800 font-sans text-sm">
      {/* Header Row */}
      <div className="flex items-center border-b border-gray-300 dark:border-zinc-700 px-4 py-2 bg-gray-50/50 dark:bg-zinc-800/50">
        <div className="me-4">
          <Toggle />
        </div>
        <div className="flex-1 text-sm font-medium text-gray-800 dark:text-zinc-100">
          Search Lowercase
        </div>
        <div className="w-40 text-sm text-gray-600 dark:text-zinc-400">Lower casing</div>
        <div className="w-36 text-sm text-gray-600 dark:text-zinc-400">Before Load Rules</div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-52 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-700 p-3 flex flex-col gap-1">
          <Delete />
          <Duplicate />
          <ViewHisChange />

          <div className="mt-3 border-t border-gray-200 dark:border-zinc-700 pt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-gray-700 dark:text-zinc-300 text-xs">Labels</span>
            </div>
            <p className="text-gray-400 dark:text-zinc-600 text-xs italic">
              There are no labels assigned
            </p>
          </div>

          <div className="mt-3 border-t border-gray-200 dark:border-zinc-700 pt-3">
            <span className="font-semibold text-gray-700 dark:text-zinc-300 text-xs block mb-1">Description</span>
            <p className="text-gray-500 dark:text-zinc-400 text-xs leading-relaxed">
              Note: The data source for the trace id (cp.trace_id) is NOT lower
              cased. Use this customization to set JS, meta, query and cookie
              data to lower case. This is a best practice for data consistency.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white dark:bg-zinc-900 rounded p-6 max-w-2xl">
          {/* Title Field */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 dark:border-zinc-600 rounded px-3 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
            />
          </div>

          {/* Scope Field */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 mb-1">Scope</label>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 dark:border-zinc-600 rounded px-3 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:border-blue-400">
                <option>Before Load Rules</option>
                <option>After Load Rules</option>
                <option>DOM Ready</option>
              </select>
              <button className="text-blue-600 dark:text-blue-400 text-xs hover:underline whitespace-nowrap">
                Edit Load Order...
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500 dark:text-zinc-400">
              <Info size={16} className="text-gray-400 dark:text-zinc-500 flex-shrink-0" />
              This feature requires utag v4.38 or higher.
            </div>
          </div>

          <hr className="border-gray-200 dark:border-zinc-700 my-4" />

          {/* Configuration Section */}
          <div>
            <h3 className="text-xs font-bold text-gray-600 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Configuration
            </h3>

            {/* All Variables to Lower Case */}
            <div className="flex items-center gap-6 mb-4">
              <span className="text-xs text-gray-700 dark:text-zinc-300 font-medium w-48">
                All Variables to Lower Case:
              </span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="allVars"
                    value="yes"
                    checked={allVarsLowerCase === "yes"}
                    onChange={() => setAllVarsLowerCase("yes")}
                    className="accent-blue-500"
                  />
                  <span className="text-xs text-gray-700 dark:text-zinc-300">Yes</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="allVars"
                    value="no"
                    checked={allVarsLowerCase === "no"}
                    onChange={() => setAllVarsLowerCase("no")}
                    className="accent-blue-500"
                  />
                  <span className="text-xs text-gray-700 dark:text-zinc-300">No</span>
                </label>
              </div>
            </div>

            {/* Lower Case Variables */}
            {allVarsLowerCase === "no" && (
              <div className="mb-4">
                <span className="block text-xs text-gray-700 dark:text-zinc-300 font-medium mb-2">
                  Lower Case:
                </span>
                <div className="flex flex-col gap-2">
                  {lowerCaseVars.map((v) => (
                    <div key={v.id} className="flex items-center gap-2">
                      <select
                        defaultValue={v.value}
                        className="border border-gray-300 dark:border-zinc-600 rounded px-3 py-1.5 text-sm text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 focus:outline-none focus:border-blue-400 min-w-52"
                      >
                        <option>search_keyword (js)</option>
                        <option>page_name (js)</option>
                        <option>product_id (js)</option>
                      </select>
                      <ButtonAdd />
                      <ButtonMinus />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lower Case Array Items */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs text-gray-700 dark:text-zinc-300 font-medium">
                Lower case array items:
              </span>
              <input
                type="checkbox"
                checked={lowerCaseArrayItems}
                onChange={(e) => setLowerCaseArrayItems(e.target.checked)}
                className="w-3.5 h-3.5 accent-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLowercase;
