'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';

const REASONS = 4 as const;

const FEATURES = {
  tr: [
    { icon: '🎯', title: 'Strateji Önce', desc: 'Her kampanyayı hedef, sektör ve rekabet analizine göre şekillendiriyoruz.' },
    { icon: '🔍', title: 'Tam Şeffaflık', desc: 'Haftalık raporlar, canlı dashboard erişimi ve açık iletişim.' },
    { icon: '⚡', title: 'Çevik Yönetim', desc: 'Piyasa değişikliklerine anında adapte olan esnek kampanya yapısı.' },
    { icon: '🤝', title: 'Uzun Vadeli Ortaklık', desc: 'Tek seferlik değil, büyüme odaklı sürdürülebilir iş birliği.' },
  ],
  en: [
    { icon: '🎯', title: 'Strategy First', desc: 'Every campaign is shaped by goal, industry, and competitive analysis.' },
    { icon: '🔍', title: 'Full Transparency', desc: 'Weekly reports, live dashboard access, and open communication.' },
    { icon: '⚡', title: 'Agile Management', desc: 'Flexible campaign structure that adapts instantly to market changes.' },
    { icon: '🤝', title: 'Long-Term Partnership', desc: 'Not one-off, but sustainable collaboration focused on growth.' },
  ],
};

export default function WhyRibbony() {
  const t = useTranslations('whyRibbony');
  const locale = useLocale() as 'tr' | 'en';

  const reasons = Array.from({ length: REASONS }, (_, i) => ({
    number: t(`reasons.${i}.number`),
    title: t(`reasons.${i}.title`),
    description: t(`reasons.${i}.description`),
  }));

  const features = FEATURES[locale];

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

          {/* ── Right: 2×2 feature cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#ebebeb] rounded-2xl p-6 flex flex-col gap-3
                           hover:border-[#e13e90] hover:shadow-md transition-all duration-300
                           [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              >
                <span className="text-4xl leading-none">{f.icon}</span>
                <h3 className="font-heading font-bold text-base text-[#0f0f0f] leading-snug">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
