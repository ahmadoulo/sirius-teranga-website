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
      className={`fixed bottom-8 right-8 z-[900] w-12 h-12 bg-primary text-accent border border-accent/30 rounded-full flex items-center justify-center shadow-navy-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 ${
        visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-5"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
