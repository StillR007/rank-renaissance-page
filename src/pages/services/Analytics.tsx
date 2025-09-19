import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Analytics = () => {
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
                <span className="text-gradient">Аналитика</span> и отчетность
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Настройка систем аналитики, создание подробных отчетов и постоянный 
                мониторинг эффективности SEO-продвижения
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Что мы настраиваем</h3>
                    <div className="space-y-4">
                      {[
                        "Google Analytics 4 и Яндекс.Метрика",
                        "Google Search Console и Яндекс.Вебмастер",
                        "Системы отслеживания позиций",
                        "Мониторинг ссылочной массы",
                        "Отслеживание конверсий и целей",
                        "Настройка пользовательских отчетов",
                        "Интеграция с CRM-системами",
                        "Автоматические уведомления об изменениях"
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Отчеты</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Еженедельные сводки</h4>
                        <p className="text-muted-foreground">
                          Краткие отчеты о ключевых изменениях и достижениях
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Месячные отчеты</h4>
                        <p className="text-muted-foreground">
                          Подробный анализ всех метрик с выводами и рекомендациями
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Персональная панель</h4>
                        <p className="text-muted-foreground">
                          Доступ к онлайн-дашборду с актуальными данными 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Стоимость</h4>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">20 000</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Настройка + 3 месяца ведения отчетности
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Заказать настройку
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Основные метрики
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">📊</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Позиции</h4>
                    <p className="text-sm text-muted-foreground">
                      Отслеживаем рост позиций по ключевым запросам
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">🚀</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Трафик</h4>
                    <p className="text-sm text-muted-foreground">
                      Анализируем органический и общий трафик сайта
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">💰</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Конверсии</h4>
                    <p className="text-sm text-muted-foreground">
                      Отслеживаем достижение бизнес-целей
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-primary-foreground">📈</span>
                    </div>
                    <h4 className="font-semibold text-foreground">ROI</h4>
                    <p className="text-sm text-muted-foreground">
                      Рассчитываем возврат инвестиций в SEO
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">Преимущества</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>• Полная прозрачность работы</p>
                      <p>• Данные в режиме реального времени</p>
                      <p>• Понятные графики и диаграммы</p>
                      <p>• Сравнение с конкурентами</p>
                      <p>• Прогнозирование результатов</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">Что получаете</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>• Настроенные системы аналитики</p>
                      <p>• Доступ к персональной панели</p>
                      <p>• Еженедельные и месячные отчеты</p>
                      <p>• Рекомендации по улучшению</p>
                      <p>• Техническую поддержку</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;