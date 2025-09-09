import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import sailingYacht from "@/assets/sailing-yacht.jpg";
import motorYacht from "@/assets/barco.png";

export function StatsSection() {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Inicializar useNavigate

  const redirectToAboutUs = () => {
    navigate('/quienes-somos'); // Usar navigate para la redirección
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-ocean-mist to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images and stats */}
          <div className="space-y-6">
            <img src={motorYacht} alt="Motor yacht" className="w-full h-auto object-cover rounded-2xl"/>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-ocean-light rounded-full text-ocean-deep font-medium">
              {t('stats.about')}
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-ocean-deep mb-6">
                {t('stats.title')}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('stats.description')}
              </p>
              
              <Button 
                size="lg" 
                className="bg-ocean-deep hover:bg-ocean-medium text-white px-8 py-4 h-auto font-semibold"
                onClick={redirectToAboutUs}
              >
                {t('stats.knowMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}