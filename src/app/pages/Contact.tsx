import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.contactTitle}</h1>
          <p className="text-xl text-blue-100">{t.contactSubtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl text-blue-900 mb-6">{t.sendMessage}</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800">
                    {language === 'kk' && 'Сіздің хабарламаңыз жіберілді! Біз жақын арада байланысамыз.'}
                    {language === 'en' && 'Your message has been sent! We will contact you soon.'}
                    {language === 'ru' && 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">{t.yourName} *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">{t.yourEmail} *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">{t.yourPhone}</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {language === 'kk' ? 'Тақырып' : language === 'en' ? 'Subject' : 'Тема'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">{t.yourMessage} *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="size-5" />
                    {t.sendMessage}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl text-blue-900 mb-6">{t.contactInfo}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-blue-900 mb-1">{t.address}</h3>
                      <p className="text-gray-700">
                        {language === 'kk' && 'Shijiazhuang қаласы, Hebei провинциясы, Қытай'}
                        {language === 'en' && 'Shijiazhuang City, Hebei Province, China'}
                        {language === 'ru' && 'г. Шицзячжуан, провинция Хэбэй, Китай'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded">
                      <Phone className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-blue-900 mb-1">{t.phone}</h3>
                      <p className="text-gray-700">
                        <a href="tel:+8613722777731" className="hover:text-blue-600">
                          +86 137 2277 7731
                        </a>
                      </p>
                      <p className="text-gray-700">WhatsApp: +86 137 2277 7731</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-blue-900 mb-1">{t.email}</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@bestopsupply.com" className="hover:text-blue-600">
                          info@bestopsupply.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="mailto:sales@bestopsupply.com" className="hover:text-blue-600">
                          sales@bestopsupply.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded">
                      <Clock className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-blue-900 mb-1">{t.workingHours}</h3>
                      <p className="text-gray-700">
                        {language === 'kk' && 'Дүйсенбі - Жұма: 08:00 - 18:00'}
                        {language === 'en' && 'Monday - Friday: 08:00 - 18:00'}
                        {language === 'ru' && 'Понедельник - Пятница: 08:00 - 18:00'}
                      </p>
                      <p className="text-gray-700">
                        {language === 'kk' && 'Сенбі: 09:00 - 14:00'}
                        {language === 'en' && 'Saturday: 09:00 - 14:00'}
                        {language === 'ru' && 'Суббота: 09:00 - 14:00'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5678234567890!2d114.48806!3d38.04234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAyJzMyLjQiTiAxMTTCsDI5JzE3LjAiRQ!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BESTOP Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-blue-900 mb-6">
              {language === 'kk' && 'Біз сізге көмектесуге дайынбыз'}
              {language === 'en' && 'We are Ready to Help You'}
              {language === 'ru' && 'Мы готовы вам помочь'}
            </h2>
            <p className="text-gray-700 mb-8">
              {language === 'kk' &&
                'Сұрақтарыңыз бар ма немесе біздің өнімдер туралы қосымша ақпарат алғыңыз келе ме? Бізге хабарласыңыз! Біздің мамандар әрқашан сізге көмектесуге дайын.'}
              {language === 'en' &&
                'Have questions or want more information about our products? Contact us! Our experts are always ready to help you.'}
              {language === 'ru' &&
                'Есть вопросы или нужна дополнительная информация о наших продуктах? Свяжитесь с нами! Наши специалисты всегда готовы вам помочь.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+8613722777731"
                className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                {language === 'kk' ? 'Қоңырау шалу' : language === 'en' ? 'Call Now' : 'Позвонить'}
              </a>
              <a
                href="mailto:info@bestopsupply.com"
                className="bg-white text-blue-600 px-8 py-3 rounded border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                {language === 'kk' ? 'Email жазу' : language === 'en' ? 'Send Email' : 'Написать Email'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
