import Link from 'next/link';
import { ChevronRight, Star, Car, Gauge, Shield, Clock, Truck, Baby, Wrench } from 'lucide-react';
import Hero from '@/components/Hero';
import CarGrid from '@/components/CarGrid';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Testimonials from '@/components/Testimonials';
import { cars } from '@/data/cars';

const features = [
  { icon: Car, title: 'Véhicules récents', description: 'Tous les véhicules proposés sont des modèles 2026, soigneusement entretenus.' },
  { icon: Gauge, title: 'Kilométrage illimité', description: 'Roulez sereinement sans avoir à compter chaque kilomètre. Aucune restriction.' },
  { icon: Shield, title: 'Assurance tous risques', description: "Une couverture complète pour votre location, pour partir l'esprit tranquille." },
  { icon: Clock, title: 'Disponible 24h/24', description: 'Notre équipe est disponible à toute heure pour répondre à vos besoins.' },
  { icon: Truck, title: 'Livraison disponible', description: 'Nous livrons votre véhicule selon votre ville et disponibilités.' },
  { icon: Star, title: 'Service premium', description: 'Un accompagnement personnalisé du début à la fin de votre location.' },
];

const services = [
  { icon: Car, title: 'Location de véhicules', description: 'Large choix de véhicules récents disponibles à Rabat.' },
  { icon: Truck, title: 'Livraison du véhicule', description: "Livraison possible selon la ville et les frais d'autoroute." },
  { icon: Baby, title: 'Siège bébé', description: 'Disponible sur demande pour la sécurité de vos enfants.' },
  { icon: Wrench, title: 'Attache-remorque', description: 'Disponible sur certains véhicules selon vos besoins.' },
  { icon: Gauge, title: 'Kilométrage illimité', description: 'Aucune restriction kilométrique sur tous nos véhicules.' },
  { icon: Shield, title: 'Assurance tous risques', description: 'Couverture complète incluse dans chaque location.' },
  { icon: Clock, title: 'Disponibilité 24h/24', description: 'Joignez-nous à tout moment, 7 jours sur 7.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why choose us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle
              label="Nos engagements"
              title="Pourquoi choisir FANCHA CAR'S ?"
              subtitle="Une expérience de location conçue pour votre confort et votre tranquillité d'esprit."
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.08}>
                <FeatureCard {...feature} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle
              label="Notre flotte"
              title="Nos véhicules disponibles"
              subtitle="Des modèles 2026 pour tous vos déplacements, avec kilométrage illimité et assurance tous risques."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <CarGrid cars={cars} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg"
              >
                Voir tous les véhicules
                <ChevronRight size={18} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle
              label="Ce que nous offrons"
              title="Nos services"
              subtitle="Tout ce dont vous avez besoin pour une location sereine et confortable."
              light
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.07} direction={i % 2 === 0 ? 'left' : 'right'}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <AnimateOnScroll>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à prendre la route ?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Réservez dès maintenant et profitez d&apos;un service premium à Rabat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl"
              >
                Réserver maintenant
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/cars"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                Voir nos voitures
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
