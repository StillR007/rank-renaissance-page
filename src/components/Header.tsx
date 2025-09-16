import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SEO Optimize</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="/cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Кейсы
            </a>
            <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              О нас
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <Button variant="default" className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity">
            Получить консультацию
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;