'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';
import CounterUp from '@/components/ui/CounterUp';
import Button from '@/components/ui/Button';
import { useContactPopup } from '@/lib/contact-popup-context';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const COUNTERS = [
  { value: 50, suffix: '+' },
  { value: 120, suffix: '+' },
  { value: 3, suffix: '' },
  { value: 98, suffix: '%' },
] as const;

const VALUE_ICONS = ['🔍', '💡', '🏆', '🤝'] as const;

const TEAM_COUNT = 3;
const VALUES_COUNT = 4;

function TeamAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <div className="w-16 h-16 rounded-full bg-[#fce8f3] flex items-center justify-center font-heading font-bold text-lg text-[#e13e90] flex-shrink-0">
      {initials}
    </div>
  );
}

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale() as 'tr' | 'en';
  const prefix = locale === 'en' ? '/en' : '';
  const { openPopup } = useContactPopup();

  const counters = COUNTERS.map((c, i) => ({
    ...c,
    label: t(`counters.${i}.label`),
  }));

  const values = Array.from({ length: VALUES_COUNT }, (_, i) => ({
    icon: VALUE_ICONS[i],
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`),
  }));

  const team = Array.from({ length: TEAM_COUNT }, (_, i) => ({
    name: t(`team.${i}.name`),
    role: t(`team.${i}.role`),
    bio: t(`team.${i}.bio`),
  }));

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <motion.span
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest mb-5"
              >
                <span className="block w-4 h-px bg-[#e13e90]" />
                {t('pageTitle')}
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-5"
                style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.1 }}
              >
                {t('heroTitle')}
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-body text-lg text-[#6b6b6b] leading-relaxed mb-8 max-w-[520px]"
              >
                {t('heroDescription')}
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <Button href={`${prefix}/iletisim`} variant="filled" size="lg">
                  {locale === 'tr' ? 'Bizimle Çalışın' : 'Work With Us'}
                </Button>
              </motion.div>
            </div>

            {/* Right: counters */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {counters.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] border border-[#ebebeb] p-8 flex flex-col items-center text-center shadow-sm"
                >
                  <CounterUp value={c.value} suffix={c.suffix} label={c.label} />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Story text */}
            <div>
              <SectionTitle
                eyebrow={t('storyEyebrow')}
                title={t('storyTitle')}
                className="mb-8"
              />
              <div className="flex flex-col gap-4">
                <p className="font-body text-base text-[#6b6b6b] leading-relaxed">
                  {t('storyP1')}
                </p>
                <p className="font-body text-base text-[#6b6b6b] leading-relaxed">
                  {t('storyP2')}
                </p>
              </div>
            </div>

            {/* Mission + Vision cards */}
            <div className="flex flex-col gap-5">
              {[
                { title: t('missionTitle'), content: t('missionContent'), icon: '🎯' },
                { title: t('visionTitle'), content: t('visionContent'), icon: '🚀' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="bg-[#f7f7f7] rounded-[20px] border border-[#ebebeb] p-7 flex gap-5"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-[#fce8f3] flex items-center justify-center text-2xl flex-shrink-0">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0f0f0f] mb-2">{card.title}</h3>
                    <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">{card.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle
            eyebrow={t('valuesEyebrow')}
            title={t('valuesTitle')}
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[20px] border border-[#ebebeb] p-7 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-md hover:border-[#e13e90]/30"
              >
                <div className="w-12 h-12 rounded-[14px] bg-[#fce8f3] flex items-center justify-center text-2xl flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0f0f0f] mb-2">{val.title}</h3>
                  <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle
            eyebrow={t('teamEyebrow')}
            title={t('teamTitle')}
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-5 p-8 rounded-[20px] border border-[#ebebeb] bg-white hover:shadow-md hover:border-[#e13e90]/30 transition-shadow duration-300"
              >
                <TeamAvatar name={member.name} />
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0f0f0f]">{member.name}</h3>
                  <p className="font-body font-medium text-sm text-[#e13e90] mt-1">{member.role}</p>
                  <p className="font-body text-sm text-[#6b6b6b] leading-relaxed mt-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#fce8f3] rounded-[32px] px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex flex-col gap-3 max-w-[540px]">
              <span className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e13e90]" />
                {locale === 'tr' ? 'Birlikte Büyüyelim' : "Let's Grow Together"}
              </span>
              <h2
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2 }}
              >
                {locale === 'tr'
                  ? 'Markanızın Dijital Hikayesini Birlikte Yazalım'
                  : "Let's Write Your Brand's Digital Story Together"}
              </h2>
              <p className="font-body text-base text-[#3d3d3d] leading-relaxed">
                {locale === 'tr'
                  ? 'Uzman ekibimizle tanışın ve markanız için özel hazırlanmış dijital stratejiyi keşfedin.'
                  : 'Meet our expert team and discover the digital strategy tailored specifically for your brand.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button onClick={openPopup} variant="filled" size="lg">
                {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
              </Button>
              <Button href={`${prefix}/hizmetler`} variant="ghost" size="lg">
                {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
