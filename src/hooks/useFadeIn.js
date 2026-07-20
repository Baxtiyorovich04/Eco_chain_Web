import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('fade-in');

    const reveal = () => {
      el.classList.add('visible');
      el.querySelectorAll('.animate-on-scroll').forEach((child) => {
        child.classList.add('visible');
      });
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return ref;
}
