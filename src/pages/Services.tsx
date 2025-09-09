import { Ship, Anchor, Compass, LifeBuoy, CheckCircle, FileText, GraduationCap, Award, Wrench, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const mainServices = [
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

  const additionalServices = [
    {
      icon: CheckCircle,
      title: t('servicesPage.additionalServices.classification.title'),
      description: t('servicesPage.additionalServices.classification.description')
    },
    {
      icon: FileText,
      title: t('servicesPage.additionalServices.audits.title'),
      description: t('servicesPage.additionalServices.audits.description')
    },
    {
      icon: GraduationCap,
      title: t('servicesPage.additionalServices.omi.title'),
      description: t('servicesPage.additionalServices.omi.description')
    },
    {
      icon: Award,
      title: t('servicesPage.additionalServices.certifications.title'),
      description: t('servicesPage.additionalServices.certifications.description')
    },
    {
      icon: Wrench,
      title: t('servicesPage.additionalServices.engineering.title'),
      description: t('servicesPage.additionalServices.engineering.description')
    },
    {
      icon: ClipboardCheck,
      title: t('servicesPage.additionalServices.plans.title'),
      description: t('servicesPage.additionalServices.plans.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="luxury-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('servicesPage.heroTitle')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('servicesPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t('servicesPage.mainTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicesPage.mainSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t('servicesPage.specializedTitle')}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('servicesPage.specializedSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-white/20">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('servicesPage.ctaTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('servicesPage.ctaSubtitle')}
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <a href="/contacto">{t('servicesPage.ctaButton')}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;