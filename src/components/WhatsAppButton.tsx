import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
  import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "+573205651098"; // Reemplaza con el número real
  const message = "Hola, me gustaría obtener más información sobre sus servicios de certificación marítima.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
 <Button
  onClick={handleWhatsAppClick}
  className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center"
  aria-label="Contactar por WhatsApp"
>
  <FaWhatsapp className="!w-8 !h-8" />
</Button>

  );
};

export { WhatsAppButton };