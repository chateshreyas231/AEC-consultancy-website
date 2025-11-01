import Chatbot from "./Chatbot";

export default function ChatbotSection() {
  return (
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
  );
}
