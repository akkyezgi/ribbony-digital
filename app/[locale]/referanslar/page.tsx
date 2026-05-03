import type { Metadata } from 'next';
import { getReferencesMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import ReferencesSection from '@/components/sections/ReferencesSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getReferencesMetadata(locale as Locale);
}

export default function ReferencesPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <ReferencesSection />;
}
