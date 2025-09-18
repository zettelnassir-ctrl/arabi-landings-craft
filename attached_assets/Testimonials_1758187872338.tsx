import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير تقني",
      company: "شركة الابتكار التقني",
      content: "منصة رائعة ساعدتنا على تطوير مشاريعنا بسرعة وكفاءة عالية. الدعم الفني ممتاز والواجهة سهلة الاستخدام.",
      rating: 5,
      avatar: "A"
    },
    {
      name: "فاطمة العلي",
      role: "مطورة برمجيات",
      company: "استوديو الإبداع الرقمي",
      content: "التقنيات المستخدمة حديثة ومتطورة. وفرت علينا الكثير من الوقت والجهد في تطوير التطبيقات.",
      rating: 5,
      avatar: "F"
    },
    {
      name: "عبدالله الخالد",
      role: "رائد أعمال",
      company: "مؤسسة الرؤية الذكية",
      content: "حل شامل ومتكامل لجميع احتياجاتنا التقنية. النتائج فاقت توقعاتنا بكل المقاييس.",
      rating: 5,
      avatar: "ع"
    },
    {
      name: "نورا السعد",
      role: "مديرة مشاريع",
      company: "شركة التميز الرقمي",
      content: "أدوات التعاون والإدارة ممتازة. ساعدت فريقنا على العمل بتنسيق أفضل وإنجاز المشاريع في الوقت المحدد.",
      rating: 5,
      avatar: "ن"
    },
    {
      name: "محمد الراشد",
      role: "استشاري تقني",
      company: "مجموعة الحلول المتقدمة",
      content: "الأمان والحماية من أولويات المنصة. نثق بها تماماً في حفظ بياناتنا الحساسة.",
      rating: 5,
      avatar: "م"
    },
    {
      name: "سارة القحطاني",
      role: "مصممة UX/UI",
      company: "استوديو التصميم الحديث",
      content: "واجهة المستخدم جميلة وسهلة الاستخدام. تجربة المستخدم محسنة بشكل ممتاز.",
      rating: 5,
      avatar: "س"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            آراء عملائنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف تجارب عملائنا الناجحة وكيف ساعدتهم منصتنا على تحقيق أهدافهم
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift border-0 shadow-card bg-white/80 backdrop-blur-sm group animate-fadeInUp relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-6 relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-right">
                  "{testimonial.content}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="text-right">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30">
            <h3 className="text-2xl font-bold gradient-text">انضم إلى عملائنا الراضين</h3>
            <p className="text-muted-foreground">ابدأ رحلتك معنا اليوم واكتشف الفرق</p>
            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">+1000</div>
                <div className="text-sm text-muted-foreground">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground">معدل الرضا</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">دعم مستمر</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;