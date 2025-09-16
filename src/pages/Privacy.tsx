import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Политика <span className="text-gradient">конфиденциальности</span>
              </h1>
              <p className="text-muted-foreground">
                Последнее обновление: 15 сентября 2024 года
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
                  действует в отношении всей информации, включая персональные данные в понимании 
                  применимого законодательства, которую компания SEO Optimize и/или её аффилированные 
                  лица могут получить о пользователе во время использования им сайта seo-optimize.ru.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Какую информацию мы собираем</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Мы можем собирать следующие типы информации:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Имя и контактные данные (email, телефон)</li>
                    <li>URL сайта и информация о бизнесе</li>
                    <li>Данные об использовании сайта (IP-адрес, браузер, операционная система)</li>
                    <li>Информация, предоставленная в формах обратной связи</li>
                    <li>Cookies и аналогичные технологии отслеживания</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Как мы используем информацию</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Мы используем собранную информацию для:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Предоставления SEO-услуг и консультаций</li>
                    <li>Связи с вами по поводу наших услуг</li>
                    <li>Улучшения качества наших услуг</li>
                    <li>Проведения аналитики и исследований</li>
                    <li>Соблюдения правовых обязательств</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Передача данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не продаём, не сдаём в аренду и не передаём персональные данные третьим лицам, 
                  за исключением случаев, когда это необходимо для предоставления услуг (например, 
                  аналитические сервисы) или когда этого требует закон.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Наш сайт использует cookies для улучшения пользовательского опыта, анализа трафика 
                  и персонализации контента. Вы можете управлять настройками cookies в своём браузере.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Безопасность данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы применяем технические и организационные меры безопасности для защиты ваших 
                  персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Ваши права</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    В отношении ваших персональных данных вы имеете право:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Получать информацию об обработке ваших данных</li>
                    <li>Требовать исправления неточных данных</li>
                    <li>Требовать удаления данных</li>
                    <li>Отзывать согласие на обработку</li>
                    <li>Ограничивать обработку данных</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Изменения в политике</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы можем периодически обновлять эту Политику конфиденциальности. 
                  О существенных изменениях мы уведомим вас через сайт или по электронной почте.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Контактная информация</h2>
                <div className="bg-secondary/50 p-6 rounded-lg space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    По всем вопросам, связанным с обработкой персональных данных, 
                    вы можете обратиться к нам:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@seo-optimize.ru</p>
                    <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                    <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 123, офис 456</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;