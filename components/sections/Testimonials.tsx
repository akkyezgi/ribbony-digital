'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SectionTitle from '@/components/ui/SectionTitle';

const ITEM_COUNT = 3;

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const items = Array.from({ length: ITEM_COUNT }, (_, i) => ({
    quote: t(`items.${i}.quote`),
    name: t(`items.${i}.name`),
    role: t(`items.${i}.role`),
    company: t(`items.${i}.company`),
  }));

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <SectionTitle
            eyebrow={t('eyebrow')}
            title={t('title')}
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {items.map((item, i) => (
            <TestimonialCard
              key={i}
              {...item}
              featured={i === 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
