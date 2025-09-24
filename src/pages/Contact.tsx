import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast, useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import callCenter from "@/assets/call-center.png";
import { emailService } from "@/services/email.services";

const Contact = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Preparar los datos para el servicio de email
      const emailData = {
        subject: `Nueva solicitud de contacto - ${formData.name}`,
        template: "contact-form", // Si usas plantillas
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          date: new Date().toLocaleDateString('es-ES'),
          time: new Date().toLocaleTimeString('es-ES')
        }
      };

      // Enviar el email
      await emailService.create(emailData);

      // Mostrar mensaje de éxito
      toast({
        title: t('contactForm.messageSent'),
        description: t('contactForm.messageDescription'),
        variant: "default",
      });

      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      
      // Mostrar mensaje de error
      toast({
        title: t('contactForm.errorTitle') || "Error",
        description: t('contactForm.errorDescription') || "Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="luxury-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contactPage.heroTitle')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('contactPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  {t('contactForm.requestConsult')}
                </CardTitle>
                <CardDescription>
                  {t('contactForm.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.company')}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={t('contactForm.companyPlaceholder')}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contact.service')}</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => handleChange("service", value)}
                      disabled={isLoading}
                    >
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
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? t('contactForm.sending') || "Enviando..." : t('contactForm.sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* ... resto del código permanece igual ... */}
             {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contactPage.contactInfo')}</CardTitle>
                  <CardDescription>
                    {t('contactPage.contactDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contactPage.phones')}</h3>
                      <p className="text-muted-foreground">(605) 6794802 - +573205651098</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('footer.email')}</h3>
                      <p className="text-muted-foreground">info@sacregister.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contactPage.address')}</h3>
                      <p className="text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                        {t('contactPage.addressText')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contactPage.schedule')}</h3>
                      <p className="text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                        {t('contactPage.scheduleText')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">{t('contactPage.whyMeetingTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{t('contactPage.benefit1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{t('contactPage.benefit2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{t('contactPage.benefit3')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{t('contactPage.benefit4')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;