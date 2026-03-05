import React from 'react';
import { motion } from 'motion/react';
import { Code, Cpu, Bot, Sparkles, Palette, Video, Monitor, MessageSquare, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const categories = [
    {
      title: 'خدمات الذكاء الاصطناعي',
      icon: <Sparkles size={32} />,
      items: [
        'إنشاء صور احترافية بالذكاء الاصطناعي للإعلانات والمنتجات',
        'إنشاء فيديوهات بالذكاء الاصطناعي للسوشيال ميديا',
        'تحويل النصوص إلى فيديوهات كاملة',
        'إنشاء شخصيات افتراضية تتكلم',
        'إنشاء محتوى بصري إبداعي باستخدام الذكاء الاصطناعي',
        'تحويل الأفكار إلى صور ومشاهد واقعية أو سينمائية',
      ],
    },
    {
      title: 'إنتاج الفيديو والمونتاج',
      icon: <Video size={32} />,
      items: [
        'إنتاج فيديوهات تسويقية احترافية',
        'إنشاء فيديوهات Reels وTikTok',
        'مونتاج الفيديوهات بشكل احترافي',
        'إضافة مؤثرات صوتية وبصرية',
        'إنتاج فيديوهات تعليمية',
        'إنتاج فيديوهات Motion Graphics',
      ],
    },
    {
      title: 'التصميم الجرافيكي',
      icon: <Palette size={32} />,
      items: [
        'تصميم منشورات السوشيال ميديا',
        'تصميم الإعلانات الرقمية',
        'تصميم البنرات الإعلانية',
        'تصميم أغلفة اليوتيوب',
        'تصميم الصور الدعائية للمنتجات',
      ],
    },
    {
      title: 'تطوير المواقع',
      icon: <Code size={32} />,
      items: [
        'إنشاء مواقع شركات',
        'إنشاء مواقع بورتفوليو',
        'إنشاء صفحات هبوط تسويقية',
        'إنشاء مواقع تعليمية',
        'إنشاء مواقع عرض الخدمات',
        'تصميم واجهات المستخدم',
      ],
    },
    {
      title: 'الأتمتة والأنظمة الذكية',
      icon: <Cpu size={32} />,
      items: [
        'إنشاء أنظمة أتمتة للأعمال',
        'ربط التطبيقات والأنظمة ببعضها',
        'أتمتة الردود على العملاء',
        'أتمتة نشر المحتوى',
        'إنشاء تدفقات عمل تلقائية',
      ],
    },
    {
      title: 'البوتات الذكية',
      icon: <Bot size={32} />,
      items: [
        'إنشاء بوت واتساب للأعمال',
        'إنشاء بوت إنستغرام للرد الآلي',
        'إنشاء بوت تلغرام',
        'إنشاء مساعد ذكاء اصطناعي للمواقع',
        'إنشاء نظام دعم فني تلقائي',
      ],
    },
    {
      title: 'الاستشارات التقنية',
      icon: <Lightbulb size={32} />,
      items: [
        'استشارات في استخدام الذكاء الاصطناعي للأعمال',
        'استشارات في التحول الرقمي',
        'استشارات في الأتمتة وتحسين الإنتاجية',
        'مساعدة الشركات على استخدام أدوات الذكاء الاصطناعي',
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-[80vh] bg-[#001a33]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">الخدمات التي يمكنني تقديمها</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">مجموعة متكاملة من الخدمات الرقمية المبنية على أحدث التقنيات والذكاء الاصطناعي.</p>
          <Link
            to="/contact"
            className="inline-block mt-6 px-8 py-3 bg-white text-[#001a33] rounded-xl font-bold hover:bg-gray-200 transition-all shadow-lg shadow-white/10"
          >
            تواصل معي لمعرفة الأسعار
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl border-2 border-white/10 hover:border-white/30 transition-all group"
            >
              <div className="w-16 h-16 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#001a33] transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-400 leading-relaxed flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
