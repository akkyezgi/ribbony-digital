'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://www.instagram.com/ribbony', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.linkedin.com/company/ribbony', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://twitter.com/ribbony', label: 'X (Twitter)', Icon: XIcon },
];

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale() as 'tr' | 'en';
  const prefix = locale === 'en' ? '/en' : '';

  const serviceLinks = services.map((s) => ({
    href: `${prefix}/hizmetler/${s.slug}`,
    label: s[locale].title,
  }));

  const companyLinks = [
    { href: `${prefix}/hakkimizda`, label: t('aboutLink') },
    { href: `${prefix}/referanslar`, label: t('referencesLink') },
    { href: `${prefix}/blog`, label: t('blogLink') },
    { href: `${prefix}/iletisim`, label: t('contactLink') },
  ];

  const legalLinks = [
    { href: `${prefix}/kvkk`, label: t('kvkkLink') },
    { href: `${prefix}/gizlilik-politikasi`, label: t('privacyLink') },
    { href: `${prefix}/cerez-politikasi`, label: t('cookiesLink') },
  ];

  return (
    <footer className="bg-[#f5f5f5] border-t border-[#ebebeb]">

      {/* ─── Main grid ─── */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12">

          {/* Col 1: Brand */}
          <motion.div {...fadeUp(0)} className="flex flex-col gap-5">
            <Link href={prefix || '/'} aria-label="Ribbony Ana Sayfa">
              <Image
                src="/images/ribbony-logo.png"
                alt="Ribbony"
                width={130}
                height={38}
                className="h-8 w-auto"
              />
            </Link>

            <p className="font-body text-sm text-[#6b6b6b] leading-relaxed max-w-[260px]">
              {t('tagline')}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#ebebeb] bg-white flex items-center
                             justify-center text-[#6b6b6b] hover:text-[#e13e90] hover:border-[#e13e90]
                             transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Hizmetler */}
          <motion.div {...fadeUp(1)}>
            <p className="font-heading font-bold text-sm text-[#0f0f0f] mb-5 uppercase tracking-wider">
              {t('servicesTitle')}
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6b6b6b] hover:text-[#e13e90]
                               transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Şirket */}
          <motion.div {...fadeUp(2)}>
            <p className="font-heading font-bold text-sm text-[#0f0f0f] mb-5 uppercase tracking-wider">
              {t('companyTitle')}
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6b6b6b] hover:text-[#e13e90]
                               transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: İletişim */}
          <motion.div {...fadeUp(3)}>
            <p className="font-heading font-bold text-sm text-[#0f0f0f] mb-5 uppercase tracking-wider">
              {t('contactTitle')}
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`tel:${t('phone').replace(/\s/g, '')}`}
                  className="flex items-start gap-2.5 font-body text-sm text-[#6b6b6b]
                             hover:text-[#e13e90] transition-colors group"
                >
                  <svg className="flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.4 2 2 0 0 1 3.56 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
                  </svg>
                  {t('phone')}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t('email')}`}
                  className="flex items-start gap-2.5 font-body text-sm text-[#6b6b6b]
                             hover:text-[#e13e90] transition-colors"
                >
                  <svg className="flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {t('email')}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 font-body text-sm text-[#6b6b6b]">
                  <svg className="flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t('address')}
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="border-t border-[#ebebeb]">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center
                        justify-between gap-3">
          <p className="font-body text-xs text-[#6b6b6b]">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>

          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-[#6b6b6b] hover:text-[#e13e90] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
