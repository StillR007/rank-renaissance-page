import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface CaseItem {
  id: number;
  title: string;
  industry: string;
  result: string;
  period: string;
  description: string;
  budget: string;
  duration: string;
}

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseItem: CaseItem | null;
}

const CaseModal = ({ isOpen, onClose, caseItem }: CaseModalProps) => {
  if (!caseItem) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      if (window.location.pathname === '/') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = '/#contact';
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-background max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="space-y-3">
            <Badge variant="outline" className="text-primary border-primary/30 w-fit">
              {caseItem.industry}
            </Badge>
            <DialogTitle className="text-2xl font-bold text-foreground text-left">
              {caseItem.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Основной результат */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Достигнутый результат</h3>
            <div className="text-3xl font-bold text-gradient mb-2">
              {caseItem.result}
            </div>
            <p className="text-muted-foreground">{caseItem.period}</p>
          </div>

          {/* Детали проекта */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Бюджет проекта</h4>
                <p className="text-lg text-muted-foreground">{caseItem.budget}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Срок реализации</h4>
                <p className="text-lg text-muted-foreground">{caseItem.duration}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Описание работ</h4>
              <p className="text-muted-foreground leading-relaxed">{caseItem.description}</p>
            </div>
          </div>

          {/* Что было сделано */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Выполненные работы</h4>
            <div className="grid gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Комплексный технический аудит сайта</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Оптимизация структуры и контента</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Наращивание качественной ссылочной массы</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Настройка аналитики и отчетности</span>
              </div>
            </div>
          </div>

          {/* Метрики до и после */}
          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4">Ключевые метрики</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground mb-1">До</div>
                <div className="text-sm text-muted-foreground">Позиции ТОП-10: 12%</div>
                <div className="text-sm text-muted-foreground">Органический трафик: 850 визитов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">После</div>
                <div className="text-sm text-muted-foreground">Позиции ТОП-10: 67%</div>
                <div className="text-sm text-muted-foreground">Органический трафик: 2980 визитов</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={scrollToContact}
              className="flex-1 hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Хочу такой же результат
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border hover:bg-secondary"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseModal;