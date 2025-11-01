import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_60%)] bg-fixed" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="glass-panel border border-white/15 p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-rose-200/80">engage</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Ready to explore your roadmap?</h2>
          <p className="mt-4 text-sm text-slate-200/75">
            Tell us about your challenges and we will curate a working session with the right specialists across delivery, data, and change.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-100/80">
            <li>Assessment of current tooling and data architecture.</li>
            <li>Prioritised roadmap with ROI guardrails and delivery options.</li>
            <li>Access to our accelerator library and enablement catalogue.</li>
          </ul>
        </div>
        <div className="glass-panel border border-white/15 p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
