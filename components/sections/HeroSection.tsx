'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

function ProgressBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-xs text-[#6b6b6b]">{label}</span>
        <span className="font-body font-bold text-xs text-[#e13e90]">{value}%</span>
      </div>
      <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#e13e90] to-[#b8306f]"
        />
      </div>
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const t = useTranslations('hero');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  const bars = [
    { label: t('cardSocial'), value: 86 },
    { label: t('cardAds'), value: 72 },
    { label: t('cardSeo'), value: 65 },
  ];

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
              style={{ fontSize: 'clamp(42px, 6vw, 80px)', lineHeight: 1.08 }}
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

            {/* Stat bar */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-8 pt-8 border-t border-[#ebebeb]"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading font-extrabold text-2xl text-[#0f0f0f]">{s.value}</p>
                  <p className="font-body text-xs text-[#6b6b6b] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right 45% ── */}
          <div className="flex-1 lg:max-w-[45%] relative flex justify-center items-center w-full">

            {/* Performance card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-[360px] bg-white border border-[#ebebeb]
                         rounded-[24px] shadow-card p-7"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-[#fce8f3] rounded-[12px] flex items-center justify-center text-xl">
                  📊
                </div>
                <span className="font-heading font-bold text-[15px] text-[#0f0f0f]">{t('cardTitle')}</span>
              </div>

              {/* Progress bars */}
              <div className="flex flex-col gap-4">
                {bars.map((bar, i) => (
                  <ProgressBar key={i} {...bar} delay={0.6 + i * 0.15} />
                ))}
              </div>
            </motion.div>

            {/* Floating badge 1 — black */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -top-5 -right-3 md:right-4 z-20 bg-[#0f0f0f] rounded-[16px]
                         px-4 py-3 shadow-xl"
            >
              <p className="font-heading font-extrabold text-xl text-white leading-none">
                {t('badge1Value')}
              </p>
              <p className="font-body text-xs text-white/65 mt-1">{t('badge1Label')}</p>
            </motion.div>

            {/* Floating badge 2 — white */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-5 -left-3 md:left-0 z-20 bg-white border border-[#ebebeb]
                         rounded-[16px] px-4 py-3 shadow-xl flex items-center gap-2.5"
            >
              <span className="text-lg">🎯</span>
              <p className="font-body font-medium text-xs text-[#3d3d3d]">{t('badge2Label')}</p>
            </motion.div>

            {/* Decorative dot grid */}
            <div
              aria-hidden
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[320px] h-[320px] opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #ebebeb 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
