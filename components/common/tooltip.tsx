import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Calculate initial position (centered above the trigger)
      let top = triggerRect.top - tooltipRect.height - 8; // 8px gap
      let left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

      // Adjust if tooltip would go outside viewport
      if (top < 8) {
        // If not enough space above, show below
        top = triggerRect.bottom + 8;
      }

      if (left < 8) {
        left = 8;
      } else if (left + tooltipRect.width > window.innerWidth - 8) {
        left = window.innerWidth - tooltipRect.width - 8;
      }

      setPosition({ top: top + window.scrollY, left });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isVisible, text]);

  const TooltipContent = () => {
    if (!isVisible) return null;

    return createPortal(
      <div
        ref={tooltipRef}
        className="fixed z-[10000] animate-in fade-in duration-200"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <div className="bg-primary text-white text-xs rounded-md py-1 px-2 shadow-lg max-w-xs whitespace-normal break-words">
          {text}
          <div className="absolute h-2 w-2 bg-primary rotate-45 -top-1 left-1/2 -translate-x-1/2" />
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div
      ref={triggerRef}
      className={`inline-flex items-center ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <TooltipContent />
    </div>
  );
};

export default Tooltip;
