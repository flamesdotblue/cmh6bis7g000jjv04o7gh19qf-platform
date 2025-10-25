import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeatureGrid />
        <Pricing />
      </main>
      <footer className="border-t border-slate-200/60 dark:border-slate-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Multi-Tool Dashboard. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-700 dark:hover:text-slate-300">Features</a>
            <a href="#pricing" className="hover:text-slate-700 dark:hover:text-slate-300">Pricing</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
