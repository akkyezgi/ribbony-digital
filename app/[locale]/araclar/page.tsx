import type { Metadata } from 'next';
import type { Locale } from '@/i18n';
import AraclarSection from '@/components/sections/AraclarSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isTr = locale !== 'en';
  return {
    title: isTr ? 'Dijital Pazarlama Araçları | Ribbony' : 'Digital Marketing Tools | Ribbony',
    description: isTr
      ? 'SEO, sosyal medya, reklam, analitik ve yapay zeka kategorilerinde profesyonellerin kullandığı en iyi dijital pazarlama araçları.'
      : 'The best digital marketing tools used by professionals across SEO, social media, advertising, analytics, and AI categories.',
    robots: { index: true, follow: true },
  };
}

export default function AraclarPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <AraclarSection />;
}
