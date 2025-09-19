const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SEO Optimize</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональная SEO-оптимизация для роста вашего бизнеса
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Услуги</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Технический аудит</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Контентная оптимизация</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Внешняя оптимизация</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Аналитика</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Компания</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="/cases" className="hover:text-primary transition-colors">Кейсы</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="tel:+79994992107" className="hover:text-primary transition-colors">
                  +7 (999) 499-21-07
                </a>
              </li>
              <li>
                <a href="mailto:OMarkinaRabota@yandex.ru" className="hover:text-primary transition-colors">
                  OMarkinaRabota@yandex.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 SEO Optimize. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;