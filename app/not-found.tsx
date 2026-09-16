import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05080f] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-blue-500 text-7xl font-bold mb-4">404</p>
        <h1 className="text-white text-2xl font-bold mb-3">Page introuvable</h1>
        <p className="text-slate-400 mb-8">La page que vous recherchez n&apos;existe pas.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-950 font-bold px-8 py-3 rounded-full transition-colors"
        >
          Retour à l&apos;accueil
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
