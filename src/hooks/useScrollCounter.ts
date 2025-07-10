import { useState, useEffect, useRef } from 'react';

interface UseScrollCounterOptions {
  end: number;
  duration?: number;
  startValue?: number;
  threshold?: number;
}

export const useScrollCounter = ({
  end,
  duration = 3000,
  startValue = 0,
  threshold = 0.1
}: UseScrollCounterOptions) => {
  const [count, setCount] = useState(startValue);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startCount = startValue;
          const endCount = end;            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation - ease-in-out
              const easeInOutCubic = (t: number) => {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              };
              const easedProgress = easeInOutCubic(progress);
              
              const currentCount = Math.floor(startCount + (endCount - startCount) * easedProgress);
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
          
          animate();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [end, duration, startValue, threshold, hasStarted]);

  return { count, elementRef };
};
