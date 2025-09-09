import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-4 h-4 text-white" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="text-white hover:bg-white/10 px-2 py-1 h-auto font-medium"
      >
        {language === 'es' ? t('language.english') : t('language.spanish')}
      </Button>
    </div>
  );
}