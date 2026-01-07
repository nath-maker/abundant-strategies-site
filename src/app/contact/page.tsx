'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling will be connected to Formspree or API route
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. I\'ll be in touch soon.');
  };

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

      {/* Form */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-[--stone] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-[--mist] text-[--ink] focus:border-[--ink] transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-[--stone] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-[--mist] text-[--ink] focus:border-[--ink] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Interest */}
            <div>
              <label htmlFor="interest" className="block text-sm text-[--stone] mb-2">
                What brings you here?
              </label>
              <select
                id="interest"
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-[--mist] text-[--ink] focus:border-[--ink] transition-colors"
              >
                <option value="">Select one...</option>
                <option value="coaching">Executive Coaching</option>
                <option value="strategy">AI Strategy Advisory</option>
                <option value="build">Custom AI Build</option>
                <option value="latelier">L&apos;atelier (AI HR Team)</option>
                <option value="other">Something else</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-[--stone] mb-2">
                Tell me more
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-[--mist] text-[--ink] focus:border-[--ink] transition-colors resize-none"
                placeholder="What are you working on? What questions are you wrestling with?"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-[--ink] text-white text-sm tracking-wide hover:bg-[--slate] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[--stone] mb-4">
            Prefer email?
          </p>
          <a
            href="mailto:nathalie@abundantstrategies.ai"
            className="text-[--ink] border-b border-[--ink] hover:text-[--slate] hover:border-[--slate] transition-colors"
          >
            nathalie@abundantstrategies.ai
          </a>
        </div>
      </section>
    </div>
  );
}
