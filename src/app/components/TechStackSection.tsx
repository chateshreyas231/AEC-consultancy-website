import { techHighlights } from "../../data/site";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_65%)] bg-fixed" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-purple-200/80">tech stack</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A composable foundation for data and AI delivery</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-200/70">
            Opinionated selections and accelerators help your teams move fast while remaining secure, governable, and ready for enterprise scale.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {techHighlights.map(({ title, points }) => (
              <div key={title} className="glass-panel-light border border-white/15 p-5 text-left">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-200/70">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel border border-white/15 p-8">
          <h3 className="text-lg font-semibold text-white">Stack spotlight</h3>
          <p className="mt-3 text-sm text-slate-200/75">
            Integration blueprints and infrastructure as code pack quick-start patterns for your cloud of choice, reducing friction between IT, delivery, and operations teams.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-100/80">
            <li>Reusable connectors for Autodesk Construction Cloud, Procore, Primavera, and ERP platforms.</li>
            <li>Governed data product templates with lineage, quality checks, and observability baked in.</li>
            <li>Secure landing zones with environment parity, automated compliance evidence, and access controls.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
