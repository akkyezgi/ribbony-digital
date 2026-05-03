import type { Metadata } from 'next';
import { getLegalPageMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import LegalSection from '@/components/sections/LegalSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getLegalPageMetadata(locale as Locale, 'kvkk');
}

export default function KvkkPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <LegalSection type="kvkk" />;
}
