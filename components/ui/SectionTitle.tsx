'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#e13e90] uppercase tracking-widest"
        >
          <span className="block w-4 h-px bg-[#e13e90]" />
          {eyebrow}
        </motion.span>
      )}

      <motion.div
        custom={eyebrow ? 1 : 0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="inline-block"
      >
        <h2
          className="font-heading font-extrabold text-[#0f0f0f] tracking-tight"
          style={{ fontSize: 'clamp(34px, 4vw, 56px)', lineHeight: 1.15 }}
        >
          {title}
        </h2>
        <div className="mt-2 h-[3px] rounded-full bg-gradient-to-r from-[#e13e90] to-[#b8306f]" />
      </motion.div>

      {description && (
        <motion.p
          custom={eyebrow ? 2 : 1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="font-body text-base text-[#6b6b6b] leading-relaxed max-w-[520px]"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
