import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
