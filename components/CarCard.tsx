'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fuel, Settings, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Car } from '@/types';
import { buildWhatsAppUrl, buildCarReservationMessage } from '@/lib/whatsapp';
import PriceDisplay from './PriceDisplay';

interface CarCardProps {
  car: Car;
}

const fuelColors: Record<string, string> = {
  Diesel: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  Essence: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
  Hybride: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
};

const transmissionColors: Record<string, string> = {
  Automatique: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
  Manuelle: 'bg-slate-500/10 text-slate-400 border border-slate-500/20',
};

export default function CarCard({ car }: CarCardProps) {
  const whatsappUrl = buildWhatsAppUrl(
    buildCarReservationMessage({
      carName: car.fullName,
      transmission: car.transmission,
      fuel: car.fuel,
      pricePerDay: car.pricePerDay,
    })
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group border border-slate-100 hover:-translate-y-1.5">
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {/* Placeholder background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🚗</div>
            <p className="text-slate-400 text-xs font-medium">{car.fullName}</p>
          </div>
        </div>
        {/* Real image on top */}
        <Image
          src={car.image}
          alt={car.fullName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
        />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-20" />
        {/* Badges top left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-30">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${fuelColors[car.fuel]}`}>
            {car.fuel}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${transmissionColors[car.transmission]}`}>
            {car.transmission}
          </span>
        </div>
        {/* Year badge top right */}
        <div className="absolute top-3 right-3 z-30">
          <span className="bg-blue-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">{car.brand}</p>
          <h3 className="text-slate-900 font-bold text-lg leading-tight">{car.fullName}</h3>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Fuel size={13} className="text-blue-500" />
            {car.fuel}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Settings size={13} className="text-blue-500" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Calendar size={13} className="text-blue-500" />
            {car.year}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between mb-4">
            <PriceDisplay price={car.pricePerDay} size="md" />
            <span className="text-slate-400 text-xs">Caution : {car.deposit} €</span>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/cars/${car.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
            >
              Voir le véhicule
              <ArrowRight size={14} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-400 text-white p-2.5 rounded-xl transition-colors"
              aria-label="Réserver sur WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
