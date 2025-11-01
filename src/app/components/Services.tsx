import React from "react";
import {
  Bot,
  Building2,
  Check,
  Cpu,
  Database,
  Workflow,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "BIM & digital twins",
    description: "Model coordination, clash detection, and digital twin visualisations for project clarity.",
    icon: Building2,
    accent: "from-sky-500/40 to-indigo-500/30",
    deliverables: ["BIM enablement & governance", "Discipline coordination workflows", "Interactive 3D dashboards"],
  },
  {
    title: "AI strategy & prototyping",
    description: "Roadmaps, experiments, and pilots that prove value fast without risking delivery.",
    icon: Bot,
    accent: "from-purple-500/40 to-blue-500/30",
    deliverables: ["Vision workshops", "Executive buy-in decks", "Pilot AI copilots"],
  },
  {
    title: "Computer vision & reality capture",
    description: "Automated quality inspections, safety surveillance, and material tracking.",
    icon: Cpu,
    accent: "from-cyan-500/40 to-sky-500/30",
    deliverables: ["On-site image pipelines", "Deviation detection models", "Progress analytics"],
  },
  {
    title: "Data engineering & warehousing",
    description: "Unified data estates powering analytics, ML, and executive reporting.",
    icon: Database,
    accent: "from-emerald-500/40 to-teal-500/30",
    deliverables: ["Modern data stack", "Metadata & governance", "Self-serve reporting"],
  },
  {
    title: "Operational automation",
    description: "Workflow orchestration and custom tools that remove manual effort.",
    icon: Workflow,
    accent: "from-amber-500/40 to-orange-500/30",
    deliverables: ["API-first integrations", "Design automation", "Digital handoffs"],
  },
  {
    title: "MLOps & platform engineering",
    description: "Reliable deployment, monitoring, and lifecycle management for AI products.",
    icon: Wrench,
    accent: "from-rose-500/40 to-fuchsia-500/30",
    deliverables: ["Model CI/CD", "Observability & drift tracking", "Reusable accelerators"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_60%)] bg-fixed" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-indigo-200/80">services</span>
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            End-to-end capability to modernise complex AEC programmes
          </h2>
          <p className="max-w-3xl text-base text-slate-200/75">
            We combine technical depth with delivery pragmatism: discovery, delivery, and enablement teams designing AI-first workflows that slot into your operating model.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, deliverables, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-7 shadow-xl backdrop-blur"
            >
              <div className={`absolute inset-0 -z-10 bg-linear-to-br ${accent} opacity-0 transition group-hover:opacity-100`} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-200/75">{description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-100/80">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-sky-200" />
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
