'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterUpProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CounterUp({
  value,
  suffix = '',
  label,
  duration = 2000,
  className = '',
}: CounterUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let rafId: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOutCubic(progress) * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={`flex flex-col items-center gap-1 ${className}`}>
      <span className="font-heading font-extrabold text-[#0f0f0f] tabular-nums" style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1 }}>
        {count}
        {suffix}
      </span>
      <span className="font-body text-sm text-[#6b6b6b] text-center leading-snug">{label}</span>
    </div>
  );
}
