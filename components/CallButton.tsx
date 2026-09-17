'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+212660391020"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 sm:hidden"
      aria-label="Appeler FANCHA CAR'S"
    >
      <Phone size={20} />
      <span className="text-sm">Appeler</span>
    </a>
  );
}
