import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import motorYacht from "@/assets/service-1.png";
import sailingYacht from "@/assets/service-2.png";
import speedboat from "@/assets/service-4.png";
import { useNavigate } from "react-router-dom";

export function YachtTypesSection() {
  const { t } = useLanguage();
  const navigate = useNavigate(); 
  
  const yachtTypes = [
    {
      title: t('yachtTypes.classification.title'),
      subtitle: "",
      image: motorYacht,
      description: t('yachtTypes.classification.description')
    },
    {
      title: t('yachtTypes.audits.title'), 
      subtitle: "",
      image: sailingYacht,
      description: t('yachtTypes.audits.description')
    },
    {
      title: t('yachtTypes.omi.title'),
      subtitle: "",
      image: speedboat,
      description: t('yachtTypes.omi.description')
    }
  ];

  const redirectToAboutUs = () => {
    navigate('/servicios');
  };

  // Función para redirigir a WhatsApp con mensaje específico del servicio
  const redirectToWhatsApp = (serviceName) => {
    const phoneNumber = "573205651098"; // Reemplaza con tu número de WhatsApp
    const message = `Hola, me gustaría obtener más información sobre el servicio de ${serviceName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ocean-mist">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-block px-4 py-2 bg-ocean-light rounded-full text-ocean-deep font-medium mb-6">
              {t('yachtTypes.title')}
            </div>
            <h2 className="text-4xl font-bold text-ocean-deep">
              {t('yachtTypes.subtitle')}
              <br />
              {t('yachtTypes.subtitle2')}
            </h2>
          </div>
          
          <Button 
            size="lg"
            className="bg-ocean-deep hover:bg-ocean-medium text-white px-8 py-4 h-auto font-semibold hidden lg:flex"
            onClick={redirectToAboutUs}
          >
            {t('yachtTypes.seeMore')}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachtTypes.map((yacht, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl luxury-shadow hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src={yacht.image}
                  alt={yacht.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{yacht.title}</h3>
                  <p className="text-xl mb-3 text-white/90">{yacht.subtitle}</p>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    {yacht.description}
                  </p>
                  
                  <Button 
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 p-2 h-auto"
                    onClick={() => redirectToWhatsApp(yacht.title)}
                  >
                    {t('service.info')} <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 lg:hidden">
          <Button 
            size="lg"
            className="bg-ocean-deep hover:bg-ocean-medium text-white px-8 py-4 h-auto font-semibold"
            onClick={redirectToAboutUs}
          >
            {t('yachtTypes.seeMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}