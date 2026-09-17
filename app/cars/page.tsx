import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import CarsFilter from '@/components/CarsFilter';

export const metadata: Metadata = {
  title: "Nos voitures | FANCHA CAR'S",
  description: 'Découvrez notre flotte de véhicules 2026 disponibles à la location à Rabat.',
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-[#05080f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Notre flotte"
            title="Nos véhicules disponibles"
            subtitle="Tous nos véhicules sont des modèles 2026, avec kilométrage illimité et assurance tous risques."
            light
          />
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CarsFilter />
      </div>
    </div>
  );
}
