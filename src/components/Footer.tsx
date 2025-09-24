import { Ship, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-sac.png";

export function Footer() {


  const navigateToSocialMedia = (platform: string) => {
    const urls: { [key: string]: string } = {
      facebook: "https://facebook.com/sacregister",
      instagram: "https://www.instagram.com/sacregister/",
      linkedin: "https://www.linkedin.com/company/sociedad-andina-de-certificaciones/"
    };

    const url = urls[platform];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="luxury-gradient text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <a href="/">
                <img
                  src={logo} // Ruta a tu imagen de logo
                  alt="SAC REGISTER"
                  className="h-20 w-auto md:h-20" // Altura responsive
                />
              </a>
            </div>
            <p className="text-white/80 leading-relaxed">
              SAC REGISTER es una organización dedicada a la inspección y certificación de embarcaciones al servicio de la comunidad marítima nacional e internacional, así como a la capacitación en el ámbito marítimo.
            </p>
            <div className="flex space-x-4">

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20"
                onClick={() => navigateToSocialMedia("instagram")}

              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20"
                onClick={() => navigateToSocialMedia("linkedin")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Servicios</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Clasificación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auditorías</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cursos OMI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificaciones Estatutarias
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingenieria Naval</a></li>
            </ul>
          </div>

          {/* Fleet */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Enlaces</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="quienes-somos" className="hover:text-white transition-colors">Quienes somos</a></li>
              <li><a href="servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(605) 6794802 - +573205651098</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@sacregister.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Carrera 3 No. 46-51, Oficina 905 Edificio laguna 46<br />Cartagena de Indias - Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2025 Sac Register. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}