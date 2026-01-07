import Link from "next/link";

export const metadata = {
  title: "Work With Me | Abundant Strategies",
  description: "Executive coaching, AI strategy advisory, and custom AI system development for leaders navigating the AI transformation.",
};

export default function WorkWithMe() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[--ink] mb-8">
            Let&apos;s figure out what you actually need.
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl">
            Every engagement starts with understanding your situation.
            Not a sales pitch. A conversation about what&apos;s really going on.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">

            {/* Service 1: Executive Coaching */}
            <div className="space-y-6">
              <div className="w-12 h-px bg-[--ink]"></div>
              <h2 className="text-2xl font-medium text-[--ink]">
                Executive Coaching
              </h2>
              <p className="text-[--slate] leading-relaxed">
                For leaders who need to own the AI conversation in their organizations—not
                delegate it. We work on the human questions that technical solutions can&apos;t answer.
              </p>
              <ul className="space-y-3 text-[--stone]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Building AI fluency without becoming technical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Leading teams through AI-driven change</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Making decisions you can defend</span>
                </li>
              </ul>
              <p className="text-sm text-[--mist] pt-4">
                Typically 3-12 month engagements
              </p>
            </div>

            {/* Service 2: AI Strategy Advisory */}
            <div className="space-y-6">
              <div className="w-12 h-px bg-[--ink]"></div>
              <h2 className="text-2xl font-medium text-[--ink]">
                AI Strategy Advisory
              </h2>
              <p className="text-[--slate] leading-relaxed">
                For organizations figuring out how AI fits into what they already do well.
                Strategy that connects to execution, not slide decks that collect dust.
              </p>
              <ul className="space-y-3 text-[--stone]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>AI readiness and adoption roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Vendor evaluation (cutting through the noise)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Human-AI collaboration design</span>
                </li>
              </ul>
              <p className="text-sm text-[--mist] pt-4">
                Project-based or ongoing advisory
              </p>
            </div>

            {/* Service 3: Custom AI Systems */}
            <div className="space-y-6">
              <div className="w-12 h-px bg-[--ink]"></div>
              <h2 className="text-2xl font-medium text-[--ink]">
                Custom AI Systems
              </h2>
              <p className="text-[--slate] leading-relaxed">
                I build AI systems. Not concepts—working tools. If you need something
                that doesn&apos;t exist yet, we can probably create it together.
              </p>
              <ul className="space-y-3 text-[--stone]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Multi-agent AI systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Domain-specific AI tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Research and analysis pipelines</span>
                </li>
              </ul>
              <p className="text-sm text-[--mist] pt-4">
                Scoped per project
              </p>
            </div>

            {/* Service 4: L'atelier */}
            <div className="space-y-6">
              <div className="w-12 h-px bg-[--ink]"></div>
              <h2 className="text-2xl font-medium text-[--ink]">
                L&apos;atelier: AI HR Team
              </h2>
              <p className="text-[--slate] leading-relaxed">
                Six AI agents that work together like a senior HR leadership team.
                Strategic guidance for complex HR challenges, available when you need it.
              </p>
              <ul className="space-y-3 text-[--stone]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Expert guidance across HR domains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Built-in equity and bias awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--slate] mt-2 flex-shrink-0"></span>
                  <span>Collaborative multi-agent architecture</span>
                </li>
              </ul>
              <Link
                href="/latelier"
                className="inline-block text-sm text-[--ink] border-b border-[--ink] hover:text-[--slate] hover:border-[--slate] transition-colors pt-4"
              >
                Learn more about L&apos;atelier →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-[--ink] mb-12">
            How I work
          </h2>
          <div className="space-y-8 text-[--slate] leading-relaxed">
            <p>
              I don&apos;t hand you answers. I help you find better questions.
            </p>
            <p>
              Most consultants come in with a framework they&apos;re going to apply
              regardless of what they find. I come in curious. What&apos;s actually
              happening here? What have you already tried? What are you afraid to say out loud?
            </p>
            <p>
              Then we work on it together. I&apos;ll push you when you need pushing.
              I&apos;ll tell you when I think you&apos;re wrong. And I&apos;ll celebrate
              with you when something finally clicks.
            </p>
          </div>
        </div>
      </section>

      {/* What I Won't Do */}
      <section className="px-6 py-16 bg-[--paper]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-[--ink] mb-8">
            What I won&apos;t do
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-[--stone]">
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Promise results I can&apos;t deliver</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Sell you tools that don&apos;t work</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Position AI as a replacement for humans</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Use manipulative sales tactics</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Pretend to be an &quot;AI expert&quot;</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--mist]">×</span>
              <span>Give you answers without understanding first</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-[--ink] mb-6">
            Let&apos;s start with a conversation.
          </h2>
          <p className="text-[--stone] mb-10">
            No pitch deck. No pressure. Just an honest discussion about
            what you&apos;re dealing with and whether I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[--ink] text-white text-sm tracking-wide hover:bg-[--slate] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
