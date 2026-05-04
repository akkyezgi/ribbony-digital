'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'filled' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  external?: boolean;
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
};

const variants: Record<Variant, string> = {
  filled:
    'bg-[#e13e90] text-white hover:bg-[#b8306f] disabled:opacity-50 disabled:cursor-not-allowed',
  ghost:
    'border border-[#ebebeb] text-[#3d3d3d] hover:border-[#e13e90] hover:text-[#e13e90] disabled:opacity-50 disabled:cursor-not-allowed',
};

function Spinner() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
      className="block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
    />
  );
}

export default function Button({
  variant = 'filled',
  size = 'md',
  href,
  children,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-body font-bold transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-flex">
        <Link href={href} className={base}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={base}
      whileTap={!disabled && !loading ? { scale: 0.97 } : undefined}
    >
      {loading && <Spinner />}
      {children}
    </motion.button>
  );
}
