import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { HomeSectionDepth } from "@/types";

type SectionFrameProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
  divider?: boolean;
  tocDepth?: HomeSectionDepth;
  tocLabel?: string;
  hideFromToc?: boolean;
};

export default function SectionFrame({
  children,
  className,
  id,
  innerClassName,
  divider = true,
  tocDepth = 2,
  tocLabel,
  hideFromToc = false,
}: SectionFrameProps) {
  return (
    <section
      id={id}
      data-toc-section={id && !hideFromToc ? "true" : undefined}
      data-toc-depth={id && !hideFromToc ? String(tocDepth) : undefined}
      data-toc-label={id && !hideFromToc ? tocLabel : undefined}
      className={cn("relative scroll-mt-4 bg-background", className)}
    >
      <div
        className={cn(
          "max-w-172.5 mx-2 sm:mx-8 md:mx-auto relative section-frame",
          innerClassName,
        )}
      >
        {children}
      </div>

      {divider && <div className="double-divider" />}
    </section>
  );
}
