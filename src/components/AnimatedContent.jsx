import { useEffect, useRef } from "react";

const EASINGS = {
  "power3.out": "cubic-bezier(0.22, 1, 0.36, 1)",
  "power3.in": "cubic-bezier(0.55, 0.06, 0.68, 0.19)",
};

function toEasing(ease) {
  return EASINGS[ease] ?? ease;
}

function toOffset(distance, reverse) {
  if (typeof distance === "number") {
    return `${reverse ? -distance : distance}px`;
  }
  return reverse ? `-${distance}` : distance;
}

function translateProp(direction) {
  return direction === "horizontal" ? "translateX" : "translateY";
}

export default function AnimatedContent({
  children,
  container,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  onComplete,
  onDisappearanceComplete,
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.style.visibility = "visible";

    const offset = toOffset(distance, reverse);
    const axis = translateProp(direction);

    const from = { transform: `${axis}(${offset}) scale(${scale})` };
    const to = { transform: `${axis}(0px) scale(1)` };
    if (animateOpacity) {
      from.opacity = initialOpacity;
      to.opacity = 1;
    }

    let animation;
    let observer;

    const play = () => {
      if (disappearAfter > 0) {
        const out = {
          transform: `${axis}(${toOffset(distance, !reverse)}) scale(0.8)`,
        };
        if (animateOpacity) out.opacity = initialOpacity;

        animation = el.animate([from, to], {
          delay: delay * 1000,
          duration: duration * 1000,
          easing: toEasing(ease),
          fill: "both",
        });
        animation.finished.then(
          () => {
            onComplete?.();
            el.animate([to, out], {
              delay: disappearAfter * 1000,
              duration: disappearDuration * 1000,
              easing: toEasing(disappearEase),
              fill: "forwards",
            }).finished.then(
              () => onDisappearanceComplete?.(),
              () => {},
            );
          },
          () => {},
        );
        return;
      }

      animation = el.animate([from, to], {
        delay: delay * 1000,
        duration: duration * 1000,
        easing: toEasing(ease),
        fill: "both",
      });
      if (onComplete) {
        animation.finished.then(() => onComplete(), () => {});
      }
    };

    if (threshold > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;
          observer.disconnect();
          play();
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      return () => {
        animation?.cancel();
        observer?.disconnect();
      };
    }

    const frame = window.requestAnimationFrame(() => play());
    return () => {
      window.cancelAnimationFrame(frame);
      animation?.cancel();
      observer?.disconnect();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete,
  ]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ visibility: "hidden" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
