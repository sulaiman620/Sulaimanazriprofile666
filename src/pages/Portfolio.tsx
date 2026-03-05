import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, Bot, Video, Palette, Globe, Cpu, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('AI Projects');

  const categories = [
    {
      id: 'AI Projects',
      label: 'AI Projects',
      icon: <Bot size={20} />,
      desc: 'مشاريع تعتمد على الذكاء الاصطناعي لإنشاء محتوى بصري، فيديوهات، وأدوات رقمية ذكية.',
    },
    {
      id: 'Video Projects',
      label: 'Video Projects',
      icon: <Video size={20} />,
      desc: 'إنتاج وتحرير الفيديوهات التسويقية والتعليمية ومحتوى السوشيال ميديا.',
    },
    {
      id: 'Design Projects',
      label: 'Design Projects',
      icon: <Palette size={20} />,
      desc: 'تصميم المحتوى البصري مثل الإعلانات، البوستات، البنرات، والهويات البصرية.',
    },
    {
      id: 'Web Projects',
      label: 'Web Projects',
      icon: <Globe size={20} />,
      desc: 'تصميم وتطوير المواقع الإلكترونية للشركات والأفراد.',
    },
    {
      id: 'Automation Projects',
      label: 'Automation Projects',
      icon: <Cpu size={20} />,
      desc: 'إنشاء أنظمة أتمتة وربط التطبيقات لتسهيل العمليات الرقمية.',
    },
    {
      id: 'Other Projects',
      label: 'Other Projects',
      icon: <FolderOpen size={20} />,
      desc: 'مشاريع متنوعة أخرى.',
    },
  ];

  const current = categories.find(c => c.id === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6 min-h-[80vh] bg-[#001a33]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">أقسام أعمالي</h2>
          <p className="text-gray-400">اختر القسم لعرض المشاريع المتعلقة به.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-[#001a33]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {current && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">{current.desc}</p>
          </motion.div>
        )}

        {/* Empty State */}
        <motion.div
          key={activeCategory + '-content'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border-2 border-dashed border-white/10 rounded-3xl p-12 text-center"
        >
          <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles size={40} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">الأعمال قيد الإضافة</h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            أعمل حالياً على توثيق مجموعة من المشاريع المميزة. يمكنك التواصل معي لطلب عرض خاص لبعض النماذج السابقة.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white font-bold hover:underline"
          >
            اطلب عرضاً خاصاً الآن
            <ArrowLeft size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
