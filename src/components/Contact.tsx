import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SuccessModal from "@/components/SuccessModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors = { name: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен для заполнения";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSuccessModalOpen(true);
      // Сброс формы
      setFormData({ name: "", email: "", website: "", message: "" });
      setErrors({ name: "", email: "" });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Очистка ошибок при вводе
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Получите бесплатную 
                <span className="text-gradient"> консультацию</span>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-background border-border focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Ваше имя"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-background border-border focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium text-foreground">
                      URL сайта
                    </Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="bg-background border-border focus:border-primary"
                      placeholder="https://yoursite.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Расскажите о ваших задачах"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg py-3"
                >
                  Получить бесплатную консультацию
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-primary hover:underline transition-all duration-300 hover:text-primary/80">политикой конфиденциальности</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </section>
  );
};

export default Contact;