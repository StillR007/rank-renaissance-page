import { Button } from "@/components/ui/button";
import heroSphere from "@/assets/hero-sphere.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">SEO</span>
                <br />
                <span className="text-gradient">оптимизация</span>
                <br />
                <span className="text-foreground">сайтов</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Увеличиваем органический трафик и позиции в поисковых системах. 
                Работаем с результатом.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-4"
              >
                Заказать аудит
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-border hover:bg-secondary"
              >
                Посмотреть кейсы
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Бесплатный аудит</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Результат за 30 дней</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={heroSphere} 
                alt="SEO Optimization" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain glow-effect"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;