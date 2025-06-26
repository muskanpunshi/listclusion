import { useEffect, useRef, useState } from "react";

export const useSmartSubmenuPosition = () => {
  const ref = useRef<HTMLLIElement>(null);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");

  useEffect(() => {
    const updatePosition = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const dropdownHeight = 200; // Approx submenu height
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return { ref, position };
};
