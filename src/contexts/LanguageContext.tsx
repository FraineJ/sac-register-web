import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Quienes somos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'header.contact': 'Contactar',
    'header.portal': 'Iniciar sesión',
    'header.openMenu': 'Abrir menú',
    
    // Hero Section
    'hero.title': 'Seguridad marítima, confianza certificada.',
    'hero.subtitle': 'Trabajamos para proteger la vida humana en el mar, garantizando embarcaciones seguras y certificadas con altos estándares nacionales e internacionales.',
    'hero.cta': 'COMENZAR →',
    
    // Services Section
    'services.newConstruction.title': 'Nueva construcción, modificación, y/o reparación',
    'services.newConstruction.description': 'Inspecciones de clasificación e inspecciones estatutarias para embarcaciones en proceso de construcción o modificación.',
    'services.supervision.title': 'Supervisión de unidades en operación',
    'services.supervision.description': 'Supervisión continua y monitoreo técnico de embarcaciones para su operación.',
    'services.classification.title': 'Clasificación de unidades nuevas/existentes',
    'services.classification.description': 'Evaluación y clasificación técnica de embarcaciones nuevas/existentes según estándares nacionales e internacionales.',
    'services.offshore.title': 'Supervisión técnica costa afuera',
    'services.offshore.description': 'Supervisión especializada de instalaciones y estructuras costa afuera con altos estándares de seguridad.',
    
    // Stats Section
    'stats.certifications': 'Certificaciones Emitidas',
    'stats.experience': 'Años de Experiencia',
    'stats.clients': 'Clientes Satisfechos',
    'stats.inspections': 'Inspecciones Realizadas',
    
    // Yacht Types
    'yachts.title': 'Tipos de Embarcaciones',
    'yachts.subtitle': 'Certificamos todo tipo de embarcaciones con los más altos estándares de seguridad',
    'yachts.motorYacht': 'Motor Yacht',
    'yachts.sailingYacht': 'Sailing Yacht',
    'yachts.speedboat': 'Speedboat',
    
    // Contact Form
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Agenda una reunión con nuestros expertos',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.company': 'Empresa',
    'contact.service': 'Servicio de interés',
    'contact.date': 'Fecha preferida',
    'contact.time': 'Hora preferida',
    'contact.message': 'Mensaje',
    'contact.submit': 'Agendar Reunión',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.address': 'Dirección',
    'footer.phone': 'Teléfono',
    'footer.email': 'Email',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Language Selector
    'language.spanish': 'Español',
    'language.english': 'English',
    
    // Stats Section
    'stats.about': 'NOSOTROS',
    'stats.title': 'Comprometidos con la seguridad marítima',
    'stats.description': 'En SAC REGISTER somos una organización dedicada a la inspección y certificación de embarcaciones, al servicio de la comunidad marítima nacional e internacional.',
    'stats.fleet': 'YATES EN FLOTA',
    'stats.happy': 'CLIENTES FELICES',
    'stats.knowMore': 'SABER MÁS →',
    
    // Yacht Types Section
    'yachtTypes.title': 'SERVICIOS',
    'yachtTypes.subtitle': 'Clasificación e Ingeniería Naval.',
    'yachtTypes.subtitle2': 'Certificación e inspección de embarcaciones en servicio marítimo.',
    'yachtTypes.seeMore': 'VER MÁS',
    'service.info' : "Más información",
    'yachtTypes.classification.title': 'Clasificación',
    'yachtTypes.classification.description': 'Evaluación técnica integral de embarcaciones.',
    'yachtTypes.audits.title': 'Inspección de embarcaciones',
    'yachtTypes.audits.description': 'Control y verificación de sistemas marítimos.',
    'yachtTypes.omi.title': 'Revisión y Aprobación de Planes, Planos y Cálculos ',
    'yachtTypes.omi.description': 'Formación marítima con estándares internacionales.',
    
    // Contact Form
    'contactForm.title': 'Contáctanos',
    'contactForm.subtitle': '¿Necesitas certificación marítima? Contáctanos para conocer más sobre nuestros servicios',
    'contactForm.requestConsult': 'Solicita una Consulta',
    'contactForm.formDescription': 'Completa el formulario y nos pondremos en contacto contigo',
    'contactForm.fullName': 'Nombre Completo',
    'contactForm.namePlaceholder': 'Tu nombre completo',
    'contactForm.emailPlaceholder': 'tu@email.com',
    'contactForm.phonePlaceholder': '+57 300 123 4567',
    'contactForm.companyPlaceholder': 'Nombre de tu empresa',
    'contactForm.servicePlaceholder': 'Selecciona un servicio',
    'contactForm.messagePlaceholder': 'Cuéntanos más sobre tu proyecto o necesidades...',
    'contactForm.sendMessage': 'Enviar Mensaje',
    'contactForm.messageSent': 'Mensaje enviado',
    'contactForm.messageDescription': 'Nos pondremos en contacto contigo pronto.',
    'contactForm.services.inspection': 'Inspección de Embarcaciones',
    'contactForm.services.certification': 'Certificación Marítima',
    'contactForm.services.consulting': 'Consultoría Técnica',
    'contactForm.services.training': 'Capacitación',
    'contactForm.services.audit': 'Auditoría de Sistemas',
    'contactForm.errorTitle' : 'Error al enviar la solicitud',
    'contactForm.errorDescription' : 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.',

    // About Us Page
    'aboutUs.heroTitle': 'Quiénes Somos',
    'aboutUs.heroSubtitle': 'SOCIEDAD ANDINA DE CERTIFICACIÓN S.A.S',
    'aboutUs.aboutTitle': 'Sobre Nosotros',
    'aboutUs.description1': 'Sociedad Andina de Certificación (SAC REGISTER) es una sociedad cuyos servicios se prestan para promover altos estándares en seguridad de embarcaciones y prevención de la contaminación del medio ambiente, a través de la aplicación de la reglamentación y verificaciones objetivas sobre el cumplimiento de la normatividad y los requerimientos estatutarios de la autoridad marítima, la Organización Marítima Internacional y las reglas de Clasificación.',
    'aboutUs.description2': 'SAC REGISTER nace ante la necesidad de mejorar el nivel de las inspecciones, condiciones de operación y mantenimiento de las embarcaciones, convirtiéndose en un apoyo a la Dirección General Marítima de la República de Colombia en las áreas de desarrollo de inspecciones, aplicación de requerimientos de la OMI y expedición de certificados nacionales e internacionales de acuerdo a las regulaciones del Sector Marítimo.',
    'aboutUs.mission': 'Misión',
    'aboutUs.missionText': 'SAC REGISTER es una organización dedicada a la Inspección y Certificación de Embarcaciones al servicio de la Comunidad Marítima Nacional e Internacional, creada para satisfacer las necesidades de sus clientes a través del cumplimiento de las reglas propias y requisitos establecidos por la autoridad marítima nacional (DIMAR) y la Organización Marítima Internacional (OMI) los cuales promueven la preservación de la vida humana, el medio ambiente, los buques y la carga.',
    'aboutUs.vision': 'Visión',
    'aboutUs.visionText': 'Para el 2031 SAC REGISTER será una OR líder en la Inspección y Certificación de embarcaciones a nivel nacional e internacional, destacándose por su alta efectividad y calidad en cada uno de los servicios ofrecidos y por mantener excelentes relaciones con sus proveedores y clientes.',
    'aboutUs.policy': 'Política Integral',
    'aboutUs.policyText1': 'SAC REGISTER es una organización dedicada a la inspección y certificación de embarcaciones al servicio de la comunidad marítima nacional e internacional, así como a la capacitación en el ámbito marítimo. Nuestro compromiso se fundamenta en los más altos principios éticos, asegurando el cumplimiento de los requisitos establecidos por las autoridades marítimas nacionales y la Organización Marítima Internacional.',
    'aboutUs.policyText2': 'En SAC REGISTER, fomentamos el profesionalismo, la comunicación y el sentido de pertenencia en todos nuestros miembros para garantizar la satisfacción de nuestros clientes y la mejora continua de nuestros procesos y servicios.',
    'aboutUs.commitmentTitle': 'Desde la alta dirección nos comprometemos a:',
    'aboutUs.commitment1': 'Cuidar el bienestar integral de nuestros trabajadores, promoviendo y manteniendo su salud física, mental y social.',
    'aboutUs.commitment2': 'Gestionar los riesgos de nuestras actividades, identificando peligros, evaluando riesgos y estableciendo controles.',
    'aboutUs.commitment3': 'Cumplir con la normativa vigente y otros requisitos aplicables en materia de seguridad y salud en el trabajo.',

    // Services Page
    'servicesPage.heroTitle': 'Nuestros Servicios',
    'servicesPage.heroSubtitle': 'SAC REGISTER ofrece servicios especializados en inspección y certificación de embarcaciones, promoviendo altos estándares en seguridad marina y prevención de la contaminación.',
    'servicesPage.mainTitle': 'Servicios Principales',
    'servicesPage.mainSubtitle': 'Nuestros servicios principales están diseñados para garantizar el cumplimiento de las normas de seguridad marítima con altos estandares.',
    'servicesPage.specializedTitle': 'Servicios Especializados',
    'servicesPage.specializedSubtitle': 'Amplia gama de servicios especializados para cubrir todas las necesidades del sector marítimo.',
    'servicesPage.additionalServices.classification.title': 'Clasificación',
    'servicesPage.additionalServices.classification.description': 'Servicios de clasificación de embarcaciones según estándares internacionales.',
    'servicesPage.additionalServices.audits.title': 'Auditorías',
    'servicesPage.additionalServices.audits.description': 'Auditorías técnicas y de cumplimiento normativo para compañias operadoras de embarcaciones y sus embarcaciones.',
    'servicesPage.additionalServices.omi.title': 'Cursos OMI',
    'servicesPage.additionalServices.omi.description': 'Formación especializada según los lineamientos de la Organización Marítima Internacional.',
    'servicesPage.additionalServices.certifications.title': 'Certificaciones Estatutarias',
    'servicesPage.additionalServices.certifications.description': 'Expedición de certificados nacionales e internacionales requeridos.',
    'servicesPage.additionalServices.engineering.title': 'Ingeniería Naval',
    'servicesPage.additionalServices.engineering.description': 'Servicios de ingeniería especializada para el sector marítimo.',
    'servicesPage.additionalServices.plans.title': 'Revisión y aprobación de planes, planos y cálculos',
    'servicesPage.additionalServices.plans.description': 'Validación experta de sus planes, planos y cálculos. Aseguramos la viabilidad y excelencia de su proyecto.',
    'servicesPage.ctaTitle': '¿Necesitas nuestros servicios?',
    'servicesPage.ctaSubtitle': 'Contáctanos para obtener más información sobre nuestros servicios especializados en certificación e inspección marítima.',
    'servicesPage.ctaButton': 'Contactar Ahora',

    // Contact Page
    'contactPage.heroTitle': 'Contáctanos',
    'contactPage.heroSubtitle': 'Estamos aquí para ayudarte con todos tus requerimientos de certificación e inspección marítima. Agenda una reunión con nuestros expertos.',
    'contactPage.scheduleTitle': 'Agendar Reunión',
    'contactPage.scheduleDescription': 'Complete el formulario y nos pondremos en contacto para coordinar una reunión.',
    'contactPage.firstName': 'Nombre',
    'contactPage.lastName': 'Apellido',
    'contactPage.firstNamePlaceholder': 'Su nombre',
    'contactPage.lastNamePlaceholder': 'Su apellido',
    'contactPage.emailPlaceholder': 'su.email@ejemplo.com',
    'contactPage.phonePlaceholder': '+57 300 123 4567',
    'contactPage.companyPlaceholder': 'Nombre de su empresa',
    'contactPage.serviceInterest': 'Servicio de Interés',
    'contactPage.selectService': 'Seleccione un servicio',
    'contactPage.services.classification': 'Clasificación',
    'contactPage.services.audits': 'Auditorías',
    'contactPage.services.omi': 'Cursos OMI',
    'contactPage.services.certifications': 'Certificaciones Estatutarias',
    'contactPage.services.engineering': 'Ingeniería Naval',
    'contactPage.services.inspection': 'Inspección y Aprobación',
    'contactPage.services.others': 'Otros',
    'contactPage.preferredDate': 'Fecha Preferida',
    'contactPage.preferredTime': 'Hora Preferida',
    'contactPage.selectTime': 'Seleccione una hora',
    'contactPage.messagePlaceholder': 'Cuéntanos más sobre tus necesidades y el motivo de la reunión...',
    'contactPage.scheduleButton': 'Agendar Reunión',
    'contactPage.contactInfo': 'Información de Contacto',
    'contactPage.contactDescription': 'Múltiples formas de contactarnos para su conveniencia.',
    'contactPage.phones': 'Teléfonos',
    'contactPage.address': 'Dirección',
    'contactPage.addressText': 'Carrera 3 No. 46-51, Oficina 905. \nCartagena de Indias - Colombia',
    'contactPage.schedule': 'Horario de Atención',
    'contactPage.scheduleText': 'Lunes a Viernes: 8:00 AM - 5:00 PM\nSábados: 8:00 AM - 12:00 PM',
    'contactPage.whyMeetingTitle': '¿Por qué agendar una reunión?',
    'contactPage.benefit1': 'Asesoría personalizada para sus necesidades específicas',
    'contactPage.benefit2': 'Evaluación detallada de los requerimientos de certificación',
    'contactPage.benefit3': 'Planificación de cronogramas y procesos',
    'contactPage.benefit4': 'Cotización detallada de servicios',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'header.contact': 'Contact',
    'header.portal': 'Login',
    'header.openMenu': 'Open menu',
    
    // Hero Section
    'hero.title': 'Maritime safety, certified trust.',
    'hero.subtitle': 'We work to protect human life at sea, ensuring safe and certified vessels that comply with high national and international standards.',
    'hero.cta': 'GET STARTED →',
    
    // Services Section
    'services.newConstruction.title': 'New construction, modification, and/or repair',
    'services.newConstruction.description': 'Classification inspections and statutory inspections for vessels under construction or modification.',
    'services.supervision.title': 'Supervision of units in operation',
    'services.supervision.description': 'Continuous supervision and technical monitoring of vessels for their operation.',
    'services.classification.title': 'Classification of existing units',
    'services.classification.description': 'Evaluation and technical classification of new/existing vessels according to national and international standards.',
    'services.offshore.title': 'Offshore technical supervision',
    'services.offshore.description': 'Specialized supervision of offshore installations and structures with high safety standards.',
    
    // Stats Section
    'stats.certifications': 'Certifications Issued',
    'stats.experience': 'Years of Experience',
    'stats.clients': 'Satisfied Clients',
    'stats.inspections': 'Inspections Performed',
    
    // Yacht Types
    'yachts.title': 'Vessel Types',
    'yachts.subtitle': 'We certify all types of vessels with the highest safety standards',
    'yachts.motorYacht': 'Motor Yacht',
    'yachts.sailingYacht': 'Sailing Yacht',
    'yachts.speedboat': 'Speedboat',
    
    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Schedule a meeting with our experts',
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.phone': 'Phone',
    'contact.company': 'Company',
    'contact.service': 'Service of interest',
    'contact.date': 'Preferred date',
    'contact.time': 'Preferred time',
    'contact.message': 'Message',
    'contact.submit': 'Schedule Meeting',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.rights': 'All rights reserved.',
    
    // Language Selector
    'language.spanish': 'Español',
    'language.english': 'English',
    
    // Stats Section
    'stats.about': 'ABOUT US',
    'stats.title': 'Committed to maritime safety',
    'stats.description': 'At SAC REGISTER we are an organization dedicated to the inspection and certification of Colombian flag vessels, serving the national and international maritime community.',
    'stats.fleet': 'YACHTS IN FLEET',
    'stats.happy': 'HAPPY CLIENTS',
    'stats.knowMore': 'LEARN MORE →',
    
    // Yacht Types Section
    'yachtTypes.title': 'SERVICES',
    'yachtTypes.subtitle': 'Classification and Naval Engineering.',
    'yachtTypes.subtitle2': 'Certification and inspection of vessels in maritime service.',
    'yachtTypes.seeMore': 'SEE MORE',
    'service.info' : "More information",
    'yachtTypes.classification.title': 'Classification',
    'yachtTypes.classification.description': 'Comprehensive technical evaluation of vessels.',
    'yachtTypes.audits.title': 'Vessel inspection',
    'yachtTypes.audits.description': 'Control and verification of maritime systems.',
    'yachtTypes.omi.title': 'Review and approval of plans, drawings and calculations',
    'yachtTypes.omi.description': 'Maritime training with international standards.',
    
    // Contact Form
    'contactForm.title': 'Contact Us',
    'contactForm.subtitle': 'Need maritime certification? Contact us to learn more about our services',
    'contactForm.requestConsult': 'Request a Consultation',
    'contactForm.formDescription': 'Fill out the form and we will contact you',
    'contactForm.fullName': 'Full Name',
    'contactForm.namePlaceholder': 'Your full name',
    'contactForm.emailPlaceholder': 'your@email.com',
    'contactForm.phonePlaceholder': '+57 300 123 4567',
    'contactForm.companyPlaceholder': 'Your company name',
    'contactForm.servicePlaceholder': 'Select a service',
    'contactForm.messagePlaceholder': 'Tell us more about your project or needs...',
    'contactForm.sendMessage': 'Send Message',
    'contactForm.messageSent': 'Message sent',
    'contactForm.messageDescription': 'We will contact you soon.',
    'contactForm.services.inspection': 'Vessel Inspection',
    'contactForm.services.certification': 'Maritime Certification',
    'contactForm.services.consulting': 'Technical Consulting',
    'contactForm.services.training': 'Training',
    'contactForm.services.audit': 'Systems Audit',
    'contactForm.errorTitle' : 'Error sending request',
    'contactForm.errorDescription' : 'An error occurred while sending the message. Please try again.',

    // About Us Page
    'aboutUs.heroTitle': 'About Us',
    'aboutUs.heroSubtitle': 'SOCIEDAD ANDINA DE CERTIFICACIÓN S.A.S',
    'aboutUs.aboutTitle': 'About Us',
    'aboutUs.description1': 'Sociedad Andina de Certificación (SAC REGISTER) is a company whose services are provided to promote high standards in vessel safety and environmental pollution prevention through the application of regulations and objective verifications of compliance with the standards and statutory requirements of the maritime authority, the International Maritime Organization, and classification rules.',
    'aboutUs.description2': 'SAC REGISTER was created to address the need to improve vessel inspections, operating conditions, and maintenance. It provides support to the Colombian General Maritime Directorate in the areas of conducting inspections, implementing IMO requirements, and issuing national and international certificates in accordance with maritime sector regulations.',
    'aboutUs.mission': 'Mission',
    'aboutUs.missionText': 'SAC REGISTER is an organization dedicated to the Inspection and Certification of Colombian flag vessels serving the National and International Maritime Community, created to meet the needs of its clients through compliance with its own rules and requirements established by the national maritime authority (DIMAR) and the International Maritime Organization (IMO) which promote the preservation of human life, the environment, ships and cargo.',
    'aboutUs.vision': 'Vision',
    'aboutUs.visionText': 'By 2031 SAC REGISTER will be a leading RO in the Inspection and Certification of Colombian flag vessels at national and international level, standing out for its high effectiveness and quality in each of the services offered and for maintaining excellent relationships with its suppliers and clients.',
    'aboutUs.policy': 'Comprehensive Policy',
    'aboutUs.policyText1': 'SAC REGISTER is an organization dedicated to the inspection and certification of vessels serving the national and international maritime community, as well as training in the maritime field. Our commitment is based on the highest ethical principles, ensuring compliance with the requirements established by national maritime authorities and the International Maritime Organization.',
    'aboutUs.policyText2': 'At SAC REGISTER, we promote professionalism, communication and a sense of belonging in all our members to guarantee customer satisfaction and continuous improvement of our processes and services.',
    'aboutUs.commitmentTitle': 'From senior management we commit to:',
    'aboutUs.commitment1': 'Care for the comprehensive well-being of our workers, promoting and maintaining their physical, mental and social health.',
    'aboutUs.commitment2': 'Manage the risks of our activities, identifying hazards, evaluating risks and establishing controls.',
    'aboutUs.commitment3': 'Comply with current regulations and other applicable requirements regarding occupational health and safety.',

    // Services Page
    'servicesPage.heroTitle': 'Our Services',
    'servicesPage.heroSubtitle': 'SAC REGISTER offers specialized services in vessel inspection and certification, promoting high standards in marine safety and pollution prevention.',
    'servicesPage.mainTitle': 'Main Services',
    'servicesPage.mainSubtitle': 'Our main services are designed to ensure compliance with maritime safety regulations at high standards.',
    'servicesPage.specializedTitle': 'Specialized Services',
    'servicesPage.specializedSubtitle': 'Wide range of specialized services to cover all the needs of the maritime sector.',
    'servicesPage.additionalServices.classification.title': 'Classification',
    'servicesPage.additionalServices.classification.description': 'Vessel classification services according to international standards.',
    'servicesPage.additionalServices.audits.title': 'Audits',
    'servicesPage.additionalServices.audits.description': 'Technical and regulatory compliance audits for vessel operating companies and their vessels.',
    'servicesPage.additionalServices.omi.title': 'IMO Courses',
    'servicesPage.additionalServices.omi.description': 'Specialized training according to International Maritime Organization guidelines.',
    'servicesPage.additionalServices.certifications.title': 'Statutory Certifications',
    'servicesPage.additionalServices.certifications.description': 'Issuance of required national and international certificates.',
    'servicesPage.additionalServices.engineering.title': 'Naval Engineering',
    'servicesPage.additionalServices.engineering.description': 'Specialized engineering services for the maritime sector.',
    'servicesPage.additionalServices.plans.title': 'Review and approval of plans, drawings and calculations',
    'servicesPage.additionalServices.plans.description': 'Expert validation of your plans, drawings, and calculations. We ensure the feasibility and excellence of your project.',
    'servicesPage.ctaTitle': 'Need our services?',
    'servicesPage.ctaSubtitle': 'Contact us for more information about our specialized services in maritime certification and inspection.',
    'servicesPage.ctaButton': 'Contact Now',

    // Contact Page
    'contactPage.heroTitle': 'Contact Us',
    'contactPage.heroSubtitle': 'We are here to help you with all your maritime certification and inspection requirements. Schedule a meeting with our experts.',
    'contactPage.scheduleTitle': 'Schedule Meeting',
    'contactPage.scheduleDescription': 'Complete the form and we will contact you to coordinate a meeting.',
    'contactPage.firstName': 'First Name',
    'contactPage.lastName': 'Last Name',
    'contactPage.firstNamePlaceholder': 'Your first name',
    'contactPage.lastNamePlaceholder': 'Your last name',
    'contactPage.emailPlaceholder': 'your.email@example.com',
    'contactPage.phonePlaceholder': '+57 300 123 4567',
    'contactPage.companyPlaceholder': 'Your company name',
    'contactPage.serviceInterest': 'Service of Interest',
    'contactPage.selectService': 'Select a service',
    'contactPage.services.classification': 'Classification',
    'contactPage.services.audits': 'Audits',
    'contactPage.services.omi': 'IMO Courses',
    'contactPage.services.certifications': 'Statutory Certifications',
    'contactPage.services.engineering': 'Naval Engineering',
    'contactPage.services.inspection': 'Inspection and Approval',
    'contactPage.services.others': 'Others',
    'contactPage.preferredDate': 'Preferred Date',
    'contactPage.preferredTime': 'Preferred Time',
    'contactPage.selectTime': 'Select a time',
    'contactPage.messagePlaceholder': 'Tell us more about your needs and the reason for the meeting...',
    'contactPage.scheduleButton': 'Schedule Meeting',
    'contactPage.contactInfo': 'Contact Information',
    'contactPage.contactDescription': 'Multiple ways to contact us for your convenience.',
    'contactPage.phones': 'Phones',
    'contactPage.address': 'Address',
    'contactPage.addressText': 'Carrera 3 No. 46-51, Office 905. \nCartagena de Indias - Colombia',
    'contactPage.schedule': 'Business Hours',
    'contactPage.scheduleText': 'Monday to Friday: 8:00 AM - 5:00 PM\nSaturdays: 8:00 AM - 12:00 PM',
    'contactPage.whyMeetingTitle': 'Why schedule a meeting?',
    'contactPage.benefit1': 'Personalized advice for your specific needs',
    'contactPage.benefit2': 'Detailed evaluation of certification requirements',
    'contactPage.benefit3': 'Planning of schedules and processes',
    'contactPage.benefit4': 'Detailed service quotation',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}