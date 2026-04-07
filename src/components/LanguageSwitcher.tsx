import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isTransparent = false }: { isTransparent?: boolean }) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  const toggle = () => {
    i18n.changeLanguage(current === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 text-xs font-heading font-semibold tracking-wide transition-colors ${
        isTransparent
          ? "border-white/30 hover:bg-white/10"
          : "border-border hover:bg-muted"
      }`}
      aria-label="Switch language"
    >
      <span className={current === 'fr' ? 'text-accent' : isTransparent ? 'text-white/50' : 'text-muted-foreground'}>FR</span>
      <span className={isTransparent ? 'text-white/40' : 'text-muted-foreground'}>/</span>
      <span className={current === 'en' ? 'text-accent' : isTransparent ? 'text-white/50' : 'text-muted-foreground'}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
