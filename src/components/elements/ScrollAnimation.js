import { useEffect, useRef, useState } from "react";

const ScrollAnimation = function(props) {
  const ref = useRef(null);
  const visible = useVisible(ref, props.animateOnce !== false);

  return (
    <div
      ref={ref}
      className={visible ? "animate__animated animate__" + (props.animateIn || "fadeInUp") : ""}
      style={visible ? undefined : { opacity: 0 }}
    >
      {props.children}
    </div>
  );
};

function useVisible(ref, once) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function() {
    var node = ref.current;
    if (!node) return;

    var observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return function() { observer.unobserve(node); };
  }, [ref, once]);

  return isVisible;
}

export default ScrollAnimation;
