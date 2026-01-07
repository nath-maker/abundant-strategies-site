export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-ink rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-ink rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-ink rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="mt-4 font-display text-sm text-cloud">Loading...</p>
      </div>
    </div>
  );
}
