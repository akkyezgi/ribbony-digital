'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const CONSENT_KEY = 'ribbony_cookie_consent';

export interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}

function Toggle({ checked, onChange, disabled = false, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e13e90] ${
        checked ? 'bg-[#e13e90]' : 'bg-[#d4d4d4]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <motion.span
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
      />
    </button>
  );
}

export default function CookieBanner() {
  const t = useTranslations('cookieBanner');
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
  }, []);

  const save = (state: Omit<CookieConsent, 'ts'>) => {
    const consent: CookieConsent = { ...state, ts: Date.now() };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      window.dispatchEvent(new Event('ribbony:consent'));
    } catch {
      // ignore
    }
    setVisible(false);
    setShowModal(false);
  };

  const acceptAll = () => save({ analytics: true, marketing: true });
  const rejectAll = () => save({ analytics: false, marketing: false });
  const savePreferences = () => save({ analytics, marketing });

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 left-4 right-4 md:left-auto md:right-6 md:max-w-[420px] z-50
                       bg-white border border-[#ebebeb] rounded-[20px]
                       shadow-[0_8px_48px_rgba(0,0,0,0.14)] p-6"
          >
            <h3 className="font-heading font-bold text-[15px] text-[#0f0f0f] mb-2">{t('title')}</h3>
            <p className="font-body text-[13px] text-[#6b6b6b] leading-relaxed mb-5">
              {t('description')}{' '}
              <Link
                href="/cerez-politikasi"
                className="text-[#e13e90] underline underline-offset-2 hover:text-[#b8306f] transition-colors"
              >
                {t('learnMore')}
              </Link>
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={acceptAll}
                className="w-full bg-[#e13e90] hover:bg-[#b8306f] text-white font-body font-bold text-sm py-2.5 rounded-full transition-colors duration-200"
              >
                {t('acceptAll')}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 border border-[#ebebeb] hover:border-[#e13e90] hover:text-[#e13e90] text-[#3d3d3d] font-body font-medium text-[13px] py-2.5 rounded-full transition-colors duration-200"
                >
                  {t('customize')}
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 border border-[#ebebeb] hover:border-[#e13e90] hover:text-[#e13e90] text-[#3d3d3d] font-body font-medium text-[13px] py-2.5 rounded-full transition-colors duration-200"
                >
                  {t('rejectAll')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setShowModal(false)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:left-1/2 md:-translate-x-1/2
                         md:top-1/2 md:-translate-y-1/2 md:w-[500px] z-[70]
                         bg-white rounded-[24px] shadow-2xl p-7"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-lg text-[#0f0f0f]">{t('customize')}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  aria-label="Kapat"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f5]
                             hover:bg-[#ebebeb] text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Necessary row */}
              <div className="flex items-start justify-between gap-4 py-4 border-b border-[#ebebeb]">
                <div>
                  <p className="font-body font-bold text-sm text-[#0f0f0f]">{t('necessaryTitle')}</p>
                  <p className="font-body text-xs text-[#6b6b6b] mt-1 leading-relaxed">{t('necessaryDescription')}</p>
                </div>
                <Toggle checked disabled onChange={() => {}} label={t('necessaryTitle')} />
              </div>

              {/* Analytics row */}
              <div className="flex items-start justify-between gap-4 py-4 border-b border-[#ebebeb]">
                <div>
                  <p className="font-body font-bold text-sm text-[#0f0f0f]">{t('analyticsTitle')}</p>
                  <p className="font-body text-xs text-[#6b6b6b] mt-1 leading-relaxed">{t('analyticsDescription')}</p>
                </div>
                <Toggle checked={analytics} onChange={setAnalytics} label={t('analyticsTitle')} />
              </div>

              {/* Marketing row */}
              <div className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-body font-bold text-sm text-[#0f0f0f]">{t('marketingTitle')}</p>
                  <p className="font-body text-xs text-[#6b6b6b] mt-1 leading-relaxed">{t('marketingDescription')}</p>
                </div>
                <Toggle checked={marketing} onChange={setMarketing} label={t('marketingTitle')} />
              </div>

              <button
                onClick={savePreferences}
                className="mt-5 w-full bg-[#e13e90] hover:bg-[#b8306f] text-white font-body font-bold text-sm py-3 rounded-full transition-colors duration-200"
              >
                {t('save')}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
