'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useContactPopup } from '@/lib/contact-popup-context';

export default function FloatingCta() {
  const { openPopup } = useContactPopup();
  const locale = useLocale() as 'tr' | 'en';

  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={openPopup}
      aria-label={locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#e13e90] text-white
                 font-body font-bold text-sm rounded-full px-6 py-3.5 shadow-lg
                 hover:bg-[#b8306f] hover:scale-105 transition-all duration-300
                 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
    >
      💬 {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
    </motion.button>
  );
}
