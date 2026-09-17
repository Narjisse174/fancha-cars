'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { cars } from '@/data/cars';
import CarGrid from './CarGrid';

const transmissions = ['Toutes', 'Manuelle', 'Automatique'];
const fuels = ['Tous', 'Diesel', 'Essence', 'Hybride'];
const budgets = [
  { label: 'Tous les prix', min: 0, max: Infinity },
  { label: 'Moins de 35 €/j', min: 0, max: 34 },
  { label: '35 – 45 €/j', min: 35, max: 45 },
  { label: 'Plus de 45 €/j', min: 46, max: Infinity },
];

export default function CarsFilter() {
  const [transmission, setTransmission] = useState('Toutes');
  const [fuel, setFuel] = useState('Tous');
  const [budget, setBudget] = useState(0);

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      const matchTransmission = transmission === 'Toutes' || car.transmission === transmission;
      const matchFuel = fuel === 'Tous' || car.fuel === fuel;
      const { min, max } = budgets[budget];
      const matchBudget = car.pricePerDay >= min && car.pricePerDay <= max;
      return matchTransmission && matchFuel && matchBudget;
    });
  }, [transmission, fuel, budget]);

  const hasFilters = transmission !== 'Toutes' || fuel !== 'Tous' || budget !== 0;

  function reset() {
    setTransmission('Toutes');
    setFuel('Tous');
    setBudget(0);
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
            <SlidersHorizontal size={16} className="text-blue-500" />
            Filtrer
          </div>

          {/* Transmission */}
          <div className="flex flex-wrap gap-2">
            {transmissions.map((t) => (
              <button
                key={t}
                onClick={() => setTransmission(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  transmission === t
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-slate-200 hidden sm:block" />

          {/* Fuel */}
          <div className="flex flex-wrap gap-2">
            {fuels.map((f) => (
              <button
                key={f}
                onClick={() => setFuel(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  fuel === f
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-slate-200 hidden sm:block" />

          {/* Budget */}
          <div className="flex flex-wrap gap-2">
            {budgets.map((b, i) => (
              <button
                key={b.label}
                onClick={() => setBudget(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  budget === i
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Reset */}
          {hasFilters && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 font-medium ml-auto transition-colors"
            >
              <X size={14} />
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-500 text-sm">
          <span className="font-bold text-slate-900">{filtered.length}</span> véhicule{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
        </p>
        {hasFilters && (
          <p className="text-blue-500 text-xs font-medium">Filtres actifs</p>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg mb-4">Aucun véhicule ne correspond à vos critères.</p>
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Voir tous les véhicules
          </button>
        </div>
      ) : (
        <CarGrid cars={filtered} />
      )}
    </div>
  );
}
