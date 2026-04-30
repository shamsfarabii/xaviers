import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight IntersectionObserver hook.
 * Returns [ref, isVisible] — attach ref to the element you want to observe.
 * Once visible, stays visible (no re-hiding).
 */
export default function useInView({ threshold = 0.1, rootMargin = '0px 0px' } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return; // already triggered, skip

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return [ref, isVisible];
}
