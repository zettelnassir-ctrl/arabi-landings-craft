import TalkheeselyHero from '../TalkheeselyHero';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

export default function TalkheeselyHeroExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TalkheeselyHero />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}