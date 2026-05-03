'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import type { ServiceData } from '@/lib/services';
import type { Locale } from '@/i18n';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

interface Props {
  service: ServiceData;
  locale: Locale;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ title, locale }: { title: string; locale: Locale }) {
  const t = useTranslations('serviceDetail');
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <nav
      aria-label="breadcrumb"
      className="bg-white border-b border-[#ebebeb] py-4"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <ol className="flex items-center gap-2 font-body text-sm text-[#6b6b6b]">
          <li>
            <Link
              href={`${prefix}/`}
              className="hover:text-[#e13e90] transition-colors duration-150"
            >
              {t('breadcrumbHome')}
            </Link>
          </li>
          <li className="text-[#c0c0c0]">/</li>
          <li>
            <Link
              href={`${prefix}/hizmetler`}
              className="hover:text-[#e13e90] transition-colors duration-150"
            >
              {t('breadcrumbServices')}
            </Link>
          </li>
          <li className="text-[#c0c0c0]">/</li>
          <li className="text-[#0f0f0f] font-medium">{title}</li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ServiceHero({ service, locale }: Props) {
  const t = useTranslations('serviceDetail');
  const prefix = locale === 'en' ? '/en' : '';
  const data = service[locale];

  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text content */}
          <div>
            {/* Icon + eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 rounded-[16px] bg-[#fce8f3] flex items-center justify-center text-3xl flex-shrink-0">
                {service.icon}
              </div>
              <span className="font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest">
                Ribbony
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-3"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.1 }}
            >
              {data.title}
            </motion.h1>

            {/* Slogan */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading font-semibold text-[#e13e90] text-xl md:text-2xl mb-5"
            >
              {data.slogan}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-base text-[#6b6b6b] leading-relaxed mb-8 max-w-[500px]"
            >
              {data.heroDescription}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <Button href={`${prefix}/iletisim`} variant="filled" size="lg">
                {t('getOffer')}
              </Button>
              <Button href={`${prefix}/hizmetler`} variant="ghost" size="lg">
                {locale === 'tr' ? 'Tüm Hizmetler' : 'All Services'}
              </Button>
            </motion.div>
          </div>

          {/* Right: Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-[28px] border border-[#ebebeb] p-8 shadow-sm">
              <div className="text-6xl mb-6">{service.icon}</div>

              <div className="flex flex-col gap-4">
                {data.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#fce8f3] flex items-center justify-center text-base flex-shrink-0">
                      {adv.icon}
                    </span>
                    <div>
                      <p className="font-body font-bold text-sm text-[#0f0f0f]">{adv.title}</p>
                      <p className="font-body text-xs text-[#6b6b6b] leading-relaxed mt-0.5 line-clamp-2">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function ProcessSection({ service, locale }: Props) {
  const t = useTranslations('serviceDetail');
  const data = service[locale];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          eyebrow={t('processTitle')}
          title={locale === 'tr' ? 'Adım Adım Sürecimiz' : 'Our Step-by-Step Process'}
          className="mb-14"
        />

        <div className="flex flex-col gap-0">
          {data.process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="flex gap-6 md:gap-10 group"
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#fce8f3] border-2 border-[#e13e90]/20 group-hover:bg-[#e13e90] group-hover:border-[#e13e90] flex items-center justify-center transition-colors duration-300">
                  <span className="font-heading font-bold text-sm text-[#e13e90] group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                {i < data.process.length - 1 && (
                  <div className="w-px flex-1 bg-[#ebebeb] my-2 min-h-[32px]" />
                )}
              </div>

              {/* Step content */}
              <div className="pb-10">
                <h3 className="font-heading font-bold text-xl text-[#0f0f0f] mb-2">{step.title}</h3>
                <p className="font-body text-base text-[#6b6b6b] leading-relaxed max-w-[600px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Advantages ───────────────────────────────────────────────────────────────

function AdvantagesSection({ service, locale }: Props) {
  const t = useTranslations('serviceDetail');
  const data = service[locale];

  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          eyebrow={t('advantagesTitle')}
          title={locale === 'tr' ? 'Neden Bizi Seçmelisiniz?' : 'Why Choose Us?'}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[20px] border border-[#ebebeb] p-7 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-md hover:border-[#e13e90]/30"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[#fce8f3] flex items-center justify-center text-2xl flex-shrink-0">
                {adv.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#0f0f0f] mb-2">{adv.title}</h3>
                <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FaqSection({ service, locale }: Props) {
  const t = useTranslations('serviceDetail');
  const data = service[locale];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              eyebrow={t('faqTitle')}
              title={locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
            />
            <p className="font-body text-sm text-[#6b6b6b] leading-relaxed mt-4">
              {locale === 'tr'
                ? 'Aklınızdaki soruların cevabını burada bulamazsanız, bize yazın.'
                : "If you can't find the answer here, feel free to reach out."}
            </p>
          </div>

          <Accordion items={data.faq} />
        </div>
      </div>
    </section>
  );
}

// ─── CTA Strip ───────────────────────────────────────────────────────────────

function ServiceCta({ locale }: { locale: Locale }) {
  const t = useTranslations('serviceDetail');
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#fce8f3] rounded-[32px] px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-3 max-w-[520px]">
            <span className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e13e90]" />
              {locale === 'tr' ? 'Hemen Başlayın' : 'Get Started'}
            </span>
            <h2
              className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
              style={{ fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2 }}
            >
              {t('ctaTitle')}
            </h2>
            <p className="font-body text-base text-[#3d3d3d] leading-relaxed">
              {t('ctaDescription')}
            </p>

            <ul className="flex flex-col gap-2 mt-1">
              {(locale === 'tr'
                ? ['✓  24 saat içinde yanıt', '✓  Ücretsiz ilk analiz', '✓  Taahhütsüz başlangıç']
                : ['✓  Response within 24 hours', '✓  Free initial analysis', '✓  No commitment required']
              ).map((item, i) => (
                <li key={i} className="font-body text-sm text-[#3d3d3d]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
            <Button href={`${prefix}/iletisim`} variant="filled" size="lg">
              {t('ctaButton')}
            </Button>
            <Button href={`${prefix}/iletisim`} variant="ghost" size="lg">
              {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────

export default function ServiceDetailSection({ service, locale }: Props) {
  const data = service[locale];

  return (
    <>
      <Breadcrumb title={data.title} locale={locale} />
      <ServiceHero service={service} locale={locale} />
      <ProcessSection service={service} locale={locale} />
      <AdvantagesSection service={service} locale={locale} />
      <FaqSection service={service} locale={locale} />
      <ServiceCta locale={locale} />
    </>
  );
}
