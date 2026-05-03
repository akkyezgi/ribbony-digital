import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins, Raleway } from 'next/font/google';
import { locales, type Locale } from '@/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import MetaPixel from '@/components/ui/MetaPixel';
import AnalyticsProvider from '@/components/ui/AnalyticsProvider';
import '@/app/globals.css';
import { setRequestLocale } from 'next-intl/server';

// ─── Fonts ────────────────────────────────────────────────────────────────────

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ribbony.com'),
  title: {
    template: '%s | Ribbony',
    default: 'Ribbony — Dijital Pazarlama Ajansı',
  },
  authors: [{ name: 'Ribbony', url: 'https://ribbony.com' }],
  creator: 'Ribbony',
  publisher: 'Ribbony',
  formatDetection: { telephone: false },
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  setRequestLocale(locale);
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-[#3d3d3d] antialiased">
        <NextIntlClientProvider messages={messages}>

          {/* Skip-to-content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                       focus:bg-[#e13e90] focus:text-white focus:px-4 focus:py-2 focus:rounded-full
                       focus:font-body focus:font-medium focus:text-sm"
          >
            İçeriğe geç
          </a>

          <Navbar />

          <main id="main-content">
            {children}
          </main>

          <Footer />

          {/* Analytics & tracking — load conditionally after consent */}
          <CookieBanner />
          <MetaPixel />
          <AnalyticsProvider />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
