'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link 
            href="/" 
            className="font-display text-lg font-semibold text-ink hover:text-stone transition-colors"
          >
            Nathalie Salles
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="font-display text-sm font-medium text-slate hover:text-ink transition-colors"
            >
              About
            </Link>
            <Link 
              href="/latelier" 
              className="font-display text-sm font-medium text-slate hover:text-ink transition-colors"
            >
              L'atelier
            </Link>
            <Link 
              href="#contact" 
              className="font-display text-sm font-medium bg-ink text-background px-5 py-2 hover:bg-stone transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className="font-display text-sm font-medium text-slate hover:text-ink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/latelier" 
                className="font-display text-sm font-medium text-slate hover:text-ink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                L'atelier
              </Link>
              <Link 
                href="#contact" 
                className="font-display text-sm font-medium text-ink"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
