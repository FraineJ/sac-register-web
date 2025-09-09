import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import callCenter from "@/assets/call-center.png";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contactForm.messageSent'),
      description: t('contactForm.messageDescription'),
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('contactForm.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactForm.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="lg:col-span-1 flex justify-end">
            <img src={callCenter} className="w-[410px] h-auto object-cover rounded-2xl"/>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('contactForm.requestConsult')}</CardTitle>
                <CardDescription>
                  {t('contactForm.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contactForm.fullName')}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={t('contactForm.namePlaceholder')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={t('contactForm.emailPlaceholder')}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder={t('contactForm.phonePlaceholder')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.company')}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={t('contactForm.companyPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contact.service')}</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('contactForm.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inspeccion">{t('contactForm.services.inspection')}</SelectItem>
                        <SelectItem value="certificacion">{t('contactForm.services.certification')}</SelectItem>
                        <SelectItem value="consultoria">{t('contactForm.services.consulting')}</SelectItem>
                        <SelectItem value="capacitacion">{t('contactForm.services.training')}</SelectItem>
                        <SelectItem value="auditoria">{t('contactForm.services.audit')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t('contactForm.messagePlaceholder')}
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('contactForm.sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactForm };