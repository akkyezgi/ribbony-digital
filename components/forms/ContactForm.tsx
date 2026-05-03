'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_OPTION_COUNT = 7;

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

function Field({ label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body font-semibold text-[11px] text-[#3d3d3d] uppercase tracking-widest">
        {label}
        {required && <span className="text-[#e13e90] ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="font-body text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    'w-full rounded-[12px] px-4 py-3',
    'font-body text-sm text-[#0f0f0f] placeholder:text-[#6b6b6b]',
    'bg-[#f5f5f5] transition-all duration-200',
    'focus:outline-none focus:bg-white',
    hasError
      ? 'border border-red-400 focus:ring-1 focus:ring-red-400/25'
      : 'border border-[#ebebeb] focus:border-[#e13e90] focus:ring-1 focus:ring-[#e13e90]/20',
  ].join(' ');
}

// ─── Success screen ───────────────────────────────────────────────────────────

function SuccessScreen({ title, message }: { title: string; message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center py-10 gap-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.1 }}
        className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M20 6 9 17l-5-5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      <div>
        <p className="font-heading font-bold text-lg text-[#0f0f0f]">{title}</p>
        <p className="font-body text-sm text-[#6b6b6b] mt-1.5 leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');

  const schema = z.object({
    name: z
      .string()
      .min(1, t('validation.nameRequired'))
      .min(2, t('validation.nameMin')),
    email: z
      .string()
      .min(1, t('validation.emailRequired'))
      .email(t('validation.emailInvalid')),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^(\+90|0)?[5][0-9]{9}$/.test(val.replace(/[\s\-()]/g, '')),
        t('validation.phoneInvalid'),
      ),
    company: z.string().optional(),
    service: z.string().min(1, t('validation.serviceRequired')),
    message: z
      .string()
      .min(1, t('validation.messageRequired'))
      .min(10, t('validation.messageMin')),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const serviceOptions = Array.from({ length: SERVICE_OPTION_COUNT }, (_, i) =>
    t(`form.serviceOptions.${i}`),
  );

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <SuccessScreen
        title={t('form.successTitle')}
        message={t('form.successMessage')}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t('form.name')} required error={errors.name?.message}>
          <input
            {...register('name')}
            type="text"
            placeholder={t('form.namePlaceholder')}
            autoComplete="name"
            className={inputCls(!!errors.name)}
          />
        </Field>

        <Field label={t('form.email')} required error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder={t('form.emailPlaceholder')}
            autoComplete="email"
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t('form.phone')} error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            placeholder={t('form.phonePlaceholder')}
            autoComplete="tel"
            className={inputCls(!!errors.phone)}
          />
        </Field>

        <Field label={t('form.company')} error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            placeholder={t('form.companyPlaceholder')}
            autoComplete="organization"
            className={inputCls(!!errors.company)}
          />
        </Field>
      </div>

      {/* Row 3: Service */}
      <Field label={t('form.service')} required error={errors.service?.message}>
        <div className="relative">
          <select
            {...register('service')}
            defaultValue=""
            className={`${inputCls(!!errors.service)} cursor-pointer appearance-none pr-10`}
          >
            <option value="" disabled>
              {t('form.servicePlaceholder')}
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b6b]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </Field>

      {/* Row 4: Message */}
      <Field label={t('form.message')} required error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={4}
          placeholder={t('form.messagePlaceholder')}
          className={`${inputCls(!!errors.message)} resize-none`}
        />
      </Field>

      {/* Error banner */}
      <AnimatePresence initial={false}>
        {status === 'error' && (
          <motion.div
            key="error-banner"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-[12px] px-4 py-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <p className="font-body text-sm text-red-600">{t('form.errorMessage')}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileTap={status !== 'loading' ? { scale: 0.98 } : undefined}
        className="mt-1 w-full flex items-center justify-center gap-2
                   bg-[#e13e90] hover:bg-[#b8306f] disabled:opacity-60 disabled:cursor-not-allowed
                   text-white font-body font-bold text-sm
                   py-3.5 rounded-full transition-colors duration-200"
      >
        {status === 'loading' && (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
            className="block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
          />
        )}
        {status === 'loading' ? t('form.submitting') : t('form.submit')}
      </motion.button>

    </form>
  );
}
