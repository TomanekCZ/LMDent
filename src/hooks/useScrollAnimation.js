import { useEffect, useRef } from 'react';

function useScrollAnimation() {
  const observer = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    elements.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);
}

export default useScrollAnimation;
