'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LANGUAGES = [
  { code: '', label: 'FR', full: 'Français' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ar', label: 'ع', full: 'العربية' },
];

export default function LanguageSwitcher() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Inject Google Translate script once
    if (!document.getElementById('gt-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'fr', includedLanguages: 'en,ar', autoDisplay: false },
          'gt-element'
        );
      };
      const script = document.createElement('script');
      script.id = 'gt-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const switchLanguage = (code: string) => {
    setActive(code);
    setOpen(false);

    // Reset to French
    const iframe = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
    if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
      const restoreBtn = innerDoc?.querySelector('.goog-te-button button') as HTMLElement;
      if (restoreBtn) restoreBtn.click();
    }

    if (code === '') {
      // Restore original French
      const cookie = document.cookie.match(/googtrans=([^;]+)/);
      if (cookie) {
        document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        window.location.reload();
      }
      return;
    }

    // Set Google Translate cookie
    document.cookie = `googtrans=/fr/${code}; path=/`;
    document.cookie = `googtrans=/fr/${code}; path=/; domain=${window.location.hostname}`;
    window.location.reload();
  };

  // Detect current language from cookie
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/fr\/(\w+)/);
    if (match) setActive(match[1]);
  }, []);

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="gt-element" className="hidden" />

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
        >
          <span>{LANGUAGES.find(l => l.code === active)?.label ?? 'FR'}</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 bg-[#0d1117] border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 min-w-[120px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left ${
                  active === lang.code
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className="font-bold w-5">{lang.label}</span>
                <span className="text-xs opacity-70">{lang.full}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
