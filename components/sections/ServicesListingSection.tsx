'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/lib/services';
import { useContactPopup } from '@/lib/contact-popup-context';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const STATS = [
  { value: '50+', labelKey: 'stat1' },
  { value: '120+', labelKey: 'stat2' },
  { value: '6', labelKey: 'stat3' },
] as const;

export default function ServicesListingSection() {
  const t = useTranslations('services');
  const tHero = useTranslations('hero');
  const locale = useLocale() as 'tr' | 'en';
  const prefix = locale === 'en' ? '/en' : '';
  const { openPopup } = useContactPopup();
  const statLabels =
    locale === 'tr'
      ? ['Mutlu Müşteri', 'Tamamlanan Proje', 'Hizmet Kategorisi']
      : ['Happy Clients', 'Projects Completed', 'Service Categories'];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[720px]">
            {/* Eyebrow */}
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest mb-5"
            >
              <span className="block w-4 h-px bg-[#e13e90]" />
              {t('eyebrow')}
            </motion.span>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-6"
              style={{ fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.1 }}
            >
              {t('title')}
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-lg text-[#6b6b6b] leading-relaxed mb-10 max-w-[580px]"
            >
              {t('description')}
            </motion.p>

            {/* Stats row */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-8"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-3xl text-[#0f0f0f]">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-[#6b6b6b]">{statLabels[i]}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const data = service[locale];
              return (
                <ServiceCard
                  key={service.slug}
                  icon={service.icon}
                  title={data.title}
                  description={t(`items.${service.slug}.description` as Parameters<typeof t>[0])}
                  href={`${prefix}/hizmetler/${service.slug}`}
                  learnMoreLabel={t('learnMore')}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#fce8f3] rounded-[32px] px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex flex-col gap-3 max-w-[540px]">
              <span className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e13e90]" />
                {locale === 'tr' ? 'Ücretsiz Analiz' : 'Free Analysis'}
              </span>
              <h2
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}
              >
                {locale === 'tr'
                  ? 'Hangi Hizmet Size Uygun?'
                  : 'Which Service Is Right for You?'}
              </h2>
              <p className="font-body text-base text-[#3d3d3d] leading-relaxed">
                {locale === 'tr'
                  ? 'Markanız için ücretsiz dijital analiz talep edin. Uzman ekibimiz 24 saat içinde sizinle iletişime geçsin.'
                  : 'Request a free digital analysis for your brand. Our expert team will get back to you within 24 hours.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-shrink-0">
              <Button onClick={openPopup} variant="filled" size="lg">
                {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
              </Button>
              <Button href={`${prefix}/iletisim`} variant="ghost" size="lg">
                {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
