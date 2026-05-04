import type { Metadata } from 'next';
import Script from 'next/script';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyRibbony from '@/components/sections/WhyRibbony';
import Testimonials from '@/components/sections/Testimonials';
import CtaSection from '@/components/sections/CtaSection';
import ClientLogosMarquee from '@/components/sections/ClientLogosMarquee';
import ToolsMarquee from '@/components/sections/ToolsMarquee';
import { getHomeMetadata, organizationSchema } from '@/lib/metadata';
import type { Locale } from '@/i18n';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return getHomeMetadata(locale as Locale);
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const schema = organizationSchema();

  return (
    <>
      <Script
        id="ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <ToolsMarquee />
      <WhyRibbony />
      <ClientLogosMarquee />
      <Testimonials />
      <CtaSection />
    </>
  );
}
