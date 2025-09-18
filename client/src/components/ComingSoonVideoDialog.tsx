import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

interface ComingSoonVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComingSoonVideoDialog = ({ open, onOpenChange }: ComingSoonVideoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <Play className="w-6 h-6 text-primary" />
            فيديو توضيحي قريبًا!
          </DialogTitle>
          <DialogDescription className="sr-only">
            إشعار بأن الفيديو التوضيحي لتطبيق تلخيصلي قادم قريباً
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* أيقونة الفيديو */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <Play className="w-10 h-10 text-primary-foreground ml-1" />
            </div>
          </div>

          {/* النص */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              نحن نعمل على إنتاج فيديو توضيحي
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              سيتم إصدار فيديو شامل يوضح طريقة عمل تطبيق تلخيصلي وكيفية استخدامه لتلخيص محاضراتك بسهولة.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <Clock className="w-4 h-4" />
              <span>متوفر قريبًا</span>
            </div>
          </div>

          {/* زر الإغلاق */}
          <Button 
            onClick={() => {
              console.log('Video dialog closed');
              onOpenChange(false);
            }}
            className="w-full hover-elevate active-elevate-2"
            variant="outline"
            data-testid="button-close-video"
          >
            حسنًا، سأنتظر
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonVideoDialog;