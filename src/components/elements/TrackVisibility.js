import { useEffect, useRef, useState } from "react";

function TrackVisibility(props) {
  var ref = useRef(null);
  var once = props.once !== false;
  var isVisible = useIsVisible(ref, once);

  var children = typeof props.children === "function"
    ? props.children({ isVisible: isVisible })
    : props.children;

  // Clone children and pass isVisible prop
  if (props.children && typeof props.children !== "function") {
    var React = require("react");
    children = React.Children.map(props.children, function(child) {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { isVisible: isVisible });
      }
      return child;
    });
  }

  return (
    <div ref={ref} className={props.className || ""}>
      {children}
    </div>
  );
}

function useIsVisible(ref, once) {
  var s = useState(false);
  var isVisible = s[0];
  var setIsVisible = s[1];

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

export default TrackVisibility;
