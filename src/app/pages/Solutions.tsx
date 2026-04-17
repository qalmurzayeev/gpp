import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Solutions() {
  const { t, language } = useLanguage();

  const solutions = [
    {
      id: 'water-supply',
      titleKk: t.waterSupply,
      descKk: t.waterSupplyDesc,
      icon: '💧',
      image: 'https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHN1cHBseSUyMHBpcGVsaW5lJTIwc3lzdGVtfGVufDF8fHx8MTc3NjQwOTcyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      detailsKk:
        'Сумен жабдықтау және канализация жүйелеріне арналған толық шешімдер. Клапандар, фитингтер, насостар және басқа арматура.',
      detailsEn:
        'Complete solutions for water supply and drainage systems. Valves, fittings, pumps, and other accessories.',
      detailsRu:
        'Полные решения для систем водоснабжения и канализации. Клапаны, фитинги, насосы и другая арматура.',
    },
    {
      id: 'fire-protection',
      titleKk: t.fireSafety,
      descKk: t.fireSafetyDesc,
      icon: '🔥',
      image: 'https://images.unsplash.com/photo-1763517890788-e43774e38ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3ByaW5rbGVyJTIwc3lzdGVtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc2NDA5NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      detailsKk:
        'UL/FM сертификатталған өрт қауіпсіздігі жабдықтары. Өрт сөндіру жүйелеріне арналған клапандар, спринклерлер және насостар.',
      detailsEn:
        'UL/FM certified fire safety equipment. Valves, sprinklers, and pumps for fire protection systems.',
      detailsRu:
        'Оборудование для пожарной безопасности с сертификатами UL/FM. Клапаны, спринклеры и насосы для систем пожаротушения.',
    },
    {
      id: 'oil-gas',
      titleKk: t.oilGas,
      descKk: t.oilGasDesc,
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1704839710877-70f6e8cd69a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyeSUyMHBpcGVsaW5lfGVufDF8fHx8MTc3NjQwOTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
      detailsKk:
        'API стандартына сай мұнай-газ саласына арналған өнімдер. Жоғары қысымды клапандар және арматура.',
      detailsEn:
        'API standard compliant products for oil and gas sector. High-pressure valves and fittings.',
      detailsRu:
        'Продукция для нефтегазового сектора по стандарту API. Клапаны и арматура высокого давления.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.solutionsTitle}</h1>
          <p className="text-xl text-blue-100">{t.solutionsDesc}</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {solutions.map((solution, idx) => (
              <div
                key={solution.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h2 className="text-3xl text-blue-900 mb-4">{solution.titleKk}</h2>
                  <p className="text-gray-700 mb-6">
                    {language === 'kk'
                      ? solution.detailsKk
                      : language === 'en'
                      ? solution.detailsEn
                      : solution.detailsRu}
                  </p>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                  >
                    {t.learnMore}
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={solution.image}
                    alt={solution.titleKk}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-blue-900 mb-4">
            {language === 'kk' && 'Сізге қолайлы шешім табамыз'}
            {language === 'en' && 'We will find the right solution for you'}
            {language === 'ru' && 'Мы найдем подходящее решение для вас'}
          </h2>
          <p className="text-gray-700 mb-6">
            {language === 'kk' && 'Біздің мамандар сізге кеңес береді'}
            {language === 'en' && 'Our experts will advise you'}
            {language === 'ru' && 'Наши специалисты вас проконсультируют'}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {t.getQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
