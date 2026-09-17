'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quels documents sont nécessaires pour louer un véhicule ?",
    answer: "Vous aurez besoin de votre permis de conduire valide (au moins 1 an d'ancienneté), d'une pièce d'identité nationale (CIN) ou passeport, et d'un acompte ou caution. Pour les étrangers, un permis international est accepté."
  },
  {
    question: "Quel est l'âge minimum pour louer une voiture ?",
    answer: "L'âge minimum est de 21 ans avec un permis de conduire valide depuis au moins 1 an."
  },
  {
    question: "Le kilométrage est-il vraiment illimité ?",
    answer: "Oui, tous nos véhicules sont proposés avec kilométrage illimité. Vous pouvez rouler autant que vous le souhaitez sans frais supplémentaires."
  },
  {
    question: "L'assurance est-elle incluse dans le prix ?",
    answer: "Oui, une assurance tous risques est incluse dans chaque location. Vous partez l'esprit tranquille sans frais cachés."
  },
  {
    question: "Proposez-vous la livraison du véhicule ?",
    answer: "Oui, nous livrons votre véhicule à l'adresse de votre choix à Rabat et dans les villes environnantes. Des frais de livraison peuvent s'appliquer selon la distance (frais d'autoroute inclus le cas échéant). Contactez-nous sur WhatsApp pour un devis."
  },
  {
    question: "Puis-je réserver une voiture pour le même jour ?",
    answer: "Oui, nous sommes disponibles 24h/24 et 7j/7. Contactez-nous sur WhatsApp au +212 6 60 39 10 20 pour vérifier la disponibilité immédiate."
  },
  {
    question: "Comment se passe la réservation ?",
    answer: "La réservation se fait facilement via WhatsApp ou par téléphone. Indiquez-nous le véhicule souhaité, vos dates et nous confirmons rapidement. Un acompte peut être demandé pour valider la réservation."
  },
  {
    question: "Puis-je annuler ma réservation ?",
    answer: "Oui, l'annulation est possible. Contactez-nous dès que possible par WhatsApp. Les conditions d'annulation et de remboursement de l'acompte dépendent du délai de préavis donné."
  },
  {
    question: "Les véhicules sont-ils récents ?",
    answer: "Oui, tous nos véhicules sont des modèles 2026, régulièrement entretenus et vérifiés avant chaque location pour garantir votre sécurité et votre confort."
  },
  {
    question: "Proposez-vous des sièges bébé ou autres accessoires ?",
    answer: "Oui, nous proposons des sièges bébé sur demande pour la sécurité de vos enfants. Un attache-remorque est également disponible sur certains véhicules. Précisez-le lors de votre réservation."
  },
  {
    question: "Où êtes-vous situés ?",
    answer: "Notre agence est située au N°48, Appartement 1, Avenue Fal Ould Oumeir, Agdal, Rabat. Vous pouvez également nous contacter sur WhatsApp et nous organisons la remise du véhicule à votre convenance."
  },
  {
    question: "Acceptez-vous les paiements par carte bancaire ?",
    answer: "Contactez-nous directement par WhatsApp pour connaître les modes de paiement acceptés. Nous nous adaptons à vos besoins."
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base">{question}</span>
        <ChevronDown
          size={20}
          className={`text-blue-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white">
          <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqContent() {
  return (
    <>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
        <h2 className="text-white font-bold text-xl mb-2">Vous n&apos;avez pas trouvé votre réponse ?</h2>
        <p className="text-blue-100 text-sm mb-6">Notre équipe est disponible 24h/24 par WhatsApp pour répondre à toutes vos questions.</p>
        <a
          href="https://wa.me/212660391020?text=Bonjour%20FANCHA%20CAR'S%2C%20j'ai%20une%20question."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors"
        >
          Nous contacter sur WhatsApp
        </a>
      </div>
    </>
  );
}
