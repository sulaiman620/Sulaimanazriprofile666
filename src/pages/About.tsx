import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#001a33] min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-10 animate-pulse" />
              <img 
                src={`${import.meta.env.BASE_URL}s6.png`}
                alt="سليمان العزري" 
                className="w-48 h-48 object-cover rounded-full border-4 border-white/20 shadow-2xl relative z-10"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">نبذة عني</h2>
          <div className="bg-white/5 p-8 md:p-12 rounded-3xl shadow-sm border border-white/10 text-right space-y-6">
            <p className="text-xl text-gray-300 leading-loose">
              أنا سليمان بن سعيد العزري، مطور تقني ومبدع رقمي متخصص في توظيف الذكاء الاصطناعي والتقنيات الحديثة لبناء حلول رقمية مبتكرة. أعمل على تحويل الأفكار إلى مشاريع رقمية حقيقية من خلال الدمج بين البرمجة، الإبداع البصري، والأتمتة الذكية.
            </p>
            <p className="text-xl text-gray-300 leading-loose">
              أمتلك خبرة واسعة في إنشاء المواقع الإلكترونية، إنتاج الفيديوهات، التصميم البصري، الرسوم المتحركة، وتطوير الأنظمة المعتمدة على الذكاء الاصطناعي. كما أعمل على بناء أنظمة أتمتة للأعمال تساعد الشركات على تحسين الإنتاجية وتبسيط العمليات وربط الأدوات الرقمية المختلفة مع بعضها.
            </p>
            <p className="text-xl text-gray-300 leading-loose">
              أركز في عملي على إنشاء محتوى رقمي عالي الجودة يشمل الفيديوهات التسويقية، التصاميم الإعلانية، الصور الواقعية بالذكاء الاصطناعي، والمشاريع الرقمية التفاعلية التي تساعد العلامات التجارية على تقديم أفكارها بطريقة جذابة ومبتكرة.
            </p>
            <p className="text-xl text-gray-300 leading-loose">
              بالإضافة إلى ذلك، لدي خبرة في تطوير مواقع الويب وبناء المنصات الرقمية باستخدام تقنيات حديثة، مع القدرة على تحويل المفاهيم والأفكار إلى منتجات رقمية متكاملة تجمع بين الأداء العالي والتصميم الاحترافي.
            </p>
            <p className="text-xl text-gray-300 leading-loose">
              ما يميز عملي هو القدرة على دمج الإبداع مع التكنولوجيا لإنشاء حلول رقمية متطورة، سواء في تصميم المحتوى، إنتاج الفيديو، تطوير المواقع، أو بناء الأنظمة الذكية التي تعتمد على الذكاء الاصطناعي.
            </p>
            <p className="text-xl text-gray-300 leading-loose">
              هدفي هو مساعدة الأفراد والشركات على الاستفادة من قوة التكنولوجيا والذكاء الاصطناعي لتحويل أفكارهم إلى مشاريع ناجحة ومؤثرة في العالم الرقمي.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
