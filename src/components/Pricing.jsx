import React from 'react';
import { Check, CreditCard } from 'lucide-react';

function Pricing() {
  return (
    <section id="pricing" className="py-14">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Start free. Upgrade anytime. Cancel in one click.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">Free</h3>
            <span className="text-sm px-2 py-1 rounded-full border border-slate-200/70 dark:border-slate-800">Best for testing</span>
          </div>
          <div className="mt-4 flex items-end gap-1">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-slate-500 dark:text-slate-400">/month</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              '1 workspace',
              'Up to 3 widgets',
              'Notes and Kanban tasks',
              'Community support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 text-emerald-500" size={16} /> {f}</li>
            ))}
          </ul>
          <a href="#" className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900">
            Get Started Free
          </a>
        </div>

        <div className="relative rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-slate-900/70 p-6 ring-1 ring-indigo-500/20">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">Pro</h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-600 text-white">Popular</span>
          </div>
          <div className="mt-4 flex items-end gap-1">
            <span className="text-4xl font-bold">$10</span>
            <span className="text-slate-500 dark:text-slate-300">/month</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              'Unlimited workspaces',
              'Unlimited widgets',
              'Team roles & permissions',
              'Priority support',
              'Customer portal via Stripe'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 text-emerald-500" size={16} /> {f}</li>
            ))}
          </ul>
          <a href="#" className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">
            <CreditCard size={16} /> Upgrade with Stripe
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
        Prices in USD. Taxes may apply. Manage billing anytime with the Stripe Customer Portal.
      </p>
    </section>
  );
}

export default Pricing;
