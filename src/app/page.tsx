import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
            The leadership questions you're avoiding about AI aren't technical — they're human.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            CEOs, VPs, and C-suite leaders at Meta, Google, Shell, and NASA have trusted me for 15+ years. I've led organizational transformations, keynoted at Harvard, and now I build AI systems too.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b-2 border-ink pb-1 font-display text-sm font-medium tracking-wide text-ink transition-colors hover:border-slate hover:text-slate"
          >
            Let's Explore What's Possible
          </Link>

          {/* Logo Bar */}
          <p className="mt-8 font-display text-xs font-medium uppercase tracking-widest text-cloud">
            Trusted by leaders at Shell • Meta • Google • NASA • EnPro • Harvard
          </p>
        </div>
      </section>

      {/* Image Break - Nature/Life */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="aspect-[3/1] bg-gradient-to-r from-whisper via-background to-whisper border border-border/50 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <p className="font-display text-xs uppercase tracking-widest text-cloud">[ Hero Image ]</p>
              <p className="mt-2 text-sm text-mist">Nature, texture, warmth — not corporate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            Who I Work With
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group space-y-4 p-6 bg-background border border-transparent hover:border-border transition-all">
              <h3 className="font-display text-xl font-semibold text-ink">
                CEOs & C-Suite Leaders
              </h3>
              <p className="text-sm font-medium italic text-stone">
                "You're in rooms where AI comes up and you can't lead the conversation."
              </p>
              <p className="text-sm leading-relaxed text-slate">
                You've built your career on strategic excellence. But the AI conversation has shifted to something you didn't train for: culture, ethics, organizational change. You need a thought partner who's advised CEOs through harder pivots — from $1.5B turnarounds to scaling from 30K to 71K employees.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group space-y-4 p-6 bg-background border border-transparent hover:border-border transition-all">
              <h3 className="font-display text-xl font-semibold text-ink">
                Organizations in Transformation
              </h3>
              <p className="text-sm font-medium italic text-stone">
                "75% of your employees are using AI secretly. You don't know how."
              </p>
              <p className="text-sm leading-relaxed text-slate">
                The adoption is already happening. The question isn't whether to embrace AI — it's whether you'll shape how it integrates with your culture, or let it happen to you. I've led this at scale: overhauled Meta's coaching practice during hypergrowth (30K→71K employees).
              </p>
            </div>

            {/* Card 3 */}
            <div className="group space-y-4 p-6 bg-background border border-transparent hover:border-border transition-all">
              <h3 className="font-display text-xl font-semibold text-ink">
                Leaders Building What's Next
              </h3>
              <p className="text-sm font-medium italic text-stone">
                "You need someone who builds, not just advises."
              </p>
              <p className="text-sm leading-relaxed text-slate">
                Most consultants hand you PowerPoints. I build production AI systems — research pipelines, multi-agent teams, custom tools. If you're ready to stop theorizing and start building, let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Proof */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist">
            The Proof
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group">
              <p className="font-display text-3xl font-semibold text-ink group-hover:text-stone transition-colors">5,000+</p>
              <p className="mt-2 text-sm text-slate">CEO, VP & C-suite engagements across 15 years</p>
            </div>
            <div className="group">
              <p className="font-display text-3xl font-semibold text-ink group-hover:text-stone transition-colors">7→9.2</p>
              <p className="mt-2 text-sm text-slate">Overhauled Meta's coaching practice satisfaction</p>
            </div>
            <div className="group">
              <p className="font-display text-3xl font-semibold text-ink group-hover:text-stone transition-colors">Builder</p>
              <p className="mt-2 text-sm text-slate">Production AI systems — pipelines to multi-agent teams</p>
            </div>
            <div className="group">
              <p className="font-display text-3xl font-semibold text-ink group-hover:text-stone transition-colors">Harvard</p>
              <p className="mt-2 text-sm text-slate">Keynotes on Adult Development & Future of Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break - Hands/Detail */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-whisper border border-border/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-xs uppercase tracking-widest text-cloud">[ Photo ]</p>
                <p className="mt-1 text-xs text-mist">Close-up, human moment</p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-whisper border border-border/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-xs uppercase tracking-widest text-cloud">[ Photo ]</p>
                <p className="mt-1 text-xs text-mist">Nature, texture, warmth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-whisper px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-mist mb-12">
            What Leaders Say
          </h2>
          
          <div className="space-y-16">
            <blockquote className="space-y-4">
              <p className="text-lg leading-relaxed text-ink">
                "I've worked in industry for almost 30 years. I have had the privilege to work with thousands of people on 5 continents. <strong>I have rarely encountered anyone as value driven, as committed to delivery, and as able to make a difference wherever she goes.</strong>"
              </p>
              <footer className="text-sm text-slate">
                — Christina Sistrunk, Former President and CEO, Aera Energy LLC
              </footer>
            </blockquote>

            <blockquote className="space-y-4">
              <p className="text-lg leading-relaxed text-ink">
                "As a CEO, I brought several management teams through this program. <strong>There was no better investment I made than the time and money spent with Nathalie and her team.</strong>"
              </p>
              <footer className="text-sm text-slate">
                — Murat Armbruster, CEO
              </footer>
            </blockquote>

            <blockquote className="space-y-4">
              <p className="text-lg leading-relaxed text-ink">
                "I cannot provide a higher level of praise than that which I give to Nathalie, and <strong>you should be so lucky</strong> to have the opportunity to work with her."
              </p>
              <footer className="text-sm text-slate">
                — Dr. Michael R. Jaff, President, Newton-Wellesley Hospital; Professor, Harvard Medical School
              </footer>
            </blockquote>

            <blockquote className="space-y-4">
              <p className="text-lg leading-relaxed text-ink">
                "She's honest and not afraid to share candid feedback. She has a wealth of business context and expertise that can bring invaluable perspective. <strong>You'd be lucky to work with her.</strong>"
              </p>
              <footer className="text-sm text-slate">
                — Leah Belsky, VP Education, OpenAI
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] bg-whisper border border-border/50 rounded-lg flex items-center justify-center sticky top-24">
                <div className="text-center">
                  <p className="font-display text-xs uppercase tracking-widest text-cloud">[ Nathalie ]</p>
                  <p className="mt-1 text-xs text-mist">Portrait photo</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Advisor to CEOs. Builder of AI Systems.
              </h2>
              <div className="mt-8 space-y-6 text-slate">
                <p>
                  Most consultants tell you what to do. Most technologists build what you ask for.
                </p>
                <p>
                  I've done both — advising CEOs and C-suite leaders for 15 years, now building production AI systems myself.
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="relative before:absolute before:-left-4 before:content-['—']">
                    I've sat with Shell GMs during $1.5B turnarounds and coached multiple CEOs at EnPro
                  </li>
                  <li className="relative before:absolute before:-left-4 before:content-['—']">
                    I've worked with Chief Security Officers, Chief AI Officers, and VPs across industries
                  </li>
                  <li className="relative before:absolute before:-left-4 before:content-['—']">
                    I overhauled Meta's coaching practice (7→9.2 satisfaction) and went from Director to VP
                  </li>
                  <li className="relative before:absolute before:-left-4 before:content-['—']">
                    I keynoted at Harvard on adult development and the future of executive coaching
                  </li>
                  <li className="relative before:absolute before:-left-4 before:content-['—']">
                    I build production AI systems — research pipelines, multi-agent teams, custom tools
                  </li>
                </ul>
                <p className="mt-8 text-lg italic text-ink">
                  "I've never written a line of code. Not one. If I can build this, you can learn to lead this."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'atelier Teaser */}
      <section className="bg-ink px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs font-medium uppercase tracking-widest text-fog">
            Now Available
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-background md:text-3xl">
            L'atelier: Your AI HR Team
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-fog">
            Six specialized AI agents that collaborate like a senior HR leadership team. Strategic guidance with ethics built into the architecture.
          </p>
          <Link
            href="/latelier"
            className="mt-10 inline-block bg-background px-8 py-4 font-display text-sm font-medium tracking-wide text-ink transition-colors hover:bg-whisper"
          >
            Explore L'atelier
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Ready to have a different conversation about AI?
          </h2>
          <p className="mt-6 text-slate">
            Not a sales call. Not a demo. Just an honest exploration of whether we're right for each other.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-ink px-8 py-4 font-display text-sm font-medium tracking-wide text-background transition-colors hover:bg-stone"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-display text-lg font-semibold text-ink">Nathalie Salles</p>
              <p className="mt-2 text-sm text-slate">Advisor to CEOs. Builder of AI Systems.</p>
            </div>
            <div>
              <p className="font-display text-sm font-medium text-ink">Navigate</p>
              <div className="mt-3 space-y-2">
                <Link href="/about" className="block text-sm text-slate hover:text-ink transition-colors">About</Link>
                <Link href="/latelier" className="block text-sm text-slate hover:text-ink transition-colors">L'atelier</Link>
                <Link href="/contact" className="block text-sm text-slate hover:text-ink transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-medium text-ink">Connect</p>
              <div className="mt-3 space-y-2">
                <a href="mailto:hello@abundantstrategies.ai" className="block text-sm text-slate hover:text-ink transition-colors">hello@abundantstrategies.ai</a>
                <p className="text-sm text-mist">San Francisco • Paris</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-cloud">
              © 2025 Abundant Strategies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
