import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#001a33]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white/80 font-bold text-xl mb-4">أهلاً بك، أنا</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            سليمان العزري
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
            خبير حلول رقمية وذكاء اصطناعي
          </h3>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
            أحوّل الأفكار الطموحة إلى مواقع إلكترونية متطورة، وأنظمة أتمتة ذكية، ومحتوى إبداعي احترافي يعزز من حضورك الرقمي.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-white text-[#001a33] rounded-xl font-bold hover:bg-gray-200 transition-all shadow-lg shadow-white/10"
            >
              شاهد أعمالي
            </Link>
            <a 
              href="https://api.whatsapp.com/send?phone=96899410903"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              تواصل عبر واتساب
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-square bg-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-3xl animate-[spin_20s_linear_infinite] z-0" />
            <img 
              src={`${import.meta.env.BASE_URL}s6.png`}
              alt="سليمان العزري" 
              className="w-full h-full object-cover rounded-3xl z-10 relative transition-all duration-500"
            />
            <div className="absolute -top-4 -right-4 bg-[#001a33] p-6 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                <CheckCircle2 />
              </div>
              <div>
                <div className="font-bold text-white">حلول ذكية</div>
                <div className="text-sm text-gray-400">مبنية بأحدث التقنيات</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
