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

    el.style.opacity = '0';
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

    const transforms: Record<AnimationType, string> = {
      'fade-in-up': 'translateY(30px)',
      'fade-in-left': 'translateX(-30px)',
      'fade-in-right': 'translateX(30px)',
      'scale-in': 'scale(0.95)',
    };
    el.style.transform = transforms[animation];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay]);

  return ref;
};
