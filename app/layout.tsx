import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const BASE_URL = 'https://fancha-cars.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Location de voiture Rabat | FANCHA CAR'S",
  description:
    "Location de voitures à Rabat avec FANCHA CAR'S. Véhicules récents 2026, kilométrage illimité, assurance tous risques et service disponible 24h/24.",
  keywords: 'location voiture Rabat, location voiture Maroc, FANCHA CARS, location auto Agdal',
  openGraph: {
    title: "Location de voiture Rabat | FANCHA CAR'S",
    description:
      "Location de voitures à Rabat avec FANCHA CAR'S. Véhicules récents 2026, kilométrage illimité, assurance tous risques et service disponible 24h/24.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "FANCHA CAR'S",
    images: [{ url: '/cars/hero-bg.png', width: 1200, height: 630, alt: "FANCHA CAR'S — Location de voiture Rabat" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Location de voiture Rabat | FANCHA CAR'S",
    description: "Location de voitures à Rabat avec FANCHA CAR'S. Véhicules récents 2026, kilométrage illimité.",
    images: ['/cars/hero-bg.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'CarRental',
  name: "FANCHA CAR'S",
  description: "Agence de location de voitures à Agdal, Rabat. Véhicules récents 2026, kilométrage illimité, assurance tous risques.",
  url: BASE_URL,
  telephone: '+212660391020',
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '€€',
  image: `${BASE_URL}/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: "N°48, Appartement 1, Avenue Fal Ould Oumeir",
    addressLocality: 'Agdal, Rabat',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.9909,
    longitude: -6.8498,
  },
  sameAs: ['https://www.instagram.com/fancha_cars'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId="G-V6GF70MDTC" />
    </html>
  );
}
