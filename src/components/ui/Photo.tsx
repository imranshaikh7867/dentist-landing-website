import { cn } from "@/lib/utils";
import { img } from "@/lib/data";

/**
 * Image with a teal gradient placeholder sitting behind it, so a slow
 * or failed load still reads as an intentional surface rather than a
 * broken box. Accepts either a full URL or an Unsplash photo id.
 */
export default function Photo({
  src,
  id,
  alt,
  className,
  imgClassName,
  width = 1200,
  priority = false,
  sizes,
}: {
  src?: string;
  id?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  priority?: boolean;
  sizes?: string;
}) {
  const url = src ?? (id ? img(id, width) : "");
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          imgClassName
        )}
        draggable={false}
      />
    </div>
  );
}
