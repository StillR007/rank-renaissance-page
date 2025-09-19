

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Как это <span className="text-gradient">работает</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Прозрачный процесс работы от первого контакта до достижения результата
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Анализ и аудит</h3>
                  <p className="text-muted-foreground">
                    Проводим комплексный технический и контентный аудит вашего сайта. 
                    Анализируем конкурентов и семантическое ядро.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Стратегия</h3>
                  <p className="text-muted-foreground">
                    Разрабатываем индивидуальную стратегию продвижения на основе 
                    результатов аудита и ваших бизнес-целей.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Реализация</h3>
                  <p className="text-muted-foreground">
                    Выполняем техническую оптимизацию, работаем с контентом, 
                    строим ссылочную массу согласно разработанной стратегии.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Контроль результата</h3>
                  <p className="text-muted-foreground">
                    Постоянно отслеживаем позиции, анализируем трафик и 
                    корректируем стратегию для достижения максимального результата.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Что вы получаете</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Детальный план работ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Еженедельные отчеты</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Персональный менеджер</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Доступ к аналитике 24/7</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Гарантии</h4>
                <p className="text-muted-foreground">
                  Мы гарантируем улучшение позиций в первые 30 дней работы. 
                  Если результата нет - возвращаем деньги.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HowItWorks;