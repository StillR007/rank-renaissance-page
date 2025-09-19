import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SEO Optimize</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors bg-transparent">
                    Услуги
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/technical-audit"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Технический аудит</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Комплексная проверка технических аспектов сайта
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/content-optimization"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Контентная оптимизация</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Оптимизация контента под поисковые запросы
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/link-building"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Внешняя оптимизация</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Наращивание качественной ссылочной массы
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/analytics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Аналитика</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Настройка и анализ метрик эффективности
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Кейсы
            </Link>
            
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              Как это работает
            </Link>
          </nav>

          <Button 
            onClick={scrollToContact}
            variant="default" 
            className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Получить бесплатную консультацию
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;