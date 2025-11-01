"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Gauge, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      layerRefs.current.forEach((layer) => {
        if (!layer) return;
        const speed = Number(layer.dataset.speed ?? "0.2");
        layer.style.transform = `translate3d(0, ${offset * speed}px, 0)`;
      });
    };

    const throttled = () => window.requestAnimationFrame(handleScroll);
    handleScroll();
    window.addEventListener("scroll", throttled, { passive: true });
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  const setLayerRef = (index: number) => (node: HTMLDivElement | null) => {
    layerRefs.current[index] = node;
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-32 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div ref={setLayerRef(0)} data-speed="0.18" className="floating-shape absolute -left-24 -top-36 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div ref={setLayerRef(1)} data-speed="0.12" className="floating-shape absolute right-[-10rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/25 blur-[120px]" />
        <div ref={setLayerRef(2)} data-speed="0.22" className="floating-shape absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 text-center">
        <div className="glass-panel border border-white/10 px-8 py-12 shadow-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-blue-100">
            <Sparkles className="h-4 w-4" /> AI-Driven SME Solutions
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Crafted strategies and solutions for bold, data-led teams.
          </h1>
          <p className="mt-6 text-lg text-slate-200/80 md:text-xl">
            We provide intelligent automation and conversational agentic solutions to supercharge workflows, reduce risk, and unlock new value across your organisation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:scale-[1.02] hover:shadow-indigo-500/40"
            >
              Get a proposal
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-base font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Read case studies
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="glass-panel-light border border-white/20 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
              <Gauge className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">AI-powered Automation</h3>
            <p className="mt-2 text-sm text-slate-200/70">Automations that remove repetitive design handoffs and accelerate delivery pipelines.</p>
          </div>
          <div className="glass-panel-light border border-white/20 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">Conversational Agents</h3>
            <p className="mt-2 text-sm text-slate-200/70">Assistive copilots and workflows that amplify expert decision making across teams.</p>
          </div>
          <div className="glass-panel-light border border-white/20 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">Risk Mitigation</h3>
            <p className="mt-2 text-sm text-slate-200/70">Solutions that reduce risk and ensure compliance in complex workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
