import { useHeader } from "../components/header/header.js";

export default function Header({ onSearch }) {
  const { query, handleSearch } = useHeader(onSearch);

  return (
    <header className="flex items-center justify-between px-4 md:px-7 h-14 md:h-16 bg-white border-b border-gray-200 sticky top-0 z-50 gap-3">

      <div className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          ✓
        </div>
        <span className="text-base md:text-lg font-bold text-slate-800 hidden sm:block">TaskFlow</span>
      </div>

      <div className="flex-1 max-w-xs md:max-w-md">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 md:px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-blue-500 transition-all">
          <span className="text-slate-400 text-sm ">🔍</span>
          <input
            type="text"
            className="bg-transparent border-none outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
            placeholder="Search tasks..."
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-lg p-1.5 rounded-lg hover:bg-slate-100 bg-transparent cursor-pointer">
          🔔
        </button>
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-orange-400 text-white text-sm font-bold flex items-center justify-center cursor-pointer select-none">
          R
        </div>
      </div>
    </header>
  );
}