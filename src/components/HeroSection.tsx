import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroYacht from "@/assets/petrolero.png";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroYacht})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 ocean-gradient opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        {/* <Button 
          size="lg" 
          className="bg-white text-ocean-deep hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold luxury-shadow"
        >
          {t('hero.cta')}
        </Button> */}
      </div>
    </section>
  );
}