'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocale } from 'next-intl';
import { useContactPopup } from '@/lib/contact-popup-context';

const schema = z.object({
  name: z.string().min(2, 'En az 2 karakter giriniz'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Lütfen bir hizmet seçiniz'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = {
  tr: [
    'Dijital Pazarlama',
    'Sosyal Medya Yönetimi',
    'Web Tasarım & Geliştirme',
    'SEO',
    'Reklam Yönetimi',
    'İçerik Üretimi',
    'Yapay Zeka Optimizasyonu',
    'Diğer',
  ],
  en: [
    'Digital Marketing',
    'Social Media Management',
    'Web Design & Development',
    'SEO',
    'Ad Management',
    'Content Creation',
    'AI Optimization',
    'Other',
  ],
};

const LABELS = {
  tr: {
    badge: 'Ücretsiz Görüşme',
    title: 'Projenizi Konuşalım',
    subtitle: '24 saat içinde size dönüyoruz',
    name: 'Ad Soyad',
    email: 'E-posta',
    phone: 'Telefon',
    company: 'Şirket Adı',
    service: 'Hizmet seçin',
    servicePlaceholder: 'Seçiniz...',
    message: 'Mesajınız',
    messagePlaceholder: 'Projeniz hakkında kısaca bilgi verin...',
    submit: 'Gönder',
    successTitle: 'Teşekkürler!',
    successText: '24 saat içinde size dönüyoruz.',
    close: 'Kapat',
    errorText: 'Bir hata oluştu. Lütfen tekrar deneyin.',
  },
  en: {
    badge: 'Free Consultation',
    title: "Let's Talk About Your Project",
    subtitle: 'We get back to you within 24 hours',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company Name',
    service: 'Select a service',
    servicePlaceholder: 'Choose...',
    message: 'Message',
    messagePlaceholder: 'Tell us briefly about your project...',
    submit: 'Send',
    successTitle: 'Thank You!',
    successText: 'We will get back to you within 24 hours.',
    close: 'Close',
    errorText: 'An error occurred. Please try again.',
  },
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

function inputClass(hasError?: boolean) {
  return `w-full font-body text-sm text-[#0f0f0f] bg-[#f7f7f7] border rounded-xl px-4 py-3
    placeholder:text-[#aaa] outline-none transition-colors duration-150
    focus:bg-white focus:border-[#e13e90] ${hasError ? 'border-red-400' : 'border-[#e8e8e8]'}`;
}

export default function ContactPopup() {
  const { isOpen, closePopup } = useContactPopup();
  const locale = useLocale() as 'tr' | 'en';
  const L = LABELS[locale];
  const services = SERVICES[locale];

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError(L.errorText);
    }
  };

  const handleClose = () => {
    closePopup();
    setTimeout(() => {
      setSubmitted(false);
      setServerError('');
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8 overflow-y-auto">
            <motion.div
              key="popup-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[520px] bg-white rounded-[24px] p-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X button */}
              <button
                onClick={handleClose}
                aria-label="Kapat"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center
                           justify-center text-[#6b6b6b] hover:bg-[#fce8f3] hover:text-[#e13e90] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                           fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                    <h3 className="font-heading font-bold text-2xl text-[#0f0f0f] mb-2">{L.successTitle}</h3>
                    <p className="font-body text-[#6b6b6b] text-sm">{L.successText}</p>
                    <button
                      onClick={handleClose}
                      className="mt-8 font-body font-semibold text-sm bg-[#e13e90] text-white
                                 rounded-full px-8 py-3 hover:bg-[#b8306f] transition-colors"
                    >
                      {L.close}
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Header */}
                    <span className="inline-flex items-center gap-1.5 font-body font-semibold text-[11px]
                                     text-[#e13e90] uppercase tracking-widest bg-[#fce8f3] px-3 py-1.5
                                     rounded-full mb-4">
                      {L.badge}
                    </span>
                    <h2 className="font-heading font-bold text-[22px] text-[#0f0f0f] leading-tight mb-1">
                      {L.title}
                    </h2>
                    <p className="font-body text-sm text-[#6b6b6b] mb-7">{L.subtitle}</p>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                      {/* Name */}
                      <div>
                        <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                          {L.name} <span className="text-[#e13e90]">*</span>
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          autoComplete="name"
                          className={inputClass(!!errors.name)}
                          placeholder="Adınız Soyadınız"
                        />
                        <FieldError message={errors.name?.message} />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                          {L.email} <span className="text-[#e13e90]">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          autoComplete="email"
                          className={inputClass(!!errors.email)}
                          placeholder="ornek@sirket.com"
                        />
                        <FieldError message={errors.email?.message} />
                      </div>

                      {/* Phone + Company */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                            {L.phone}
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            autoComplete="tel"
                            className={inputClass()}
                            placeholder="+90 5XX XXX XX XX"
                          />
                        </div>
                        <div>
                          <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                            {L.company}
                          </label>
                          <input
                            {...register('company')}
                            type="text"
                            autoComplete="organization"
                            className={inputClass()}
                            placeholder="Şirket A.Ş."
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                          {L.service} <span className="text-[#e13e90]">*</span>
                        </label>
                        <select
                          {...register('service')}
                          className={`${inputClass(!!errors.service)} appearance-none cursor-pointer`}
                          defaultValue=""
                        >
                          <option value="" disabled>{L.servicePlaceholder}</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <FieldError message={errors.service?.message} />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-body font-medium text-xs text-[#3d3d3d] mb-1.5">
                          {L.message}
                        </label>
                        <textarea
                          {...register('message')}
                          rows={3}
                          className={`${inputClass()} resize-none`}
                          placeholder={L.messagePlaceholder}
                        />
                      </div>

                      {serverError && (
                        <p className="text-sm text-red-500 text-center">{serverError}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full font-body font-bold text-sm text-white bg-[#e13e90]
                                   rounded-full py-3.5 hover:bg-[#b8306f] transition-colors duration-200
                                   disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                      >
                        {isSubmitting ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
                            className="block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            {L.submit}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
