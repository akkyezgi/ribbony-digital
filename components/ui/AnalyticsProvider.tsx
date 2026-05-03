'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { CONSENT_KEY, type CookieConsent } from '@/components/ui/CookieBanner';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsProvider() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    function check() {
      try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (raw) {
          const consent = JSON.parse(raw) as CookieConsent;
          setHasConsent(consent.analytics === true);
        }
      } catch {
        // ignore localStorage errors
      }
    }

    check();
    window.addEventListener('ribbony:consent', check);
    return () => window.removeEventListener('ribbony:consent', check);
  }, []);

  if (!hasConsent || !gaId) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
