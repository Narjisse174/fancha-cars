'use client';

import { buildWhatsAppUrl, buildGeneralContactMessage } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const url = buildWhatsAppUrl(buildGeneralContactMessage());

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 group"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:block text-sm">WhatsApp</span>
    </a>
  );
}
