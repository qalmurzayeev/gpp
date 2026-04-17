import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems } from '../data/newsData';

export function NewsDetail() {
  const { newsId } = useParams();
  const { t, language } = useLanguage();

  const news = newsItems.find((n) => n.id === newsId);

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-4">
          {language === 'kk' && 'Жаңалық табылмады'}
          {language === 'en' && 'News not found'}
          {language === 'ru' && 'Новость не найдена'}
        </h1>
        <Link to="/news" className="text-blue-600 hover:text-blue-700">
          {language === 'kk' && 'Жаңалықтарға оралу'}
          {language === 'en' && 'Back to news'}
          {language === 'ru' && 'Вернуться к новостям'}
        </Link>
      </div>
    );
  }

  const newsTitle = language === 'kk' ? news.titleKk : language === 'en' ? news.titleEn : news.titleRu;
  const newsContent = language === 'kk' ? news.contentKk : language === 'en' ? news.contentEn : news.contentRu;

  const relatedNews = newsItems.filter((n) => n.id !== news.id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/news" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="size-4" />
            {language === 'kk' && 'Жаңалықтарға оралу'}
            {language === 'en' && 'Back to news'}
            {language === 'ru' && 'Вернуться к новостям'}
          </Link>
        </div>
      </div>

      {/* News Article */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="size-4" />
                  <span className="capitalize">{news.category}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl text-blue-900 mb-6">{newsTitle}</h1>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img src={news.image} alt={newsTitle} className="w-full h-96 object-cover" />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {newsContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                {t.getQuote}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">
            {language === 'kk' && 'Басқа жаңалықтар'}
            {language === 'en' && 'Other News'}
            {language === 'ru' && 'Другие новости'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedNews.map((relatedItem) => (
              <Link
                key={relatedItem.id}
                to={`/news/${relatedItem.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedItem.image}
                    alt={
                      language === 'kk' ? relatedItem.titleKk : language === 'en' ? relatedItem.titleEn : relatedItem.titleRu
                    }
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{relatedItem.date}</div>
                  <h3 className="text-lg text-blue-900 mb-2">
                    {language === 'kk' ? relatedItem.titleKk : language === 'en' ? relatedItem.titleEn : relatedItem.titleRu}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {language === 'kk' ? relatedItem.excerptKk : language === 'en' ? relatedItem.excerptEn : relatedItem.excerptRu}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
