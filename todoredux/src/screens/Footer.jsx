export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-5 text-sm text-slate-400 border-t border-gray-200 bg-white mt-auto">
      © {year} TaskFlow. Streamlining your productivity with modern solutions.
    </footer>
  );
}
