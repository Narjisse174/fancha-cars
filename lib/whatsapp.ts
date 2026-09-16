export const WHATSAPP_NUMBER = '+212660391020';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`;
}

export function buildCarReservationMessage(params: {
  carName: string;
  transmission: string;
  fuel: string;
  pricePerDay: number;
  startDate?: string;
  endDate?: string;
}): string {
  const { carName, transmission, fuel, pricePerDay, startDate, endDate } = params;
  return `Bonjour FANCHA CAR'S,

Je souhaite obtenir des informations / réserver :

Véhicule : ${carName}
Transmission : ${transmission}
Carburant : ${fuel}
Prix : ${pricePerDay} €/jour

Date de départ : ${startDate || ''}
Date de retour : ${endDate || ''}

Merci.`;
}

export function buildGeneralContactMessage(): string {
  return `Bonjour FANCHA CAR'S,

Je souhaite obtenir des informations sur vos véhicules disponibles.

Merci.`;
}
