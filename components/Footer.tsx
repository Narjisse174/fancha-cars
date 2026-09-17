import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/cars', label: 'Nos voitures' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/conditions', label: 'Conditions' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="FANCHA CAR'S" fill className="object-contain" />
              </div>
              <span className="text-white font-bold text-lg tracking-wider">
                FANCHA CAR&apos;S
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agence de location de voitures à Agdal, Rabat. Véhicules récents 2026, kilométrage illimité et service disponible 24h/24.
            </p>
            <a
              href="https://www.instagram.com/fancha_cars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              <InstagramIcon size={16} />
              @fancha_cars
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  N°48, Appartement 1<br />
                  Avenue Fal Ould Oumeir<br />
                  Agdal, Rabat, Maroc
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+212660391020"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold underline underline-offset-2"
                >
                  +212 6 60 39 10 20
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Ouvert 24h/24 – 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 FANCHA CAR&apos;S. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/conditions" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">
              Conditions de location
            </Link>
            <Link href="/politique-de-confidentialite" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">
              Politique de confidentialité
            </Link>
            <Link href="/a-propos" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
