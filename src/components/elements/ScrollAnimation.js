import React, { useEffect, useRef, useState } from "react";

function ScrollAnimation({ animateIn, animateOnce = true, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (animateOnce) observer.unobserve(node);
        } else if (!animateOnce) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [animateOnce]);

  return (
    <div
      ref={ref}
      className={isVisible ? `animate__animated animate__${animateIn}` : ""}
      style={isVisible ? {} : { opacity: 0 }}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;
