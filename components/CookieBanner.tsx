'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#05080f] border-t border-slate-800 px-4 py-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience.{' '}
          <Link href="/politique-de-confidentialite" className="text-blue-400 hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
