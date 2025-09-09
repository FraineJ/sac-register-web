import { Phone, Mail, MapPin, Calendar, Clock, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
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
                  {t('contactPage.scheduleTitle')}
                </CardTitle>
                <CardDescription>
                  {t('contactPage.scheduleDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <form className="space-y-2">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('contactPage.firstName')}</Label>
                      <Input
                        id="firstName"
                        placeholder={t('contactPage.firstNamePlaceholder')}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('contactPage.lastName')}</Label>
                      <Input
                        id="lastName"
                        placeholder={t('contactPage.lastNamePlaceholder')}
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contactPage.emailPlaceholder')}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('contactPage.phonePlaceholder')}
                        className="border-border focus:border-primary"
                      />
                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4">

                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.company')}</Label>
                      <Input
                        id="company"
                        placeholder={t('contactPage.companyPlaceholder')}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contactPage.serviceInterest')}</Label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">{t('contactPage.selectService')}</option>
                        <option value="clasificacion">{t('contactPage.services.classification')}</option>
                        <option value="auditorias">{t('contactPage.services.audits')}</option>
                        <option value="cursos-omi">{t('contactPage.services.omi')}</option>
                        <option value="certificaciones">{t('contactPage.services.certifications')}</option>
                        <option value="ingenieria-naval">{t('contactPage.services.engineering')}</option>
                        <option value="inspeccion">{t('contactPage.services.inspection')}</option>
                        <option value="otros">{t('contactPage.services.others')}</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">{t('contactPage.preferredDate')}</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">{t('contactPage.preferredTime')}</Label>
                      <select
                        id="preferredTime"
                        className="w-full px-3 py-2 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t('contactPage.selectTime')}
                        </option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>

                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contactPage.messagePlaceholder')}
                      className="min-h-[120px] border-border focus:border-primary"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    {t('contactPage.scheduleButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>

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