import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nathalie Salles-Olivier",
  description: "From Paris to Silicon Valley. 15+ years advising CEOs and C-suite leaders at Meta, Google, Shell, NASA. Now building AI systems. Harvard keynote speaker. PhD researcher.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-cloud">
            About
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            I see the human system underneath the technical problem.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl space-y-8 text-slate">
          <p className="text-lg leading-relaxed">
            When everyone asks "which AI tool should we use?" I ask "why are 75% of your employees using AI secretly?"
          </p>
          <p className="leading-relaxed">
            That's the question most consultants miss. They see a technology adoption problem. I see a trust problem, a culture problem, a leadership problem wearing a technical mask.
          </p>
          <p className="leading-relaxed">
            I've spent 15+ years helping leaders see what's really going on — at Shell during $1.5B turnarounds, at Meta scaling from 30,000 to 71,000 employees, with CEOs at EnPro, with Chief Security Officers and Chief AI Officers across industries.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            The Journey
          </h2>
          
          <div className="mt-12 space-y-12">
            <div className="border-l-2 border-border pl-8">
              <p className="font-display text-lg font-semibold text-ink">Paris → San Francisco</p>
              <p className="mt-2 text-slate">
                I grew up in France with a systems-thinking perspective that questions American tech optimism. I've lived in San Francisco long enough to understand Silicon Valley — and far enough from the hype to see through it.
              </p>
            </div>

            <div className="border-l-2 border-border pl-8">
              <p className="font-display text-lg font-semibold text-ink">5,000+ Executive Engagements</p>
              <p className="mt-2 text-slate">
                At Meta, I built what became the largest internal coaching practice in the world — over 3,300 engagements annually. I took their coaching satisfaction from 7 to 9.2. I went from Director to VP.
              </p>
            </div>

            <div className="border-l-2 border-border pl-8">
              <p className="font-display text-lg font-semibold text-ink">Harvard Keynotes</p>
              <p className="mt-2 text-slate">
                I've keynoted at Harvard on adult development and the future of executive coaching. Not because I have all the answers — because I'm asking better questions about how leaders grow.
              </p>
            </div>

            <div className="border-l-2 border-border pl-8">
              <p className="font-display text-lg font-semibold text-ink">Now: Builder</p>
              <p className="mt-2 text-slate">
                I've never written a line of code. Not one. But I build production AI systems — research pipelines, multi-agent teams, custom tools. If I can build this, you can learn to lead this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            What I Believe
          </h2>
          
          <div className="mt-10 space-y-6 text-slate">
            <p className="leading-relaxed">
              <strong className="text-ink">AI amplifies what's already there.</strong> If your culture has trust problems, AI will surface them faster. If your leadership has blind spots, AI will expose them.
            </p>
            <p className="leading-relaxed">
              <strong className="text-ink">The human questions come first.</strong> Before "which model?" comes "what are we actually trying to solve?" Before "how fast?" comes "what are we willing to break?"
            </p>
            <p className="leading-relaxed">
              <strong className="text-ink">Honesty, even when it's uncomfortable.</strong> I don't tell leaders what they want to hear. I help them see what they need to see. That's not always comfortable — but it's always useful.
            </p>
            <p className="leading-relaxed">
              <strong className="text-ink">Building beats theorizing.</strong> Most consultants hand you PowerPoints. I build working systems. There's no substitute for making something real.
            </p>
          </div>
        </div>
      </section>

      {/* The Research */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            Current Research
          </h2>
          
          <div className="mt-8 space-y-6 text-slate">
            <p className="text-lg leading-relaxed text-ink">
              I'm completing a PhD studying how AI systems affect career advancement — specifically whether they help or hurt.
            </p>
            <p className="leading-relaxed">
              91% of HR professionals expect AI to transform their departments. But there's almost no research on whether these systems perpetuate bias or promote equity. That's the gap I'm addressing.
            </p>
            <p className="leading-relaxed">
              I've built a custom research pipeline that's analyzed 864+ academic papers — because I don't just study AI. I use AI to study AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-whisper px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Want to work together?
          </h2>
          <p className="mt-6 text-slate">
            I work with leaders who are ready to think differently about AI — not just adopt it, but lead through it.
          </p>
          <a
            href="/#contact"
            className="mt-10 inline-block bg-ink px-8 py-4 font-display text-sm font-medium tracking-wide text-background transition-colors hover:bg-stone"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
