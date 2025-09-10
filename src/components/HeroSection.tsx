import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroYacht from "@/assets/petrolero.png";
import heroMobile from "@/assets/banner-movil.jpg";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con soporte para móvil */}
      <picture>
        {/* Cuando el ancho máximo es 768px (pantallas móviles) se usa banner-movil */}
        <source srcSet={heroMobile} media="(max-width: 768px)" />
        {/* Por defecto (pantallas grandes) se usa petrolero.png */}
        <img 
          src={heroYacht} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
      
      {/* Overlay */}
      <div className="absolute inset-0 ocean-gradient opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Ejemplo si activas subtítulo */}
        {/* <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p> */}
        
        {/* Ejemplo si activas botón */}
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
