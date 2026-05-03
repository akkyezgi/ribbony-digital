'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-[12px] bg-[#fce8f3] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-body font-semibold text-xs text-[#6b6b6b] uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="font-body text-sm text-[#0f0f0f] leading-relaxed whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:opacity-80 transition-opacity duration-150">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

const PIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e13e90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PHONE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e13e90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.72 15.5z" />
  </svg>
);

const MAIL_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e13e90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CLOCK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e13e90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ContactSection() {
  const t = useTranslations('contact');
  const locale = useLocale() as 'tr' | 'en';

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 max-w-[720px]">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest mb-5"
          >
            <span className="block w-4 h-px bg-[#e13e90]" />
            {t('pageTitle')}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.1 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-lg text-[#6b6b6b] leading-relaxed max-w-[560px]"
          >
            {t('heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

            {/* ── Left: contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#0f0f0f] mb-2">
                  {t('infoTitle')}
                </h2>
                <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
                  {locale === 'tr'
                    ? 'Aşağıdaki bilgilerden bize ulaşabilir veya formu doldurabilirsiniz.'
                    : 'You can reach us through the information below or fill out the form.'}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <InfoRow
                  icon={PIN_ICON}
                  label={t('addressLabel')}
                  value={t('address')}
                />
                <InfoRow
                  icon={PHONE_ICON}
                  label={t('phoneLabel')}
                  value={t('phone')}
                  href={`tel:${t('phone').replace(/[\s()]/g, '')}`}
                />
                <InfoRow
                  icon={MAIL_ICON}
                  label={t('emailLabel')}
                  value={t('email')}
                  href={`mailto:${t('email')}`}
                />
                <InfoRow
                  icon={CLOCK_ICON}
                  label={t('hoursLabel')}
                  value={t('hours')}
                />
              </div>

              {/* Trust signals */}
              <div className="bg-[#f7f7f7] rounded-[20px] p-6 flex flex-col gap-3">
                {(locale === 'tr'
                  ? ['✓  24 saat içinde yanıt garantisi', '✓  Ücretsiz ilk danışmanlık', '✓  Taahhütsüz başlangıç']
                  : ['✓  Response guaranteed within 24 hours', '✓  Free initial consultation', '✓  No commitment required']
                ).map((item, i) => (
                  <p key={i} className="font-body text-sm text-[#3d3d3d]">{item}</p>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {[
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/ribbony',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/ribbony',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: 'X (Twitter)',
                    href: 'https://twitter.com/ribbony',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4l16 16M4 20L20 4" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-[#ebebeb] flex items-center justify-center text-[#6b6b6b] hover:border-[#e13e90] hover:text-[#e13e90] transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: form ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="bg-white rounded-[24px] border border-[#ebebeb] p-7 md:p-10 shadow-sm"
            >
              <h2 className="font-heading font-bold text-xl text-[#0f0f0f] mb-6">
                {t('form.title')}
              </h2>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
