import { ArrowUpRight } from "lucide-react";
import { resources } from "../../data/site";

export default function ResourcesSection() {
  return (
    <section id="resources" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_65%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-200/80">resources</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Insights to accelerate your next decision</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map(({ title, description, tag }) => (
            <a
              key={title}
              href="#contact"
              className="group glass-panel-light block border border-white/15 p-6 transition hover:border-white/30"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                {tag}
                <ArrowUpRight className="h-3.5 w-3.5 text-sky-200 transition group-hover:-translate-y-px group-hover:translate-x-px" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-200/70">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
