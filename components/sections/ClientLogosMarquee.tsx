'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';

const logos = [
  { src: '/images/businta-referans.png', alt: 'Businta' },
  { src: '/images/hrsync-referans.png', alt: 'HRSync' },
  { src: '/images/mavvo-referans.png', alt: 'Mavvo' },
  { src: '/images/mohan-referans.png', alt: 'Mohan' },
  { src: '/images/oduyo-referans.png', alt: 'Ödüyo' },
  { src: '/images/solentos-referans.png', alt: 'Solentos' },
];

interface Props {
  variant?: 'marquee' | 'grid';
}

export default function ClientLogosMarquee({ variant = 'marquee' }: Props) {
  const locale = useLocale() as 'tr' | 'en';
  const heading = locale === 'tr' ? 'Referanslarımız' : 'Our References';

  if (variant === 'grid') {
    return (
      <div className="py-12 border-b border-[#ebebeb]">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center font-body text-xs text-[#6b6b6b] uppercase tracking-widest mb-10">
            {heading}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-9 w-auto grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-24 border-y border-[#ebebeb]">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <p className="text-center font-heading font-bold text-4xl text-[#0f0f0f]">
          {heading}
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white p-8 flex items-center justify-center min-w-[180px] h-36"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="h-28 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
