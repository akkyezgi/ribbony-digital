import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getServicePageMetadata, serviceSchema, faqSchema } from '@/lib/metadata';
import { getService, getAllServiceSlugs } from '@/lib/services';
import { locales, type Locale } from '@/i18n';
import ServiceDetailSection from '@/components/sections/ServiceDetailSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of getAllServiceSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  return getServicePageMetadata(locale as Locale, service);
}

export default function ServiceDetailPage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const svcSchema = serviceSchema(locale as Locale, service);
  const faqSch = faqSchema(service[locale as Locale].faq);

  return (
    <>
      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSch) }}
      />
      <ServiceDetailSection service={service} locale={locale as Locale} />
    </>
  );
}
