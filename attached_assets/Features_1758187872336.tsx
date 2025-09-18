import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, Users, Lightbulb, Database, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "أداء متفوق",
      description: "تقنيات حديثة تضمن سرعة وكفاءة عالية في جميع العمليات والمهام",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "حماية شاملة لبياناتك مع أحدث بروتوكولات الأمان العالمية",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "تعاون سلس",
      description: "أدوات تعاون متطورة تمكن فريقك من العمل بكفاءة أكبر",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "حلول ذكية",
      description: "ذكاء اصطناعي متقدم يساعدك على اتخاذ قرارات أفضل",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "إدارة البيانات",
      description: "نظام إدارة بيانات متطور يحافظ على تنظيم وأمان معلوماتك",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "تخصيص كامل",
      description: "إمكانيات تخصيص واسعة تناسب احتياجاتك وتطلعاتك الخاصة",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            مميزات استثنائية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف المجموعة الشاملة من المميزات التي تجعل منصتنا الخيار الأمثل لمشاريعك التقنية
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-card bg-white/50 backdrop-blur-sm group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-4 bg-gradient-primary text-white px-8 py-4 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Rocket className="w-6 h-6" />
            <span className="font-semibold text-lg">جرب جميع المميزات مجاناً</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;