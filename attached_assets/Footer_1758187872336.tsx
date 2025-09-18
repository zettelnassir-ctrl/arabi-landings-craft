import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowLeft,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "الرئيسية",
    "من نحن",
    "الخدمات",
    "المدونة",
    "تواصل معنا"
  ];

  const services = [
    "تطوير التطبيقات",
    "التصميم الرقمي",
    "الاستشارات التقنية",
    "الدعم الفني",
    "التدريب التقني"
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter section */}
        <div className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">ابق على تواصل معنا</h3>
            <p className="text-background/80 mb-8 text-lg">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والتحديثات
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="عنوان بريدك الإلكتروني" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-right"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                <span>اشتراك</span>
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                منصتنا الإبداعية
              </h3>
              <p className="text-background/80 leading-relaxed">
                نحن نبني مستقبل التكنولوجيا من خلال حلول مبتكرة ومتطورة تساعد الشركات على النمو والازدهار.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-white transition-colors duration-200 hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-white transition-colors duration-200 hover:translate-x-2 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@platform.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-5 w-5 text-primary" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/80">
          <div className="flex items-center gap-2">
            <span>© 2024 جميع الحقوق محفوظة • صُنع بـ</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>في المملكة العربية السعودية</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white transition-colors">
              شروط الاستخدام
            </a>
            <a href="#" className="hover:text-white transition-colors">
              الدعم
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;