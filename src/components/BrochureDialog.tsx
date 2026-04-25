import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Download, Mail, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface BrochureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BROCHURE_PATH = "/brochure-stc-consulting.pdf";

const BrochureDialog = ({ open, onOpenChange }: BrochureDialogProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const trimmed = email.trim();
  const isValidEmail = EMAIL_REGEX.test(trimmed) && trimmed.length <= 255;
  const canSubmit = isValidEmail && !isSubmitting;

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = BROCHURE_PATH;
    link.download = "Brochure-STC-Consulting.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "ea435ede-dfc0-4f09-88b8-9b49d525edf7");
      formData.append("email", trimmed);
      formData.append("from_name", "Sirius Teranga Consulting — Téléchargement brochure");
      formData.append("subject", `📥 Téléchargement brochure — ${trimmed}`);
      formData.append(
        "message",
        `L'utilisateur ${trimmed} a téléchargé la brochure STC Consulting depuis le site web le ${new Date().toLocaleString("fr-FR")}.`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success(t("brochure_dialog.success"));
        triggerDownload();
        setEmail("");
        onOpenChange(false);
      } else {
        toast.error(t("brochure_dialog.error"));
      }
    } catch {
      toast.error(t("brochure_dialog.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="mx-auto sm:mx-0 mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/30">
            <Download className="w-5 h-5 text-accent" />
          </div>
          <DialogTitle className="font-heading text-xl md:text-2xl text-foreground">
            {t("brochure_dialog.title")}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {t("brochure_dialog.description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="brochure-email"
              className="font-heading text-xs font-bold tracking-[0.08em] uppercase text-foreground"
            >
              {t("brochure_dialog.email_label")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                id="brochure-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("brochure_dialog.email_placeholder")}
                className="w-full font-body text-sm text-foreground bg-offwhite border-[1.5px] border-border rounded-lg pl-10 pr-3 py-3 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                disabled={isSubmitting}
                maxLength={255}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            className={`inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase px-7 py-3.5 rounded-full border-2 border-transparent transition-all duration-300 ${
              canSubmit
                ? "bg-accent text-accent-foreground shadow-gold hover:bg-gold-light hover:-translate-y-0.5 cursor-pointer"
                : "bg-muted text-muted-foreground opacity-60 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t("brochure_dialog.submitting")}
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                {t("brochure_dialog.submit")}
              </>
            )}
          </button>

          <p className="text-[0.7rem] text-muted-foreground text-center">
            {t("brochure_dialog.privacy")}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDialog;
