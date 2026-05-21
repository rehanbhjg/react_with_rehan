import { useState } from "react";
import Header from "./screens/Header.jsx";
import Footer from "./screens/Footer.jsx";
import TodoForm from "./screens/TodoForm.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header onSearch={setSearchQuery} />
      <main className="flex-1">
        <TodoForm searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}