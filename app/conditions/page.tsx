import { Metadata } from 'next';
import { CheckCircle, Info } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: "Conditions de location | FANCHA CAR'S",
  description: "Consultez les conditions de location de FANCHA CAR'S à Rabat.",
};

const sections = [
  {
    title: 'Âge minimum',
    content: 'Le conducteur doit être âgé de 18 ans minimum.',
  },
  {
    title: 'Permis de conduire',
    content: 'Le conducteur doit être titulaire de son permis de conduire depuis plus d\'un an.',
  },
  {
    title: 'Documents obligatoires',
    items: [
      'Permis de conduire recto-verso',
      'Passeport',
    ],
  },
  {
    title: 'Document optionnel',
    items: [
      'Carte nationale recto-verso',
    ],
  },
  {
    title: 'Caution',
    content: 'Le montant de la caution varie selon le véhicule loué. Elle est versée sur place lors de la remise du véhicule et restituée au retour, en l\'absence de dommages.',
  },
  {
    title: 'Kilométrage',
    content: 'Kilométrage illimité inclus dans toutes nos locations. Aucune restriction kilométrique.',
  },
  {
    title: 'Assurance',
    content: 'Tous nos véhicules sont couverts par une assurance tous risques.',
  },
  {
    title: 'Paiement',
    items: [
      'Espèces',
      'Virement bancaire',
    ],
  },
  {
    title: 'Livraison',
    content: 'La livraison du véhicule est disponible avec supplément. Les frais varient selon la ville de livraison, la distance et les frais d\'autoroute éventuels. Contactez-nous pour obtenir un devis.',
  },
];

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Réglementation"
            title="Conditions de location"
            subtitle="Toutes les informations pour louer un véhicule chez FANCHA CAR'S en toute sérénité."
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 flex gap-4">
          <Info size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm leading-relaxed">
            Pour toute question concernant nos conditions de location, n&apos;hésitez pas à nous contacter
            directement par WhatsApp au <strong>+212 6 60 39 10 20</strong>. Notre équipe est disponible 24h/24.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
              {section.content && (
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              )}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
