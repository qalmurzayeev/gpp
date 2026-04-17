import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface QuoteFormProps {
  productName?: string;
}

export function QuoteForm({ productName }: QuoteFormProps) {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800">
            {language === 'kk' && 'Сіздің сұранысыңыз жіберілді! Біз жақын арада байланысамыз.'}
            {language === 'en' && 'Your request has been submitted! We will contact you soon.'}
            {language === 'ru' && 'Ваш запрос отправлен! Мы свяжемся с вами в ближайшее время.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {productName && (
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                {language === 'kk' ? 'Өнім' : language === 'en' ? 'Product' : 'Продукт'}
              </label>
              <input
                type="text"
                value={productName}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 text-gray-700"
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-gray-700 mb-2">{t.yourName} *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.yourEmail} *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.yourPhone}</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">{t.yourMessage} *</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {t.submit}
          </button>
        </form>
      )}
    </div>
  );
}
