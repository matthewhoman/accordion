import clsx from "clsx";
import { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
  className?: string; // optinonal overrides
}

export const Accordion = ({ children, className }: AccordionProps) => {
  return (
    <div className={clsx("w-full overflow-hidden", className)}>{children}</div>
  );
};
