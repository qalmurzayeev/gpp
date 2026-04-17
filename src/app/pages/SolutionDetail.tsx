import { useParams, Link } from 'react-router';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/productsData';

export function SolutionDetail() {
  const { solutionId } = useParams();
  const { t, language } = useLanguage();

  const solutionData: Record<string, any> = {
    'water-supply': {
      titleKk: t.waterSupply,
      descKk: t.waterSupplyDesc,
      image: 'https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHN1cHBseSUyMHBpcGVsaW5lJTIwc3lzdGVtfGVufDF8fHx8MTc3NjQwOTcyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      contentKk:
        'Сумен жабдықтау және канализация жүйелері үшін біз толық шешімдер ұсынамыз. Біздің өнімдер қалалық су жүйелері, өнеркәсіптік су тазарту және ауыл шаруашылығы ирригациясы үшін қолайлы.',
      contentEn:
        'For water supply and drainage systems, we offer complete solutions. Our products are suitable for municipal water systems, industrial water treatment, and agricultural irrigation.',
      contentRu:
        'Для систем водоснабжения и канализации мы предлагаем полные решения. Наша продукция подходит для муниципальных водных систем, промышленной очистки воды и сельскохозяйственного орошения.',
      featuresKk: [
        'Шиберлі клапандар (DN50-DN600)',
        'Көбелек клапандары',
        'Центробежді насостар',
        'Құбыр фитингтері және муфталар',
        'Қысым төмендететін клапандар',
      ],
      featuresEn: [
        'Gate valves (DN50-DN600)',
        'Butterfly valves',
        'Centrifugal pumps',
        'Pipe fittings and couplings',
        'Pressure reducing valves',
      ],
      featuresRu: [
        'Задвижки (DN50-DN600)',
        'Дисковые затворы',
        'Центробежные насосы',
        'Трубные фитинги и муфты',
        'Редукционные клапаны',
      ],
    },
    'fire-protection': {
      titleKk: t.fireSafety,
      descKk: t.fireSafetyDesc,
      image: 'https://images.unsplash.com/photo-1763517890788-e43774e38ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3ByaW5rbGVyJTIwc3lzdGVtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc2NDA5NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      contentKk:
        'Өрт қауіпсіздігі жүйелері үшін біз UL/FM сертификатталған өнімдерді ұсынамыз. Барлық өнімдер қатаң сынақтан өтіп, халықаралық өрт қауіпсіздігі стандарттарына сәйкес келеді.',
      contentEn:
        'For fire protection systems, we offer UL/FM certified products. All products undergo rigorous testing and comply with international fire safety standards.',
      contentRu:
        'Для систем пожарной безопасности мы предлагаем продукцию с сертификатами UL/FM. Вся продукция проходит строгие испытания и соответствует международным стандартам пожарной безопасности.',
      featuresKk: [
        'UL/FM сертификатты клапандар',
        'Ойықты муфталар және фитингтер',
        'Өрт сөндіру насостары',
        'Спринклер жүйелері',
        'Кері клапандар',
      ],
      featuresEn: [
        'UL/FM certified valves',
        'Grooved couplings and fittings',
        'Fire pumps',
        'Sprinkler systems',
        'Check valves',
      ],
      featuresRu: [
        'Клапаны с сертификатами UL/FM',
        'Желобковые муфты и фитинги',
        'Пожарные насосы',
        'Спринклерные системы',
        'Обратные клапаны',
      ],
    },
    'oil-gas': {
      titleKk: t.oilGas,
      descKk: t.oilGasDesc,
      image: 'https://images.unsplash.com/photo-1704839710877-70f6e8cd69a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyeSUyMHBpcGVsaW5lfGVufDF8fHx8MTc3NjQwOTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
      contentKk:
        'Мұнай және газ өнеркәсібіне арналған біздің өнімдер API стандартына сай келеді. Жоғары қысым мен температураға төзімді, сенімді және ұзақ мерзімді.',
      contentEn:
        'Our products for the oil and gas industry comply with API standards. Resistant to high pressure and temperature, reliable and long-lasting.',
      contentRu:
        'Наша продукция для нефтегазовой промышленности соответствует стандартам API. Устойчива к высокому давлению и температуре, надежна и долговечна.',
      featuresKk: [
        'API 6D сертификатты клапандар',
        'Жоғары қысымды арматура',
        'Шарлы клапандар',
        'Қақпақты клапандар',
        'Арнайы құбыр фитингтері',
      ],
      featuresEn: [
        'API 6D certified valves',
        'High-pressure fittings',
        'Ball valves',
        'Gate valves',
        'Special pipe fittings',
      ],
      featuresRu: [
        'Клапаны с сертификатом API 6D',
        'Арматура высокого давления',
        'Шаровые краны',
        'Задвижки',
        'Специальные трубные фитинги',
      ],
    },
  };

  const solution = solutionData[solutionId || ''];

  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-4">
          {language === 'kk' && 'Шешім табылмады'}
          {language === 'en' && 'Solution not found'}
          {language === 'ru' && 'Решение не найдено'}
        </h1>
        <Link to="/solutions" className="text-blue-600 hover:text-blue-700">
          {language === 'kk' && 'Шешімдерге оралу'}
          {language === 'en' && 'Back to solutions'}
          {language === 'ru' && 'Вернуться к решениям'}
        </Link>
      </div>
    );
  }

  const relatedProducts = products.slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/solutions" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="size-4" />
            {language === 'kk' && 'Шешімдерге оралу'}
            {language === 'en' && 'Back to solutions'}
            {language === 'ru' && 'Вернуться к решениям'}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.8), rgba(0, 0, 100, 0.8)), url('${solution.image}')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{solution.titleKk}</h1>
          <p className="text-xl text-blue-100">{solution.descKk}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {language === 'kk'
                ? solution.contentKk
                : language === 'en'
                ? solution.contentEn
                : solution.contentRu}
            </p>

            <h2 className="text-2xl text-blue-900 mb-6">
              {language === 'kk' && 'Негізгі өнімдер'}
              {language === 'en' && 'Main Products'}
              {language === 'ru' && 'Основные продукты'}
            </h2>
            <ul className="space-y-3 mb-12">
              {(language === 'kk'
                ? solution.featuresKk
                : language === 'en'
                ? solution.featuresEn
                : solution.featuresRu
              ).map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl text-blue-900 mb-4">
                {language === 'kk' && 'Бізбен байланысыңыз'}
                {language === 'en' && 'Contact Us'}
                {language === 'ru' && 'Свяжитесь с нами'}
              </h3>
              <p className="text-gray-700 mb-6">
                {language === 'kk' && 'Біздің мамандар сізге дұрыс шешімді таңдауға көмектеседі'}
                {language === 'en' && 'Our experts will help you choose the right solution'}
                {language === 'ru' && 'Наши специалисты помогут вам выбрать правильное решение'}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                {t.getQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">
            {language === 'kk' && 'Қолданылатын өнімдер'}
            {language === 'en' && 'Related Products'}
            {language === 'ru' && 'Используемые продукты'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
        </div>
      </section>
    </div>
  );
}
