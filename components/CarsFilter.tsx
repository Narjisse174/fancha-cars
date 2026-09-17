'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { cars } from '@/data/cars';
import CarGrid from './CarGrid';

const transmissions = ['Toutes', 'Manuelle', 'Automatique'];
const fuels = ['Tous', 'Diesel', 'Essence', 'Hybride'];

const MIN_PRICE = 0;
const MAX_PRICE = 100;

export default function CarsFilter() {
  const [transmission, setTransmission] = useState('Toutes');
  const [fuel, setFuel] = useState('Tous');
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [inputPrice, setInputPrice] = useState(String(MAX_PRICE));

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      const matchTransmission = transmission === 'Toutes' || car.transmission === transmission;
      const matchFuel = fuel === 'Tous' || car.fuel === fuel;
      const matchPrice = car.pricePerDay <= maxPrice;
      return matchTransmission && matchFuel && matchPrice;
    });
  }, [transmission, fuel, maxPrice]);

  const hasFilters = transmission !== 'Toutes' || fuel !== 'Tous' || maxPrice !== MAX_PRICE;

  function reset() {
    setTransmission('Toutes');
    setFuel('Tous');
    setMaxPrice(MAX_PRICE);
    setInputPrice(String(MAX_PRICE));
  }

  function handleSlider(val: number) {
    setMaxPrice(val);
    setInputPrice(String(val));
  }

  function handleInput(val: string) {
    setInputPrice(val);
    const num = parseInt(val);
    if (!isNaN(num) && num >= MIN_PRICE && num <= MAX_PRICE) {
      setMaxPrice(num);
    }
  }

  function handleInputBlur() {
    const num = parseInt(inputPrice);
    if (isNaN(num) || num < MIN_PRICE) {
      setMaxPrice(MIN_PRICE);
      setInputPrice(String(MIN_PRICE));
    } else if (num > MAX_PRICE) {
      setMaxPrice(MAX_PRICE);
      setInputPrice(String(MAX_PRICE));
    }
  }

  const sliderPercent = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-8">
        <div className="flex flex-wrap gap-6">

          {/* Left: transmission + fuel */}
          <div className="flex flex-wrap items-center gap-4 flex-1">
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
          </div>

          {/* Right: price slider */}
          <div className="flex items-center gap-4 min-w-[240px]">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Prix max / jour
                </span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={inputPrice}
                    onChange={(e) => handleInput(e.target.value)}
                    onBlur={handleInputBlur}
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    className="w-16 text-center border border-slate-200 rounded-lg px-2 py-1 text-sm font-bold text-blue-600 focus:outline-none focus:border-blue-400"
                  />
                  <span className="text-sm text-slate-500 font-medium">€</span>
                </div>
              </div>
              {/* Slider */}
              <div className="relative h-2 bg-slate-200 rounded-full">
                <div
                  className="absolute left-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-150"
                  style={{ width: `${sliderPercent}%` }}
                />
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={5}
                  value={maxPrice}
                  onChange={(e) => handleSlider(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md transition-all duration-150 pointer-events-none"
                  style={{ left: `calc(${sliderPercent}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>{MIN_PRICE} €</span>
                <span>{MAX_PRICE} €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reset */}
        {hasFilters && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              <X size={14} />
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-500 text-sm">
          <span className="font-bold text-slate-900">{filtered.length}</span> véhicule{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
          {maxPrice < MAX_PRICE && (
            <span className="ml-1 text-blue-500 font-medium">jusqu&apos;à {maxPrice} €/jour</span>
          )}
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
