'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

type PathKey = 'technical' | 'people' | 'organizations' | null;

const paths = [
  {
    key: 'technical' as const,
    color: '#6b8294',
    label: 'Technical Leaders',
    headlines: [
      'You build the tech.',
      'You want to build the company.',
      'We translate the human side.'
    ],
    description: 'You're ahead on the technology. The bottleneck is people. We help technical founders and CTOs build the human infrastructure that matches their technical ambition.',
    cta: 'See how we work together',
    href: '/work-with-me'
  },
  {
    key: 'people' as const,
    color: '#8a9474',
    label: 'People Leaders',
    headlines: [
      'You lead the people.',
      'You want to hold your own with AI.',
      'We help you bridge that gap.'
    ],
    description: 'You're in rooms where AI comes up. You want to lead those conversations, not defer to IT or delegate to your team. We help you build real AI fluency.',
    cta: 'Build your AI fluency',
    href: '/work-with-me'
  },
  {
    key: 'organizations' as const,
    color: '#9a8a5a',
    label: 'Organizations',
    headlines: [
      'You are navigating the AI shift.',
      'You are working on your AI strategy.',
      'We help you plan for humans + AI, together.'
    ],
    description: 'You have pilots, not strategy. Your whole workforce needs to be AI-ready. We help you build a workforce plan where humans and AI work together.',
    cta: 'Build your AI-ready workforce',
    href: '/work-with-me'
  }
];

export default function Home() {
  const [openPath, setOpenPath] = useState<PathKey>(null);

  const togglePath = (key: PathKey) => {
    setOpenPath(openPath === key ? null : key);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-32 md:py-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[--ink] mb-8 leading-[1.15]">
            AI isn&apos;t a tool problem.
            <span className="block mt-2 text-[--slate]">It&apos;s an organization problem.</span>
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl mb-12">
            We help you redesign how your people and AI work together, at scale.
          </p>
        </div>
      </section>

      {/* THREE-PATH ACCORDION SECTION */}
      <section className="px-6 py-24 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-montserrat text-lg font-semibold tracking-[2px] uppercase text-[#555]">
              What problems are you trying to solve?
            </h2>
          </div>

          {/* Horizontal Accordion */}
          <div className="flex flex-col md:flex-row gap-3">
            {paths.map((path) => {
              const isOpen = openPath === path.key;
              
              return (
                <div
                  key={path.key}
                  onClick={() => togglePath(path.key)}
                  className="bg-white border border-[#e5e5e5] rounded overflow-hidden cursor-pointer
                             flex flex-col transition-all duration-[400ms] ease-out
                             hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]
                             md:flex-1"
                  style={{
                    flex: isOpen ? '2.5' : '1'
                  }}
                >
                  {/* Top Color Bar */}
                  <div 
                    className="w-full transition-all duration-300 ease-out"
                    style={{ 
                      backgroundColor: path.color,
                      height: isOpen ? '6px' : '4px'
                    }}
                  />
                  
                  {/* Main Content */}
                  <div className="p-6 md:p-7 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-5">
                      <p className="font-montserrat text-xs font-bold tracking-[2px] uppercase text-[#555]">
                        {path.label}
                      </p>
                      <span 
                        className="text-xs transition-transform duration-300"
                        style={{ 
                          color: path.color,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      >
                        ▼
                      </span>
                    </div>
                    
                    {/* Headlines */}
                    <div>
                      {path.headlines.map((line, i) => (
                        <p 
                          key={i}
                          className="font-montserrat text-[16px] font-medium leading-relaxed text-[#333]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    {/* Expandable Content */}
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        maxHeight: isOpen ? '200px' : '0px',
                        marginTop: isOpen ? '16px' : '0px'
                      }}
                    >
                      <p className="text-sm text-[#666] leading-relaxed mb-4">
                        {path.description}
                      </p>
                      <Link
                        href={path.href}
                        onClick={(e) => e.stopPropagation()}
                        className="font-montserrat text-[11px] font-medium tracking-wide
                                   inline-flex items-center gap-2 hover:gap-3 transition-all"
                        style={{ color: path.color }}
                      >
                        {path.cta}
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-24 bg-[--cloud]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-[--ink] mb-6">
                Who we are
              </h2>
              <p className="text-[--slate] leading-relaxed mb-6">
                We&apos;ve spent 15 years inside organizational complexity. Change management,
                workforce planning, performance systems. At Meta, Google, NASA, Disney, Sony, Amex.
              </p>
              <p className="text-[--slate] leading-relaxed mb-6">
                We research human-AI collaboration at the PhD level. And we build AI ourselves.
                Human-AI HR teams that actually work.
              </p>
              <p className="text-[--slate] leading-relaxed">
                That combination lets us see what most can&apos;t: the whole system, not just the tools.
              </p>
            </div>
            {/* Image */}
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/pierre-guerin-pyramid.jpg"
                alt="Architectural perspective - grayscale pyramid structure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <p className="absolute bottom-2 right-2 text-[10px] text-white/60">
                Photo by Pierre Guérin
              </p>
            </div>
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
            <span className="text-lg font-light">NASA</span>
            <span className="text-lg font-light">Disney</span>
            <span className="text-lg font-light">Sony</span>
            <span className="text-lg font-light">Amex</span>
            <span className="text-lg font-light">Red Bull</span>
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
            what you&apos;re facing and whether we can help.
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
