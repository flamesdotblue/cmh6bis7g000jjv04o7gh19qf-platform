import React from 'react';
import { Rocket, Moon, Sun, LayoutDashboard } from 'lucide-react';

function Navbar() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || (
      !localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
            <LayoutDashboard size={18} />
          </div>
          <span>Multi-Tool Dashboard</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-slate-700 dark:hover:text-slate-300">Features</a>
          <a href="#pricing" className="hover:text-slate-700 dark:hover:text-slate-300">Pricing</a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Changelog</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#pricing" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
            <Rocket size={16} />
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
