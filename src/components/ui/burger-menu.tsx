import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface BurgerMenuProps {
  onConsultationClick: () => void;
}

const BurgerMenu = ({ onConsultationClick }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConsultationClick = () => {
    setIsOpen(false);
    onConsultationClick();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-sm">
        <div className="flex flex-col space-y-6 mt-8">
          {/* Услуги */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Услуги</h3>
            <div className="space-y-3 pl-4">
              <Link
                to="/services/technical-audit"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Технический аудит
              </Link>
              <Link
                to="/services/content-optimization"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Контентная оптимизация
              </Link>
              <Link
                to="/services/link-building"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Внешняя оптимизация
              </Link>
              <Link
                to="/services/analytics"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Аналитика
              </Link>
            </div>
          </div>

          {/* Остальные ссылки */}
          <Link
            to="/cases"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Кейсы
          </Link>

          <Link
            to="/how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Как это работает
          </Link>

          {/* Кнопка консультации */}
          <Button
            onClick={handleConsultationClick}
            className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity mt-8"
          >
            Получить бесплатную консультацию
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;