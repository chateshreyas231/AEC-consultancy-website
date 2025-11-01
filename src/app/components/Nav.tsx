import { Building2 } from "lucide-react";

export default function Nav() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <a href="#" className="flex items-center gap-2 text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-200">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <span className="text-base font-semibold tracking-wide">Microlith AI</span>
                    </a>
                    <div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
                        <a href="#services" className="transition hover:text-white">Services</a>
                        <a href="#industries" className="transition hover:text-white">Industries</a>
                        <a href="#about" className="transition hover:text-white">About</a>
                        <a href="#case-studies" className="transition hover:text-white">Case studies</a>
                        <a href="#resources" className="transition hover:text-white">Resources</a>
                    </div>
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:shadow-indigo-500/40 md:inline-flex"
                    >
                        Let's talk
                    </a>
                </div>
            </nav>
    );
}