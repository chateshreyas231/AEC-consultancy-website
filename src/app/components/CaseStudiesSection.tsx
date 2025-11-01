import { LineChart } from "lucide-react";
import { projects } from "../../data/site";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.16),transparent_60%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-200/80">case studies</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Programmes transformed end-to-end</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-200/75">
            From rapid discovery to scaled roll-outs, our teams de-risk ambitious initiatives and leave clients with the playbooks to sustain momentum.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map(({ client, title, result }) => (
            <article key={client} className="glass-panel-light border border-white/15 p-6 text-left">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                <span>{client}</span>
                <LineChart className="h-4 w-4 text-emerald-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-200/75">{result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
