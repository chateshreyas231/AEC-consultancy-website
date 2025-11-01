import React from "react";

const logos = [
  { name: "NebulaBuild" },
  { name: "CognitiveSites" },
  { name: "Northwind AEC" },
  { name: "MonoRail Constructors" },
  { name: "FutureForm" },
  { name: "Vertex Labs" },
];

export default function ClientCarousel() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_65%)] bg-fixed" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80">Trusted by innovators</span>
          <h3 className="text-2xl font-semibold text-white/90 sm:text-3xl">Teams shipping modern, intelligent infrastructure</h3>
          <p className="max-w-2xl text-sm text-slate-200/70">
            From preconstruction analytics to digital twins, our partners rely on co-built automation to reduce friction and cost across programs.
          </p>
        </div>

        <div className="no-scrollbar flex gap-6 overflow-x-auto py-2">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="glass-panel-light flex min-w-[180px] flex-col items-center justify-center gap-2 px-6 py-5 text-center text-sm font-medium text-slate-100/90"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-slate-200/50">Client</span>
              <span className="text-lg font-semibold text-white/90">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
