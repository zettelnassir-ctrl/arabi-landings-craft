import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Volume2, Share2 } from "lucide-react";

const TalkheeselyFeatures = () => {
  const features = [
    {
      icon: FileText,
      title: "ملخص قصير وسهل الفهم",
      description: "احصل على أهم النقاط من المحاضرة في دقائق معدودة مع الحفاظ على جميع التفاصيل المهمة"
    },
    {
      icon: Brain,
      title: "استخراج أهم الأفكار والنقاط",
      description: "الذكاء الاصطناعي يحدد النقاط الرئيسية والمفاهيم الأساسية تلقائياً"
    },
    {
      icon: Volume2,
      title: "تحويل التسجيل الصوتي إلى نص",
      description: "تقنية متقدمة لتحويل الصوت إلى نص واضح ومنظم باللغة العربية"
    },
    {
      icon: Share2,
      title: "مشاركة الملخص مع الزملاء",
      description: "شارك الملخصات مع زملائك في الفصل بسهولة وبصيغ متعددة"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* عناصر خلفية مزخرفة */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            لماذا <span className="text-primary">تلخيصلي</span>؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            مميزات تجعل دراستك أسهل وأكثر فعالية
          </p>
        </div>

        {/* شبكة المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-card bg-white group animate-fadeInUp transition-all duration-300 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-2xl p-3 group-hover:bg-primary-light/30 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-foreground text-right leading-tight">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground text-right leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* قسم دعوة إضافية */}
        <div className="text-center mt-12 animate-fadeInUp">
          <div className="inline-flex items-center gap-4 bg-primary/10 text-primary px-6 py-3 rounded-2xl">
            <span className="text-2xl">🎓</span>
            <span className="font-semibold">مصمم خصيصاً للطلبة العرب</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkheeselyFeatures;