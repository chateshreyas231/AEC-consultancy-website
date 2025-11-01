import { team } from "../../data/site";

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.14),transparent_60%)] bg-fixed" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-rose-200/80">team</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Leaders wired for AI-first delivery</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200/70">
            Hands-on practitioners who understand capital delivery constraints, enterprise architecture, and the human side of change.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map(({ initials, name, role, bio, tags }) => (
            <article key={name} className="glass-panel-light border border-white/15 p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-sky-500/30 to-indigo-500/20 text-2xl font-semibold text-white">
                {initials}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{name}</h3>
              <p className="text-sm font-medium text-slate-200/70">{role}</p>
              <p className="mt-3 text-sm text-slate-200/70">{bio}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-100/75">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
