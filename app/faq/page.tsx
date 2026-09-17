import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import FaqContent from '@/components/FaqContent';

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | FANCHA CAR'S",
  description: "Toutes les réponses à vos questions sur la location de voiture à Rabat avec FANCHA CAR'S : documents, âge minimum, assurance, livraison, réservation.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Aide"
            title="Questions fréquentes"
            subtitle="Tout ce que vous devez savoir avant de louer votre véhicule."
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FaqContent />
      </div>
    </div>
  );
}
