import { Metadata } from 'next';
import { Car, Truck, Baby, Wrench, Gauge, Shield, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: "Nos services | FANCHA CAR'S",
  description: "Découvrez tous les services proposés par FANCHA CAR'S : location, livraison, siège bébé, assurance et plus.",
};

const services = [
  {
    icon: Car,
    title: 'Location de véhicules',
    description:
      'Nous proposons une sélection de véhicules récents (modèles 2026) à Rabat. Citadines, berlines et SUV sont disponibles pour tous vos besoins de déplacement.',
  },
  {
    icon: Truck,
    title: 'Livraison du véhicule',
    description:
      'Nous livrons votre véhicule à l\'adresse de votre choix. Les frais de livraison varient selon la ville, la distance et les éventuels frais d\'autoroute. Contactez-nous pour un devis.',
  },
  {
    icon: Baby,
    title: 'Siège bébé',
    description:
      'Pour la sécurité de vos enfants, nous mettons à disposition des sièges bébé. Disponible sur demande lors de la réservation.',
  },
  {
    icon: Wrench,
    title: 'Attache-remorque',
    description:
      'Disponible sur certains véhicules selon vos besoins de transport. Renseignez-vous lors de votre réservation.',
  },
  {
    icon: Gauge,
    title: 'Kilométrage illimité',
    description:
      'Tous nos véhicules sont proposés avec kilométrage illimité. Roulez sereinement, sans compteur à surveiller.',
  },
  {
    icon: Shield,
    title: 'Assurance tous risques',
    description:
      'Chaque véhicule loué est couvert par une assurance tous risques, incluse dans le prix de location.',
  },
  {
    icon: Clock,
    title: 'Disponibilité 24h/24',
    description:
      'Notre équipe est joignable à toute heure, 7 jours sur 7, par WhatsApp au +212 6 60 39 10 20.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#05080f] pt-20">
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Ce que nous proposons"
            title="Nos services"
            subtitle="FANCHA CAR'S vous propose un service complet pour répondre à tous vos besoins de mobilité à Rabat et au Maroc."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-200 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">
              Besoin d&apos;un service particulier ?
            </h2>
            <p className="text-slate-800 mb-6">
              Contactez-nous directement par WhatsApp et nous adapterons notre service à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#05080f] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
            >
              Nous contacter
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
