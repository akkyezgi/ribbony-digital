'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { services } from '@/lib/services';

const HEADER_HEIGHT = 64;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale() as 'tr' | 'en';
  const pathname = usePathname();
  const prefix = locale === 'en' ? '/en' : '';

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const switchPath =
    locale === 'tr'
      ? `/en${pathname === '/' ? '' : pathname}`
      : pathname.replace(/^\/en/, '') || '/';

  const serviceLinks = services.map((s) => ({
    href: `${prefix}/hizmetler/${s.slug}`,
    label: s[locale].title,
    slogan: s[locale].slogan,
    icon: s.icon,
  }));

  const mainLinks = [
    { href: `${prefix}/hakkimizda`, label: t('about') },
    { href: `${prefix}/referanslar`, label: t('references') },
    { href: `${prefix}/blog`, label: t('blog') },
    { href: `${prefix}/iletisim`, label: t('contact') },
  ];

  return (
    <>
      {/* ─── Header ─── */}
      <motion.header
        animate={{
          boxShadow: scrolled
            ? '0 4px 24px rgba(0,0,0,0.06)'
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ebebeb]"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href={prefix || '/'} className="flex-shrink-0" aria-label="Ribbony Ana Sayfa">
            <Image
              src="/images/ribbony-logo.png"
              alt="Ribbony"
              width={130}
              height={38}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">

            {/* Hizmetler trigger */}
            <div
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 font-body font-medium text-sm text-[#3d3d3d]
                           hover:text-[#e13e90] transition-colors px-3 py-2 rounded-lg"
              >
                {t('services')}
                <motion.svg
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </button>
            </div>

            {/* Other links */}
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-medium text-sm text-[#3d3d3d] hover:text-[#e13e90]
                           transition-colors px-3 py-2 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop right ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={switchPath}
              className="font-body font-medium text-xs text-[#6b6b6b] hover:text-[#e13e90]
                         border border-[#ebebeb] hover:border-[#e13e90] rounded-full px-3 py-1.5
                         transition-colors duration-200"
            >
              {locale === 'tr' ? 'EN' : 'TR'}
            </Link>
            <Button href={`${prefix}/iletisim`} size="sm">
              {t('cta')}
            </Button>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 bg-[#0f0f0f] rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 bg-[#0f0f0f] rounded-full"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 bg-[#0f0f0f] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* ─── Mega Menu (desktop) ─── */}
      <AnimatePresence>
        {servicesOpen && (
          <>
            {/* Backdrop — closes on click */}
            <div
              className="fixed inset-0 z-30"
              onClick={() => setServicesOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="mega-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 z-40 bg-white border-t border-b border-[#ebebeb]
                         shadow-[0_16px_48px_rgba(0,0,0,0.08)] hidden lg:block"
              style={{ top: HEADER_HEIGHT }}
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <div className="max-w-[1280px] mx-auto px-6 py-8">
                <div className="grid grid-cols-[1fr_260px] gap-8">

                  {/* ── Left: 3×2 service cards ── */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {serviceLinks.map((sl) => (
                      <Link
                        key={sl.href}
                        href={sl.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-[16px]
                                   hover:bg-[#fce8f3] transition-colors duration-150"
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5 w-7 text-center">
                          {sl.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="font-heading font-semibold text-sm text-[#0f0f0f]
                                        group-hover:text-[#e13e90] transition-colors mb-1 leading-snug">
                            {sl.label}
                          </p>
                          <p className="font-body text-xs text-[#6b6b6b] leading-relaxed">
                            {sl.slogan}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* ── Right: CTA box ── */}
                  <div className="bg-gradient-to-br from-[#e13e90] to-[#b8306f] rounded-[20px]
                                  p-6 flex flex-col">
                    <div className="mb-auto">
                      <span className="inline-block font-body text-[10px] font-semibold
                                       text-white/70 uppercase tracking-widest mb-3">
                        {locale === 'tr' ? 'Hizmet Danışmanlığı' : 'Service Consultation'}
                      </span>
                      <h3 className="font-heading font-bold text-white text-[17px] leading-snug mb-3">
                        {locale === 'tr'
                          ? 'Ücretsiz Strateji Görüşmesi'
                          : 'Free Strategy Session'}
                      </h3>
                      <p className="font-body text-white/80 text-[13px] leading-relaxed">
                        {locale === 'tr'
                          ? 'Markanız için en uygun dijital stratejiyi birlikte belirleyelim. Taahhütsüz, tamamen ücretsiz.'
                          : "Let's find the best digital strategy for your brand. No commitment, completely free."}
                      </p>
                    </div>

                    <Link
                      href={`${prefix}/iletisim`}
                      onClick={() => setServicesOpen(false)}
                      className="mt-6 inline-flex items-center justify-center gap-2
                                 bg-white text-[#e13e90] font-body font-semibold text-sm
                                 rounded-full px-5 py-2.5
                                 hover:bg-[#fce8f3] transition-colors duration-150"
                    >
                      {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" strokeWidth="2.5"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── Mobile menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-white overflow-y-auto lg:hidden"
            style={{ paddingTop: HEADER_HEIGHT }}
          >
            <nav className="flex flex-col px-6 py-8 gap-0" aria-label="Mobil menü">

              {/* Services expandable */}
              <div className="border-b border-[#ebebeb]">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className="w-full flex items-center justify-between font-body font-medium
                             text-base text-[#0f0f0f] py-4"
                >
                  {t('services')}
                  <motion.svg
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pb-4 pl-2 flex flex-col gap-1">
                        {serviceLinks.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-[12px]
                                       font-body text-sm text-[#3d3d3d] hover:text-[#e13e90]
                                       hover:bg-[#fce8f3] transition-colors"
                          >
                            <span className="w-6 text-center text-base">{sl.icon}</span>
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body font-medium text-base text-[#0f0f0f] py-4 border-b
                             border-[#ebebeb] hover:text-[#e13e90] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3">
                <Button href={`${prefix}/iletisim`} size="lg" className="w-full justify-center">
                  {t('cta')}
                </Button>
                <Link
                  href={switchPath}
                  className="text-center font-body font-medium text-sm text-[#6b6b6b]
                             border border-[#ebebeb] rounded-full py-3 hover:border-[#e13e90]
                             hover:text-[#e13e90] transition-colors"
                >
                  {locale === 'tr' ? "Switch to English" : "Türkçe'ye Geç"}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't sit behind fixed header */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  );
}
