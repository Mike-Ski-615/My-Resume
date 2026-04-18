import type { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <>
      <header className="px-4 py-3 sm:py-3.5">
        <h2
          data-section-title="true"
          className="type-display text-[1.02rem] font-semibold leading-tight text-title sm:text-[1.12rem]"
        >
          {children}
        </h2>
      </header>
      <div className="double-divider" />
    </>
  );
}
