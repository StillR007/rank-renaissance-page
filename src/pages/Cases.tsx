import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Генерация данных для 140 кейсов
const generateCases = () => {
  const industries = [
    "E-commerce", "Медицина", "Строительство", "Финансы", "Образование", 
    "Недвижимость", "Автомобили", "Красота", "Спорт", "Технологии",
    "Туризм", "Ресторанный бизнес", "Производство", "Логистика", "Юриспруденция"
  ];
  
  const companies = [
    "Интернет-магазин", "Клиника", "Строительная компания", "Банк", "Учебный центр",
    "Агентство недвижимости", "Автосалон", "Салон красоты", "Фитнес-центр", "IT-компания",
    "Турагентство", "Ресторан", "Завод", "Логистический центр", "Юридическая фирма"
  ];

  const results = [
    "+250% органического трафика", "+180% заявок с сайта", "ТОП-3 по 85% запросов",
    "+320% продаж онлайн", "+150% конверсий", "Рост выручки на 200%",
    "+280% целевых визитов", "ТОП-5 по всем ключевым запросам", "+190% лидов",
    "+350% просмотров страниц", "+220% времени на сайте", "Снижение отказов на 45%"
  ];

  const periods = [
    "за 3 месяца", "за 4 месяца", "за 5 месяцев", "за 6 месяцев", "за 2 месяца"
  ];

  const descriptions = [
    "Комплексная техническая оптимизация и работа с контентом",
    "Локальное SEO и оптимизация под региональные запросы", 
    "Семантическое ядро и внутренняя перелинковка",
    "Скоростная оптимизация и мобильная адаптация",
    "Контентная стратегия и link building",
    "UX/UI оптимизация и поведенческие факторы"
  ];

  return Array.from({ length: 140 }, (_, index) => ({
    id: index + 1,
    title: `${companies[index % companies.length]} ${Math.floor(Math.random() * 100 + 1)}`,
    industry: industries[index % industries.length],
    result: results[index % results.length],
    period: periods[index % periods.length], 
    description: descriptions[index % descriptions.length],
    budget: `${Math.floor(Math.random() * 500 + 100)}к ₽`,
    duration: `${Math.floor(Math.random() * 8 + 3)} месяцев`
  }));
};

const Cases = () => {
  const [cases] = useState(generateCases());
  const [displayedCases, setDisplayedCases] = useState(cases.slice(0, 12));
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("Все");

  const industries = ["Все", ...Array.from(new Set(cases.map(c => c.industry)))];

  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "Все" || caseItem.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = displayedCases.length;
      const newCases = filteredCases.slice(currentLength, currentLength + 12);
      setDisplayedCases(prev => [...prev, ...newCases]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setDisplayedCases(filteredCases.slice(0, 12));
  }, [searchTerm, selectedIndustry]);

  const hasMore = displayedCases.length < filteredCases.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero секция */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Наши <span className="text-gradient">кейсы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов в различных нишах
            </p>
          </div>

          {/* Фильтры */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Поиск по названию или отрасли..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background border-border"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Badge
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedIndustry === industry 
                      ? "hero-gradient text-primary-foreground" 
                      : "hover:bg-secondary"
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {displayedCases.map((caseItem, index) => (
              <Card 
                key={caseItem.id}
                className="group hover:scale-105 transition-all duration-300 card-shadow border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${(index % 12) * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {caseItem.industry}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Результат:</span>
                      <span className="text-sm font-medium">{caseItem.period}</span>
                    </div>
                    <div className="text-2xl font-bold text-gradient">
                      {caseItem.result}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {caseItem.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <div className="text-xs text-muted-foreground">Бюджет</div>
                      <div className="font-semibold text-foreground">{caseItem.budget}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Срок</div>
                      <div className="font-semibold text-foreground">{caseItem.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Загрузить ещё */}
          {hasMore && (
            <div className="text-center">
              <Button 
                onClick={loadMore}
                disabled={loading}
                size="lg"
                className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-4"
              >
                {loading ? "Загружаем..." : "Загрузить ещё"}
              </Button>
            </div>
          )}

          {!hasMore && displayedCases.length > 0 && (
            <div className="text-center">
              <p className="text-muted-foreground">Все кейсы загружены</p>
            </div>
          )}

          {displayedCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Кейсы по данным критериям не найдены</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;