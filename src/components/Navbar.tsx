import { motion } from "motion/react";
import { Radio, Search, Moon, Sun } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Navbar({ isDark, onToggleTheme }: { isDark: boolean, onToggleTheme: () => void }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(search + " cricket player stats")}`, '_blank');
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] transition-all duration-300 ${isDark ? 'bg-[#191c1e]/80 p-4' : 'bg-[#f8f9ff]/80'} backdrop-blur-md`}
    >
      <div className="flex items-center gap-2">
        <div className="p-1 rounded-xl bg-m3-primary/10">
          <Radio className="w-6 h-6 text-m3-primary" />
        </div>
        <span className="text-xl font-bold tracking-tight text-[var(--fg)] font-sans uppercase">
          Cric<span className="text-m3-primary italic">AR</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
        <form onSubmit={handleSearch} className="relative w-full">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--fg)] opacity-40" />
           <input 
             type="text" 
             placeholder="Search players..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full bg-[var(--card)] border border-[var(--border)] rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-m3-primary/20 transition-all text-[var(--fg)]"
           />
        </form>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onToggleTheme}
          className="p-3 rounded-full hover:bg-[var(--border)] transition-colors text-[var(--fg)]"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase bg-m3-primary text-white rounded-full hover:shadow-lg transition-all shadow-md active:scale-95">
          Get App
        </button>
      </div>
    </motion.nav>
  );
}
