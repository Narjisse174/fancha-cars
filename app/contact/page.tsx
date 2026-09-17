import { Metadata } from 'next';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact | FANCHA CAR'S",
  description: "Contactez FANCHA CAR'S à Rabat. Disponibles 24h/24 par WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#05080f] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nous joindre"
            title="Contact"
            subtitle="Notre équipe est disponible 24h/24, 7j/7 pour répondre à toutes vos questions."
            light
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-5">FANCHA CAR&apos;S</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Adresse</p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      N°48, Appartement 1<br />
                      Avenue Fal Ould Oumeir<br />
                      Agdal, Rabat, Maroc
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">WhatsApp / Téléphone</p>
                    <a href="tel:+212660391020" className="text-slate-700 text-sm hover:text-blue-500 transition-colors font-medium">
                      +212 6 60 39 10 20
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Horaires</p>
                    <p className="text-slate-700 text-sm font-medium">Ouvert 24h/24 – 7j/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/fancha_cars"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 text-sm hover:text-blue-500 transition-colors font-medium"
                    >
                      @fancha_cars
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+212660391020"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <Phone size={22} />
                Appeler le +212 6 60 39 10 20
              </a>
              <a
                href="https://wa.me/212660391020?text=Bonjour%20FANCHA%20CAR'S%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20v%C3%A9hicules."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-green-500/20"
              >
                <MessageCircle size={22} />
                Nous contacter sur WhatsApp
              </a>
              <a
                href="https://www.instagram.com/fancha_cars"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold py-4 rounded-2xl transition-all duration-200"
              >
                <InstagramIcon size={22} />
                Nous suivre sur Instagram
              </a>
              <Link
                href="/booking"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all duration-200"
              >
                Réserver un véhicule
              </Link>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200">
              <h3 className="font-bold text-slate-900">Notre emplacement</h3>
              <p className="text-slate-500 text-sm mt-1">Agdal, Rabat</p>
            </div>
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0!2d-6.8498!3d33.9909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8717b4b0b3%3A0x0!2sAvenue+Fal+Ould+Oumeir%2C+Agdal%2C+Rabat!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 border-t border-slate-100">
              <a
                href="https://maps.google.com/?q=Avenue+Fal+Ould+Oumeir+Agdal+Rabat+Maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
              >
                <MapPin size={16} />
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
