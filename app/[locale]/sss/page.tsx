import type { Metadata } from 'next';
import type { Locale } from '@/i18n';
import SssSection from '@/components/sections/SssSection';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isTr = locale !== 'en';
  return {
    title: isTr ? 'SSS | Ribbony' : 'FAQ | Ribbony',
    description: isTr
      ? 'Ribbony hakkında sıkça sorulan sorular. Hizmetler, fiyatlandırma, süreç ve teknik konularda merak ettiğiniz her şey.'
      : 'Frequently asked questions about Ribbony. Services, pricing, process, and technical topics.',
    robots: { index: true, follow: true },
  };
}

export default function SssPage({ params: { locale } }: Props) {
  setRequestLocale(locale as Locale);
  return <SssSection />;
}
