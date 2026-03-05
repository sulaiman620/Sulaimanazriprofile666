import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react';

const services = [
  'خدمات الذكاء الاصطناعي',
  'إنتاج الفيديو والمونتاج',
  'التصميم الجرافيكي',
  'تطوير المواقع',
  'الأتمتة والأنظمة الذكية',
  'البوتات الذكية',
  'الاستشارات التقنية',
  'أخرى',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, message } = form;
    if (!name || !message) return;
    const text =
`🌟 *طلب خدمة جديد*

👤 *الاسم:* ${name}
📞 *رقم التواصل:* ${phone || 'لم يُذكر'}
🛠️ *نوع الخدمة:* ${service || 'لم يُحدد'}

💬 *التفاصيل:*
${message}`;
    const url = `https://api.whatsapp.com/send?phone=96899410903&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', service: '', message: '' });
  };
  return (
    <div className="pt-32 pb-20 px-6 min-h-[80vh] bg-[#001a33]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">تواصل معي</h2>
            <p className="text-gray-400 mb-12 text-lg">
              هل لديك فكرة مشروع؟ أو ترغب في استشارة تقنية؟ أنا هنا لمساعدتك في تحويل رؤيتك إلى واقع.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">رقم الهاتف</div>
                  <div className="font-bold text-white" dir="ltr">+968 99410903</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">البريد الإلكتروني</div>
                  <div className="font-bold text-white">alazrisulaimanit@Gmail.com</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=96899410903"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
              >
                <MessageCircle size={24} />
                تواصل عبر واتساب
              </a>
              <a 
                href="https://www.instagram.com/s6_azri/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <Instagram size={24} />
                تواصل عبر إنستغرام
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {sent && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400">
                  <CheckCircle2 size={20} />
                  <span>تم فتح واتساب لإرسال رسالتك!</span>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">الاسم *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#001a33] border border-white/10 focus:border-white outline-none transition-all text-white"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">رقم التواصل</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#001a33] border border-white/10 focus:border-white outline-none transition-all text-white"
                    placeholder="+968 XXXXXXXX"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">نوع الخدمة</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#001a33] border border-white/10 focus:border-white outline-none transition-all text-white"
                >
                  <option value="">-- اختر نوع الخدمة --</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">تفاصيل الطلب *</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#001a33] border border-white/10 focus:border-white outline-none transition-all text-white resize-none"
                  placeholder="اكتب تفاصيل مشروعك هنا..."
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
                <MessageCircle size={22} />
                إرسال عبر واتساب
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
