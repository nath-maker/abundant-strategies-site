import Link from "next/link";

export const metadata = {
  title: "L'atelier: AI HR Team | Abundant Strategies",
  description: "Six AI agents that work together like a senior HR leadership team. Strategic guidance for complex HR challenges.",
};

const agents = [
  {
    name: "NATH",
    role: "CHRO & Orchestrator",
    description: "Strategic leader, ethical compass, final synthesizer. Sets direction and integrates perspectives.",
    color: "bg-[--ink]",
  },
  {
    name: "LEX",
    role: "Employment Law",
    description: "Legal expertise. Termination, FMLA, ADA, discrimination, documentation.",
    color: "bg-emerald-600",
  },
  {
    name: "TALOS",
    role: "Talent Acquisition",
    description: "Recruiting expert. Job design, interviewing, offers, onboarding.",
    color: "bg-blue-600",
  },
  {
    name: "LADY A",
    role: "Organizational Development",
    description: "Culture, team dynamics, change management. Asks 'who is this serving?'",
    color: "bg-purple-600",
  },
  {
    name: "CADENCE",
    role: "Performance Management",
    description: "Performance conversations, feedback, PIPs, goals. Coaches on difficult conversations.",
    color: "bg-amber-600",
  },
  {
    name: "HR OPS",
    role: "Process & Compliance",
    description: "Policies, procedures, documentation workflows. Keeps things running.",
    color: "bg-slate-600",
  },
];

export default function Latelier() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest text-[--mist] uppercase mb-6">
            L&apos;atelier
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[--ink] mb-8">
            Your AI HR team.
            <span className="block mt-2 text-[--slate]">Ready to think with you.</span>
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl">
            Six specialized AI agents that collaborate like a senior HR
            leadership team. Strategic guidance for complex challenges,
            with equity and ethics built in.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-[--ink] mb-8">
            The problem we solve.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[--slate] leading-relaxed">
                HR teams of 1-3 people drowning in operations with no time for strategy.
              </p>
            </div>
            <div>
              <p className="text-[--slate] leading-relaxed">
                Leaders making HR decisions without the expertise to avoid landmines.
              </p>
            </div>
            <div>
              <p className="text-[--slate] leading-relaxed">
                Companies scaling fast with no HR leadership bench to draw from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Agents */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            The Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.name} className="p-6 border border-[--cloud]">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${agent.color}`}></div>
                  <h3 className="text-lg font-medium text-[--ink]">{agent.name}</h3>
                </div>
                <p className="text-sm text-[--mist] mb-3">{agent.role}</p>
                <p className="text-sm text-[--stone] leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 bg-[--paper]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-light text-[--mist] mb-4">01</div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Describe your situation
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                Tell us what you&apos;re dealing with. Performance issue?
                Termination question? Team conflict? Org design challenge?
              </p>
            </div>
            <div>
              <div className="text-4xl font-light text-[--mist] mb-4">02</div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Agents collaborate
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                Multiple agents engage with your question from their areas
                of expertise. They see each other&apos;s perspectives and build
                on them.
              </p>
            </div>
            <div>
              <div className="text-4xl font-light text-[--mist] mb-4">03</div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Integrated guidance
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                NATH synthesizes the perspectives into actionable guidance.
                You see the thinking, not just the conclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-[--ink] mb-12">
            What makes this different.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                It&apos;s a team, not a chatbot
              </h3>
              <p className="text-[--stone] leading-relaxed">
                Six specialized agents that actually collaborate. Different
                perspectives surface naturally because they have different expertise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Strategy, not transactions
              </h3>
              <p className="text-[--stone] leading-relaxed">
                Built for complex questions that require thinking, not
                simple lookups. The kind of problems you&apos;d bring to a
                senior HR leader.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Ethics are architectural
              </h3>
              <p className="text-[--stone] leading-relaxed">
                Every agent is prompted to notice when recommendations might
                disproportionately impact certain groups. Bias awareness is
                built in, not bolted on.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[--ink] mb-3">
                Built by an HR leader
              </h3>
              <p className="text-[--stone] leading-relaxed">
                Not built by engineers guessing what HR needs. Built by
                someone who developed leaders at Meta, Google, and Shell
                for 15 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[--ink] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Interested in early access?
          </h2>
          <p className="text-white/70 mb-10">
            L&apos;atelier is currently in limited availability.
            Reach out to learn more about how it might fit your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[--ink] text-sm tracking-wide hover:bg-[--cloud] transition-colors"
          >
            Request Access
          </Link>
        </div>
      </section>
    </div>
  );
}
