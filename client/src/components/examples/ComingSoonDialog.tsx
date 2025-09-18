import { useState } from 'react';
import ComingSoonDialog from '../ComingSoonDialog';
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

export default function ComingSoonDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="p-8">
          <Button onClick={() => setOpen(true)}>فتح نافذة التسجيل</Button>
          <ComingSoonDialog open={open} onOpenChange={setOpen} />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}