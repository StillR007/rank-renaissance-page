import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                О нашей 
                <span className="text-gradient"> компании</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы — команда SEO-экспертов с более чем 8-летним опытом работы в области 
                поисковой оптимизации. Наша миссия — помочь бизнесу достичь максимальной 
                видимости в интернете.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Анализируем специфику каждого бизнеса и разрабатываем уникальную 
                    стратегию продвижения с учетом целей и особенностей ниши.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Прозрачная отчетность</h3>
                  <p className="text-muted-foreground">
                    Предоставляем детальные отчеты о проделанной работе и достигнутых 
                    результатах. Вы всегда знаете, за что платите.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Быстрые результаты</h3>
                  <p className="text-muted-foreground">
                    Применяем только white-hat методы и современные технологии, 
                    которые обеспечивают устойчивый рост позиций.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="card-shadow border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">8+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">👥</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-muted-foreground">специалистов</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">🌍</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">15</div>
                  <div className="text-muted-foreground">стран мира</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">4.9</div>
                  <div className="text-muted-foreground">рейтинг клиентов</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;