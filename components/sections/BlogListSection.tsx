'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Button from '@/components/ui/Button';

type Locale = 'tr' | 'en';

const CATEGORY_META: Record<string, { label: string; icon: string; bg: string; text: string }> = {
  seo: { label: 'SEO', icon: '🔍', bg: 'bg-blue-50', text: 'text-blue-700' },
  'sosyal-medya': { label: 'Sosyal Medya', icon: '📱', bg: 'bg-pink-50', text: 'text-[#e13e90]' },
  reklam: { label: 'Reklam', icon: '📣', bg: 'bg-orange-50', text: 'text-orange-700' },
  icerik: { label: 'İçerik', icon: '✍️', bg: 'bg-green-50', text: 'text-green-700' },
  strateji: { label: 'Strateji', icon: '📊', bg: 'bg-purple-50', text: 'text-purple-700' },
};

const CARD_GRADIENT: Record<string, string> = {
  seo: 'from-blue-50 to-blue-100',
  'sosyal-medya': 'from-pink-50 to-[#fce8f3]',
  reklam: 'from-orange-50 to-orange-100',
  icerik: 'from-green-50 to-green-100',
  strateji: 'from-purple-50 to-purple-100',
};

function formatDate(dateStr: string, locale: Locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

interface BlogCardProps {
  post: ReturnType<typeof getAllPosts>[number];
  locale: Locale;
  prefix: string;
  readMoreLabel: string;
  readTimeLabel: string;
  index: number;
  featured?: boolean;
}

function BlogCard({
  post,
  locale,
  prefix,
  readMoreLabel,
  readTimeLabel,
  index,
  featured = false,
}: BlogCardProps) {
  const data = post[locale];
  const cat = CATEGORY_META[post.category] ?? {
    label: post.category,
    icon: '📝',
    bg: 'bg-gray-50',
    text: 'text-gray-700',
  };
  const gradient = CARD_GRADIENT[post.category] ?? 'from-gray-50 to-gray-100';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`group bg-white rounded-[20px] border border-[#ebebeb] overflow-hidden flex flex-col hover:shadow-md hover:border-[#e13e90]/30 transition-shadow duration-300 ${featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Card header — gradient placeholder (image would go here) */}
      <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${featured ? 'h-52 md:h-64' : 'h-44'} relative overflow-hidden`}>
        <span className="text-5xl opacity-60">{cat.icon}</span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-7 flex-1">
        {/* Category badge */}
        <span className={`inline-flex items-center gap-1.5 font-body font-medium text-xs px-3 py-1 rounded-full self-start ${cat.bg} ${cat.text}`}>
          {cat.icon} {cat.label}
        </span>

        <h2 className="font-heading font-bold text-[#0f0f0f] leading-snug group-hover:text-[#e13e90] transition-colors duration-200"
          style={{ fontSize: featured ? 'clamp(18px, 2vw, 24px)' : '18px' }}
        >
          <Link href={`${prefix}/blog/${post.slug}`}>{data.title}</Link>
        </h2>

        <p className="font-body text-sm text-[#6b6b6b] leading-relaxed line-clamp-3 flex-1">
          {data.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#ebebeb]">
          <div className="flex items-center gap-3 font-body text-xs text-[#6b6b6b]">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-[#c0c0c0]" />
            <span>{formatDate(post.publishedAt, locale)}</span>
            <span className="w-1 h-1 rounded-full bg-[#c0c0c0]" />
            <span>{post.readTime} {readTimeLabel}</span>
          </div>

          <Link
            href={`${prefix}/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-body font-medium text-sm text-[#e13e90] group-hover:gap-2 transition-all duration-200"
          >
            {readMoreLabel}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogListSection() {
  const t = useTranslations('blog');
  const locale = useLocale() as Locale;
  const prefix = locale === 'en' ? '/en' : '';
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest mb-5"
          >
            <span className="block w-4 h-px bg-[#e13e90]" />
            {t('pageTitle')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.1 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="font-body text-lg text-[#6b6b6b] leading-relaxed max-w-[580px]"
          >
            {t('heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* ── Posts Grid ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Featured + rest */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {featured && (
              <BlogCard
                post={featured}
                locale={locale}
                prefix={prefix}
                readMoreLabel={t('readMore')}
                readTimeLabel={t('readTime')}
                index={0}
                featured
              />
            )}

            {/* Stack the remaining posts vertically in col 2 */}
            <div className="flex flex-col gap-5">
              {rest.map((post, i) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  locale={locale}
                  prefix={prefix}
                  readMoreLabel={t('readMore')}
                  readTimeLabel={t('readTime')}
                  index={i + 1}
                />
              ))}
            </div>
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
                {locale === 'tr' ? 'Uzman Danışmanlık' : 'Expert Consultation'}
              </span>
              <h2
                className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
                style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', lineHeight: 1.2 }}
              >
                {locale === 'tr'
                  ? 'Stratejinizi Bizimle Hayata Geçirin'
                  : 'Bring Your Strategy to Life With Us'}
              </h2>
              <p className="font-body text-base text-[#3d3d3d] leading-relaxed">
                {locale === 'tr'
                  ? 'İçeriklerdeki stratejileri markanız için uygulamak ister misiniz? Ribbony uzmanlarıyla ücretsiz bir görüşme yapın.'
                  : "Want to apply the strategies from these articles to your brand? Schedule a free consultation with Ribbony experts."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button href={`${prefix}/iletisim`} variant="filled" size="lg">
                {locale === 'tr' ? 'Ücretsiz Görüşme' : 'Free Consultation'}
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
