import {
	ArrowUpRight,
	Building2,
	Cpu,
	Layers,
	LineChart,
	ShieldCheck,
	Sparkles,
	Workflow,
} from "lucide-react";
import Hero from "./components/Hero";
import ClientCarousel from "./components/ClientCarousel";
import Services from "./components/Services";
import Chatbot from "./components/Chatbot";
import ContactForm from "./components/ContactForm";
import {
	industries,
	techHighlights,
	aboutMetrics,
	team,
	testimonials,
	projects,
	resources,
} from "../data/site";

const solutions = [
	{
		title: "Project Delivery OS",
		description:
			"A unified workspace that automates schedules, risk surfacing, and progress communications for capital programmes.",
		icon: Workflow,
		badge: "Automation",
		highlights: [
			"AI lookahead planning and resource balancing",
			"Executive wallboards with live KPIs and narratives",
		],
	},
	{
		title: "Intelligent Asset Ops",
		description:
			"Digital twins and telemetry-driven monitoring to keep high-value assets observable and predictable.",
		icon: Layers,
		badge: "Digital twin",
		highlights: [
			"Model sync with Autodesk Construction Cloud and Revit",
			"Sensor fusion dashboards with anomaly alerting",
		],
	},
	{
		title: "AI Copilots for Design & Field",
		description:
			"Assistive copilots that draft, summarise, and triage work for designers, estimators, and field teams.",
		icon: Cpu,
		badge: "AI copilots",
		highlights: [
			"Natural-language RFI routing and synthesis",
			"Generative concept exploration and design automation",
		],
	},
	{
		title: "Governed Data Platform",
		description:
			"A secure data estate spanning project, financial, and operational sources with governance baked in.",
		icon: ShieldCheck,
		badge: "Data trust",
		highlights: [
			"Curated data products with lineage and stewardship",
			"Policy-based access, audit trails, and compliance packs",
		],
	},
];


export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden text-slate-100">
			<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
					<a href="#" className="flex items-center gap-2 text-white">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-200">
							<Building2 className="h-5 w-5" />
						</div>
						<span className="text-base font-semibold tracking-wide">AEC Consultancy</span>
					</a>
					<div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
						<a href="#services" className="transition hover:text-white">Services</a>
						<a href="#solutions" className="transition hover:text-white">Solutions</a>
						<a href="#about" className="transition hover:text-white">About</a>
						<a href="#resources" className="transition hover:text-white">Resources</a>
						<a href="#case-studies" className="transition hover:text-white">Case studies</a>
					</div>
					<a
						href="#contact"
						className="hidden rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:shadow-indigo-500/40 md:inline-flex"
					>
						Let&apos;s talk
					</a>
				</div>
			</nav>

			<main className="relative">
				<div className="pt-16">
					<Hero />
				</div>

				<ClientCarousel />

				<Services />

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

				<section id="chatbot" className="relative pb-24">
					<div className="mx-auto max-w-6xl px-6">
						<div className="glass-panel border border-white/15 p-8">
							<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
								<div>
									<span className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/80">assistant</span>
									<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Try the delivery copilot</h2>
									<p className="mt-3 max-w-xl text-sm text-slate-200/75">
										Ask questions about our capabilities, discuss integration scenarios, or simulate stakeholder updates with the embedded chatbot.
									</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-black/40 p-4 lg:min-w-[320px]">
									<Chatbot />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-white/10 bg-black/60 py-10 text-sm text-slate-200/60 backdrop-blur">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div className="flex items-center gap-2 text-white/80">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-200">
								<Building2 className="h-4.5 w-4.5" />
							</div>
							<span className="text-sm font-semibold tracking-wide">AEC Consultancy</span>
						</div>
						<p className="mt-3 max-w-sm text-xs text-slate-200/70">
							Specialists in data, automation, and AI for built environment leaders. We help teams ship outcomes faster while building lasting capability.
						</p>
					</div>
					<div className="flex flex-wrap gap-4 text-xs text-slate-200/70">
						<a href="#services" className="transition hover:text-white/90">Services</a>
						<a href="#solutions" className="transition hover:text-white/90">Solutions</a>
						<a href="#case-studies" className="transition hover:text-white/90">Case studies</a>
						<a href="#resources" className="transition hover:text-white/90">Resources</a>
						<a href="#contact" className="transition hover:text-white/90">Contact</a>
					</div>
				</div>
			</footer>

			<div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.16),transparent_55%)] opacity-70" />
			<div className="pointer-events-none fixed inset-0 -z-30 bg-slate-950" />
			</div>
		);
		}

