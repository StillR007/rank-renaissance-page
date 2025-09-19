import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const LinkBuilding = () => {
  const scrollToContact = () => {
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Breadcrumbs />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                <span className="text-gradient">Внешняя</span> оптимизация
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Наращивание качественной ссылочной массы для повышения авторитета 
                вашего сайта в глазах поисковых систем
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Наши методы</h3>
                    <div className="space-y-4">
                      {[
                        "Размещение на тематических сайтах",
                        "Публикации в авторитетных изданиях",
                        "Гостевые статьи и экспертные материалы",
                        "Ссылки из социальных сетей",
                        "Партнерские обмены",
                        "Упоминания бренда без ссылок",
                        "Локальные справочники и каталоги",
                        "Анализ и дизавуация токсичных ссылок"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Гарантии качества</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Белые методы</h4>
                        <p className="text-muted-foreground">
                          Используем только безопасные методы, соответствующие требованиям поисковиков
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Качественные доноры</h4>
                        <p className="text-muted-foreground">
                          Работаем только с проверенными сайтами с хорошими метриками
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Постепенность</h4>
                        <p className="text-muted-foreground">
                          Наращиваем ссылочную массу естественными темпами
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Стоимость</h4>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">35 000</span>
                    <span className="text-muted-foreground">₽/мес</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Минимальный период: 3 месяца
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Начать продвижение
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Почему ссылки важны
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">🏆</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Авторитет</h4>
                    <p className="text-sm text-muted-foreground">
                      Качественные ссылки повышают доверие поисковиков к вашему сайту
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">📈</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Рост позиций</h4>
                    <p className="text-sm text-muted-foreground">
                      Правильная ссылочная стратегия обеспечивает стабильный рост в ТОП
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">🎯</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Целевой трафик</h4>
                    <p className="text-sm text-muted-foreground">
                      Ссылки с тематических сайтов привлекают заинтересованных посетителей
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Что входит в пакет</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Ежемесячно получаете:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 15-20 качественных ссылок</li>
                        <li>• Отчет о проделанной работе</li>
                        <li>• Анализ роста ссылочной массы</li>
                        <li>• Рекомендации по дальнейшему развитию</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Дополнительно:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Мониторинг позиций</li>
                        <li>• Анализ конкурентов</li>
                        <li>• Консультации по стратегии</li>
                        <li>• Техническая поддержка</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinkBuilding;