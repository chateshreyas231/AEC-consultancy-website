"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // no backend wired - just show a success state
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      {sent ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-8 text-center text-emerald-100">
          <h3 className="text-xl font-semibold">Thanks — the team will reach out shortly.</h3>
          <p className="mt-2 text-sm text-emerald-100/80">Expect a reply within 24 hours with next steps.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-200/80">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-300/40 focus:border-sky-300/60 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-200/80">
            Work email

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@company.com"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-300/40 focus:border-sky-300/60 focus:outline-none"
            />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-slate-200/80">
            How can we help?
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="AI roadmap, BIM automation, data platform..."
              className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-300/40 focus:border-sky-300/60 focus:outline-none"
            />
          </label>

          <div className="sm:col-span-2 flex flex-col gap-4 md:flex-row md:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:scale-[1.01] hover:shadow-indigo-500/40"
            >
              Send message
            </button>
            <a
              href="https://calendly.com/your-calendly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Schedule via Calendly
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
