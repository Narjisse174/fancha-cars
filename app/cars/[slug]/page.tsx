import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CarDetails from '@/components/CarDetails';
import { cars, getCarBySlug } from '@/data/cars';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Véhicule introuvable | FANCHA CAR'S" };
  return {
    title: `${car.fullName} ${car.year} – ${car.pricePerDay} €/jour | FANCHA CAR'S`,
    description: `Louez le ${car.fullName} ${car.year} à Rabat. ${car.transmission}, ${car.fuel}, kilométrage illimité. ${car.pricePerDay} €/jour.`,
  };
}

export default async function CarPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();
  return <CarDetails car={car} />;
}
