'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const t = useTranslations('hero');

  const features = [t('feature1'), t('feature2'), t('feature3')];

  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-32">
      {/* Blobs */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#e13e90]/20 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#e13e90]/15 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left 55% ── */}
          <div className="flex-1 lg:max-w-[55%]">

            {/* Badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[#fce8f3] text-[#e13e90] font-body font-medium text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#e13e90] animate-pulse" />
                {t('badge')}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-6"
              style={{ fontSize: 'clamp(42px, 6vw, 80px)', lineHeight: 1.08, letterSpacing: '-0.04em' }}
            >
              {t('title')}
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-body text-base md:text-lg text-[#6b6b6b] leading-relaxed max-w-[500px] mb-8"
            >
              {t('description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-12">
              <Button href="/iletisim" size="lg">{t('ctaPrimary')}</Button>
              <Button href="/hizmetler" variant="ghost" size="lg">{t('ctaSecondary')}</Button>
            </motion.div>

            {/* Feature list */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-2.5 pt-8 border-t border-[#ebebeb]"
            >
              {features.map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 font-body text-sm text-[#3d3d3d] bg-[#f5f5f5] px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e13e90" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right 45% ── */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex-1 lg:max-w-[45%] flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/images/ribbony-ana-sayfa.png"
                alt="Ribbony"
                width={560}
                height={480}
                className="w-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
