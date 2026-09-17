import Link from 'next/link';
import { ChevronRight, Clock, Gauge, Shield, Car, Truck } from 'lucide-react';

const highlights = [
  { icon: Clock, label: 'Disponible 24h/24' },
  { icon: Gauge, label: 'Kilométrage illimité' },
  { icon: Shield, label: 'Assurance tous risques' },
  { icon: Car, label: 'Véhicules 2026' },
  { icon: Truck, label: 'Livraison disponible' },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cars/hero-bg.png')" }}
        />
        {/* Dark overlay + gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05080f]/95 via-[#05080f]/80 to-blue-950/70" />

        {/* Blue glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Agence de location — Rabat, Maroc
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-widest text-white mb-4">
            FANCHA CAR&apos;S
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Louez votre voiture<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              à Rabat
            </span>{' '}
            en toute sérénité
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Des véhicules récents, kilométrage illimité et assurance tous risques.
            FANCHA CAR&apos;S vous accompagne 24h/24 pour vos déplacements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cars"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
            >
              Voir nos voitures
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-blue-500/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-blue-400" />
          <span className="text-slate-500 text-xs uppercase tracking-widest">Découvrir</span>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="bg-slate-900/80 border-y border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-2">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-slate-400">
                <Icon size={16} className="text-blue-400" />
                <span className="text-sm font-medium whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
