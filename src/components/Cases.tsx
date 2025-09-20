import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CaseModal from "@/components/CaseModal";

const cases = [
  {
    id: 1,
    title: "Интернет-магазин электроники",
    industry: "E-commerce",
    result: "+250% органического трафика",
    period: "за 6 месяцев",
    description: "Комплексная оптимизация каталога, технические доработки и контентная стратегия",
    budget: "180к ₽",
    duration: "6 месяцев"
  },
  {
    id: 2,
    title: "Медицинская клиника",
    industry: "Медицина", 
    result: "ТОП-3 по 85% запросов",
    period: "за 4 месяца",
    description: "Локальное SEO, оптимизация под медицинские запросы, работа с репутацией",
    budget: "120к ₽",
    duration: "4 месяца"
  },
  {
    id: 3,
    title: "Строительная компания",
    industry: "Строительство",
    result: "+180% заявок с сайта", 
    period: "за 5 месяцев",
    description: "Региональное продвижение, оптимизация коммерческих страниц",
    budget: "150к ₽", 
    duration: "5 месяцев"
  }
];

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseModal = (caseItem: any) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };
  return (
    <section id="cases" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Наши кейсы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты наших клиентов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 card-shadow border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="text-sm text-primary font-medium uppercase tracking-wide">
                    {caseItem.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {caseItem.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gradient">
                    {caseItem.result}
                  </div>
                  <div className="text-muted-foreground">
                    {caseItem.period}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {caseItem.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => openCaseModal(caseItem)}
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-4"
          >
            Смотреть все кейсы
          </Button>
        </div>
      </div>
      
      <CaseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseItem={selectedCase}
      />
    </section>
  );
};

export default Cases;