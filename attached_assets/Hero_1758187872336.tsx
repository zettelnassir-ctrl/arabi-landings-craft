import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-2 mb-8 animate-fadeInUp">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">منصة إبداعية جديدة</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            ابتكر مستقبلك مع
            <span className="block gradient-text bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              الحلول التقنية المتطورة
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            نقدم لك أحدث التقنيات والحلول المبتكرة التي تساعدك على تحقيق أهدافك وبناء مشاريع استثنائية تواكب المستقبل
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp">
            <Button 
              size="lg" 
              className="btn-hero group text-lg px-8 py-4"
            >
              <span>ابدأ رحلتك الآن</span>
              <ArrowLeft className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass text-white border-white/30 hover:bg-white/20 text-lg px-8 py-4"
            >
              شاهد العرض التوضيحي
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeInUp">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-medium">سرعة فائقة</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <span className="font-medium">دقة عالية</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-medium">ابتكار مستمر</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;