"use client";
import React, { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm a demo assistant. Ask me about our AI & Data services.",
  ]);
  const [input, setInput] = useState("");

  function send() {
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      `You: ${input}`,
      "Bot: That's a great question — we'll follow up with a demo soon.",
    ]);
    setInput("");
  }

  return (
    <div>
      {/* floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {open && (
          <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur">
            <div className="bg-linear-to-r from-sky-500/70 to-indigo-500/70 px-4 py-3 text-sm font-semibold text-white">
              Chat demo
            </div>
            <div className="flex flex-col gap-3 px-4 py-4 text-sm text-slate-100/80">
              <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
                {messages.map((m, i) => (
                  <div key={i} className="rounded-lg bg-white/5 px-3 py-2 text-slate-100/85">
                    {m}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder:text-slate-300/40 focus:border-sky-300/60 focus:outline-none"
                  placeholder="Type a message"
                />
                <button
                  onClick={send}
                  className="rounded-xl bg-linear-to-r from-sky-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:shadow-indigo-500/40"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-sky-500 to-indigo-500 text-white shadow-xl shadow-sky-500/40 transition hover:shadow-indigo-500/40"
          aria-label="Open chat"
        >
          💬
        </button>
      </div>
    </div>
  );
}
