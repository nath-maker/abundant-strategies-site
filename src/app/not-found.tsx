import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl font-semibold text-border">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
          This page wandered off
        </h1>
        <p className="mt-4 text-slate">
          Like a good leader, let's redirect you somewhere useful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-ink px-6 py-3 font-display text-sm font-medium tracking-wide text-background transition-colors hover:bg-stone"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-border px-6 py-3 font-display text-sm font-medium tracking-wide text-ink transition-colors hover:border-ink"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
