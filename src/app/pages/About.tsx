import { Award, Users, Factory, Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t, language } = useLanguage();

  const timeline = [
    { year: '2002', eventKk: 'Компания құрылды', eventEn: 'Company founded', eventRu: 'Основание компании' },
    { year: '2008', eventKk: 'ISO 9001 сертификаты', eventEn: 'ISO 9001 certification', eventRu: 'Сертификация ISO 9001' },
    { year: '2012', eventKk: 'UL/FM сертификаттары', eventEn: 'UL/FM certifications', eventRu: 'Сертификаты UL/FM' },
    { year: '2015', eventKk: 'API сертификация', eventEn: 'API certification', eventRu: 'Сертификация API' },
    { year: '2020', eventKk: 'Өндірісті кеңейту', eventEn: 'Factory expansion', eventRu: 'Расширение производства' },
    { year: '2026', eventKk: '50+ елге экспорт', eventEn: 'Export to 50+ countries', eventRu: 'Экспорт в 50+ стран' },
  ];

  const values = [
    {
      icon: Award,
      titleKk: 'Сапа',
      titleEn: 'Quality',
      titleRu: 'Качество',
      descKk: 'Біз әрқашан ең жоғары сапа стандарттарына ұмтыламыз',
      descEn: 'We always strive for the highest quality standards',
      descRu: 'Мы всегда стремимся к высочайшим стандартам качества',
    },
    {
      icon: Users,
      titleKk: 'Клиент бағдарлылық',
      titleEn: 'Customer Focus',
      titleRu: 'Ориентация на клиента',
      descKk: 'Клиенттеріміздің қанағаттануы біздің басты мақсатымыз',
      descEn: 'Customer satisfaction is our primary goal',
      descRu: 'Удовлетворенность клиентов — наша главная цель',
    },
    {
      icon: Factory,
      titleKk: 'Инновация',
      titleEn: 'Innovation',
      titleRu: 'Инновации',
      descKk: 'Үнемі жаңа технологияларды қолданамыз',
      descEn: 'We continuously apply new technologies',
      descRu: 'Мы постоянно применяем новые технологии',
    },
    {
      icon: Heart,
      titleKk: 'Жауапкершілік',
      titleEn: 'Responsibility',
      titleRu: 'Ответственность',
      descKk: 'Қоршаған ортаға және қоғамға жауапкершілікпен қарайтын',
      descEn: 'Responsible approach to environment and society',
      descRu: 'Ответственный подход к окружающей среде и обществу',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.8), rgba(0, 0, 100, 0.8)), url('https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.aboutTitle}</h1>
          <p className="text-xl text-blue-100">{t.aboutSubtitle}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {language === 'kk' &&
                'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD — Қытайдың Hebei провинциясында орналасқан су клапандары, трубопровод арматурасы және центробежді насостарды өндірумен айналысатын жетекші компания. Біз 2002 жылы құрылғаннан бері халықаралық нарықта беделді орын алдық.'}
              {language === 'en' &&
                'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD is a leading company located in Hebei Province, China, specializing in the production of water valves, pipe fittings, and centrifugal pumps. Since our establishment in 2002, we have earned a reputable position in the international market.'}
              {language === 'ru' &&
                'HEBEI BESTOP INDUSTRY SUPPLY CO., LTD — ведущая компания, расположенная в провинции Хэбэй, Китай, специализирующаяся на производстве водяных клапанов, трубопроводной арматуры и центробежных насосов. С момента нашего основания в 2002 году мы заняли авторитетное место на международном рынке.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'kk' &&
                'Біздің өнімдер UL/FM, API, ISO 9001, ANSI және басқа да халықаралық сертификаттарға ие. Біз 50-ден астам елге экспорт жасаймыз және әлемдік ірі жобаларда әріптес болып келеміз.'}
              {language === 'en' &&
                'Our products hold UL/FM, API, ISO 9001, ANSI, and other international certifications. We export to over 50 countries and have been partners in major global projects.'}
              {language === 'ru' &&
                'Наша продукция имеет сертификаты UL/FM, API, ISO 9001, ANSI и другие международные сертификаты. Мы экспортируем продукцию более чем в 50 стран и являемся партнерами крупных мировых проектов.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="size-12 text-blue-600 mb-4" />
              <h3 className="text-2xl text-blue-900 mb-4">{t.ourMission}</h3>
              <p className="text-gray-700">
                {language === 'kk' &&
                  'Ең жоғары сапалы өнімдер мен қызметтерді ұсыну арқылы клиенттеріміздің табысына үлес қосу.'}
                {language === 'en' &&
                  'Contributing to the success of our customers by providing the highest quality products and services.'}
                {language === 'ru' &&
                  'Содействовать успеху наших клиентов, предоставляя продукцию и услуги высочайшего качества.'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Eye className="size-12 text-blue-600 mb-4" />
              <h3 className="text-2xl text-blue-900 mb-4">{t.ourVision}</h3>
              <p className="text-gray-700">
                {language === 'kk' &&
                  'Өнеркәсіптік клапандар мен насостар саласында әлемдік көшбасшы болу.'}
                {language === 'en' &&
                  'To become a global leader in the industrial valves and pumps sector.'}
                {language === 'ru' &&
                  'Стать мировым лидером в области промышленных клапанов и насосов.'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="size-12 text-blue-600 mb-4" />
              <h3 className="text-2xl text-blue-900 mb-4">{t.ourValues}</h3>
              <p className="text-gray-700">
                {language === 'kk' &&
                  'Сапа, жауапкершілік, инновация және клиентке қызмет ету — біздің негізгі құндылықтарымыз.'}
                {language === 'en' &&
                  'Quality, responsibility, innovation, and customer service are our core values.'}
                {language === 'ru' &&
                  'Качество, ответственность, инновации и обслуживание клиентов — наши основные ценности.'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <value.icon className="size-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg text-blue-900 mb-2">
                  {language === 'kk' ? value.titleKk : language === 'en' ? value.titleEn : value.titleRu}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'kk' ? value.descKk : language === 'en' ? value.descEn : value.descRu}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              {language === 'kk' && 'Біздің тарихымыз'}
              {language === 'en' && 'Our History'}
              {language === 'ru' && 'Наша история'}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded text-center">{item.year}</div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-700">
                        {language === 'kk' ? item.eventKk : language === 'en' ? item.eventEn : item.eventRu}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl text-blue-900 mb-6">{t.factory}</h2>
              <p className="text-gray-700 mb-6">
                {language === 'kk' &&
                  'Біздің заманауи өндіріс зауытымыз 50,000 шаршы метрден астам аумақты алып жатыр. Автоматтандырылған өндіріс желілері мен озық технологиялар қолданылады.'}
                {language === 'en' &&
                  'Our modern production facility covers an area of over 50,000 square meters. Automated production lines and advanced technologies are utilized.'}
                {language === 'ru' &&
                  'Наш современный производственный завод занимает площадь более 50 000 квадратных метров. Используются автоматизированные производственные линии и передовые технологии.'}
              </p>
              <img
                src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Factory"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl text-blue-900 mb-6">{t.qualityControl}</h2>
              <p className="text-gray-700 mb-6">
                {language === 'kk' &&
                  'Біз әр өнімнің сапасына ерекше назар аударамыз. Қатаң сапа бақылауы және тестілеу процестері қолданылады. Әр өнім халықаралық стандарттарға сәйкес тексеріледі.'}
                {language === 'en' &&
                  'We pay special attention to the quality of each product. Strict quality control and testing processes are applied. Each product is tested for compliance with international standards.'}
                {language === 'ru' &&
                  'Мы уделяем особое внимание качеству каждого продукта. Применяются строгие процессы контроля качества и тестирования. Каждый продукт проверяется на соответствие международным стандартам.'}
              </p>
              <img
                src="https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NjM1Njc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Control"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-blue-900 mb-6 text-center">{t.team}</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              {language === 'kk' &&
                'Біздің команда — бұл 200-ден астам білікті мамандар, инженерлер және техниктер. Біз үнемі қызметкерлеріміздің біліктілігін арттырып, озық технологияларды меңгеруге тырысамыз.'}
              {language === 'en' &&
                'Our team consists of over 200 qualified specialists, engineers, and technicians. We continuously improve the skills of our employees and strive to master advanced technologies.'}
              {language === 'ru' &&
                'Наша команда — это более 200 квалифицированных специалистов, инженеров и техников. Мы постоянно повышаем квалификацию наших сотрудников и стремимся освоить передовые технологии.'}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <img
                src="https://images.unsplash.com/photo-1742203101560-a4e9351c0ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZW5naW5lZXJzJTIwZmFjdG9yeSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc2NDA5NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Production"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NjM1Njc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
