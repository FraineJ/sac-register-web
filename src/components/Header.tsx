import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import logo from "@/assets/logo-sac.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navigationLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/quienes-somos", label: t('nav.about') },
    { href: "/servicios", label: t('nav.services') },
    { href: "/contacto", label: t('nav.contact') },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6 lg:px-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo} // Ruta a tu imagen de logo
              alt="SAC REGISTER"
              className="h-20 w-auto md:h-20" // Altura responsive
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageSelector />
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-white/10 p-2"
                aria-label={t('header.openMenu')}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-primary border-primary"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white text-lg hover:text-white/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <LanguageSelector />
                </div>
                <Button
                  size="sm"
                  className="self-start border-white/30 text-white hover:bg-white/10 mt-4 bg-"
                  variant="outline"
                >
                  {t('header.portal')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Contact Button */}
          <Button
            size="sm"
            className="hidden sm:flex border-white/30 text-white bg-"
            variant="outline"
          >
            {t('header.portal')}
          </Button>
        </div>
      </nav>
    </header>
  );
}