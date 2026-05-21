import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  toggleTask,
  deleteTask,
  startEditing,
  clearEditing,
  clearCompleted,
} from "../../features/todo/todoSlice";

function timeAgo(timestamp) {
  const diff = Math.floor((Date.now() - timestamp) / 1000); // seconds
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "Yesterday";
  return `${Math.floor(diff / 86400)} days ago`;
}

export function useTodo(searchQuery) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const updateId = useSelector((state) => state.todo.updateId);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const visible = tasks
    .filter((t) => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    })
    .filter((t) =>
      t.title.toLowerCase().includes((searchQuery || "").toLowerCase())
    )
    .map((t) => ({
      ...t,
      time: t.createdAt ? timeAgo(t.createdAt) : t.time,
    }));

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.filter((t) => !t.completed).length;

  function handleAddTask() {
    if (!input.trim()) return;
    dispatch(addTask(input.trim()));
    setInput("");
  }

  function handleToggleTask(id) {
    dispatch(toggleTask(id));
  }

  function handleDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  function handleStartEditing(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setInput(task.title);
    dispatch(startEditing(id));
  }

  function handleClearCompleted() {
    dispatch(clearCompleted());
    dispatch(clearEditing());
  }

  return {
    input, setInput,
    filter, setFilter,
    visible,
    updateId,
    total, completed, pending,
    addTask: handleAddTask,
    toggleTask: handleToggleTask,
    deleteTask: handleDeleteTask,
    startEditing: handleStartEditing,
    clearCompleted: handleClearCompleted,
  };
}