import { useTodo } from "../components/todoform/todoForm"

export default function TodoForm({ searchQuery }) {
  const {
    input, setInput,
    filter, setFilter,
    visible,
    updateId,          
    total, completed, pending,
    addTask, toggleTask, startEditing, deleteTask, clearCompleted, 
  } = useTodo(searchQuery);

  return (
    <div className="flex flex-col gap-5 p-5 md:p-7 w-full max-w-11xl mx-auto">

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 flex items-center justify-center text-lg md:text-xl shrink-0">📋</div>
          <div>
            <p className="text-xs md:text-sm text-slate-500 font-medium">Total Todos</p>
            <p className="text-2xl md:text-3xl font-extrabold text-slate-800 ">{String(total).padStart(2, "0")}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-50 flex items-center justify-center text-lg md:text-xl shrink-0">✅</div>
          <div>
            <p className="text-xs md:text-sm text-slate-500 font-medium">Completed</p>
            <p className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">{String(completed).padStart(2, "0")}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-lg md:text-xl shrink-0">⏳</div>
          <div>
            <p className="text-xs md:text-sm text-slate-500 font-medium">Pending</p>
            <p className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">{String(pending).padStart(2, "0")}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 bg-white border border-gray-200 rounded-xl px-4 md:px-5 py-2">
        <input
          type="text"
          className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 py-1.5"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-3 md:px-5 py-2 md:py-2.5 rounded-lg cursor-pointer whitespace-nowrap transition-colors"
        >
          {updateId !== null ? "✎ Update Task" : "+ Add Task"}
        </button>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-4 md:gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-2 md:p-3 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible md:h-fit">
          {[
            { key: "all",       label: "All Tasks", icon: "☰" },
            { key: "completed", label: "Completed", icon: "✓" },
            { key: "pending",   label: "Pending",   icon: "○" },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border-none text-sm font-medium cursor-pointer transition-colors whitespace-nowrap 
                ${filter === key
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "bg-transparent text-slate-500 hover:bg-slate-100"}`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}

          <div className="hidden md:block h-px bg-slate-100 my-1 mx-1" />

          <button
            onClick={clearCompleted}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap text-slate-400 hover:bg-red-50 hover:text-red-500"
          >
            <span>🗑</span>
            <span className="hidden sm:inline">Clear Completed</span>
            <span className="md:hidden">Clear</span>
          </button>
        </div>

        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-slate-100">
            <h2 className="text-sm md:text-base font-bold text-slate-800 m-0">Tasks List</h2>
            <span className="text-xs text-slate-400">Showing {visible.length} tasks</span>
          </div>

          <ul className="m-0 p-2 md:p-3 flex flex-col gap-1 list-none">
            {visible.length === 0 && (
              <li className="text-center text-slate-400 text-sm py-10">No tasks found 🎉</li>
            )}

            {visible.map((task) => (
              <li key={task.id} className="flex items-center gap-3 px-2 md:px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group">

                <button
                  onClick={() => toggleTask(task.id)}
                  style={{ border: task.completed ? "2px solid #2563eb" : "2px solid #cbd5e1" }}
                  className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0 cursor-pointer text-xs font-bold text-white outline-none transition-colors ${task.completed ? "bg-blue-600" : "bg-transparent hover:border-blue-400"}`}
                >
                  {task.completed && "✓"}
                </button>

                <div className="flex-1">
                  <span className={`block text-sm font-medium truncate ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}>
                    {task.title}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${task.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {task.completed ? "COMPLETED" : "PENDING"}
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">🕐 {task.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => startEditing(task.id)}
                  className="group-hover:opacity-100 text-slate-300 hover:text-blue-500 hover:bg-blue-50 text-sm px-2 py-1 rounded-lg bg-transparent cursor-pointer transition-all shrink-0"
                >
                  🔄
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="group-hover:opacity-100 text-slate-300 hover:text-red-500 hover:bg-red-50 text-sm px-2 py-1 rounded-lg bg-transparent cursor-pointer transition-all shrink-0"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}