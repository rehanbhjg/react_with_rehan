import { createSlice } from "@reduxjs/toolkit";

const DEMO_TASKS = [
  { id: 1, title: "Design the new user dashboard mockup", completed: false, createdAt: Date.now() - 2 * 60 * 1000 },
  { id: 2, title: "Weekly team sync meeting", completed: true, createdAt: Date.now() - 45 * 60 * 1000 },
  { id: 3, title: "Review feedback for version 2.0", completed: false, createdAt: Date.now() - 3 * 60 * 60 * 1000 },
  { id: 4, title: "Prepare documentation for API endpoints", completed: false, createdAt: Date.now() - 5 * 60 * 60 * 1000 },
  { id: 5, title: "Update repository README file", completed: false, createdAt: Date.now() - 24 * 60 * 60 * 1000 },
];

function loadTasksFromStorage() {
  try {
    const serialized = localStorage.getItem("taskflow_tasks");
    if (serialized === null) return DEMO_TASKS;
    return JSON.parse(serialized);
  } catch {
    return DEMO_TASKS;
  }
}

function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
  } catch {}
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: loadTasksFromStorage(),
    updateId: null,
  },
  reducers: {
    addTask: (state, action) => {
      if (state.updateId !== null) {
        state.tasks = state.tasks.map((t) =>
          t.id === state.updateId ? { ...t, title: action.payload } : t
        );
        state.updateId = null;
      } else {
        state.tasks.unshift({
          id: Date.now(),
          title: action.payload,
          completed: false,
          createdAt: Date.now(),
        });
      }
      saveTasksToStorage(state.tasks);
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      saveTasksToStorage(state.tasks);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveTasksToStorage(state.tasks);
    },

    startEditing: (state, action) => {
      state.updateId = action.payload;
    },

    clearEditing: (state) => {
      state.updateId = null;
    },

    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((t) => !t.completed);
      saveTasksToStorage(state.tasks);
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  startEditing,
  clearEditing,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;