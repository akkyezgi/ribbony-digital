'use client';

import { useTranslations } from 'next-intl';

const ITEM_COUNT = 10;

export default function MarqueeStrip() {
  const t = useTranslations('marquee');
  const items = Array.from({ length: ITEM_COUNT }, (_, i) => t(`items.${i}`));
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#f5f5f5] border-y border-[#ebebeb] py-4 overflow-hidden select-none">
      <div className="flex animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-6 font-heading font-semibold text-sm text-[#6b6b6b] whitespace-nowrap"
          >
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full bg-[#e13e90] flex-shrink-0"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
