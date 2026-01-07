import Link from "next/link";

export const metadata = {
  title: "About | Abundant Strategies",
  description: "Nathalie Salles: 15+ years developing tech leaders, now building AI systems and completing a PhD on AI, gender equity, and performance management.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[--ink] mb-8">
            Paris to San Francisco.
            <span className="block mt-2 text-[--slate]">Strategy to systems.</span>
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-[--paper] flex items-center justify-center sticky top-24">
                <span className="text-sm text-[--mist]">Photo</span>
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-2 space-y-6 text-[--slate] leading-relaxed">
              <p>
                I spent 15 years developing tech leaders at the highest levels.
                Meta during the scale from 30,000 to 75,000 employees. Google.
                Shell during a $1.5 billion platform turnaround. NASA.
              </p>
              <p>
                I built the largest internal coaching practice in the world.
                3,300+ engagements per year. Coached AI researchers, Chiefs of Staff,
                VPs. Created frameworks that others now use.
              </p>
              <p>
                Then I started building AI myself.
              </p>
              <p>
                Not because I became technical—I&apos;ve never written a line of code.
                But because I understood that the questions leaders are asking about AI
                aren&apos;t really about technology. They&apos;re about people. Power.
                Who gets helped and who gets hurt.
              </p>
              <p>
                Now I build AI systems. 65+ agents. A production HR platform.
                Research pipelines processing 800+ academic papers.
                And I&apos;m finishing a PhD on AI, gender equity, and performance
                management—because no one else is asking these questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Credentials */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Background
          </h2>

          <div className="space-y-12">
            {/* Experience */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-[--ink] mb-4">Leadership Development</h3>
                <ul className="space-y-2 text-[--stone] text-sm">
                  <li>Director, Meta (IC8 — highest IC level)</li>
                  <li>5,000+ coaching engagements</li>
                  <li>Harvard keynote speaker</li>
                  <li>Created GROW-Plus and Team Healthy Together frameworks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[--ink] mb-4">AI Building</h3>
                <ul className="space-y-2 text-[--stone] text-sm">
                  <li>65+ AI agents built</li>
                  <li>L&apos;atelier: Production AI HR platform</li>
                  <li>ATHENA: Research pipeline (864+ papers)</li>
                  <li>Custom MCP servers and multi-agent systems</li>
                </ul>
              </div>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-lg font-medium text-[--ink] mb-4">Research</h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                PhD candidate studying AI, gender equity, and performance management.
                Original methodology: AI-Assisted Archaeological Analysis.
                Finding: Zero academic papers examine AI-PM through a gender lens.
                That&apos;s the gap I&apos;m filling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-24 bg-[--paper]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-[--ink] mb-12">
            What I believe.
          </h2>

          <div className="space-y-8 text-[--slate] leading-relaxed">
            <div className="border-l-2 border-[--mist] pl-6">
              <p>
                The best questions aren&apos;t technical. They&apos;re human.
              </p>
            </div>

            <div className="border-l-2 border-[--mist] pl-6">
              <p>
                AI should help humans grow, not replace them.
              </p>
            </div>

            <div className="border-l-2 border-[--mist] pl-6">
              <p>
                Honesty matters more than comfort.
              </p>
            </div>

            <div className="border-l-2 border-[--mist] pl-6">
              <p>
                If I can build this without writing code, you can too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-[--ink] mb-6">
            Interested in working together?
          </h2>
          <p className="text-[--stone] mb-10">
            Let&apos;s have a conversation about what you&apos;re facing.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[--ink] text-white text-sm tracking-wide hover:bg-[--slate] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
