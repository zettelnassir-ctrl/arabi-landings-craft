import { useState } from 'react';
import ComingSoonVideoDialog from '../ComingSoonVideoDialog';
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ComingSoonVideoDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>فتح نافذة الفيديو</Button>
        <ComingSoonVideoDialog open={open} onOpenChange={setOpen} />
      </div>
    </TooltipProvider>
  );
}