'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';

export default function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Pink inner container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#fce8f3] rounded-[32px] px-8 py-14 md:px-14 md:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Left ── */}
            <div className="flex flex-col gap-5">
              {/* Eyebrow badge */}
              <span className="inline-flex items-center gap-2 bg-[#e13e90]/10 text-[#e13e90] font-body font-medium text-sm px-4 py-2 rounded-full self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e13e90]" />
                {t('eyebrow')}
              </span>

              <h2
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', lineHeight: 1.15 }}
              >
                {t('title')}
              </h2>

              <p className="font-body text-base text-[#3d3d3d] leading-relaxed max-w-[420px]">
                {t('description')}
              </p>

              {/* Trust signals */}
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  '✓  24 saat içinde yanıt',
                  '✓  Ücretsiz ilk analiz',
                  '✓  Taahhütsüz başlangıç',
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-[#3d3d3d]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: Form ── */}
            <div className="bg-white rounded-[24px] p-7 shadow-card">
              <ContactForm />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
