import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export default function HudFrame({ children, label, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      {/* Corners */}
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-tactical-light" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-tactical-light" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-tactical-light" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-tactical-light" />
      {label && (
        <span className="absolute -top-2 left-6 bg-ink-900 px-2 font-mono text-[10px] uppercase tracking-ultra-wide text-tactical-light">
          {label}
        </span>
      )}
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
