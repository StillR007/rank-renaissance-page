import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Технический аудит",
    description: "Глубокий анализ технических аспектов сайта: скорость загрузки, мобильная версия, структура URL"
  },
  {
    number: "02", 
    title: "Контентная оптимизация",
    description: "Оптимизация текстов, заголовков, мета-тегов и создание SEO-контента для целевых запросов"
  },
  {
    number: "03",
    title: "Внешняя оптимизация",
    description: "Работа с внешними факторами: качественные ссылки, упоминания бренда, локальное SEO"
  },
  {
    number: "04",
    title: "Аналитика и отчетность", 
    description: "Настройка аналитики, регулярные отчеты по позициям, трафику и конверсиям"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Когда нужна SEO-оптимизация?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к продвижению сайта в поисковых системах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-transform duration-300 card-shadow border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gradient">
                    {service.number}/
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;