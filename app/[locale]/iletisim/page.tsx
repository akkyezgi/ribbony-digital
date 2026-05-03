import type { Metadata } from 'next';
import Script from 'next/script';
import { getContactMetadata, localBusinessSchema } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import ContactSection from '@/components/sections/ContactSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getContactMetadata(locale as Locale);
}

export default function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  const schema = localBusinessSchema(locale as Locale);

  return (
    <>
      <Script
        id="ld-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactSection />
    </>
  );
}
