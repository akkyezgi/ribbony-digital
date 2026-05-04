'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode | string;
  title: string;
  description: string;
  href: string;
  learnMoreLabel?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  learnMoreLabel = 'Detaylı Bilgi',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group p-[1px] rounded-[21px] bg-[#ebebeb] hover:bg-gradient-to-br
                 hover:from-[#e13e90] hover:to-[#b8306f] transition-all duration-300 hover:shadow-md"
    >
    <div className="bg-white rounded-[20px] p-7 flex flex-col gap-5 h-full">
      <div className="w-12 h-12 rounded-[14px] bg-[#fce8f3] flex items-center justify-center text-2xl flex-shrink-0">
        {icon}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading font-bold text-xl text-[#0f0f0f] leading-snug">{title}</h3>
        <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 font-body font-medium text-sm text-[#e13e90]
                   transition-gap duration-200 group-hover:gap-2.5"
      >
        {learnMoreLabel}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </div>
    </motion.div>
  );
}
