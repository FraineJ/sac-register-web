import { Ship, Anchor, Compass, LifeBuoy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Ship,
      title: t('services.newConstruction.title'),
      description: t('services.newConstruction.description')
    },
    {
      icon: Anchor,
      title: t('services.supervision.title'),
      description: t('services.supervision.description')
    },
    {
      icon: Compass,
      title: t('services.classification.title'),
      description: t('services.classification.description')
    },
    {
      icon: LifeBuoy,
      title: t('services.offshore.title'),
      description: t('services.offshore.description')
    }
  ];

  return (
    <section className="py-20 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">{t('servicesPage.mainTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white">
              {t('servicesPage.mainSubtitle')}
            </p>
          </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="text-center text-white p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-16 h-16 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}