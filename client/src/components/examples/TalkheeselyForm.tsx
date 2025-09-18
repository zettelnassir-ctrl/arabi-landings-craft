import TalkheeselyForm from '../TalkheeselyForm';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

export default function TalkheeselyFormExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TalkheeselyForm />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}