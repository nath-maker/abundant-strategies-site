'use client';

export default function Contact() {
  const formlessId = "LANT2y6pqAF1";
  const calendlyUrl = "https://calendly.com/nathalie-salles/new-meeting";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[--ink] mb-8">
            Let&apos;s talk.
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl">
            Tell me what you&apos;re working on. I read every message
            and respond personally.
          </p>
        </div>
      </section>

      {/* Formless AI Conversation */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-2xl mx-auto">
          <iframe
            src={`https://formless.ai/c/${formlessId}`}
            className="w-full border-0 rounded-lg"
            style={{ height: '650px' }}
            allow="microphone *"
          />
        </div>
      </section>

      {/* Alternative Options */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <p className="text-[--stone] mb-4">
              Prefer to book directly?
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[--ink] text-white text-sm tracking-wide hover:bg-[--slate] transition-colors"
            >
              Schedule a Conversation
            </a>
          </div>
          <div className="pt-4 border-t border-[--cloud]">
            <p className="text-[--stone] mb-4">
              Or email me directly
            </p>
            <a
              href="mailto:nathalies@abundantstrategies.com"
              className="text-[--ink] border-b border-[--ink] hover:text-[--slate] hover:border-[--slate] transition-colors"
            >
              nathalies@abundantstrategies.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
