export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id="aurea-g" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#147a6f" />
          <stop offset="0.55" stopColor="#35c4b2" />
          <stop offset="1" stopColor="#c9a25a" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="19" stroke="url(#aurea-g)" strokeWidth="1.5" />
      {/* stylised tooth / droplet */}
      <path
        d="M20 9c-4.4 0-7.5 2.6-7.5 6.6 0 2.4 1 4.1 1.7 6.6.5 1.8.6 4 .9 5.7.2 1.4.7 3.1 1.9 3.1 1.3 0 1.4-1.9 1.7-3.4.2-1.2.5-2.2 1.3-2.2s1.1 1 1.3 2.2c.3 1.5.4 3.4 1.7 3.4 1.2 0 1.7-1.7 1.9-3.1.3-1.7.4-3.9.9-5.7.7-2.5 1.7-4.2 1.7-6.6 0-4-3.1-6.6-7.5-6.6Z"
        fill="url(#aurea-g)"
      />
    </svg>
  );
}
