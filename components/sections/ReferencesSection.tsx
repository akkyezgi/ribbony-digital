'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';
import Testimonials from '@/components/sections/Testimonials';
import Button from '@/components/ui/Button';
import ClientLogosMarquee from '@/components/sections/ClientLogosMarquee';
import { useContactPopup } from '@/lib/contact-popup-context';

const ITEM_COUNT = 6;

const CATEGORY_COLORS: Record<string, string> = {
  SEO: 'bg-blue-50 text-blue-700 border border-blue-100',
  'Sosyal Medya': 'bg-pink-50 text-[#e13e90] border border-pink-100',
  'Social Media': 'bg-pink-50 text-[#e13e90] border border-pink-100',
  Reklam: 'bg-orange-50 text-orange-700 border border-orange-100',
  Ads: 'bg-orange-50 text-orange-700 border border-orange-100',
};

export default function ReferencesSection() {
  const { openPopup } = useContactPopup();
  const t = useTranslations('references');
  const locale = useLocale() as 'tr' | 'en';
  const prefix = locale === 'en' ? '/en' : '';

  const filters = [
    { key: 'all', label: t('filterAll') },
    { key: 'SEO', label: t('filterSEO') },
    { key: t('filterSocial'), label: t('filterSocial') },
    { key: t('filterAds'), label: t('filterAds') },
  ];

  const [active, setActive] = useState('all');

  const items = Array.from({ length: ITEM_COUNT }, (_, i) => ({
    company: t(`items.${i}.company`),
    category: t(`items.${i}.category`),
    result: t(`items.${i}.result`),
    description: t(`items.${i}.description`),
  }));

  const filtered =
    active === 'all' ? items : items.filter((item) => item.category === active);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 max-w-[720px]">
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
            className="font-body text-lg text-[#6b6b6b] leading-relaxed max-w-[580px]"
          >
            {t('heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* ── Client logos ──────────────────────────────────────── */}
      <ClientLogosMarquee variant="grid" />

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`font-body font-medium text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === f.key
                    ? 'bg-[#e13e90] text-white border-[#e13e90]'
                    : 'bg-white text-[#3d3d3d] border-[#ebebeb] hover:border-[#e13e90] hover:text-[#e13e90]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.company}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="bg-white rounded-[20px] border border-[#ebebeb] p-7 flex flex-col gap-5 hover:shadow-md hover:border-[#e13e90]/30 transition-shadow duration-300"
                >
                  {/* Category + company */}
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`font-body font-medium text-xs px-3 py-1 rounded-full ${CATEGORY_COLORS[item.category] ?? 'bg-gray-50 text-gray-600 border border-gray-100'}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#0f0f0f] mb-1">
                      {item.company}
                    </h3>

                    {/* Result badge */}
                    <p className="font-heading font-extrabold text-2xl text-[#e13e90] mt-3 mb-4">
                      {item.result}
                    </p>

                    <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA ───────────────────────────────────────────────── */}
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
                {locale === 'tr' ? 'Bir Sonraki Başarı Hikayesi' : 'The Next Success Story'}
              </span>
              <h2
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2 }}
              >
                {locale === 'tr'
                  ? 'Markanız Referanslarımız Arasında Olabilir'
                  : 'Your Brand Could Be Among Our References'}
              </h2>
              <p className="font-body text-base text-[#3d3d3d] leading-relaxed">
                {locale === 'tr'
                  ? 'Bu markalar gibi ölçülebilir ve kalıcı sonuçlar elde etmek için bugün başlayın.'
                  : 'Start today to achieve measurable and lasting results like these brands.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button onClick={openPopup} variant="filled" size="lg">
                {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
              </Button>
              <Button href={`${prefix}/hizmetler`} variant="ghost" size="lg">
                {locale === 'tr' ? 'Hizmetleri İncele' : 'Explore Services'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
