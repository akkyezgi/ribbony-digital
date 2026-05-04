'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

type Category = 'all' | 'genel' | 'hizmetler' | 'fiyatlandirma' | 'teknik' | 'surec';
type Locale = 'tr' | 'en';

interface FaqItem {
  category: Exclude<Category, 'all'>;
  tr: { question: string; answer: string };
  en: { question: string; answer: string };
}

const FAQ_DATA: FaqItem[] = [
  // Genel
  {
    category: 'genel',
    tr: {
      question: 'Ribbony ne kadar süredir faaliyet gösteriyor?',
      answer: '2021 yılından bu yana Ankara ve İstanbul merkezli olarak faaliyet gösteriyor, farklı sektörlerden 50\'den fazla markaya dijital pazarlama hizmetleri sunuyoruz.',
    },
    en: {
      question: 'How long has Ribbony been in business?',
      answer: "We've been operating since 2021, based in Ankara and Istanbul, providing digital marketing services to over 50 brands across various industries.",
    },
  },
  {
    category: 'genel',
    tr: {
      question: 'Hangi şehirlerde hizmet veriyorsunuz?',
      answer: 'Ankara ve İstanbul ofislerimizden tüm Türkiye genelinde hizmet sunuyoruz. Uzaktan çalışma modelimiz sayesinde coğrafi sınır olmaksızın her ölçekten işletmeyle iş birliği yapabiliyoruz.',
    },
    en: {
      question: 'Which cities do you operate in?',
      answer: 'We serve clients across all of Turkey from our Ankara and Istanbul offices. Our remote work model allows us to collaborate with businesses of all sizes without geographic limitations.',
    },
  },
  {
    category: 'genel',
    tr: {
      question: 'Hangi sektörlere hizmet veriyorsunuz?',
      answer: 'E-ticaret, teknoloji, fintech, sağlık, eğitim, perakende, restoran & yemek, inşaat, hukuk ve hizmet sektörü dahil birçok alanda uzman ekiplerimiz mevcuttur.',
    },
    en: {
      question: 'Which industries do you serve?',
      answer: 'We have expert teams in many fields including e-commerce, technology, fintech, healthcare, education, retail, food & restaurant, construction, legal, and service industries.',
    },
  },
  {
    category: 'genel',
    tr: {
      question: 'İlk görüşme nasıl yapılıyor?',
      answer: 'İletişim formunu doldurduğunuzda ekibimiz 24 saat içinde sizinle iletişime geçer. İlk görüşme video konferans veya yüz yüze gerçekleştirilir ve tamamen ücretsizdir.',
    },
    en: {
      question: 'How does the first meeting work?',
      answer: 'When you fill out the contact form, our team reaches out within 24 hours. The first meeting is conducted via video conference or in person and is completely free.',
    },
  },
  // Hizmetler
  {
    category: 'hizmetler',
    tr: {
      question: 'Hangi dijital pazarlama hizmetlerini sunuyorsunuz?',
      answer: 'SEO optimizasyonu, sosyal medya yönetimi, Google Ads & Meta Ads yönetimi, web tasarım & geliştirme, içerik üretimi ve yapay zeka optimizasyonu hizmetleri sunuyoruz.',
    },
    en: {
      question: 'What digital marketing services do you offer?',
      answer: 'We offer SEO optimization, social media management, Google Ads & Meta Ads management, web design & development, content creation, and AI optimization services.',
    },
  },
  {
    category: 'hizmetler',
    tr: {
      question: 'Birden fazla hizmet aynı anda alabilir miyim?',
      answer: 'Evet. Aslında en iyi sonuçlar, hizmetlerin bir arada ve entegre biçimde yönetildiğinde elde edilir. Birden fazla hizmet aldığınızda paket fiyatlandırması uygulanır.',
    },
    en: {
      question: 'Can I get multiple services at the same time?',
      answer: 'Yes. In fact, the best results are achieved when services are managed together in an integrated way. Package pricing applies when you subscribe to multiple services.',
    },
  },
  {
    category: 'hizmetler',
    tr: {
      question: 'Mevcut kampanyalarımı Ribbony\'ye devredebilir miyim?',
      answer: 'Evet. Aktif Google Ads, Meta Ads veya sosyal medya hesaplarınızı devralabiliyoruz. İlk adım olarak mevcut performans verilerini analiz ediyoruz.',
    },
    en: {
      question: 'Can I transfer my existing campaigns to Ribbony?',
      answer: 'Yes. We can take over your active Google Ads, Meta Ads, or social media accounts. As a first step, we analyze the existing performance data.',
    },
  },
  {
    category: 'hizmetler',
    tr: {
      question: 'Web sitemi de yönetebilir misiniz?',
      answer: 'Evet. Web sitesi bakımı, içerik güncellemesi ve teknik destek hizmetleri sunuyoruz. Yeni site projelerinin yanı sıra mevcut sitelerin yönetimini de üstleniyoruz.',
    },
    en: {
      question: 'Can you also manage my website?',
      answer: 'Yes. We offer website maintenance, content updates, and technical support services. We handle both new site projects and the management of existing sites.',
    },
  },
  // Fiyatlandırma
  {
    category: 'fiyatlandirma',
    tr: {
      question: 'Hizmetlerinizin fiyatları nedir?',
      answer: 'Fiyatlar; seçilen hizmet, kapsam ve hedeflere göre değişmektedir. İlk görüşmemizde ihtiyaçlarınızı değerlendirerek size özel bir teklif hazırlıyoruz. Keşif görüşmesi tamamen ücretsizdir.',
    },
    en: {
      question: 'How much do your services cost?',
      answer: 'Prices vary depending on the selected service, scope, and goals. In our first meeting, we evaluate your needs and prepare a custom proposal. The discovery call is completely free.',
    },
  },
  {
    category: 'fiyatlandirma',
    tr: {
      question: 'Minimum sözleşme süresi var mı?',
      answer: 'Dijital pazarlama hizmetleri için minimum 3 ay öneriyoruz; zira strateji kurulum, uygulama ve optimizasyon aşamaları zaman gerektirir. Proje bazlı iş birliği seçenekleri de mevcuttur.',
    },
    en: {
      question: 'Is there a minimum contract duration?',
      answer: "We recommend a minimum of 3 months for digital marketing services, as the strategy setup, execution, and optimization phases require time. Project-based collaboration options are also available.",
    },
  },
  {
    category: 'fiyatlandirma',
    tr: {
      question: 'Ödeme koşulları nasıl?',
      answer: 'Aylık hizmetlerde faturalandırma her ayın başında yapılır. Proje bazlı işlerde başlangıç ve teslimat ödemesi şeklinde iki aşamalı yapı uygulanır.',
    },
    en: {
      question: 'What are the payment terms?',
      answer: 'For monthly services, billing occurs at the beginning of each month. For project-based work, a two-stage structure of upfront and delivery payments applies.',
    },
  },
  {
    category: 'fiyatlandirma',
    tr: {
      question: 'Ücretsiz bir analiz sunuyor musunuz?',
      answer: 'Evet. Tüm potansiyel müşterilerimize ilk görüşmede ücretsiz dijital analiz sunuyoruz. Bu analizde mevcut dijital varlığınızı, rakiplerinizi ve büyüme fırsatlarını değerlendiriyoruz.',
    },
    en: {
      question: 'Do you offer a free analysis?',
      answer: 'Yes. We offer a free digital analysis at the first meeting to all potential clients. This analysis evaluates your current digital presence, competitors, and growth opportunities.',
    },
  },
  // Teknik
  {
    category: 'teknik',
    tr: {
      question: 'Hangi araçları kullanıyorsunuz?',
      answer: 'SEMrush, Ahrefs, Google Analytics 4, Search Console, Meta Business Suite, HubSpot, Notion, ve yapay zeka araçları (ChatGPT, Claude, Midjourney) başta olmak üzere sektörün önde gelen araçlarını kullanıyoruz.',
    },
    en: {
      question: 'What tools do you use?',
      answer: 'We use leading industry tools including SEMrush, Ahrefs, Google Analytics 4, Search Console, Meta Business Suite, HubSpot, Notion, and AI tools (ChatGPT, Claude, Midjourney).',
    },
  },
  {
    category: 'teknik',
    tr: {
      question: 'Raporlama nasıl yapılıyor?',
      answer: 'Her ay ayrıntılı performans raporu sunuyoruz. Ek olarak haftalık özet e-postalar ve gerçek zamanlı verilere erişebildiğiniz canlı bir dashboard sağlıyoruz.',
    },
    en: {
      question: 'How does reporting work?',
      answer: 'We provide a detailed monthly performance report. Additionally, we send weekly summary emails and provide a live dashboard where you can access real-time data.',
    },
  },
  {
    category: 'teknik',
    tr: {
      question: 'Veri güvenliğini nasıl sağlıyorsunuz?',
      answer: 'Tüm müşteri verilerine erişimi sıkı yetkilendirme protokolleriyle kısıtlıyoruz. KVKK uyumlu çalışıyor, veri işleme faaliyetlerini şeffaf biçimde müşterilerimizle paylaşıyoruz.',
    },
    en: {
      question: 'How do you ensure data security?',
      answer: 'We restrict access to all client data with strict authorization protocols. We operate in KVKK compliance and share data processing activities transparently with our clients.',
    },
  },
  {
    category: 'teknik',
    tr: {
      question: 'Reklam hesaplarım size mi ait olacak?',
      answer: 'Kesinlikle hayır. Tüm reklam hesapları, web sitesi yönetim panelleri ve sosyal medya hesapları size aittir. Sözleşme sona erse dahi hesaplarınıza tam erişim hakkınız devam eder.',
    },
    en: {
      question: 'Will my ad accounts belong to you?',
      answer: 'Absolutely not. All ad accounts, website admin panels, and social media accounts belong to you. Your full access rights continue even after the contract ends.',
    },
  },
  // Süreç
  {
    category: 'surec',
    tr: {
      question: 'Başlangıç süreci nasıl işliyor?',
      answer: '1) Ücretsiz keşif görüşmesi, 2) Önerilerin sunulması ve teklifin hazırlanması, 3) Sözleşme imzalanması ve onboarding, 4) Marka denetimi ve strateji geliştirme, 5) Uygulama başlangıcı. Bu süreç genellikle 1-2 hafta içinde tamamlanır.',
    },
    en: {
      question: 'How does the onboarding process work?',
      answer: '1) Free discovery call, 2) Proposal presentation, 3) Contract signing and onboarding, 4) Brand audit and strategy development, 5) Implementation start. This process is typically completed within 1–2 weeks.',
    },
  },
  {
    category: 'surec',
    tr: {
      question: 'Projede aktif rol oynayabilir miyim?',
      answer: 'Evet. İçerik onayları, strateji toplantıları ve raporlama döngülerine katılım tercihlerinize göre şekillenir. Bazı müşterilerimiz yalnızca aylık raporla yetinirken, bazıları haftalık görüşmeleri tercih eder.',
    },
    en: {
      question: 'Can I play an active role in the project?',
      answer: 'Yes. Participation in content approvals, strategy meetings, and reporting cycles is shaped by your preferences. Some clients prefer just monthly reports, while others opt for weekly meetings.',
    },
  },
  {
    category: 'surec',
    tr: {
      question: 'Sonuçları ne zaman görmeye başlarım?',
      answer: 'Ücretli reklam kampanyalarında ilk hafta içinde trafik ve dönüşüm artışı gözlemlenir. SEO ve organik büyüme stratejilerinde anlamlı sonuçlar 3-6 ay içinde görülmeye başlar.',
    },
    en: {
      question: 'When will I start seeing results?',
      answer: 'For paid ad campaigns, traffic and conversion increases are typically observed within the first week. For SEO and organic growth strategies, meaningful results begin to appear within 3–6 months.',
    },
  },
  {
    category: 'surec',
    tr: {
      question: 'Hizmet almayı bırakmak istersem ne olur?',
      answer: 'Sözleşme süresi sona erdiğinde yenileme zorunluluğu yoktur. İstediğiniz zaman çıkış yapabilirsiniz. Hesaplarınız ve tüm üretilen içerikler size devredilir.',
    },
    en: {
      question: 'What happens if I want to stop the service?',
      answer: 'There is no obligation to renew when the contract period ends. You can exit at any time. All your accounts and produced content are transferred to you.',
    },
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-[#6b6b6b]"
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}

export default function SssSection() {
  const t = useTranslations('sss');
  const locale = useLocale() as Locale;

  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'genel', label: t('categories.genel') },
    { key: 'hizmetler', label: t('categories.hizmetler') },
    { key: 'fiyatlandirma', label: t('categories.fiyatlandirma') },
    { key: 'teknik', label: t('categories.teknik') },
    { key: 'surec', label: t('categories.surec') },
  ];

  const filtered = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const data = item[locale];
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        search.trim() === '' ||
        data.question.toLowerCase().includes(search.toLowerCase()) ||
        data.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, locale]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest mb-5"
          >
            <span className="block w-4 h-px bg-[#e13e90]" />
            {t('pageTitle')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.1 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="font-body text-lg text-[#6b6b6b] leading-relaxed max-w-[560px] mb-8"
          >
            {t('heroDescription')}
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="relative max-w-[480px]"
          >
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b6b]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 font-body text-sm text-[#0f0f0f] bg-white border border-[#ebebeb] rounded-full outline-none focus:border-[#e13e90] transition-colors duration-200"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Content ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-6">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setOpenIndex(null); }}
                className={`font-body font-medium text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#e13e90] text-white border-[#e13e90]'
                    : 'bg-white text-[#3d3d3d] border-[#ebebeb] hover:border-[#e13e90] hover:text-[#e13e90]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          {filtered.length === 0 ? (
            <p className="font-body text-base text-[#6b6b6b] text-center py-12">
              {t('noResults')}
            </p>
          ) : (
            <div className="flex flex-col divide-y divide-[#ebebeb]">
              {filtered.map((item, i) => {
                const data = item[locale];
                const isOpen = openIndex === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-body font-semibold text-base text-[#0f0f0f] leading-snug">
                        {data.question}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="font-body text-base text-[#3d3d3d] leading-relaxed pb-5">
                            {data.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
