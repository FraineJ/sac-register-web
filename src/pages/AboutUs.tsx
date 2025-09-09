import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import mision from "@/assets/mision.png";
import aboutUs from "@/assets/quienes-somos.png";
import vision from "@/assets/vision.png";
import política from "@/assets/política-integral.png";

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">

      
      {/* Hero Section */}
      <section className="luxury-gradient pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('aboutUs.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t('aboutUs.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-mist to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutUs.aboutTitle')}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  {t('aboutUs.description1')}
                </p>
                <p>
                  {t('aboutUs.description2')}
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="elegant-shadow overflow-hidden">
                <img 
                  src={aboutUs}
                  alt="Sobre nosotros - SAC Register"
                  className="w-full  object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-ocean-light/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutUs.mission')}
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed">
                <p>
                  {t('aboutUs.missionText')}
                </p>
              </div>
            </div>
            <div className="lg:order-1">
              <Card className="elegant-shadow overflow-hidden">
                <img 
                  src={mision}
                  alt="Misión - SAC Register"
                  className="w-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutUs.vision')}
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed">
                <p>
                  {t('aboutUs.visionText')}
                </p>
              </div>
            </div>
            <div>
              <Card className="elegant-shadow overflow-hidden">
                <img 
                  src={vision}
                  alt="Visión - SAC Register"
                  className="w-full h-84 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-ocean-light/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutUs.policy')}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  {t('aboutUs.policyText1')}
                </p>
                <p>
                  {t('aboutUs.policyText2')}
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">{t('aboutUs.commitmentTitle')}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t('aboutUs.commitment1')}</li>
                    <li>• {t('aboutUs.commitment2')}</li>
                    <li>• {t('aboutUs.commitment3')}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
             
              <img 
                src={política} 
                alt="Política Integral - SAC Register"
                className="w-[430px] h-auto object-cover rounded-2xl"
              />
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;