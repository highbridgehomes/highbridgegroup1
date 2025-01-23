import { useState, useEffect } from "react";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".animate-on-scroll");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

export default useScrollAnimation;