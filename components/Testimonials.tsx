import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimateOnScroll from './AnimateOnScroll';

const testimonials = [
  {
    name: 'Karim B.',
    location: 'Rabat',
    text: 'Service excellent ! La voiture était impeccable et la livraison à l\'heure. Je recommande vivement FANCHA CAR\'S pour toute location à Rabat.',
    rating: 5,
  },
  {
    name: 'Sara M.',
    location: 'Casablanca',
    text: 'Très bonne expérience, véhicule récent et bien entretenu. L\'équipe est disponible et réactive. J\'ai été agréablement surprise par la qualité du service.',
    rating: 5,
  },
  {
    name: 'Youssef A.',
    location: 'Agdal, Rabat',
    text: 'J\'ai loué une Peugeot 2008 pour un déplacement professionnel. Voiture parfaite, kilométrage illimité, aucun souci. Je reviendrai sans hésiter.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionTitle
            label="Avis clients"
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre priorité."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200">
                <Stars count={t.rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
