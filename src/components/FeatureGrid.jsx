import React from 'react';
import { Shield, Users, StickyNote, ListChecks, BarChart3, CreditCard, Sparkles } from 'lucide-react';

const features = [
  {
    icon: StickyNote,
    title: 'Rich Notes',
    desc: 'Markdown-style rich text editor with real-time collaboration and version history.'
  },
  {
    icon: ListChecks,
    title: 'Kanban Tasks',
    desc: 'Drag-and-drop boards with due dates, assignees, and reminders.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Widgets',
    desc: 'GitHub, GA4, and custom widgets you can arrange on your dashboard.'
  },
  {
    icon: Users,
    title: 'Team Roles',
    desc: 'Admin, Editor, and Viewer roles with granular permissions per workspace.'
  },
  {
    icon: CreditCard,
    title: 'Stripe Billing',
    desc: 'Free and Pro plans with checkout, customer portal, and webhooks.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'OAuth, email auth, and best practices for encryption, storage, and sessions.'
  }
];

function FeatureGrid() {
  return (
    <section id="features" className="py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to build and scale</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
            A focused toolkit for teams to plan, document, and measure progress across projects.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-slate-800">
          <Sparkles size={16} /> Built with React, Tailwind, and Stripe
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative rounded-xl border border-slate-200/70 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900/60 hover:shadow-sm">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;
