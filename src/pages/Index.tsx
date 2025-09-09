import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { YachtTypesSection } from "@/components/YachtTypesSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <YachtTypesSection />
      <ContactForm />
    </>
  );
};

export default Index;