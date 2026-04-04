import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  const toggle = () => {
    i18n.changeLanguage(current === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 border border-border rounded-full px-3 py-1.5 text-xs font-heading font-semibold tracking-wide hover:bg-muted transition-colors"
      aria-label="Switch language"
    >
      <span className={current === 'fr' ? 'text-accent' : 'text-muted-foreground'}>FR</span>
      <span className="text-muted-foreground">/</span>
      <span className={current === 'en' ? 'text-accent' : 'text-muted-foreground'}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
