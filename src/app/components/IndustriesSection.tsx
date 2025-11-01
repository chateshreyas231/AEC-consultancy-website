import { industries } from "../../data/site";

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_65%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-200/80">industries</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Deep domain experience across complex programmes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200/70">
            We work with multi-disciplinary project teams delivering large scale assets, regulated environments, and high-visibility programmes.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="glass-panel-light border border-white/15 px-4 py-5 text-center text-sm font-semibold text-white/85">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
