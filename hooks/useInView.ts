// hooks/useInView.ts
import { useEffect, useState } from "react";

const useElementVisibility = (
  ref: React.RefObject<HTMLElement | null>
): boolean => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return hasBeenVisible;
};

export default useElementVisibility;
