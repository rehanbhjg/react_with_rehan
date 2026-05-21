import { useState } from "react";

export function useHeader(onSearch) {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
    onSearch(e.target.value);
  }

  return { query, handleSearch };
}