"use client";

import { useState, useId, ReactNode, KeyboardEvent } from "react";
import clsx from "clsx";
import { Arrow } from "@/components/Icons/Arrow";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const AccordionItem = ({
  title,
  children,
  contentClassName,
  headerClassName,
  headingLevel,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = useId();
  const HeadingElement = headingLevel;

  const toggle = () => setIsOpen(!isOpen);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }

    // Optional: support arrow keys if you manage focus on multiple items
    // if (e.key === "ArrowDown") { ... }
    // if (e.key === "ArrowUp") { ... }
  };

  return (
    <div className="border-b w-full">
      <HeadingElement>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className={clsx(
            "w-full text-left p-4 flex justify-between items-center font-medium text-black",
            headerClassName
          )}
        >
          {title}
          <span className="ml-2 inline-block transition-transform duration-300 text-black">
            <Arrow isOpen={isOpen} />
          </span>
        </button>
      </HeadingElement>

      {/* Content container */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        aria-hidden={!isOpen}
        className={clsx(
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "block max-h-[2000px] opacity-100"
            : "hidden max-h-0 opacity-0"
        )}
      >
        <div className="p-4 text-black">{children}</div>
      </div>
    </div>
  );
};
