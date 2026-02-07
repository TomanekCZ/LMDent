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

    const markVisible = (el) => el.classList.add('visible');

    const isInInitialViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const topVisible = rect.top < window.innerHeight * 0.85;
      const bottomVisible = rect.bottom > 0;
      return topVisible && bottomVisible;
    };

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '15% 0px -5% 0px'
      }
    );

    elements.forEach((element) => {
      if (isInInitialViewport(element)) {
        markVisible(element);
      } else {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);
}

export default useScrollAnimation;
