import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-32 md:py-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[--ink] mb-8 leading-[1.15]">
            The leadership questions you&apos;re avoiding about AI aren&apos;t technical.
            <span className="block mt-2 text-[--slate]">They&apos;re human.</span>
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl mb-12">
            I help executives and organizations navigate AI transformation
            by focusing on what the tools can&apos;t solve: leadership, ethics,
            and the human systems underneath the technical problems.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block px-8 py-4 bg-[--ink] text-white text-sm tracking-wide hover:bg-[--slate] transition-colors"
          >
            How I Can Help
          </Link>
        </div>
      </section>

      {/* The Difference */}
      <section className="px-6 py-24 bg-[--cloud]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-[--ink] mb-6">
                I don&apos;t hand you answers.
              </h2>
              <p className="text-[--slate] leading-relaxed mb-6">
                I help you find better questions. When everyone&apos;s asking
                &ldquo;which AI tool?&rdquo; I ask &ldquo;why are 75% of your
                employees using AI secretly?&rdquo;
              </p>
              <p className="text-[--slate] leading-relaxed">
                15 years developing leaders at Meta, Google, and Shell.
                Now building AI systems myself. The combination gives me
                a perspective most consultants can&apos;t offer.
              </p>
            </div>
            {/* Image placeholder */}
            <div className="aspect-[4/5] bg-[--paper] flex items-center justify-center">
              <span className="text-sm text-[--mist]">Photo placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Where to start
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/work-with-me" className="group block p-8 border border-[--cloud] hover:border-[--ink] transition-colors">
              <h3 className="text-xl font-medium text-[--ink] mb-3 group-hover:text-[--slate] transition-colors">
                Work Together
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                Executive coaching, AI strategy, and custom builds
              </p>
            </Link>

            <Link href="/latelier" className="group block p-8 border border-[--cloud] hover:border-[--ink] transition-colors">
              <h3 className="text-xl font-medium text-[--ink] mb-3 group-hover:text-[--slate] transition-colors">
                L&apos;atelier
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                AI HR team — six agents working together on your challenges
              </p>
            </Link>

            <Link href="/about" className="group block p-8 border border-[--cloud] hover:border-[--ink] transition-colors">
              <h3 className="text-xl font-medium text-[--ink] mb-3 group-hover:text-[--slate] transition-colors">
                About Nathalie
              </h3>
              <p className="text-[--stone] text-sm leading-relaxed">
                Paris to SF, Meta to builder, strategy to systems
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Single Quote */}
      <section className="px-6 py-24 bg-[--paper]">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-[--ink] leading-relaxed mb-8">
            &ldquo;If you are looking for an executive leader who has deep coaching
            intuition and the ability to lead change in the midst of complexity,
            Nathalie is the best I have ever seen.&rdquo;
          </blockquote>
          <cite className="text-[--stone] not-italic">
            Twanya Hood Hill, MBA — Fractional CHRO
          </cite>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="text-sm text-[--ink] border-b border-[--ink] hover:text-[--slate] hover:border-[--slate] transition-colors"
            >
              Read more testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest text-[--mist] uppercase text-center mb-8">
            Leaders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-[--stone]">
            <span className="text-lg font-light">Meta</span>
            <span className="text-lg font-light">Google</span>
            <span className="text-lg font-light">Shell</span>
            <span className="text-lg font-light">NASA</span>
            <span className="text-lg font-light">LinkedIn</span>
            <span className="text-lg font-light">OpenAI</span>
            <span className="text-lg font-light">Harvard</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[--ink] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Let&apos;s start with a conversation.
          </h2>
          <p className="text-white/70 mb-10">
            No pitch. No pressure. Just an honest discussion about
            what you&apos;re facing and whether I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[--ink] text-sm tracking-wide hover:bg-[--cloud] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[--cloud]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[--mist]">
            © 2025 Abundant Strategies
          </p>
          <div className="flex gap-8 text-sm text-[--stone]">
            <Link href="/about" className="hover:text-[--ink] transition-colors">About</Link>
            <Link href="/work-with-me" className="hover:text-[--ink] transition-colors">Work With Me</Link>
            <Link href="/latelier" className="hover:text-[--ink] transition-colors">L&apos;atelier</Link>
            <Link href="/contact" className="hover:text-[--ink] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
