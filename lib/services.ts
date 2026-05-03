export type ServiceSlug =
  | 'dijital-pazarlama'
  | 'sosyal-medya'
  | 'web-tasarim'
  | 'seo'
  | 'reklam-yonetimi'
  | 'icerik-uretimi';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceLocaleData {
  title: string;
  slogan: string;
  heroDescription: string;
  metaDescription: string;
  keywords: string[];
  process: ProcessStep[];
  advantages: Advantage[];
  faq: FaqItem[];
}

export interface ServiceData {
  slug: ServiceSlug;
  icon: string;
  tr: ServiceLocaleData;
  en: ServiceLocaleData;
}

export const services: ServiceData[] = [
  {
    slug: 'dijital-pazarlama',
    icon: '📈',
    tr: {
      title: 'Dijital Pazarlama',
      slogan: 'Veriye Dayalı Stratejilerle Markanızı Büyütün',
      heroDescription:
        'Markanızın dijital dünyada güçlü ve tutarlı bir yer edinmesi için SEO, sosyal medya, içerik ve reklamı tek bir strateji çatısı altında yönetiyoruz.',
      metaDescription:
        'Ribbony dijital pazarlama hizmetleriyle markanızı büyütün. SEO, sosyal medya, içerik üretimi ve reklam yönetimini kapsayan bütünleşik dijital strateji çözümleri.',
      keywords: [
        'dijital pazarlama',
        'dijital pazarlama ajansı',
        'dijital strateji',
        'online pazarlama',
        'marka büyütme',
        'İstanbul dijital ajans',
      ],
      process: [
        {
          number: '01',
          title: 'Marka & Rakip Analizi',
          description:
            'Markanızın mevcut dijital varlığını, hedef kitlenizi ve rakip konumlandırmasını kapsamlı araçlarla inceliyoruz. Bu analiz stratejimizin sağlam bir temele oturmasını sağlar.',
        },
        {
          number: '02',
          title: 'Strateji Geliştirme',
          description:
            'Analizden elde ettiğimiz verilere dayanarak markanıza özel, ölçülebilir hedefler içeren bütünleşik bir dijital pazarlama stratejisi oluştururuz.',
        },
        {
          number: '03',
          title: 'Çok Kanallı Uygulama',
          description:
            'SEO, sosyal medya, e-posta ve ücretli reklam kanallarını entegre biçimde yöneterek her kanalın güçlü yönlerinden maksimum fayda sağlarız.',
        },
        {
          number: '04',
          title: 'İçerik Üretimi & Yayın',
          description:
            'Hedef kitlenizin ilgisini çekecek, marka sesinizle uyumlu özgün içerikler üretir ve planlı bir içerik takvimi dahilinde yayınlarız.',
        },
        {
          number: '05',
          title: 'Ölçüm & Optimizasyon',
          description:
            "Gerçek zamanlı dashboard'lar ve aylık raporlarla kampanya performansını sürekli ölçer, veriye dayalı kararlarla stratejinizi iyileştiririz.",
        },
      ],
      advantages: [
        {
          icon: '🎯',
          title: 'Hedef Kitle Hassasiyeti',
          description:
            'Demografik ve davranışsal verilerle tam olarak doğru kişilere ulaşır, bütçe israfını ortadan kaldırırız.',
        },
        {
          icon: '📊',
          title: 'Ölçülebilir Sonuçlar',
          description:
            "Her kampanya için net KPI'lar belirler, düzenli raporlarla ilerlemeyi şeffaf biçimde paylaşırız.",
        },
        {
          icon: '🔄',
          title: 'Sürekli Optimizasyon',
          description:
            "A/B testleri ve performans analiziyle kampanyaları sürekli iyileştirir, en yüksek ROI'yi hedefleriz.",
        },
      ],
      faq: [
        {
          question: 'Dijital pazarlama hizmetinizin kapsamı nedir?',
          answer:
            'Hizmetimiz; SEO, sosyal medya yönetimi, Google ve Meta reklam yönetimi, içerik üretimi, e-posta pazarlama ve performans analitiğini kapsar. Her müşteri için özel bir strateji oluştururuz.',
        },
        {
          question: 'İlk sonuçları ne zaman görürüm?',
          answer:
            'Ücretli reklam kampanyalarında ilk hafta içinde trafik ve dönüşüm artışı gözlemlenir. SEO ve organik büyüme stratejilerinde ise anlamlı sonuçlar genellikle 3-6 ay içinde görülür. Tüm süreç boyunca aylık raporlarla sizi bilgilendiririz.',
        },
        {
          question: 'Minimum sözleşme süresi var mı?',
          answer:
            'Dijital pazarlama hizmetleri için önerilen minimum süre 3 aydır; çünkü strateji kurulum, uygulama ve optimizasyon aşamaları zaman gerektirir. Ancak proje bazlı iş birliği seçenekleri de sunuyoruz.',
        },
        {
          question: 'Bütçemi nasıl belirlemeliyim?',
          answer:
            "Bütçe, hedeflerinize ve sektörünüze göre şekillenir. İlk görüşmemizde mevcut durumunuzu ve hedeflerinizi değerlendirerek size en uygun bütçe aralığını ve beklenen ROI'yi net olarak sunuyoruz.",
        },
        {
          question: 'Rakip analizini nasıl gerçekleştiriyorsunuz?',
          answer:
            'SEMrush, Ahrefs ve özel veri araçlarıyla rakiplerinizin anahtar kelime stratejilerini, reklam harcamalarını, içerik yaklaşımlarını ve geri bağlantı profillerini analiz ediyoruz. Bu veriler stratejinizdeki boşlukları doldurmamızı sağlar.',
        },
        {
          question: 'Raporları ne sıklıkla alırım?',
          answer:
            'Her ay ayrıntılı bir performans raporu sunuyoruz. Ek olarak haftalık özet e-postalar gönderiliyor ve müşterilerimizin gerçek zamanlı verilere erişebildiği canlı bir dashboard sağlıyoruz.',
        },
      ],
    },
    en: {
      title: 'Digital Marketing',
      slogan: 'Grow Your Brand with Data-Driven Strategies',
      heroDescription:
        'We manage SEO, social media, content, and advertising under one strategic umbrella to help your brand establish a strong and consistent digital presence.',
      metaDescription:
        'Grow your brand with Ribbony digital marketing services. Integrated digital strategy solutions covering SEO, social media, content creation, and ad management.',
      keywords: [
        'digital marketing',
        'digital marketing agency',
        'digital strategy',
        'online marketing',
        'brand growth',
        'Istanbul digital agency',
      ],
      process: [
        {
          number: '01',
          title: 'Brand & Competitor Analysis',
          description:
            "We examine your brand's current digital presence, target audience, and competitor positioning with comprehensive tools to build a solid strategic foundation.",
        },
        {
          number: '02',
          title: 'Strategy Development',
          description:
            'Based on our analysis, we create an integrated digital marketing strategy tailored to your brand with measurable, clearly defined objectives.',
        },
        {
          number: '03',
          title: 'Multi-Channel Execution',
          description:
            'We manage SEO, social media, email, and paid advertising channels in an integrated way to leverage the strengths of each platform.',
        },
        {
          number: '04',
          title: 'Content Production & Publishing',
          description:
            'We create original content aligned with your brand voice that resonates with your target audience, published on a structured content calendar.',
        },
        {
          number: '05',
          title: 'Measurement & Optimization',
          description:
            'We continuously measure campaign performance with real-time dashboards and monthly reports, making data-driven decisions to improve your strategy.',
        },
      ],
      advantages: [
        {
          icon: '🎯',
          title: 'Target Audience Precision',
          description:
            'We reach exactly the right people using demographic and behavioral data, eliminating budget waste.',
        },
        {
          icon: '📊',
          title: 'Measurable Results',
          description:
            'We set clear KPIs for every campaign and share progress transparently through regular reports.',
        },
        {
          icon: '🔄',
          title: 'Continuous Optimization',
          description:
            'We continuously improve campaigns through A/B testing and performance analysis, always targeting the highest possible ROI.',
        },
      ],
      faq: [
        {
          question: 'What does your digital marketing service include?',
          answer:
            'Our service covers SEO, social media management, Google and Meta ad management, content creation, email marketing, and performance analytics. We build a custom strategy for every client.',
        },
        {
          question: 'When will I see the first results?',
          answer:
            'For paid ad campaigns, traffic and conversion increases are typically observed within the first week. For SEO and organic growth strategies, meaningful results usually appear within 3–6 months. We keep you informed throughout with monthly reports.',
        },
        {
          question: 'Is there a minimum contract duration?',
          answer:
            'We recommend a minimum of 3 months for digital marketing services because the strategy setup, execution, and optimization phases require time. However, project-based collaboration options are also available.',
        },
        {
          question: 'How should I determine my budget?',
          answer:
            'Budget depends on your goals and industry. In our first meeting, we assess your current situation and goals, then clearly present the most appropriate budget range and expected ROI for your specific case.',
        },
        {
          question: 'How do you conduct competitor analysis?',
          answer:
            "Using SEMrush, Ahrefs, and proprietary data tools, we analyze your competitors' keyword strategies, ad spend, content approaches, and backlink profiles. This data helps us identify and fill the gaps in your strategy.",
        },
        {
          question: 'How often will I receive reports?',
          answer:
            'We provide a detailed monthly performance report. We also send weekly summary emails and provide clients with access to a live dashboard for real-time data.',
        },
      ],
    },
  },
  {
    slug: 'sosyal-medya',
    icon: '📱',
    tr: {
      title: 'Sosyal Medya Yönetimi',
      slogan: 'Topluluğunuzu Büyütün, Markanızı Konumlandırın',
      heroDescription:
        "Instagram, Facebook, LinkedIn ve TikTok'ta markanızı doğru sesle konumlandırır, etkileşimi yüksek içerikler üretir ve sadık bir topluluk oluşturmanıza yardımcı oluruz.",
      metaDescription:
        'Profesyonel sosyal medya yönetimi hizmetleriyle markanızı büyütün. Instagram, TikTok, LinkedIn ve Facebook için strateji, içerik ve topluluk yönetimi.',
      keywords: [
        'sosyal medya yönetimi',
        'Instagram yönetimi',
        'TikTok içerik üretimi',
        'sosyal medya ajansı',
        'topluluk yönetimi',
        'influencer pazarlama',
      ],
      process: [
        {
          number: '01',
          title: 'Hesap Denetimi',
          description:
            'Mevcut sosyal medya hesaplarınızın performansını, içerik kalitesini ve rakip konumlandırmasını analiz ederiz. Güçlü ve geliştirilmesi gereken yönleri net biçimde ortaya koyarız.',
        },
        {
          number: '02',
          title: 'Strateji & İçerik Planı',
          description:
            'Hedef kitlenize uygun bir platform stratejisi ve aylık içerik takvimi oluştururuz. Her platformun kendine özgü dinamiklerine göre ayrı bir yaklaşım benimseriz.',
        },
        {
          number: '03',
          title: 'İçerik Üretimi',
          description:
            'Profesyonel fotoğraf, video ve grafik tasarım ekibimizle marka kimliğinizi yansıtan, kaydırılmak yerine duraksatılan içerikler üretiriz.',
        },
        {
          number: '04',
          title: 'Yayın & Topluluk Yönetimi',
          description:
            'İçerikleri optimal zamanlarda yayınlar, yorumları ve mesajları yönetir, takipçilerinizle özgün ve samimi bir diyalog kurarız.',
        },
        {
          number: '05',
          title: 'Analiz & Raporlama',
          description:
            'Erişim, etkileşim, takipçi büyümesi ve dönüşüm gibi temel metrikleri izler, aylık raporlarla stratejinizi birlikte değerlendiririz.',
        },
      ],
      advantages: [
        {
          icon: '🚀',
          title: 'Organik Büyüme',
          description:
            'Algoritma dostu içerik stratejileriyle hesaplarınızın organik erişimini ve takipçi sayısını sürdürülebilir biçimde artırırız.',
        },
        {
          icon: '🎨',
          title: 'Marka Tutarlılığı',
          description:
            'Tüm platformlarda tutarlı bir görsel dil ve ton of voice oluşturarak marka kimliğinizi güçlendiririz.',
        },
        {
          icon: '💬',
          title: 'Yüksek Etkileşim',
          description:
            'İnteraktif içerikler, hikayeler ve topluluk odaklı yaklaşımlarla takipçilerinizi sadık müşterilere dönüştürürüz.',
        },
      ],
      faq: [
        {
          question: 'Hangi sosyal medya platformlarında hizmet veriyorsunuz?',
          answer:
            'Instagram, TikTok, Facebook, LinkedIn ve X (Twitter) platformlarında hizmet veriyoruz. Sektörünüze ve hedef kitlenize en uygun platformları birlikte belirliyoruz.',
        },
        {
          question: 'Ayda kaç içerik yayınlanıyor?',
          answer:
            'Seçilen pakete ve platforma göre değişmekle birlikte, Instagram için haftada 4-5 gönderi + günlük story, LinkedIn için haftada 3 gönderi ve TikTok için haftada 3-4 video standart paketimizde yer alıyor.',
        },
        {
          question: 'İçerikleri onaylayabilir miyim?',
          answer:
            'Evet. Tüm içerikler yayınlanmadan önce onayınıza sunulur. İçerik takvimini aylık bazda paylaşıyor ve geri bildirimlerinizi yansıtarak revizyon yapıyoruz.',
        },
        {
          question: 'Fotoğraf ve video çekimi de sağlıyor musunuz?',
          answer:
            'Evet, talep üzerine İstanbul genelinde profesyonel fotoğraf ve video çekimi düzenliyoruz. Bu hizmet üst tier paketlerimize dahil olup bağımsız olarak da talep edilebilir.',
        },
        {
          question: 'Influencer iş birlikleri yapıyor musunuz?',
          answer:
            'Evet. Sektörünüze ve bütçenize uygun nano, mikro ve makro influencer ortaklıkları kuruyoruz. Teklif müzakeresi, brief hazırlama, içerik onay süreci ve performans ölçümünü tamamen yönetiyoruz.',
        },
      ],
    },
    en: {
      title: 'Social Media Management',
      slogan: 'Grow Your Community, Position Your Brand',
      heroDescription:
        'We position your brand with the right voice on Instagram, Facebook, LinkedIn, and TikTok, create high-engagement content, and help you build a loyal community.',
      metaDescription:
        'Grow your brand with professional social media management services. Strategy, content, and community management for Instagram, TikTok, LinkedIn, and Facebook.',
      keywords: [
        'social media management',
        'Instagram management',
        'TikTok content creation',
        'social media agency',
        'community management',
        'influencer marketing',
      ],
      process: [
        {
          number: '01',
          title: 'Account Audit',
          description:
            "We analyze your existing social media accounts' performance, content quality, and competitive positioning to clearly identify strengths and areas for improvement.",
        },
        {
          number: '02',
          title: 'Strategy & Content Plan',
          description:
            'We create a platform strategy and monthly content calendar suited to your target audience, adopting a unique approach for the dynamics of each platform.',
        },
        {
          number: '03',
          title: 'Content Production',
          description:
            'Our professional photography, video, and graphic design team creates content that reflects your brand identity — content that stops the scroll rather than getting scrolled past.',
        },
        {
          number: '04',
          title: 'Publishing & Community Management',
          description:
            'We publish content at optimal times, manage comments and messages, and maintain an authentic dialogue with your followers.',
        },
        {
          number: '05',
          title: 'Analytics & Reporting',
          description:
            'We track key metrics including reach, engagement, follower growth, and conversions, then review your strategy together through monthly reports.',
        },
      ],
      advantages: [
        {
          icon: '🚀',
          title: 'Organic Growth',
          description:
            "We sustainably grow your accounts' organic reach and follower count through algorithm-friendly content strategies.",
        },
        {
          icon: '🎨',
          title: 'Brand Consistency',
          description:
            'We strengthen your brand identity by establishing a consistent visual language and tone of voice across all platforms.',
        },
        {
          icon: '💬',
          title: 'High Engagement',
          description:
            'We convert your followers into loyal customers through interactive content, stories, and community-focused approaches.',
        },
      ],
      faq: [
        {
          question: 'Which social media platforms do you work with?',
          answer:
            'We provide services for Instagram, TikTok, Facebook, LinkedIn, and X (Twitter). We work with you to identify the most suitable platforms for your industry and target audience.',
        },
        {
          question: 'How many posts are published per month?',
          answer:
            'This varies by package and platform, but our standard package includes 4–5 posts per week + daily stories for Instagram, 3 posts per week for LinkedIn, and 3–4 videos per week for TikTok.',
        },
        {
          question: 'Can I approve the content before it goes live?',
          answer:
            'Yes. All content is submitted for your approval before publishing. We share the content calendar on a monthly basis and make revisions based on your feedback.',
        },
        {
          question: 'Do you also provide photo and video shoots?',
          answer:
            'Yes, we arrange professional photo and video shoots across Istanbul upon request. This service is included in our upper-tier packages and can also be requested independently.',
        },
        {
          question: 'Do you manage influencer collaborations?',
          answer:
            'Yes. We arrange nano, micro, and macro influencer partnerships suited to your industry and budget, and fully manage proposal negotiations, brief preparation, content approval, and performance measurement.',
        },
      ],
    },
  },
  {
    slug: 'web-tasarim',
    icon: '💻',
    tr: {
      title: 'Web Tasarım & Geliştirme',
      slogan: 'Dönüşüm Odaklı Web Siteleri ile Dijital Gücünüzü Artırın',
      heroDescription:
        'Hızlı, mobil uyumlu ve dönüşüm odaklı web siteleri tasarlayarak markanızın dijital yüzünü güçlendiriyor, ziyaretçileri müşteriye dönüştüren deneyimler yaratıyoruz.',
      metaDescription:
        'Profesyonel web tasarım ve geliştirme hizmetleri. Hızlı, mobil uyumlu ve SEO dostu web siteleri için Ribbony ile iletişime geçin.',
      keywords: [
        'web tasarım',
        'web geliştirme',
        'kurumsal web sitesi',
        'e-ticaret sitesi',
        'Next.js web tasarım',
        'mobil uyumlu web sitesi',
        'İstanbul web tasarım ajansı',
      ],
      process: [
        {
          number: '01',
          title: 'Brief & Keşif',
          description:
            'Hedeflerinizi, hedef kitlenizi ve mevcut dijital varlığınızı derinlemesine anlayarak projenin kapsamını ve başarı kriterlerini netleştiririz.',
        },
        {
          number: '02',
          title: 'Wireframe & UX Tasarımı',
          description:
            "Kullanıcı yolculuğunu merkeze alan wireframe'ler ve prototip ekranlar oluşturarak bilgi mimarisini ve kullanıcı deneyimini onayınıza sunarız.",
        },
        {
          number: '03',
          title: 'Görsel Tasarım',
          description:
            'Marka kimliğinizle tam uyumlu, çarpıcı görsel tasarımlar üretir, her sayfanın masaüstü ve mobil versiyonlarını hazırlarız.',
        },
        {
          number: '04',
          title: 'Geliştirme & Test',
          description:
            'Onaylanan tasarımı modern teknolojilerle kodlar, hız, güvenlik ve SEO uyumluluğunu kapsamlı testlerle doğrularız.',
        },
        {
          number: '05',
          title: 'Yayın & Destek',
          description:
            'Sitenizi yayına alır, ekibinizi içerik yönetimi konusunda eğitir ve yayın sonrası teknik destek sağlarız.',
        },
      ],
      advantages: [
        {
          icon: '⚡',
          title: 'Üstün Hız',
          description:
            "Core Web Vitals standartlarını karşılayan, Google PageSpeed'de 90+ puan alan siteler teslim ederiz.",
        },
        {
          icon: '📱',
          title: 'Tam Mobil Uyumluluk',
          description:
            'Tüm cihaz ve ekran boyutlarında kusursuz çalışan, dokunmatik öncelikli tasarımlar üretiriz.',
        },
        {
          icon: '🔒',
          title: 'Güvenli & SEO Dostu',
          description:
            'SSL, HTTPS, güvenlik başlıkları ve teknik SEO en iyi uygulamalarıyla sitenizi hem kullanıcılar hem de arama motorları için optimize ederiz.',
        },
      ],
      faq: [
        {
          question: 'Web sitesi projesi ne kadar sürer?',
          answer:
            'Kurumsal bir web sitesi projesi ortalama 4-8 hafta sürer. Süre; sayfalar, içerik miktarı ve özel işlevsellik gereksinimlerine göre değişir. Proje başında size net bir zaman çizelgesi sunuyoruz.',
        },
        {
          question: 'Siteyi kendim güncelleyebilir miyim?',
          answer:
            'Evet. İsteğe göre WordPress, Sanity veya özel bir yönetim paneli entegrasyonu sağlıyoruz. Yayın sonrasında sistemi kullanmanız için ekibinize eğitim veriyoruz.',
        },
        {
          question: 'E-ticaret sitesi yapıyor musunuz?',
          answer:
            'Evet. WooCommerce ve özel Next.js e-ticaret çözümleri geliştiriyoruz. Ödeme entegrasyonu (iyzico, Stripe), kargo yönetimi ve stok takibini kapsayan tam entegre çözümler sunuyoruz.',
        },
        {
          question: 'Domain ve hosting dahil mi?',
          answer:
            'Domain ve hosting ayrı birer maliyet kalemidir; ancak size en uygun sağlayıcıları önerebilir ve kurulum sürecinde yardımcı olabiliriz. Tercih ederseniz yönetimini biz üstlenebiliriz.',
        },
        {
          question: 'Yayın sonrasında bakım desteği veriyor musunuz?',
          answer:
            'Evet, aylık bakım paketlerimiz mevcuttur. Güvenlik güncellemeleri, yedekleme, uptime izleme ve küçük içerik güncellemelerini kapsar. Detaylar için bizimle iletişime geçebilirsiniz.',
        },
      ],
    },
    en: {
      title: 'Web Design & Development',
      slogan: 'Boost Your Digital Power with Conversion-Focused Websites',
      heroDescription:
        "We strengthen your brand's digital face by designing fast, mobile-responsive, and conversion-focused websites that turn visitors into customers.",
      metaDescription:
        'Professional web design and development services. Contact Ribbony for fast, mobile-responsive, and SEO-friendly websites.',
      keywords: [
        'web design',
        'web development',
        'corporate website',
        'e-commerce website',
        'Next.js web design',
        'mobile-responsive website',
        'Istanbul web design agency',
      ],
      process: [
        {
          number: '01',
          title: 'Brief & Discovery',
          description:
            'We deeply understand your goals, target audience, and current digital presence to clarify the project scope and success criteria.',
        },
        {
          number: '02',
          title: 'Wireframe & UX Design',
          description:
            'We create user-journey-centered wireframes and prototype screens, submitting the information architecture and user experience for your approval.',
        },
        {
          number: '03',
          title: 'Visual Design',
          description:
            'We produce striking visual designs fully aligned with your brand identity and prepare desktop and mobile versions for every page.',
        },
        {
          number: '04',
          title: 'Development & Testing',
          description:
            'We code the approved designs with modern technologies and verify speed, security, and SEO compliance through comprehensive testing.',
        },
        {
          number: '05',
          title: 'Launch & Support',
          description:
            'We launch your site, train your team on content management, and provide post-launch technical support.',
        },
      ],
      advantages: [
        {
          icon: '⚡',
          title: 'Superior Speed',
          description:
            'We deliver sites that meet Core Web Vitals standards and score 90+ on Google PageSpeed.',
        },
        {
          icon: '📱',
          title: 'Full Mobile Responsiveness',
          description:
            'We create touch-first designs that work flawlessly on all devices and screen sizes.',
        },
        {
          icon: '🔒',
          title: 'Secure & SEO-Friendly',
          description:
            'We optimize your site for both users and search engines with SSL, HTTPS, security headers, and technical SEO best practices.',
        },
      ],
      faq: [
        {
          question: 'How long does a website project take?',
          answer:
            'A corporate website project typically takes 4–8 weeks. The timeline varies based on the number of pages, content volume, and custom functionality requirements. We provide a clear timeline at the start of the project.',
        },
        {
          question: 'Can I update the site myself?',
          answer:
            'Yes. We integrate WordPress, Sanity, or a custom admin panel based on your preference. After launch, we train your team on how to use the system.',
        },
        {
          question: 'Do you build e-commerce sites?',
          answer:
            'Yes. We develop WooCommerce and custom Next.js e-commerce solutions, providing fully integrated solutions that cover payment integration (iyzico, Stripe), shipping management, and inventory tracking.',
        },
        {
          question: 'Are domain and hosting included?',
          answer:
            'Domain and hosting are separate cost items, but we can recommend the most suitable providers and assist with the setup process. We can also manage these on your behalf if preferred.',
        },
        {
          question: 'Do you provide maintenance support after launch?',
          answer:
            'Yes, we offer monthly maintenance packages covering security updates, backups, uptime monitoring, and minor content updates. Contact us for details.',
        },
      ],
    },
  },
  {
    slug: 'seo',
    icon: '🔍',
    tr: {
      title: 'SEO Optimizasyonu',
      slogan: "Organik Trafiğinizi Artırın, Google'da Üst Sıralara Çıkın",
      heroDescription:
        "Teknik SEO, içerik stratejisi ve link building'i birleştiren bütünleşik yaklaşımımızla web sitenizin arama motorlarındaki görünürlüğünü kalıcı biçimde artırıyoruz.",
      metaDescription:
        "Profesyonel SEO hizmetleriyle Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve link building ile organik trafiğinizi artırın.",
      keywords: [
        'SEO hizmetleri',
        'Google SEO',
        'organik trafik artışı',
        'teknik SEO',
        'anahtar kelime optimizasyonu',
        'link building',
        'İstanbul SEO ajansı',
      ],
      process: [
        {
          number: '01',
          title: 'Teknik SEO Denetimi',
          description:
            "Sitenizin tarama durumunu, sayfa hızını, mobil uyumluluğunu, yapısal veri işaretlemelerini ve temel web vitals'larını kapsamlı araçlarla analiz ederiz.",
        },
        {
          number: '02',
          title: 'Anahtar Kelime Araştırması',
          description:
            'Sektörünüze ve hedef kitlenize özgü yüksek potansiyelli anahtar kelimeleri belirler, arama hacmi ve rekabet analiziyle önceliklendiririz.',
        },
        {
          number: '03',
          title: 'Sayfa İçi Optimizasyon',
          description:
            'Başlık etiketleri, meta açıklamalar, başlık hiyerarşisi, görsel alt metinleri ve iç linkleme yapısını arama motorlarının ve kullanıcıların beklentilerine göre optimize ederiz.',
        },
        {
          number: '04',
          title: 'İçerik Stratejisi',
          description:
            "E-E-A-T prensiplerine uygun, derinlikli ve değer katan içerikler oluşturarak sitenizin topical authority'sini artırırız.",
        },
        {
          number: '05',
          title: 'Link Building & Raporlama',
          description:
            'Yüksek otorite Türk ve uluslararası kaynaklardan kaliteli backlink temin eder, aylık sıralama ve trafik raporlarıyla süreci şeffaf biçimde takip ederiz.',
        },
      ],
      advantages: [
        {
          icon: '📈',
          title: 'Uzun Vadeli Büyüme',
          description:
            'Ücretli reklamların aksine, doğru SEO çalışması kalıcı ve sürdürülebilir bir organik trafik kaynağı oluşturur.',
        },
        {
          icon: '🏆',
          title: 'Otorite & Güven',
          description:
            "Google'ın üst sıralarında yer almak, ziyaretçilerin markanıza olan güvenini doğrudan artırır.",
        },
        {
          icon: '💰',
          title: 'Yüksek ROI',
          description:
            "Organik trafik, tıklama başı maliyet olmadığı için uzun vadede en yüksek ROI'yi sağlayan dijital kanal olarak öne çıkar.",
        },
      ],
      faq: [
        {
          question: 'SEO çalışmasının sonuçları ne zaman görülür?',
          answer:
            'Teknik düzeltmeler ve sayfa içi optimizasyonlar genellikle 4-8 hafta içinde crawl edilir. Anlamlı sıralama ve trafik artışları ise 3-6 ay içinde gözlemlenmeye başlar. SEO, uzun vadeli bir yatırımdır.',
        },
        {
          question: 'Yerel SEO hizmeti veriyor musunuz?',
          answer:
            'Evet. Google Business Profile optimizasyonu, yerel anahtar kelime stratejisi ve citation yönetimi dahil kapsamlı yerel SEO hizmetleri sunuyoruz. İstanbul ve diğer şehirlerdeki yerel işletmeler için özel paketlerimiz mevcuttur.',
        },
        {
          question: 'Black-hat SEO teknikleri kullanıyor musunuz?',
          answer:
            'Kesinlikle hayır. Tüm çalışmalarımız Google Webmaster Yönergelerine uygundur. Kısa vadeli sonuçlar yerine sürdürülebilir ve güvenli yöntemleri tercih ederiz.',
        },
        {
          question: 'Kaç anahtar kelime hedeflenecek?',
          answer:
            'Pakete göre değişmekle birlikte başlangıçta 20-50 birincil anahtar kelime hedefliyoruz. Zamanla uzun kuyruklu anahtar kelimelerle bu sayı önemli ölçüde artıyor.',
        },
        {
          question: "E-ticaret SEO'su yapıyor musunuz?",
          answer:
            'Evet. Kategori sayfası optimizasyonu, ürün şema işaretlemeleri, faceted navigation yönetimi ve içerik stratejisiyle e-ticaret sitelerinin organik satışlarını artırıyoruz.',
        },
        {
          question: 'Rakiplerim çok güçlüyse SEO işe yarar mı?',
          answer:
            'Güçlü rakipler evet zorlayıcıdır; ancak doğru stratejiyle her nişte büyüme mümkündür. Uzun kuyruklu anahtar kelimeler, yerel optimizasyon ve içerik boşluklarını doldurmak güçlü rakipler karşısında bile etkili sonuçlar verir.',
        },
      ],
    },
    en: {
      title: 'SEO Optimization',
      slogan: 'Grow Your Organic Traffic and Climb to the Top of Google',
      heroDescription:
        "We permanently improve your website's search engine visibility with an integrated approach combining technical SEO, content strategy, and link building.",
      metaDescription:
        'Climb to the top of Google with professional SEO services. Grow your organic traffic with technical SEO, content strategy, and link building.',
      keywords: [
        'SEO services',
        'Google SEO',
        'organic traffic growth',
        'technical SEO',
        'keyword optimization',
        'link building',
        'Istanbul SEO agency',
      ],
      process: [
        {
          number: '01',
          title: 'Technical SEO Audit',
          description:
            "We analyze your site's crawl status, page speed, mobile responsiveness, structured data markup, and core web vitals with comprehensive tools.",
        },
        {
          number: '02',
          title: 'Keyword Research',
          description:
            'We identify high-potential keywords specific to your industry and target audience, then prioritize them through search volume and competition analysis.',
        },
        {
          number: '03',
          title: 'On-Page Optimization',
          description:
            'We optimize title tags, meta descriptions, heading hierarchy, image alt texts, and internal linking structure to meet the expectations of both search engines and users.',
        },
        {
          number: '04',
          title: 'Content Strategy',
          description:
            "We create in-depth, value-adding content aligned with E-E-A-T principles to increase your site's topical authority.",
        },
        {
          number: '05',
          title: 'Link Building & Reporting',
          description:
            'We secure quality backlinks from high-authority Turkish and international sources, and track the process transparently through monthly ranking and traffic reports.',
        },
      ],
      advantages: [
        {
          icon: '📈',
          title: 'Long-Term Growth',
          description:
            'Unlike paid ads, proper SEO creates a permanent and sustainable source of organic traffic.',
        },
        {
          icon: '🏆',
          title: 'Authority & Trust',
          description:
            "Ranking at the top of Google directly increases visitors' trust in your brand.",
        },
        {
          icon: '💰',
          title: 'High ROI',
          description:
            "Organic traffic stands out as the digital channel with the highest long-term ROI since there's no cost per click.",
        },
      ],
      faq: [
        {
          question: 'When will I see results from SEO?',
          answer:
            'Technical fixes and on-page optimizations are typically crawled within 4–8 weeks. Meaningful ranking and traffic increases begin to appear within 3–6 months. SEO is a long-term investment.',
        },
        {
          question: 'Do you provide local SEO services?',
          answer:
            'Yes. We offer comprehensive local SEO services including Google Business Profile optimization, local keyword strategy, and citation management. We have specialized packages for local businesses in Istanbul and other cities.',
        },
        {
          question: 'Do you use black-hat SEO techniques?',
          answer:
            'Absolutely not. All our work complies with Google Webmaster Guidelines. We prefer sustainable and safe methods over short-term gains.',
        },
        {
          question: 'How many keywords will be targeted?',
          answer:
            'We target 20–50 primary keywords at the start, depending on the package. Over time, this number grows significantly with long-tail keywords.',
        },
        {
          question: 'Do you do e-commerce SEO?',
          answer:
            'Yes. We increase organic sales for e-commerce sites through category page optimization, product schema markup, faceted navigation management, and content strategy.',
        },
        {
          question: 'Does SEO work even if my competitors are very strong?',
          answer:
            'Strong competitors are challenging, but growth is possible in any niche with the right strategy. Long-tail keywords, local optimization, and filling content gaps deliver effective results even against strong competitors.',
        },
      ],
    },
  },
  {
    slug: 'reklam-yonetimi',
    icon: '📣',
    tr: {
      title: 'Reklam Yönetimi',
      slogan: 'Her Kuruşu Çalıştıran Reklam Kampanyaları',
      heroDescription:
        'Google Ads ve Meta Ads kampanyalarınızı veri odaklı optimizasyon, yaratıcı test ve sürekli iyileştirme döngüsüyle yönetir; bütçenizden maksimum dönüşüm elde etmenizi sağlarız.',
      metaDescription:
        'Profesyonel Google Ads ve Meta Ads yönetimi. Reklam bütçenizden maksimum ROI elde edin. Ribbony ile dönüşüm odaklı kampanya yönetimi.',
      keywords: [
        'Google Ads yönetimi',
        'Meta Ads yönetimi',
        'Facebook reklam ajansı',
        'Google reklam ajansı',
        'PPC yönetimi',
        'dijital reklam',
        'performans pazarlama',
      ],
      process: [
        {
          number: '01',
          title: 'Hedef & Dönüşüm Analizi',
          description:
            "İş hedeflerinizi ve dönüşüm aksiyonlarınızı netleştirir, doğru dönüşüm takip altyapısını (GA4, Meta Pixel, dönüşüm API'si) kurarız.",
        },
        {
          number: '02',
          title: 'Kitle & Anahtar Kelime Araştırması',
          description:
            'Hedef kitlenizin demografik, ilgi alanı ve davranış profillerini analiz eder; Google için anahtar kelime stratejisi, Meta için kitle segmentasyonu oluştururuz.',
        },
        {
          number: '03',
          title: 'Kampanya Kurulumu & Kreatif',
          description:
            'Kampanya yapısını en iyi pratiklere göre kurar, ikna edici reklam metinleri ve görseller üretir, A/B testleri için farklı varyantlar hazırlarız.',
        },
        {
          number: '04',
          title: 'Teklif & Bütçe Optimizasyonu',
          description:
            'Teklif stratejilerini ve bütçe dağılımını günlük performans verilerine göre optimize eder, dönüşüm başı maliyeti sürekli düşürürüz.',
        },
        {
          number: '05',
          title: 'Raporlama & Ölçekleme',
          description:
            'Haftalık kampanya özeti ve aylık detaylı raporlarla performansı paylaşır, karlı kampanyaları ölçeklendirme fırsatlarını tespit ederiz.',
        },
      ],
      advantages: [
        {
          icon: '⚡',
          title: 'Anında Görünürlük',
          description:
            "SEO'nun aksine, reklam kampanyaları aktif edildiği gün hedef kitlenize ulaşmaya başlar.",
        },
        {
          icon: '🎯',
          title: 'Hassas Hedefleme',
          description:
            'Demografik, coğrafi, davranışsal ve yeniden hedefleme seçenekleriyle reklamlarınızı satın almaya en hazır kitleye gösterirsiniz.',
        },
        {
          icon: '📊',
          title: 'Tam Şeffaflık',
          description:
            "Her kuruşun nereye gittiğini, hangi kampanyanın ne kadar dönüşüm ürettiğini gerçek zamanlı dashboard'larla takip edersiniz.",
        },
      ],
      faq: [
        {
          question: 'Minimum reklam bütçesi ne olmalı?',
          answer:
            'Anlamlı veri toplamak ve optimizasyon yapmak için aylık minimum 5.000-10.000 TL reklam harcaması öneriyoruz. Bütçe ne kadar yüksek olursa, ölçek ve öğrenme hızı o kadar artar.',
        },
        {
          question: 'Google Ads mi yoksa Meta Ads mi daha etkili?',
          answer:
            'Her ikisi de farklı amaçlara hizmet eder. Google Ads aktif arama niyetiyle hedefler (yüksek dönüşüm niyeti), Meta Ads ise farkındalık ve keşif aşamasındaki kitleye ulaşır. Genellikle en iyi sonuçlar ikisinin birlikte kullanıldığı bütünleşik bir yaklaşımla elde edilir.',
        },
        {
          question: 'Hesabım bende mi kalır?',
          answer:
            'Evet, tüm reklam hesapları size aittir. Sözleşme sona erdiğinde hesaplarınıza tam erişim hakkınız devam eder. Şeffaflık politikamız gereği hiçbir hesabı bizde tutmayız.',
        },
        {
          question: 'Yönetim ücreti nasıl hesaplanır?',
          answer:
            'Yönetim ücretini sabit aylık ücret veya reklam harcamasının yüzdesi olarak iki farklı modelle sunuyoruz. Bütçenize ve tercihinize göre size en uygun modeli öneriyoruz.',
        },
        {
          question: 'Reklam görseli ve metinleri siz mi hazırlıyorsunuz?',
          answer:
            'Evet. Tasarım ve metin prodüksiyonu hizmetimize dahildir. İkna edici başlıklar, reklam metinleri, statik görseller ve video reklamlar için storyboard hazırlığını üstleniyoruz.',
        },
      ],
    },
    en: {
      title: 'Ad Management',
      slogan: 'Ad Campaigns That Make Every Penny Work',
      heroDescription:
        'We manage your Google Ads and Meta Ads campaigns with data-driven optimization, creative testing, and a continuous improvement cycle to maximize conversions from your budget.',
      metaDescription:
        'Professional Google Ads and Meta Ads management. Maximize ROI from your ad budget. Conversion-focused campaign management with Ribbony.',
      keywords: [
        'Google Ads management',
        'Meta Ads management',
        'Facebook ad agency',
        'Google ad agency',
        'PPC management',
        'digital advertising',
        'performance marketing',
      ],
      process: [
        {
          number: '01',
          title: 'Goal & Conversion Analysis',
          description:
            'We clarify your business goals and conversion actions, then set up the correct conversion tracking infrastructure (GA4, Meta Pixel, Conversions API).',
        },
        {
          number: '02',
          title: 'Audience & Keyword Research',
          description:
            "We analyze your target audience's demographic, interest, and behavioral profiles, building a keyword strategy for Google and audience segmentation for Meta.",
        },
        {
          number: '03',
          title: 'Campaign Setup & Creative',
          description:
            'We set up campaign structures following best practices, produce compelling ad copy and visuals, and prepare multiple variants for A/B testing.',
        },
        {
          number: '04',
          title: 'Bid & Budget Optimization',
          description:
            'We optimize bid strategies and budget allocation based on daily performance data, continuously driving down cost per conversion.',
        },
        {
          number: '05',
          title: 'Reporting & Scaling',
          description:
            'We share performance through weekly campaign summaries and monthly detailed reports, and identify opportunities to scale profitable campaigns.',
        },
      ],
      advantages: [
        {
          icon: '⚡',
          title: 'Instant Visibility',
          description:
            "Unlike SEO, ad campaigns start reaching your target audience on the same day they're activated.",
        },
        {
          icon: '🎯',
          title: 'Precise Targeting',
          description:
            'You show your ads to the audience most ready to buy using demographic, geographic, behavioral, and retargeting options.',
        },
        {
          icon: '📊',
          title: 'Full Transparency',
          description:
            'You track where every penny goes and how much each campaign converts in real time through live dashboards.',
        },
      ],
      faq: [
        {
          question: 'What should my minimum ad budget be?',
          answer:
            'We recommend a minimum monthly ad spend of 5,000–10,000 TL to collect meaningful data and enable optimization. The higher the budget, the faster the scale and learning.',
        },
        {
          question: 'Which is more effective — Google Ads or Meta Ads?',
          answer:
            'Both serve different purposes. Google Ads targets active search intent (high conversion intent), while Meta Ads reaches audiences in the awareness and discovery phase. The best results are typically achieved through an integrated approach using both.',
        },
        {
          question: 'Will I retain ownership of my ad accounts?',
          answer:
            'Yes, all ad accounts belong to you. Your full access rights continue even after the contract ends. Our transparency policy means we never retain any accounts on our side.',
        },
        {
          question: 'How is the management fee calculated?',
          answer:
            'We offer two models: a fixed monthly fee or a percentage of ad spend. We recommend the most suitable model based on your budget and preferences.',
        },
        {
          question: 'Do you prepare ad visuals and copy?',
          answer:
            'Yes. Design and copy production are included in our service. We handle compelling headlines, ad copy, static visuals, and storyboard preparation for video ads.',
        },
      ],
    },
  },
  {
    slug: 'icerik-uretimi',
    icon: '✍️',
    tr: {
      title: 'İçerik Üretimi',
      slogan: 'Markanızın Sesini Güçlendiren İçerikler',
      heroDescription:
        'SEO uyumlu blog yazıları, sosyal medya içerikleri, e-posta kampanyaları ve görsel tasarımlarla markanızın hikayesini hedef kitlenize tutarlı ve ikna edici biçimde aktarıyoruz.',
      metaDescription:
        'Profesyonel içerik üretimi hizmetleri. SEO uyumlu blog yazıları, sosyal medya içerikleri ve görsel tasarımlarla markanızın sesini güçlendirin.',
      keywords: [
        'içerik üretimi',
        'blog yazarlığı',
        'SEO içerik',
        'sosyal medya içeriği',
        'copywriting',
        'içerik pazarlama',
        'marka içeriği',
      ],
      process: [
        {
          number: '01',
          title: 'İçerik Stratejisi',
          description:
            'Hedef kitlenizi, müşteri yolculuğunu ve rakip içerik analizini değerlendirerek markanıza özgü bir içerik stratejisi ve yayın takvimi oluştururuz.',
        },
        {
          number: '02',
          title: 'Konu & Anahtar Kelime Planlaması',
          description:
            'SEO araştırması ve hedef kitle içgörüleriyle desteklenen bir konu havuzu oluştururuz; her içeriğin arama niyetiyle örtüşmesini sağlarız.',
        },
        {
          number: '03',
          title: 'İçerik Üretimi',
          description:
            'Uzman yazarlarımız ve tasarımcılarımız; blog yazıları, infografik, video senaryo, e-posta metni ve sosyal medya içeriklerini marka sesinize uygun biçimde üretir.',
        },
        {
          number: '04',
          title: 'SEO & Kalite Kontrolü',
          description:
            'Her içerik, SEO en iyi uygulamaları, orijinallik ve marka standartları açısından ekibimiz tarafından gözden geçirilir, onayınıza sunulur.',
        },
        {
          number: '05',
          title: 'Yayın & Performans Takibi',
          description:
            'İçerikleri planlanan takvimde yayınlar, organik trafik, etkileşim ve dönüşüm metriklerini izleyerek stratejinizi sürekli iyileştiririz.',
        },
      ],
      advantages: [
        {
          icon: '🔍',
          title: 'SEO Uyumlu',
          description:
            'Her içerik, hedef anahtar kelimeler, doğru başlık yapısı ve iç linkleme stratejisiyle organik görünürlüğe katkı sağlayacak biçimde optimize edilir.',
        },
        {
          icon: '🎯',
          title: 'Marka Sesi Tutarlılığı',
          description:
            'Tüm platformlarda tutarlı, tanınabilir bir marka sesi oluşturarak hedef kitlenizle derin bir bağ kurarsınız.',
        },
        {
          icon: '📈',
          title: 'Ölçeklenebilir Üretim',
          description:
            'Blog, sosyal medya, e-posta ve landing page gibi farklı format ihtiyaçlarını tek bir koordineli süreçle karşılarız.',
        },
      ],
      faq: [
        {
          question: 'Hangi içerik formatlarında hizmet veriyorsunuz?',
          answer:
            'Blog yazıları, sosyal medya gönderileri, e-posta kampanyaları, landing page metinleri, ürün açıklamaları, basın bültenleri, infografik metinleri, podcast senaryoları ve video senaryoları dahil geniş bir yelpazede içerik üretiyoruz.',
        },
        {
          question: 'İçeriklerin kalitesini nasıl güvence altına alıyorsunuz?',
          answer:
            'Her içerik, sektör uzmanı bir yazar tarafından üretilir, ardından SEO uzmanı ve editörümüz tarafından gözden geçirilir. Ayrıca plagiarism kontrol araçlarıyla özgünlük teyit edilir.',
        },
        {
          question: 'Revizyon hakkım var mı?',
          answer:
            'Evet. Her içerik tesliminde iki tur revizyon hakkı sunuyoruz. Marka sesinizi ve beklentilerinizi daha iyi anlamak için ilk teslimatten önce detaylı bir brief alıyoruz.',
        },
        {
          question: 'İçerikleri siz mi yayınlıyorsunuz?',
          answer:
            'Talep ederseniz blog yazılarını web sitenize, sosyal medya içeriklerini hesaplarınıza doğrudan yayınlıyoruz. İçerik yönetim sisteminize erişim talep ediyoruz ya da içerikleri hazır formatta teslim ediyoruz.',
        },
        {
          question: 'Teknik ve niş konularda içerik yazabilir misiniz?',
          answer:
            'Evet. Ekibimiz fintech, hukuk, sağlık, yazılım, e-ticaret ve üretim dahil birçok niş sektörde deneyimli uzman yazarlara sahiptir. Gerektiğinde sektör uzmanı röportaj yöntemi de kullanıyoruz.',
        },
      ],
    },
    en: {
      title: 'Content Creation',
      slogan: 'Content That Amplifies Your Brand Voice',
      heroDescription:
        "We communicate your brand's story to your target audience in a consistent and compelling way through SEO-friendly blog posts, social media content, email campaigns, and visual designs.",
      metaDescription:
        'Professional content creation services. Amplify your brand voice with SEO-friendly blog posts, social media content, and visual designs.',
      keywords: [
        'content creation',
        'blog writing',
        'SEO content',
        'social media content',
        'copywriting',
        'content marketing',
        'brand content',
      ],
      process: [
        {
          number: '01',
          title: 'Content Strategy',
          description:
            'We evaluate your target audience, customer journey, and competitor content analysis to create a brand-specific content strategy and publishing calendar.',
        },
        {
          number: '02',
          title: 'Topic & Keyword Planning',
          description:
            'We build a topic pool supported by SEO research and audience insights, ensuring every piece of content aligns with search intent.',
        },
        {
          number: '03',
          title: 'Content Production',
          description:
            'Our expert writers and designers produce blog posts, infographics, video scripts, email copy, and social media content aligned with your brand voice.',
        },
        {
          number: '04',
          title: 'SEO & Quality Control',
          description:
            'Every piece of content is reviewed by our team for SEO best practices, originality, and brand standards before being submitted for your approval.',
        },
        {
          number: '05',
          title: 'Publishing & Performance Tracking',
          description:
            'We publish content on the planned schedule and continuously improve your strategy by monitoring organic traffic, engagement, and conversion metrics.',
        },
      ],
      advantages: [
        {
          icon: '🔍',
          title: 'SEO-Optimized',
          description:
            'Every piece of content is optimized to contribute to organic visibility with target keywords, proper heading structure, and an internal linking strategy.',
        },
        {
          icon: '🎯',
          title: 'Brand Voice Consistency',
          description:
            'You build a deep connection with your target audience by establishing a consistent, recognizable brand voice across all platforms.',
        },
        {
          icon: '📈',
          title: 'Scalable Production',
          description:
            'We meet diverse format needs — blog, social media, email, and landing pages — through a single coordinated process.',
        },
      ],
      faq: [
        {
          question: 'What content formats do you work with?',
          answer:
            'We produce a wide range of content including blog posts, social media posts, email campaigns, landing page copy, product descriptions, press releases, infographic text, podcast scripts, and video scripts.',
        },
        {
          question: 'How do you ensure content quality?',
          answer:
            'Every piece of content is produced by an industry-expert writer, then reviewed by our SEO specialist and editor. Originality is also confirmed using plagiarism-checking tools.',
        },
        {
          question: 'Do I have revision rights?',
          answer:
            'Yes. We offer two rounds of revisions per content delivery. We gather a detailed brief before the first delivery to better understand your brand voice and expectations.',
        },
        {
          question: 'Do you publish the content for us?',
          answer:
            'If requested, we publish blog posts directly to your website and social media content to your accounts. We either request access to your content management system or deliver content in a ready-to-publish format.',
        },
        {
          question: 'Can you write about technical and niche topics?',
          answer:
            'Yes. Our team includes experienced specialist writers in many niche industries including fintech, law, healthcare, software, e-commerce, and manufacturing. We also use an industry expert interview approach when needed.',
        },
      ],
    },
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}
