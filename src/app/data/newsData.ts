export interface NewsItem {
  id: string;
  titleKk: string;
  titleEn: string;
  titleRu: string;
  date: string;
  image: string;
  excerptKk: string;
  excerptEn: string;
  excerptRu: string;
  contentKk: string;
  contentEn: string;
  contentRu: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'new-ul-fm-certification-2026',
    titleKk: 'BESTOP жаңа UL/FM сертификаттарын алды',
    titleEn: 'BESTOP Receives New UL/FM Certifications',
    titleRu: 'BESTOP получила новые сертификаты UL/FM',
    date: '2026-04-10',
    image: 'https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NjM1Njc5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'certificates',
    excerptKk: 'Біздің өрт қауіпсіздігі өнімдері жаңа UL және FM сертификаттарын сәтті өтті.',
    excerptEn: 'Our fire safety products have successfully passed new UL and FM certifications.',
    excerptRu: 'Наша продукция для пожарной безопасности успешно прошла новые сертификации UL и FM.',
    contentKk: `Біз мақтанышпен хабарлаймыз, BESTOP компаниясының өрт қауіпсіздігі өнімдері жаңа UL және FM сертификаттарын алды. Бұл біздің өнімдердің ең жоғары халықаралық стандарттарға сәйкестігін растайды.

Сертификацияланған өнімдер тізімі:
- Өрт сөндіруге арналған шиберлі клапандар
- Ойықты муфталар және жалғастырғыштар
- Өрт насостары мен арматура

Біз өз клиенттерімізге әрқашан жоғары сапалы және сенімді өнімдерді ұсынуға тырысамыз. UL/FM сертификаттары біздің өнімдердің өрт қауіпсіздігі жүйелеріне толық сәйкестігін кепілдік етеді.`,
    contentEn: `We are proud to announce that BESTOP fire safety products have received new UL and FM certifications. This confirms that our products meet the highest international standards.

List of certified products:
- Gate valves for fire protection
- Grooved couplings and fittings
- Fire pumps and accessories

We strive to always provide our customers with high-quality and reliable products. UL/FM certifications guarantee that our products are fully compliant with fire safety system requirements.`,
    contentRu: `Мы с гордостью сообщаем, что продукция BESTOP для пожарной безопасности получила новые сертификаты UL и FM. Это подтверждает соответствие наших продуктов высочайшим международным стандартам.

Список сертифицированной продукции:
- Задвижки для пожаротушения
- Желобковые муфты и фитинги
- Пожарные насосы и арматура

Мы стремимся всегда предоставлять нашим клиентам высококачественную и надежную продукцию. Сертификаты UL/FM гарантируют полное соответствие наших изделий требованиям систем пожарной безопасности.`,
  },
  {
    id: 'expansion-factory-2026',
    titleKk: 'Өндіріс қуатын кеңейту',
    titleEn: 'Factory Capacity Expansion',
    titleRu: 'Расширение производственных мощностей',
    date: '2026-03-25',
    image: 'https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NjQwOTcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'company',
    excerptKk: 'BESTOP жаңа өндіріс желісін іске қосты, бұл өнімділікті 40%-ға арттырады.',
    excerptEn: 'BESTOP has launched a new production line, increasing capacity by 40%.',
    excerptRu: 'BESTOP запустила новую производственную линию, увеличив мощность на 40%.',
    contentKk: `BESTOP компаниясы өндіріс қуатын айтарлықтай кеңейтті. Жаңа өндіріс желісі іске қосылды, бұл біздің өнімділігімізді 40%-ға арттырады.

Жаңа өндіріс желісінің артықшылықтары:
- Автоматтандырылған өндіріс процесі
- Жоғары дәлдік пен сапа бақылауы
- Энергия тиімділігі
- Экологиялық таза технологиялар

Бұл инвестиция біздің клиенттерге тапсырыстарды жылдамырақ орындауға және өнімдердің ассортиментін кеңейтуге мүмкіндік береді.`,
    contentEn: `BESTOP has significantly expanded its production capacity. A new production line has been launched, increasing our productivity by 40%.

Advantages of the new production line:
- Automated manufacturing process
- High precision and quality control
- Energy efficiency
- Environmentally friendly technologies

This investment allows us to fulfill orders faster and expand our product range for our customers.`,
    contentRu: `Компания BESTOP значительно расширила производственные мощности. Запущена новая производственная линия, увеличивающая нашу производительность на 40%.

Преимущества новой производственной линии:
- Автоматизированный процесс производства
- Высокая точность и контроль качества
- Энергоэффективность
- Экологически чистые технологии

Эта инвестиция позволяет нам быстрее выполнять заказы и расширять ассортимент продукции для наших клиентов.`,
  },
  {
    id: 'api-certification-oil-gas',
    titleKk: 'API сертификаты мұнай-газ өнімдеріне',
    titleEn: 'API Certification for Oil & Gas Products',
    titleRu: 'API сертификация для нефтегазовой продукции',
    date: '2026-02-18',
    image: 'https://images.unsplash.com/photo-1704839710877-70f6e8cd69a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyeSUyMHBpcGVsaW5lfGVufDF8fHx8MTc3NjQwOTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'certificates',
    excerptKk: 'Біздің мұнай-газ саласына арналған клапандар мен арматура API стандартына сертификатталды.',
    excerptEn: 'Our valves and fittings for oil & gas industry have been API certified.',
    excerptRu: 'Наши клапаны и арматура для нефтегазовой отрасли сертифицированы по стандарту API.',
    contentKk: `BESTOP компаниясы мұнай және газ өнеркәсібіне арналған өнімдерге API (American Petroleum Institute) сертификатын алды. Бұл біздің өнімдердің жоғары сапасын және мұнай-газ саласындағы қатаң талаптарға сәйкестігін растайды.

API сертификатталған өнімдер:
- Мұнай трубопроводына арналған клапандар
- Жоғары қысымды арматура
- Газ жүйелеріне арналған өнімдер
- Химиялық өнеркәсіпке арналған шешімдер

API сертификаты әлемдік мұнай-газ компанияларына біздің өнімдерімізді сенімді түрде пайдалануға мүмкіндік береді.`,
    contentEn: `BESTOP has received API (American Petroleum Institute) certification for products intended for the oil and gas industry. This confirms the high quality of our products and compliance with strict requirements of the oil and gas sector.

API certified products:
- Valves for oil pipelines
- High-pressure fittings
- Products for gas systems
- Solutions for chemical industry

API certification allows global oil and gas companies to confidently use our products.`,
    contentRu: `Компания BESTOP получила сертификацию API (American Petroleum Institute) для продукции, предназначенной для нефтегазовой промышленности. Это подтверждает высокое качество нашей продукции и соответствие строгим требованиям нефтегазового сектора.

Сертифицированная продукция API:
- Клапаны для нефтепроводов
- Арматура высокого давления
- Продукция для газовых систем
- Решения для химической промышленности

Сертификация API позволяет мировым нефтегазовым компаниям уверенно использовать нашу продукцию.`,
  },
  {
    id: 'international-exhibition-2026',
    titleKk: 'Халықаралық көрмеге қатысу',
    titleEn: 'Participation in International Exhibition',
    titleRu: 'Участие в международной выставке',
    date: '2026-01-30',
    image: 'https://images.unsplash.com/photo-1742203101560-a4e9351c0ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZW5naW5lZXJzJTIwZmFjdG9yeSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc2NDA5NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'events',
    excerptKk: 'BESTOP Dubai Water Summit 2026 көрмесінде жаңа өнімдерін ұсынды.',
    excerptEn: 'BESTOP presented new products at Dubai Water Summit 2026.',
    excerptRu: 'BESTOP представила новую продукцию на выставке Dubai Water Summit 2026.',
    contentKk: `BESTOP компаниясы Dubai Water Summit 2026 халықаралық көрмесіне сәтті қатысты. Көрмеде біздің жаңа өнімдер желісі және инновациялық шешімдер көрсетілді.

Көрмеде ұсынылған өнімдер:
- Жаңа буын шиберлі клапандар
- Энергия тиімді насостар
- Ақылды басқару жүйелері
- IoT технологиялары

Көрме кезінде біз әлемнің 45 елінен келген әріптестермен кездестік және жаңа әріптестік байланыстар орнаттық.`,
    contentEn: `BESTOP successfully participated in the international exhibition Dubai Water Summit 2026. The exhibition showcased our new product line and innovative solutions.

Products presented at the exhibition:
- New generation gate valves
- Energy-efficient pumps
- Smart control systems
- IoT technologies

During the exhibition, we met with partners from 45 countries around the world and established new partnerships.`,
    contentRu: `Компания BESTOP успешно приняла участие в международной выставке Dubai Water Summit 2026. На выставке была представлена наша новая линейка продукции и инновационные решения.

Представленная продукция на выставке:
- Задвижки нового поколения
- Энергоэффективные насосы
- Системы умного управления
- Технологии IoT

В ходе выставки мы встретились с партнерами из 45 стран мира и установили новые партнерские связи.`,
  },
];
