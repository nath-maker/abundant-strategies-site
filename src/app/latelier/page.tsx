import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'atelier | AI HR Team",
  description: "Six specialized AI agents that collaborate like a senior HR leadership team. Strategic HR guidance with ethics built into the architecture.",
};

export default function LAtelier() {
  const agents = [
    {
      name: "NATH",
      role: "CHRO & Orchestrator",
      description: "Strategic leader and ethical compass. Synthesizes perspectives from all agents into actionable guidance.",
      color: "bg-ink",
    },
    {
      name: "LEX",
      role: "Employment Law",
      description: "Legal expertise on termination, FMLA, ADA, discrimination, and documentation. Your compliance guardian.",
      color: "bg-stone",
    },
    {
      name: "TALOS",
      role: "Talent Acquisition", 
      description: "Recruiting expert covering job design, interviewing, offers, and onboarding strategy.",
      color: "bg-slate",
    },
    {
      name: "LADY A",
      role: "Organizational Development",
      description: "Culture, team dynamics, change management. Always asks: who is this structure serving?",
      color: "bg-mist",
    },
    {
      name: "CADENCE",
      role: "Performance Management",
      description: "Performance conversations, feedback, PIPs, goals. Coaches managers through difficult conversations.",
      color: "bg-fog",
    },
    {
      name: "HR OPS",
      role: "Process & Compliance",
      description: "Policies, procedures, documentation workflows. The operational backbone.",
      color: "bg-cloud",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-cloud">
            L'atelier
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            Your AI HR leadership team, ready to think with you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Not a chatbot. Not a search engine. Six specialized AI agents that collaborate like a senior HR team — bringing strategic expertise to your toughest people problems.
          </p>
        </div>
      </section>

      {/* Image Placeholder - Product Screenshot */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="aspect-video bg-whisper border border-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-sm uppercase tracking-widest text-cloud">[ Product Screenshot ]</p>
              <p className="mt-2 text-sm text-mist">L'atelier interface showing agent collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            The Problem
          </h2>
          <div className="mt-8 space-y-6 text-slate">
            <p className="text-xl leading-relaxed text-ink">
              You're an HR team of one — or three — drowning in operational demands while strategic questions pile up.
            </p>
            <p className="leading-relaxed">
              Should we restructure the performance review process? How do we handle this tricky termination? What's our approach to AI adoption policy? These questions deserve senior-level thinking. But who has time?
            </p>
            <p className="leading-relaxed">
              Most AI tools give you generic answers. L'atelier gives you a team.
            </p>
          </div>
        </div>
      </section>

      {/* The Agents */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            Six agents. Six perspectives. One collaborative synthesis.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div 
                key={agent.name}
                className="bg-background p-6 border border-border hover:border-slate transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${agent.color}`} />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {agent.name}
                  </h3>
                </div>
                <p className="mt-1 font-display text-xs uppercase tracking-wider text-cloud">
                  {agent.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            How It Works
          </h2>
          
          <div className="mt-12 space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-background flex items-center justify-center font-display text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">You bring a real problem</h3>
                <p className="mt-2 text-slate">
                  "We need to let go of someone on a PIP who's claiming discrimination." "Our org structure isn't serving the new strategy." "How do we roll out AI tools without creating fear?"
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-background flex items-center justify-center font-display text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">Agents self-organize around it</h3>
                <p className="mt-2 text-slate">
                  No fixed hierarchy. Lex surfaces legal considerations. Lady A thinks about culture implications. Cadence considers the performance angle. They see each other's contributions and build on them.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-background flex items-center justify-center font-display text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">Nath synthesizes</h3>
                <p className="mt-2 text-slate">
                  You see multiple perspectives, including disagreements — because real HR decisions involve tradeoffs. Nath brings it together into actionable guidance while surfacing what you need to decide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Ethics are architectural, not afterthought.
          </h2>
          
          <div className="mt-8 space-y-6 text-slate">
            <p className="leading-relaxed">
              L'atelier isn't just "avoid harm" — it's built to actively surface bias and promote equity.
            </p>
            <p className="leading-relaxed">
              Every agent is prompted to notice when recommendations might disproportionately impact certain groups. You'll see comments like: <em className="text-ink">"This approach might create disparate impact on X. Here's an alternative that achieves the same goal more equitably."</em>
            </p>
            <p className="leading-relaxed">
              Human-in-the-loop always. L'atelier advises. You decide.
            </p>
          </div>
        </div>
      </section>

      {/* Built By */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            Built By
          </h2>
          
          {/* Image Placeholder - Nathalie */}
          <div className="mt-8 flex gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 bg-whisper border border-border rounded-full flex items-center justify-center">
              <p className="font-display text-xs text-cloud">[ Photo ]</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink">
                L'atelier encodes 15+ years of HR leadership into AI architecture.
              </p>
              <p className="mt-4 text-slate">
                I've led HR at scale (Meta, 30K→71K employees), coached thousands of executives, and now I build AI systems. L'atelier isn't a generic chatbot trained on HR blogs — it's my thinking, my frameworks, my approach to people problems.
              </p>
              <p className="mt-4 font-display text-sm font-medium text-ink">
                — Nathalie Salles-Olivier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-background md:text-3xl">
            Ready to meet your AI HR team?
          </h2>
          <p className="mt-6 text-fog">
            L'atelier is currently in early access. Request a demo to see how six AI agents can transform your HR thinking.
          </p>
          <a
            href="mailto:hello@abundantstrategies.ai?subject=L'atelier Demo Request"
            className="mt-10 inline-block bg-background px-8 py-4 font-display text-sm font-medium tracking-wide text-ink transition-colors hover:bg-whisper"
          >
            Request Early Access
          </a>
        </div>
      </section>
    </div>
  );
}
