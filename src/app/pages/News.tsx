import { Link } from 'react-router';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems } from '../data/newsData';

export function News() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.news}</h1>
          <p className="text-xl text-blue-100">
            {language === 'kk' && 'Компанияның соңғы жаңалықтары мен жаңартулары'}
            {language === 'en' && 'Latest company news and updates'}
            {language === 'ru' && 'Последние новости и обновления компании'}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={news.image}
                    alt={language === 'kk' ? news.titleKk : language === 'en' ? news.titleEn : news.titleRu}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="size-4" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl text-blue-900 mb-3">
                    {language === 'kk' ? news.titleKk : language === 'en' ? news.titleEn : news.titleRu}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language === 'kk' ? news.excerptKk : language === 'en' ? news.excerptEn : news.excerptRu}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    {t.readMore}
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
