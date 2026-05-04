import type { Metadata } from 'next';
import type { Locale } from '@/i18n';
import type { ServiceData } from './services';
import type { BlogPost } from './blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ribbony.com';

interface BuildMetadataParams {
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

function buildMetadata({
  locale,
  title,
  description,
  keywords,
  path,
  noIndex = false,
  ogImage,
  ogType = 'website',
}: BuildMetadataParams): Metadata {
  const trUrl = `${siteUrl}${path}`;
  const enUrl = `${siteUrl}/en${path === '/' ? '' : path}`;
  const canonicalUrl = locale === 'tr' ? trUrl : enUrl;
  const ogImageUrl = ogImage ?? `${siteUrl}/images/og-default.jpg`;
  const fullTitle = `${title} | Ribbony`;

  return {
    title: fullTitle,
    description,
    keywords,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'tr-TR': trUrl,
        'en-US': enUrl,
        'x-default': trUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Ribbony',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: ogType,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: '@ribbonydigital',
      site: '@ribbonydigital',
    },
  };
}

export function getHomeMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/',
    title:
      locale === 'tr'
        ? 'Kurumsal Dijital Pazarlama Şirketi'
        : 'Corporate Digital Marketing Company',
    description:
      locale === 'tr'
        ? 'Ribbony, SEO, sosyal medya yönetimi, reklam yönetimi ve içerik üretimi alanlarında veriye dayalı stratejilerle markanızın dijital varlığını güçlendiren kurumsal dijital pazarlama şirketidir.'
        : "Ribbony is a corporate digital marketing company that strengthens your brand's digital presence through data-driven strategies in SEO, social media management, ad management, and content creation.",
    keywords:
      locale === 'tr'
        ? [
            'dijital pazarlama şirketi',
            'SEO şirketi İstanbul',
            'sosyal medya yönetimi',
            'Google Ads şirketi',
            'Meta Ads yönetimi',
            'içerik üretimi şirketi',
            'web tasarım İstanbul',
          ]
        : [
            'digital marketing company',
            'SEO company Istanbul',
            'social media management',
            'Google Ads company',
            'Meta Ads management',
            'content creation company',
          ],
  });
}

export function getServicesMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/hizmetler',
    title: locale === 'tr' ? 'Hizmetler' : 'Services',
    description:
      locale === 'tr'
        ? 'Ribbony dijital pazarlama hizmetleri: SEO, sosyal medya yönetimi, web tasarım, Google Ads, Meta Ads ve içerik üretimi. Markanız için eksiksiz dijital çözümler.'
        : "Ribbony digital marketing services: SEO, social media management, web design, Google Ads, Meta Ads, and content creation. Complete digital solutions for your brand.",
    keywords:
      locale === 'tr'
        ? ['dijital pazarlama hizmetleri', 'SEO hizmetleri', 'sosyal medya hizmetleri', 'reklam yönetimi', 'web tasarım hizmetleri']
        : ['digital marketing services', 'SEO services', 'social media services', 'ad management', 'web design services'],
  });
}

export function getServicePageMetadata(locale: Locale, service: ServiceData): Metadata {
  const data = service[locale];
  return buildMetadata({
    locale,
    path: `/hizmetler/${service.slug}`,
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords,
  });
}

export function getAboutMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/hakkimizda',
    title: locale === 'tr' ? 'Hakkımızda' : 'About Us',
    description:
      locale === 'tr'
        ? "Ribbony hakkında: 2021'den bu yana İstanbul merkezli faaliyet gösteren dijital pazarlama şirketi olarak 50+ markayı dijital dönüşüm yolculuğunda destekliyoruz."
        : 'About Ribbony: operating from Istanbul since 2021, we support 50+ brands on their digital transformation journey as a digital marketing company.',
    keywords:
      locale === 'tr'
        ? ['Ribbony hakkında', 'dijital pazarlama ekibi', 'İstanbul dijital şirket']
        : ['about Ribbony', 'digital marketing team', 'Istanbul digital company'],
  });
}

export function getReferencesMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/referanslar',
    title: locale === 'tr' ? 'Referanslar' : 'References',
    description:
      locale === 'tr'
        ? 'Ribbony referansları: SEO, sosyal medya ve reklam yönetimi alanlarında birlikte çalıştığımız markalar ve elde ettiğimiz somut sonuçlar.'
        : 'Ribbony references: brands we partner with in SEO, social media, and ad management, and the concrete results we achieve together.',
    keywords:
      locale === 'tr'
        ? ['dijital pazarlama referansları', 'SEO başarı hikayeleri', 'reklam yönetimi sonuçları']
        : ['digital marketing references', 'SEO success stories', 'ad management results'],
  });
}

export function getBlogListMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/blog',
    title: locale === 'tr' ? 'Blog' : 'Blog',
    description:
      locale === 'tr'
        ? 'Ribbony blog: dijital pazarlama, SEO, sosyal medya ve reklam yönetimi hakkında güncel içerikler, stratejiler ve sektör haberleri.'
        : 'Ribbony blog: up-to-date content, strategies, and industry news about digital marketing, SEO, social media, and ad management.',
    keywords:
      locale === 'tr'
        ? ['dijital pazarlama blog', 'SEO ipuçları', 'sosyal medya trendleri', 'Google Ads rehberi']
        : ['digital marketing blog', 'SEO tips', 'social media trends', 'Google Ads guide'],
  });
}

export function getBlogPostPageMetadata(locale: Locale, post: BlogPost): Metadata {
  const data = post[locale];
  return buildMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: data.title,
    description: data.description,
    ogType: 'article',
    ogImage: `${siteUrl}${post.coverImage}`,
  });
}

export function getContactMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: '/iletisim',
    title: locale === 'tr' ? 'İletişim' : 'Contact',
    description:
      locale === 'tr'
        ? 'Ribbony ile iletişime geçin. Dijital pazarlama, SEO, sosyal medya veya reklam yönetimi için ücretsiz danışmanlık talep edin.'
        : 'Get in touch with Ribbony. Request a free consultation for digital marketing, SEO, social media, or ad management.',
    keywords:
      locale === 'tr'
        ? ['Ribbony iletişim', 'dijital pazarlama danışmanlık', 'teklif al', 'İstanbul dijital şirket iletişim']
        : ['Ribbony contact', 'digital marketing consultation', 'get a quote', 'Istanbul digital company contact'],
  });
}

export function getLegalPageMetadata(
  locale: Locale,
  page: 'kvkk' | 'gizlilik-politikasi' | 'cerez-politikasi',
): Metadata {
  const titles: Record<typeof page, Record<Locale, string>> = {
    'kvkk': { tr: 'KVKK Aydınlatma Metni', en: 'KVKK Disclosure Text' },
    'gizlilik-politikasi': { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    'cerez-politikasi': { tr: 'Çerez Politikası', en: 'Cookie Policy' },
  };

  return buildMetadata({
    locale,
    path: `/${page}`,
    title: titles[page][locale],
    description:
      locale === 'tr'
        ? `Ribbony ${titles[page].tr} — kişisel verilerinizin işlenmesine ilişkin bilgiler.`
        : `Ribbony ${titles[page].en} — information on how your personal data is processed.`,
    noIndex: true,
  });
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ribbony',
    url: siteUrl,
    logo: `${siteUrl}/images/ribbony-logo.png`,
    description: 'Kurumsal dijital pazarlama şirketi — SEO, sosyal medya, reklam yönetimi ve içerik üretimi.',
    foundingDate: '2021',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ankara / İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-551-101-42-88',
      email: 'info@ribbonydigital.com',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://www.instagram.com/ribbonydigital',
      'https://www.linkedin.com/company/ribbonydigital',
      'https://twitter.com/ribbonydigital',
    ],
  };
}

export function localBusinessSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/iletisim`,
    name: 'Ribbony',
    image: `${siteUrl}/images/ribbony-logo.png`,
    url: siteUrl,
    telephone: '+90-551-101-42-88',
    email: 'info@ribbonydigital.com',
    description:
      locale === 'tr'
        ? 'Kurumsal dijital pazarlama şirketi — SEO, sosyal medya, reklam yönetimi ve içerik üretimi.'
        : 'Corporate digital marketing company — SEO, social media, ad management, and content creation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ankara / İstanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0766,
      longitude: 28.9979,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '₺₺',
  };
}

export function serviceSchema(locale: Locale, service: ServiceData) {
  const data = service[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Ribbony',
      url: siteUrl,
    },
    url: `${siteUrl}${locale === 'en' ? '/en' : ''}/hizmetler/${service.slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
  };
}

export function faqSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(locale: Locale, post: BlogPost) {
  const data = post[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: `${siteUrl}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ribbony',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/ribbony-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${locale === 'en' ? '/en' : ''}/blog/${post.slug}`,
    },
  };
}
