import { Metadata } from 'next';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: "À propos | FANCHA CAR'S",
  description: "Découvrez FANCHA CAR'S, agence de location de voitures à Agdal, Rabat.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Qui sommes-nous"
            title="À propos de FANCHA CAR'S"
            subtitle="Une agence locale, un service premium."
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Notre agence</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                FANCHA CAR&apos;S est une agence de location de voitures située à Agdal, Rabat. Nous proposons une sélection de véhicules récents afin de répondre aux besoins de déplacement de nos clients à Rabat et au Maroc.
              </p>
              <p>
                Notre engagement est de vous offrir des véhicules en parfait état, récents et bien équipés, à des tarifs clairs et transparents. Kilométrage illimité et assurance tous risques sont inclus dans chaque location.
              </p>
              <p>
                Disponibles 24h/24 et 7j/7, nous sommes à votre écoute à tout moment pour faciliter vos déplacements.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Informations pratiques</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">Adresse</p>
                    <p className="text-slate-500 text-sm">N°48, Appartement 1, Avenue Fal Ould Oumeir, Agdal, Rabat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">Contact</p>
                    <a href="tel:+212660391020" className="text-slate-500 text-sm hover:text-blue-500 transition-colors">
                      +212 6 60 39 10 20
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">Disponibilité</p>
                    <p className="text-slate-500 text-sm">24h/24 – 7j/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-6">
              <h3 className="font-bold text-slate-950 text-lg mb-2">Prêt à réserver ?</h3>
              <p className="text-slate-800 text-sm mb-4">
                Parcourez notre flotte et réservez votre véhicule en quelques clics.
              </p>
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 bg-[#05080f] hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Voir nos voitures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
