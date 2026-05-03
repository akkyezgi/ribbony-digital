'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { services } from '@/lib/services';

export default function ServicesGrid() {
  const t = useTranslations('services');
  const locale = useLocale() as 'tr' | 'en';
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow={t('eyebrow')}
            title={t('title')}
            className="md:max-w-[540px]"
          />
          <div className="flex flex-col items-start gap-5 md:max-w-[320px]">
            <p className="font-body text-base text-[#6b6b6b] leading-relaxed">
              {t('description')}
            </p>
            <Button href={`${prefix}/hizmetler`} variant="ghost" size="sm">
              {t('viewAll')}
            </Button>
          </div>
        </div>

        {/* 3 × 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const data = service[locale];
            return (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={data.title}
                description={data.heroDescription}
                href={`${prefix}/hizmetler/${service.slug}`}
                learnMoreLabel={t('learnMore')}
                index={i}
              />
            );
          })}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center md:hidden"
        >
          <Button href={`${prefix}/hizmetler`} variant="ghost">
            {t('viewAll')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
