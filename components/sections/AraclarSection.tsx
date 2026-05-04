'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { tools, type ToolCategory } from '@/lib/tools';

type FilterCategory = ToolCategory | 'all';
type Locale = 'tr' | 'en';

const PRICING_COLORS = {
  free: 'bg-green-50 text-green-700 border border-green-100',
  freemium: 'bg-blue-50 text-blue-700 border border-blue-100',
  paid: 'bg-orange-50 text-orange-700 border border-orange-100',
};

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function AraclarSection() {
  const t = useTranslations('araclar');
  const locale = useLocale() as Locale;

  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'seo', label: t('categories.seo') },
    { key: 'sosyal-medya', label: t('categories.sosyal-medya') },
    { key: 'reklam', label: t('categories.reklam') },
    { key: 'analitik', label: t('categories.analitik') },
    { key: 'ai', label: t('categories.ai') },
  ];

  const filtered = activeCategory === 'all' ? tools : tools.filter((tool) => tool.category === activeCategory);

  const pricingLabel = (p: 'free' | 'paid' | 'freemium') => {
    if (p === 'free') return t('freeLabel');
    if (p === 'paid') return t('paidLabel');
    return t('freemiumLabel');
  };

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
            className="font-body text-lg text-[#6b6b6b] leading-relaxed max-w-[560px]"
          >
            {t('heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* ── Tools Grid ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
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

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((tool) => (
                <motion.a
                  key={tool.id}
                  layout
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col gap-4 bg-white rounded-[20px] border border-[#ebebeb] p-6
                             hover:border-[#e13e90]/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-heading font-bold text-base text-[#0f0f0f] group-hover:text-[#e13e90] transition-colors">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-[#6b6b6b] group-hover:text-[#e13e90] transition-colors flex-shrink-0 mt-0.5">
                      <ExternalIcon />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-[#6b6b6b] leading-relaxed flex-1">
                    {tool[locale].description}
                  </p>

                  {/* Pricing badge */}
                  <span className={`self-start font-body font-medium text-xs px-3 py-1 rounded-full ${PRICING_COLORS[tool.pricing]}`}>
                    {pricingLabel(tool.pricing)}
                  </span>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}
