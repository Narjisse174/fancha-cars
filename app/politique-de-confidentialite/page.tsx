import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: "Politique de confidentialité | FANCHA CAR'S",
  description: "Politique de confidentialité de FANCHA CAR'S, agence de location de voitures à Rabat.",
  robots: { index: false, follow: false },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Légal"
            title="Politique de confidentialité"
            subtitle="Dernière mise à jour : septembre 2026"
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Responsable du traitement</h2>
            <p className="text-slate-600 leading-relaxed">
              FANCHA CAR&apos;S, agence de location de voitures située au N°48, Appartement 1, Avenue Fal Ould Oumeir, Agdal, Rabat, Maroc.
              Contact : <a href="tel:+212660391020" className="text-blue-600 hover:underline">+212 6 60 39 10 20</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Données collectées</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Dans le cadre de nos services de location, nous pouvons collecter les données suivantes :
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
              <li>Nom et prénom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse e-mail (si fournie)</li>
              <li>Dates et informations de réservation</li>
              <li>Copie du permis de conduire et de la CIN (pour la formalisation du contrat)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Finalité du traitement</h2>
            <p className="text-slate-600 leading-relaxed">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2 mt-3">
              <li>Traiter et confirmer vos demandes de réservation</li>
              <li>Établir le contrat de location</li>
              <li>Vous contacter concernant votre réservation</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Conservation des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Vos données personnelles sont conservées pendant la durée nécessaire à l&apos;exécution du contrat et dans le respect des obligations légales applicables au Maroc.
              Les documents d&apos;identité et de conduite sont détruits après la fin de la location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Partage des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers.
              Vos données ne sont transmises qu&apos;aux personnes habilitées au sein de FANCHA CAR&apos;S dans le cadre de votre location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Vos droits</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Conformément à la loi marocaine n°09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à l&apos;effacement</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous par WhatsApp au{' '}
              <a href="tel:+212660391020" className="text-blue-600 hover:underline">+212 6 60 39 10 20</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site web peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Sécurité</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation ou toute destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Modifications</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prennent effet dès leur publication sur ce site.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
