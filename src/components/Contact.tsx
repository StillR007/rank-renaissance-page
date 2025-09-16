import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Получите бесплатный 
                <span className="text-gradient"> SEO-аудит</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Узнайте, как можно улучшить позиции вашего сайта в поисковых системах
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Детальный анализ</h3>
                  <p className="text-muted-foreground">Проверим технические и контентные аспекты</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Конкретные рекомендации</h3>
                  <p className="text-muted-foreground">Получите план действий для улучшения позиций</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Персональная консультация</h3>
                  <p className="text-muted-foreground">Обсудим результаты аудита лично</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="card-shadow border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-background border-border focus:border-primary"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-background border-border focus:border-primary"
                  />
                  <Input 
                    placeholder="URL сайта" 
                    className="bg-background border-border focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Расскажите о ваших задачах" 
                    rows={4}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg py-3"
                >
                  Получить бесплатный аудит
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;