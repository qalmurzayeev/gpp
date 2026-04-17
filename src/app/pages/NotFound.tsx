import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl text-gray-900 mb-4">
          {language === 'kk' && 'Бет табылмады'}
          {language === 'en' && 'Page Not Found'}
          {language === 'ru' && 'Страница не найдена'}
        </h2>
        <p className="text-gray-600 mb-8">
          {language === 'kk' && 'Кешіріңіз, сіз іздеген бет табылмады.'}
          {language === 'en' && 'Sorry, the page you are looking for could not be found.'}
          {language === 'ru' && 'Извините, страница, которую вы ищете, не найдена.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          <Home className="size-5" />
          {language === 'kk' && 'Басты бетке оралу'}
          {language === 'en' && 'Back to Home'}
          {language === 'ru' && 'Вернуться на главную'}
        </Link>
      </div>
    </div>
  );
}
