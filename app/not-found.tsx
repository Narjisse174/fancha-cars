import Link from 'next/link';
import { ChevronRight, Car } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05080f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Car size={36} className="text-blue-400" />
        </div>
        <p className="text-blue-500 text-8xl font-black mb-4 tracking-tight">404</p>
        <h1 className="text-white text-2xl font-bold mb-3">Page introuvable</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil pour trouver votre véhicule.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            Retour à l&apos;accueil
            <ChevronRight size={16} />
          </Link>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Voir nos voitures
          </Link>
        </div>
      </div>
    </div>
  );
}
