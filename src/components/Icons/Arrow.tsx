"use client";

import clsx from "clsx";

interface ArrowProps {
  isOpen: boolean;
  className?: string; // optional override
}

export const Arrow = ({ isOpen, className }: ArrowProps) => {
  return (
    <svg
      className={clsx(
        "w-4 h-4 transition-transform duration-300",
        isOpen ? "rotate-90" : "rotate-0",
        className
      )}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M6 4l6 6-6 6V4z" clipRule="evenodd" />
    </svg>
  );
};
