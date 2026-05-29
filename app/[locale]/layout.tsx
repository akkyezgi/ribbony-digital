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
import { ContactPopupProvider } from '@/lib/contact-popup-context';
import ContactPopup from '@/components/ui/ContactPopup';
import FloatingCta from '@/components/ui/FloatingCta';
import Script from 'next/script';
import '@/app/globals.css';
import { setRequestLocale } from 'next-intl/server';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ribbony Digital',
  url: 'https://www.ribbonydigital.com',
  logo: 'https://www.ribbonydigital.com/_next/image?url=%2Fimages%2Fribbony-web-logo.png&w=640&q=75',
  description:
    'SEO, sosyal medya yönetimi, reklam yönetimi, içerik üretimi ve e-ticaret danışmanlığı alanlarında veriye dayalı stratejilerle markaların dijital varlığını güçlendiren ve dijitalde zirveye taşıyan dijital pazarlama şirketi.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '100. Yıl Bulvarı, Ostim Prestij Plaza No:55A/26',
    addressLocality: 'Yenimahalle',
    addressRegion: 'Ankara',
    addressCountry: 'TR',
    postalCode: '06900',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-551-101-42-88',
    email: 'info@ribbonydigital.com',
    contactType: 'customer service',
    availableLanguage: 'Turkish',
  },
  sameAs: [
    'https://www.linkedin.com/company/ribbony',
    'https://www.instagram.com/ribbonydigital',
  ],
};

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
    default: 'Ribbony — Dijital Pazarlama Şirketi',
  },
  authors: [{ name: 'Ribbony', url: 'https://ribbony.com' }],
  creator: 'Ribbony',
  publisher: 'Ribbony',
  formatDetection: { telephone: false },
  icons: {
    icon: '/images/ribbony-logo-ikon.png',
    apple: '/images/ribbony-logo-ikon.png',
  },
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
      <head>
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-[#3d3d3d] antialiased">
        <NextIntlClientProvider messages={messages}>
          <ContactPopupProvider>

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

            <ContactPopup />
            <FloatingCta />

            {/* Analytics & tracking — load conditionally after consent */}
            <CookieBanner />
            <MetaPixel />
            <AnalyticsProvider />

          </ContactPopupProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
