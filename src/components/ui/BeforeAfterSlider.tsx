"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/** Interactive before/after image comparison with a draggable handle. */
export default function BeforeAfterSlider({
  before,
  after,
  label,
  className,
}: {
  before: string;
  after: string;
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl shadow-lift",
        className
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* After (base) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt="After treatment"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute right-4 top-4 z-20 rounded-full bg-teal-800/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-mint-100 backdrop-blur">
        After
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt="Before treatment"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute left-4 top-4 z-20 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-ivory backdrop-blur">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-teal-800 shadow-lift transition-transform group-hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L4 12l5 6M15 6l5 6-5 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {label && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12">
          <p className="text-sm font-semibold text-ivory">{label}</p>
        </div>
      )}
    </div>
  );
}
