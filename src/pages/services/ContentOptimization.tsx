import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ContentOptimization = () => {
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
                <span className="text-gradient">Контентная</span> оптимизация
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Создание и оптимизация контента, который привлекает целевую аудиторию 
                и высоко ранжируется в поисковых системах
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Что мы делаем</h3>
                    <div className="space-y-4">
                      {[
                        "Анализ семантического ядра",
                        "Исследование конкурентов и их контента",
                        "Оптимизация существующих страниц",
                        "Создание новых посадочных страниц",
                        "Написание SEO-текстов",
                        "Оптимизация изображений и медиа",
                        "Создание FAQ и полезных разделов",
                        "Разработка контент-плана"
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Преимущества</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Уникальный контент</h4>
                        <p className="text-muted-foreground">
                          Создаем оригинальные тексты, которые отвечают на запросы пользователей
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">SEO-оптимизация</h4>
                        <p className="text-muted-foreground">
                          Естественное вхождение ключевых слов без переспама
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Конверсии</h4>
                        <p className="text-muted-foreground">
                          Контент, который не только привлекает, но и продает
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Стоимость</h4>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">25 000</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Срок выполнения: 7-10 рабочих дней
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Заказать оптимизацию
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Этапы работы
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Анализ</h4>
                  <p className="text-sm text-muted-foreground">
                    Изучаем ваш бизнес, аудиторию и конкурентов
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Стратегия</h4>
                  <p className="text-sm text-muted-foreground">
                    Разрабатываем контент-стратегию и план публикаций
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Создание</h4>
                  <p className="text-sm text-muted-foreground">
                    Пишем и оптимизируем контент согласно стратегии
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-foreground">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Контроль</h4>
                  <p className="text-sm text-muted-foreground">
                    Отслеживаем результаты и корректируем стратегию
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

export default ContentOptimization;