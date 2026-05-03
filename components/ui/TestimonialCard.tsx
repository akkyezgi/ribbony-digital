'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  featured?: boolean;
  index?: number;
}

function StarRow({ featured }: { featured: boolean }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={featured ? 'rgba(255,255,255,0.9)' : '#e13e90'}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, featured }: { name: string; featured: boolean }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 ${
        featured ? 'bg-white/20 text-white' : 'bg-[#fce8f3] text-[#e13e90]'
      }`}
    >
      {initials}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  featured = false,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`rounded-[20px] p-8 flex flex-col gap-6 transition-shadow duration-300 ${
        featured
          ? 'bg-[#e13e90] text-white shadow-[0_20px_60px_rgba(225,62,144,0.35)]'
          : 'bg-white border border-[#ebebeb] hover:shadow-md hover:border-[#e13e90]/30'
      }`}
    >
      <StarRow featured={featured} />

      <blockquote
        className={`font-body text-base leading-relaxed flex-1 ${
          featured ? 'text-white/90' : 'text-[#3d3d3d]'
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-2 border-t border-white/20">
        <Avatar name={name} featured={featured} />
        <div>
          <p
            className={`font-body font-bold text-sm ${
              featured ? 'text-white' : 'text-[#0f0f0f]'
            }`}
          >
            {name}
          </p>
          <p
            className={`font-body text-xs mt-0.5 ${
              featured ? 'text-white/70' : 'text-[#6b6b6b]'
            }`}
          >
            {role} · {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
