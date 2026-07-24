import { cn } from "@/lib/utils";
import { Reveal, TextReveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string[];
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", light && "!text-mint-300")}>
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2
        className={cn(
          "text-display max-w-3xl",
          align === "center" && "mx-auto",
          light && "!text-ivory"
        )}
      >
        <TextReveal text={title} highlight={highlight} />
      </h2>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted md:text-lg",
              align === "center" && "mx-auto",
              light && "!text-mint-100/80"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
