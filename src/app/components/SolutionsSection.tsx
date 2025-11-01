import { Sparkles } from "lucide-react";
import { solutions } from "../../data/site";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-200/80">solutions</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
            Productised accelerators tuned for data-led AEC teams
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200/75">
            Modular building blocks you can adopt independently or as an end-to-end platform. Each comes with reference architectures, enablement, and measurable outcomes within weeks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map(({ title, description, icon: Icon, badge, highlights }) => (
            <article key={title} className="glass-panel-light group relative overflow-hidden border border-white/15 p-7 text-left">
              <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {badge}
              </span>
              <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-200/70">{description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-100/80">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-sky-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
