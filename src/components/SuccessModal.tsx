import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-background text-center">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Заявка отправлена!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для обсуждения деталей консультации.
          </p>
          
          <Button
            onClick={onClose}
            className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Понятно
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;