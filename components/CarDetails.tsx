'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Fuel,
  Settings,
  Calendar,
  Gauge,
  Shield,
  CreditCard,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { Car } from '@/types';
import { buildWhatsAppUrl, buildCarReservationMessage } from '@/lib/whatsapp';
import { calculateDays, calculateTotalPrice, formatDate, getTodayString, getTomorrowString } from '@/lib/utils';
import PriceDisplay from './PriceDisplay';

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  const [startDate, setStartDate] = useState(getTodayString());
  const [endDate, setEndDate] = useState(getTomorrowString());

  const days = calculateDays(startDate, endDate);
  const totalPrice = calculateTotalPrice(car.pricePerDay, days);

  const whatsappUrl = buildWhatsAppUrl(
    buildCarReservationMessage({
      carName: car.fullName,
      transmission: car.transmission,
      fuel: car.fuel,
      pricePerDay: car.pricePerDay,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    })
  );

  const specs = [
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Fuel, label: 'Carburant', value: car.fuel },
    { icon: Calendar, label: 'Année', value: String(car.year) },
    { icon: Gauge, label: 'Kilométrage', value: car.mileage },
    { icon: Shield, label: 'Assurance', value: car.insurance },
    { icon: CreditCard, label: 'Caution', value: `${car.deposit} €` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
          <ChevronRight size={14} />
          <Link href="/cars" className="hover:text-blue-500 transition-colors">Nos voitures</Link>
          <ChevronRight size={14} />
          <span className="text-slate-800">{car.fullName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: car info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main image */}
            <div className="relative aspect-video bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-60">
                  <div className="text-6xl mb-3">🚗</div>
                  <p className="text-slate-500 text-sm font-medium">{car.fullName}</p>
                </div>
              </div>
              <Image
                src={car.image}
                alt={car.fullName}
                fill
                className="object-cover relative z-10"
                priority
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-blue-600 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  {car.year}
                </span>
                <span className="bg-[#05080f]/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {car.transmission}
                </span>
                <span className="bg-[#05080f]/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {car.fuel}
                </span>
              </div>
            </div>

            {/* Title */}
            <div>
              <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-1">
                {car.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {car.fullName}
              </h1>
              <PriceDisplay price={car.pricePerDay} size="lg" />
            </div>

            {/* Specs grid */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-5">Caractéristiques</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                    <p className="text-slate-900 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {car.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">Équipements</h2>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Card header */}
              <div className="bg-[#05080f] p-6">
                <p className="text-slate-400 text-sm mb-1">{car.brand}</p>
                <h3 className="text-white font-bold text-xl mb-3">{car.fullName}</h3>
                <PriceDisplay price={car.pricePerDay} size="lg" />
              </div>

              {/* Booking form */}
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Date de départ
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    min={getTodayString()}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Date de retour
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate || getTodayString()}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Price calculation */}
                {days > 0 && (
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>{days} jour{days > 1 ? 's' : ''} × {car.pricePerDay} €</span>
                      <span className="font-semibold text-slate-900">{totalPrice} €</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>Caution (sur place)</span>
                      <span>{car.deposit} €</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3 flex justify-between">
                      <span className="text-slate-700 font-semibold">Total location</span>
                      <span className="text-amber-500 font-bold text-lg">{totalPrice} €</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      * La caution ({car.deposit} €) est versée sur place et non incluse dans ce montant.
                    </p>
                  </div>
                )}

                {/* CTAs */}
                <Link
                  href={`/booking?car=${car.id}&start=${startDate}&end=${endDate}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
                >
                  Demander une réservation
                  <ChevronRight size={16} />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm"
                >
                  <MessageCircle size={18} />
                  Réserver sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
