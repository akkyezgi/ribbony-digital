import type { Metadata } from 'next';
import { getServicesMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import ServicesListingSection from '@/components/sections/ServicesListingSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getServicesMetadata(locale as Locale);
}

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <ServicesListingSection />;
}
