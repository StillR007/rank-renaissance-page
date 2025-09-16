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
              <li><a href="#" className="hover:text-primary transition-colors">Технический аудит</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контентная оптимизация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Внешняя оптимизация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Компания</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>+7 (495) 123-45-67</li>
              <li>info@seo-optimize.ru</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 SEO Optimize. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;