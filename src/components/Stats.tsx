const stats = [
  {
    number: "150+",
    label: "Успешных проектов",
  },
  {
    number: "3x", 
    label: "Рост трафика в среднем",
  },
  {
    number: "30",
    label: "Дней до первых результатов",
  },
  {
    number: "95%",
    label: "Клиентов остаются с нами",
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;