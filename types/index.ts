export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  fullName: string;
  year: number;
  transmission: 'Manuelle' | 'Automatique';
  fuel: 'Diesel' | 'Essence' | 'Hybride';
  pricePerDay: number;
  deposit: number;
  mileage: string;
  insurance: string;
  image: string;
  images: string[];
  available: boolean;
  category: 'citadine' | 'berline' | 'suv';
  features: string[];
}

export interface BookingFormData {
  carId: string;
  startDate: string;
  endDate: string;
  deliveryCity: string;
  firstName: string;
  lastName: string;
  phone: string;
  whatsapp: string;
  email: string;
  paymentMethod: 'cash' | 'transfer';
  needsDelivery: boolean;
  deliveryAddress: string;
  drivingLicenseFront: File | null;
  drivingLicenseBack: File | null;
  passport: File | null;
  nationalIdFront: File | null;
  nationalIdBack: File | null;
}

export interface BookingFormErrors {
  carId?: string;
  startDate?: string;
  endDate?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  drivingLicenseFront?: string;
  drivingLicenseBack?: string;
  passport?: string;
  deliveryAddress?: string;
}
