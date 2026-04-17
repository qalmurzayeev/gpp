import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Award, Users, Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/productsData';
import { newsItems } from '../data/newsData';

export function Home() {
  const { t, language } = useLanguage();

  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const latestNews = newsItems.slice(0, 3);

  const solutions = [
    {
      titleKk: t.waterSupply,
      descKk: t.waterSupplyDesc,
      icon: '💧',
      image: 'https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHN1cHBseSUyMHBpcGVsaW5lJTIwc3lzdGVtfGVufDF8fHx8MTc3NjQwOTcyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/solutions/water-supply',
    },
    {
      titleKk: t.fireSafety,
      descKk: t.fireSafetyDesc,
      icon: '🔥',
      image: 'https://images.unsplash.com/photo-1763517890788-e43774e38ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3ByaW5rbGVyJTIwc3lzdGVtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc2NDA5NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/solutions/fire-protection',
    },
    {
      titleKk: t.oilGas,
      descKk: t.oilGasDesc,
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1704839710877-70f6e8cd69a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyeSUyMHBpcGVsaW5lfGVufDF8fHx8MTc3NjQwOTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/solutions/oil-gas',
    },
  ];

  const certificates = [
    'UL/FM',
    'API 6D',
    'ISO 9001',
    'ANSI B16',
    'EN 558',
    'BS 5153',
    'CE',
    'WRAS',
  ];

  const stats = [
    {
      number: '20+',
      labelKk: 'Жыл тәжірибе',
      labelEn: 'Years Experience',
      labelRu: 'Лет опыта',
      icon: Award,
    },
    {
      number: '5000+',
      labelKk: 'Клиенттер',
      labelEn: 'Customers',
      labelRu: 'Клиентов',
      icon: Users,
    },
    {
      number: '50+',
      labelKk: 'Елдер',
      labelEn: 'Countries',
      labelRu: 'Стран',
      icon: Factory,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.7), rgba(0, 0, 100, 0.7)), url('https://images.unsplash.com/photo-1765218933298-dc55fdfb517a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmUlMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzY0MDk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-4">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">{t.heroSubtitle}</p>
            <p className="text-lg mb-8 text-blue-200">{t.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-blue-900 px-8 py-3 rounded hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                {t.products}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-500 transition-colors border border-white"
              >
                {t.getQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="size-12 text-blue-600" />
                </div>
                <div className="text-4xl text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">
                  {language === 'kk' ? stat.labelKk : language === 'en' ? stat.labelEn : stat.labelRu}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">{t.aboutTitle}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {language === 'kk' &&
                  'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD 2002 жылы құрылған және су клапандары, трубопровод арматурасы және центробежді насостарды өндіруде мамандандырылған. Біз әлемдік сапа стандарттарына сәйкес келетін жоғары сапалы өнімдер ұсынамыз.'}
                {language === 'en' &&
                  'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD was founded in 2002 and specializes in manufacturing water valves, pipe fittings, and centrifugal pumps. We offer high-quality products that meet world-class quality standards.'}
                {language === 'ru' &&
                  'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD основана в 2002 году и специализируется на производстве водяных клапанов, трубопроводной арматуры и центробежных насосов. Мы предлагаем высококачественную продукцию, соответствующую мировым стандартам качества.'}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {language === 'kk' && 'UL/FM, API, ISO сертификаттары'}
                    {language === 'en' && 'UL/FM, API, ISO certifications'}
                    {language === 'ru' && 'Сертификаты UL/FM, API, ISO'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {language === 'kk' && '50+ елге экспорт'}
                    {language === 'en' && 'Export to 50+ countries'}
                    {language === 'ru' && 'Экспорт в 50+ стран'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {language === 'kk' && 'Заманауи өндіріс орны'}
                    {language === 'en' && 'Modern production facility'}
                    {language === 'ru' && 'Современное производство'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {language === 'kk' && 'Қатаң сапа бақылауы'}
                    {language === 'en' && 'Strict quality control'}
                    {language === 'ru' && 'Строгий контроль качества'}
                  </span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                {t.learnMore}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Factory"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NjM1Njc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Control"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hot Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">{t.hotProducts}</h2>
            <p className="text-gray-600">{t.hotProductsDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={language === 'kk' ? product.nameKk : language === 'en' ? product.nameEn : product.nameRu}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 mb-2">
                    {language === 'kk'
                      ? product.categoryKk
                      : language === 'en'
                      ? product.categoryEn
                      : product.categoryRu}
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {language === 'kk' ? product.nameKk : language === 'en' ? product.nameEn : product.nameRu}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {language === 'kk'
                      ? product.descriptionKk
                      : language === 'en'
                      ? product.descriptionEn
                      : product.descriptionRu}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              {t.viewAll}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">{t.solutionsTitle}</h2>
            <p className="text-gray-600">{t.solutionsDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <Link
                key={idx}
                to={solution.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.titleKk}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl text-blue-900 mb-3">{solution.titleKk}</h3>
                  <p className="text-gray-600 mb-4">{solution.descKk}</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    {t.learnMore}
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">{t.certificates}</h2>
            <p className="text-gray-600">{t.certificatesDesc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-blue-900 text-center">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">{t.news}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={language === 'kk' ? news.titleKk : language === 'en' ? news.titleEn : news.titleRu}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl text-blue-900 mb-3">
                    {language === 'kk' ? news.titleKk : language === 'en' ? news.titleEn : news.titleRu}
                  </h3>
                  <p className="text-gray-600 mb-4">
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
          <div className="text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              {t.viewAll}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            {language === 'kk' && 'Сізге көмектесуге дайынбыз!'}
            {language === 'en' && 'We are Ready to Help You!'}
            {language === 'ru' && 'Мы готовы вам помочь!'}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {language === 'kk' && 'Сұрақтарыңыз бар ма? Бізге хабарласыңыз!'}
            {language === 'en' && 'Have questions? Contact us!'}
            {language === 'ru' && 'Есть вопросы? Свяжитесь с нами!'}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded hover:bg-blue-50 transition-colors"
          >
            {t.getQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
