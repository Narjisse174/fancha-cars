import { Metadata } from 'next';
import { Suspense } from 'react';
import SectionTitle from '@/components/SectionTitle';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: "Réservation | FANCHA CAR'S",
  description: "Réservez votre véhicule en ligne avec FANCHA CAR'S à Rabat.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Réservation"
            title="Réservez votre véhicule"
            subtitle="Complétez le formulaire ci-dessous et notre équipe vous confirmera la disponibilité rapidement."
            light
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<div className="text-slate-400">Chargement...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
