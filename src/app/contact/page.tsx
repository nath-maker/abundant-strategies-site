import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nathalie Salles-Olivier",
  description: "Start a conversation about AI leadership, executive coaching, or custom AI builds. Not a sales call — an honest exploration.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-cloud">
            Contact
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            Let's explore what's possible.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Not a sales call. Not a demo. Just an honest conversation about whether we're right for each other.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-whisper px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-2xl">
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-display text-sm font-medium text-ink">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full border-b-2 border-border bg-transparent py-3 text-ink placeholder-cloud focus:border-ink focus:outline-none transition-colors"
                placeholder="How should I address you?"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-display text-sm font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full border-b-2 border-border bg-transparent py-3 text-ink placeholder-cloud focus:border-ink focus:outline-none transition-colors"
                placeholder="Where can I reach you?"
              />
            </div>

            {/* What brings you here */}
            <div>
              <label htmlFor="interest" className="block font-display text-sm font-medium text-ink">
                What brings you here?
              </label>
              <select
                id="interest"
                name="interest"
                required
                className="mt-2 w-full border-b-2 border-border bg-transparent py-3 text-ink focus:border-ink focus:outline-none transition-colors"
              >
                <option value="">Select one...</option>
                <option value="executive-coaching">Executive coaching — I need a thought partner</option>
                <option value="ai-strategy">AI strategy — Help my organization navigate AI</option>
                <option value="custom-build">Custom AI build — I need something built</option>
                <option value="latelier">L'atelier — Interested in the AI HR Team</option>
                <option value="speaking">Speaking — Keynote or workshop inquiry</option>
                <option value="other">Something else</option>
              </select>
            </div>

            {/* Context */}
            <div>
              <label htmlFor="context" className="block font-display text-sm font-medium text-ink">
                Tell me more
              </label>
              <textarea
                id="context"
                name="context"
                rows={5}
                className="mt-2 w-full border-b-2 border-border bg-transparent py-3 text-ink placeholder-cloud focus:border-ink focus:outline-none transition-colors resize-none"
                placeholder="What's the situation? What are you trying to figure out?"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-ink px-8 py-4 font-display text-sm font-medium tracking-wide text-background transition-colors hover:bg-stone md:w-auto"
              >
                Send Message
              </button>
              <p className="mt-4 text-sm text-mist">
                I'll respond within 48 hours. Usually faster.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-xl font-semibold text-ink">
            Prefer email directly?
          </h2>
          <p className="mt-4 text-slate">
            Reach me at{" "}
            <a 
              href="mailto:hello@abundantstrategies.ai" 
              className="text-ink underline hover:text-stone transition-colors"
            >
              hello@abundantstrategies.ai
            </a>
          </p>
        </div>
      </section>

      {/* Image Placeholder - Location/Vibe */}
      <section className="px-6 pb-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="aspect-[21/9] bg-whisper border border-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-sm uppercase tracking-widest text-cloud">[ Image ]</p>
              <p className="mt-2 text-sm text-mist">San Francisco / Paris — wherever the work takes us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
