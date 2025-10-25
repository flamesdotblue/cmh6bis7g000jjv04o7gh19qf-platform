import React from 'react';
import Spline from '@splinetool/react-spline';
import { Users, StickyNote, ListChecks, BarChart3 } from 'lucide-react';

function Hero() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-12 pb-16">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          All-in-one productivity SaaS
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
          Ship faster with an integrated dashboard for notes, tasks, widgets, and teams
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
          Multi-Tool Dashboard brings your workspace together: rich notes, Kanban tasks, analytics widgets, roles, and subscriptions. Built with a modern stack and real-time collaboration.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500">
            Start Free
          </a>
          <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900">
            Learn more
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
            <StickyNote size={16} />
            Notes
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
            <ListChecks size={16} />
            Tasks
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
            <BarChart3 size={16} />
            Widgets
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
            <Users size={16} />
            Teams
          </div>
        </div>
      </div>
      <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-slate-950/40" />
      </div>
    </section>
  );
}

export default Hero;
