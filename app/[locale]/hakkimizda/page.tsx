import type { Metadata } from 'next';
import { getAboutMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import AboutSection from '@/components/sections/AboutSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getAboutMetadata(locale as Locale);
}

export default function AboutPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <AboutSection />;
}
