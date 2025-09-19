import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const TechnicalAudit = () => {
  const scrollToContact = () => {
    // Если мы на главной странице, скроллим к форме
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если не на главной, переходим на главную с якорем
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
                <span className="text-gradient">Технический</span> аудит
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Комплексная диагностика технических аспектов вашего сайта для выявления 
                факторов, мешающих продвижению в поисковых системах
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Что включает аудит</h3>
                    <div className="space-y-4">
                      {[
                        "Анализ скорости загрузки страниц",
                        "Проверка мобильной адаптивности",
                        "Анализ структуры URL и навигации",
                        "Проверка метатегов и заголовков",
                        "Анализ внутренней перелинковки",
                        "Проверка файла robots.txt и sitemap.xml",
                        "Анализ дубликатов контента",
                        "Проверка SSL-сертификата и безопасности"
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Результат</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Подробный отчет</h4>
                        <p className="text-muted-foreground">
                          Получите детальный анализ всех технических проблем 
                          с приоритизацией по важности
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">План исправлений</h4>
                        <p className="text-muted-foreground">
                          Пошаговые инструкции по устранению выявленных проблем
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Консультация</h4>
                        <p className="text-muted-foreground">
                          Персональная консультация по результатам аудита
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Стоимость</h4>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">15 000</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Срок выполнения: 3-5 рабочих дней
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Заказать аудит
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Почему технический аудит важен
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-primary-foreground">⚡</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Скорость загрузки</h4>
                  <p className="text-sm text-muted-foreground">
                    Медленные сайты теряют до 40% посетителей и хуже ранжируются
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-primary-foreground">📱</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Мобильность</h4>
                  <p className="text-sm text-muted-foreground">
                    Google использует мобильную версию для индексации и ранжирования
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-primary-foreground">🔍</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Индексация</h4>
                  <p className="text-sm text-muted-foreground">
                    Правильная структура помогает поисковикам лучше понимать сайт
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalAudit;