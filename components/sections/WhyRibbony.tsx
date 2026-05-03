'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';

const REASONS = 4 as const;
const METRIC_VALUES = [78, 65, 86, 52] as const;

function AnimatedBar({
  value,
  delay,
  inView,
}: {
  value: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-[#e13e90] to-[#b8306f]"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function WhyRibbony() {
  const t = useTranslations('whyRibbony');
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-80px' });

  const reasons = Array.from({ length: REASONS }, (_, i) => ({
    number: t(`reasons.${i}.number`),
    title: t(`reasons.${i}.title`),
    description: t(`reasons.${i}.description`),
  }));

  const metrics = Array.from({ length: METRIC_VALUES.length }, (_, i) => ({
    label: t(`resultCard.metrics.${i}.label`),
    value: METRIC_VALUES[i],
  }));

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: numbered reasons ── */}
          <div>
            <SectionTitle
              eyebrow={t('eyebrow')}
              title={t('title')}
              className="mb-10"
            />

            <div className="flex flex-col gap-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5"
                >
                  <span className="font-heading font-extrabold text-3xl text-[#e13e90]/20 leading-none flex-shrink-0 w-10">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0f0f0f] mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: result card ── */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-[#ebebeb] rounded-[24px] p-8 shadow-card"
          >
            <div className="mb-6">
              <p className="font-heading font-bold text-lg text-[#0f0f0f]">
                {t('resultCard.title')}
              </p>
              <p className="font-body text-sm text-[#6b6b6b] mt-1">
                {t('resultCard.subtitle')}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {metrics.map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm text-[#3d3d3d]">{metric.label}</span>
                    <span className="font-body font-bold text-sm text-[#e13e90]">
                      +{metric.value}%
                    </span>
                  </div>
                  <AnimatedBar value={metric.value} delay={0.2 + i * 0.12} inView={cardInView} />
                </div>
              ))}
            </div>

            {/* ROI total */}
            <div className="mt-7 pt-6 border-t border-[#ebebeb] flex items-center justify-between">
              <span className="font-body font-medium text-sm text-[#6b6b6b]">
                {t('resultCard.roiLabel')}
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: cardInView ? 1 : 0, scale: cardInView ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-extrabold text-2xl text-[#e13e90]"
              >
                {t('resultCard.roiValue')}
              </motion.span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
