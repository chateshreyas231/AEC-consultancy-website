import { aboutMetrics } from "../../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_60%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/80">about</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Partners embedded alongside your teams</h2>
            <p className="mt-4 text-sm text-slate-200/70">
              We blend consulting, engineering, and enablement crews so your people learn while delivering. Engagements are transparent, co-authored, and measured by tangible business outcomes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutMetrics.map(({ value, label }) => (
                <div key={label} className="glass-panel-light border border-white/15 px-4 py-5 text-center">
                  <span className="text-2xl font-semibold text-white">{value}</span>
                  <p className="mt-2 text-xs text-slate-200/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel border border-white/15 p-8">
            <h3 className="text-lg font-semibold text-white">How we work</h3>
            <p className="mt-3 text-sm text-slate-200/75">
              We build multidisciplinary pods that bring strategy, data, engineering, and change management under one roof. Every engagement is anchored to OKRs we agree on together.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-100/80">
              <li>Discovery sprints surface blockers, map systems, and quantify the opportunity.</li>
              <li>Delivery waves bring iterative releases with embedded enablement for client teams.</li>
              <li>Runway plans ensure ownership transitions smoothly with playbooks and instrumentation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
