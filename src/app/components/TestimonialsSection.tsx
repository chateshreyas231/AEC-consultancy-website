import { testimonials } from "../../data/site";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_60%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-blue-200/80">testimonials</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Impact felt across the programme lifecycle</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <blockquote key={name} className="glass-panel-light border border-white/15 p-6">
              <p className="text-sm text-slate-100/85">&quot;{quote}&quot;</p>
              <footer className="mt-5 text-sm font-semibold text-white">{name}</footer>
              <div className="text-xs text-slate-200/70">{role}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
