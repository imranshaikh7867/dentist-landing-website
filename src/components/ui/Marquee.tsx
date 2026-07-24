import { cn } from "@/lib/utils";

/** Seamless CSS marquee. Duplicates children for a looping track. */
export default function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max animate-[marquee_38s_linear_infinite] items-center"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
