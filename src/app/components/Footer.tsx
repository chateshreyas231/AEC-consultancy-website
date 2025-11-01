import { Building2 } from "lucide-react";

export const Footer = () => {
    return(
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
    );
}