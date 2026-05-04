'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface Platform {
  logo: string;
  name: string;
  desc: { tr: string; en: string };
  tags: { tr: string[]; en: string[] };
}

const PLATFORMS: Platform[] = [
  {
    logo: '/images/meta-ads.png',
    name: 'Meta Ads',
    desc: {
      tr: 'Facebook ve Instagram\'da hedef kitle segmentasyonu, retargeting ve dönüşüm odaklı reklam kampanyaları yönetiyoruz.',
      en: 'We manage Facebook and Instagram campaigns with audience segmentation, retargeting, and conversion-focused ads.',
    },
    tags: { tr: ['Reklam', 'Retargeting', 'Lead'], en: ['Ads', 'Retargeting', 'Lead'] },
  },
  {
    logo: '/images/google-ads.png',
    name: 'Google Ads',
    desc: {
      tr: 'Arama ve Display ağı, Shopping kampanyaları ve YouTube reklamları ile markanızı doğru anda doğru kişiye ulaştırıyoruz.',
      en: 'We connect your brand to the right people at the right time through Search, Display, Shopping, and YouTube ads.',
    },
    tags: { tr: ['SEM', 'Display', 'YouTube'], en: ['SEM', 'Display', 'YouTube'] },
  },
  {
    logo: '/images/instagram.png',
    name: 'Instagram',
    desc: {
      tr: 'Özgün içerik stratejisi, Reels üretimi ve influencer koordinasyonu ile hesabınızın organik büyümesini sağlıyoruz.',
      en: 'We drive organic growth through original content strategy, Reels production, and influencer coordination.',
    },
    tags: { tr: ['İçerik', 'Reels', 'Story'], en: ['Content', 'Reels', 'Story'] },
  },
  {
    logo: '/images/linkedin.png',
    name: 'LinkedIn',
    desc: {
      tr: 'B2B pazarlama, kurumsal içerik yönetimi ve LinkedIn Ads ile karar alıcılara ulaşıp lead generation sağlıyoruz.',
      en: 'We reach decision-makers and generate leads through B2B marketing, corporate content, and LinkedIn Ads.',
    },
    tags: { tr: ['B2B', 'Kurumsal', 'Lead'], en: ['B2B', 'Corporate', 'Lead'] },
  },
  {
    logo: '/images/TikTok.png',
    name: 'TikTok',
    desc: {
      tr: 'Viral içerik üretimi, TikTok Ads ve güncel trend takibi ile genç kitlelere erişim ve marka bilinirliği sağlıyoruz.',
      en: 'We reach younger audiences and build brand awareness through viral content, TikTok Ads, and trend monitoring.',
    },
    tags: { tr: ['Viral', 'Gen-Z', 'Ads'], en: ['Viral', 'Gen-Z', 'Ads'] },
  },
  {
    logo: '/images/chatgpt.png',
    name: 'ChatGPT & AI Araçları',
    desc: {
      tr: 'Yapay zeka ile içerik üretimi, süreç otomasyonu ve kişiselleştirilmiş pazarlama iletişimi kuruyoruz.',
      en: 'We deliver AI-powered content creation, process automation, and personalised marketing communication.',
    },
    tags: { tr: ['AI', 'Otomasyon', 'İçerik'], en: ['AI', 'Automation', 'Content'] },
  },
];

export default function ToolsMarquee() {
  const locale = useLocale() as 'tr' | 'en';

  const heading = locale === 'tr' ? 'Hizmet Verdiğimiz Platformlar' : 'Platforms We Work With';
  const subheading = locale === 'tr'
    ? 'Bu platformlarda markanızı büyütüyor, görünürlüğünüzü artırıyor ve dönüşüm sağlıyoruz.'
    : 'We grow your brand, increase your visibility, and drive conversions across these platforms.';

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-[clamp(28px,3.5vw,44px)] text-[#0f0f0f] mb-4"
          >
            {heading}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base text-[#6b6b6b] max-w-[560px] mx-auto leading-relaxed"
          >
            {subheading}
          </motion.p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#ebebeb] rounded-2xl p-7 flex flex-col gap-5
                         hover:border-[#e13e90] hover:shadow-[0_8px_32px_rgba(225,62,144,0.12)]
                         transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-[#f7f7f7] flex items-center justify-center p-3 flex-shrink-0">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-lg text-[#0f0f0f] leading-snug group-hover:text-[#e13e90] transition-colors">
                {p.name}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-[#6b6b6b] leading-relaxed flex-1">
                {p.desc[locale]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags[locale].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium text-[#e13e90] bg-[#fce8f3] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
