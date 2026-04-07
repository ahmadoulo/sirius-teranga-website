import { useEffect, useRef } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  animation: AnimationType = 'fade-in-up',
  delay: number = 0
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classMap: Record<AnimationType, string> = {
      'fade-in-up': 'reveal-up',
      'fade-in-left': 'reveal-left',
      'fade-in-right': 'reveal-right',
      'scale-in': 'reveal-up',
    };

    const cls = classMap[animation];
    el.classList.add(cls);
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay]);

  return ref;
};
