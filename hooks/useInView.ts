import { useEffect, useState } from "react";

const useElementVisibility = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // observer.unobserve(ref.current);

      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
   
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

export default useElementVisibility;
