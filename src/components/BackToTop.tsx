import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[900] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-navy-lg ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      } bg-primary border-accent/40 hover:bg-accent hover:-translate-y-1 group`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-accent-foreground transition-colors" />
    </button>
  );
};

export default BackToTop;
