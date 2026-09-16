'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Upload, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { cars, getCarById } from '@/data/cars';
import { BookingFormData, BookingFormErrors } from '@/types';
import { calculateDays, calculateTotalPrice, getTodayString, getTomorrowString, formatDate } from '@/lib/utils';
import { buildWhatsAppUrl, buildCarReservationMessage } from '@/lib/whatsapp';
import PriceDisplay from './PriceDisplay';

const initialForm: BookingFormData = {
  carId: '',
  startDate: getTodayString(),
  endDate: getTomorrowString(),
  deliveryCity: '',
  firstName: '',
  lastName: '',
  phone: '',
  whatsapp: '',
  email: '',
  paymentMethod: 'cash',
  needsDelivery: false,
  deliveryAddress: '',
  drivingLicenseFront: null,
  drivingLicenseBack: null,
  passport: null,
  nationalIdFront: null,
  nationalIdBack: null,
};

interface FileUploadProps {
  label: string;
  required?: boolean;
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

function FileUpload({ label, required, file, onChange, error }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 border-dashed transition-all duration-200 text-left ${
          file
            ? 'border-green-400 bg-green-50'
            : error
            ? 'border-red-400 bg-red-50'
            : 'border-slate-200 hover:border-blue-500 bg-white hover:bg-blue-50/30'
        }`}
      >
        {file ? (
          <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
        ) : (
          <Upload size={20} className="text-slate-400 flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-800">
            {label} {required && <span className="text-red-500">*</span>}
          </p>
          <p className="text-xs text-slate-500 truncate">
            {file ? file.name : 'Cliquez pour sélectionner un fichier'}
          </p>
        </div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<BookingFormData>({
    ...initialForm,
    carId: searchParams.get('car') ?? '',
    startDate: searchParams.get('start') ?? getTodayString(),
    endDate: searchParams.get('end') ?? getTomorrowString(),
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedCar = form.carId ? getCarById(form.carId) : null;
  const days = calculateDays(form.startDate, form.endDate);
  const total = selectedCar ? calculateTotalPrice(selectedCar.pricePerDay, days) : 0;

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof BookingFormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: BookingFormErrors = {};
    if (!form.carId) newErrors.carId = 'Veuillez sélectionner un véhicule.';
    if (!form.startDate) newErrors.startDate = 'La date de départ est obligatoire.';
    if (!form.endDate) newErrors.endDate = 'La date de retour est obligatoire.';
    if (form.startDate && form.endDate && form.endDate <= form.startDate)
      newErrors.endDate = 'La date de retour doit être après la date de départ.';
    if (!form.firstName.trim()) newErrors.firstName = 'Le prénom est obligatoire.';
    if (!form.lastName.trim()) newErrors.lastName = 'Le nom est obligatoire.';
    if (!form.phone.trim()) newErrors.phone = 'Le téléphone est obligatoire.';
    if (!form.drivingLicenseFront) newErrors.drivingLicenseFront = 'Le permis recto est obligatoire.';
    if (!form.drivingLicenseBack) newErrors.drivingLicenseBack = 'Le permis verso est obligatoire.';
    if (!form.passport) newErrors.passport = 'Le passeport est obligatoire.';
    if (form.needsDelivery && !form.deliveryAddress.trim())
      newErrors.deliveryAddress = 'L\'adresse de livraison est obligatoire.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleWhatsApp() {
    if (!validate()) return;
    const car = getCarById(form.carId);
    if (!car) return;
    const message = buildCarReservationMessage({
      carName: car.fullName,
      transmission: car.transmission,
      fuel: car.fuel,
      pricePerDay: car.pricePerDay,
      startDate: formatDate(form.startDate),
      endDate: formatDate(form.endDate),
    });
    const fullMsg = `${message}\n\nNom : ${form.lastName} ${form.firstName}\nTéléphone : ${form.phone}\nEmail : ${form.email}${form.needsDelivery ? `\nLivraison : ${form.deliveryAddress}` : ''}`;
    window.open(buildWhatsAppUrl(fullMsg), '_blank');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Demande envoyée !</h2>
        <p className="text-slate-500 text-lg mb-8">
          Votre message a été transmis sur WhatsApp. Nous vous recontacterons très rapidement.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-blue-600 hover:bg-blue-500 text-slate-950 font-bold px-8 py-3 rounded-full transition-colors"
        >
          Nouvelle réservation
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Vehicle selection */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 text-slate-950 rounded-full text-xs font-bold flex items-center justify-center">1</span>
          Choisissez votre véhicule
        </h2>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Véhicule <span className="text-red-500">*</span>
          </label>
          <select
            value={form.carId}
            onChange={(e) => update('carId', e.target.value)}
            className={`w-full border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm ${errors.carId ? 'border-red-400' : 'border-slate-200'}`}
          >
            <option value="">Sélectionnez un véhicule</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.fullName} {car.year} — {car.transmission} — {car.fuel} — {car.pricePerDay} €/jour
              </option>
            ))}
          </select>
          {errors.carId && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12}/>{errors.carId}</p>}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Date de départ <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={form.startDate}
              min={getTodayString()}
              onChange={(e) => update('startDate', e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm ${errors.startDate ? 'border-red-400' : 'border-slate-200'}`}
            />
            {errors.startDate && <p className="text-red-500 text-xs mt-1.5">{errors.startDate}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Date de retour <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={form.endDate}
              min={form.startDate || getTodayString()}
              onChange={(e) => update('endDate', e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm ${errors.endDate ? 'border-red-400' : 'border-slate-200'}`}
            />
            {errors.endDate && <p className="text-red-500 text-xs mt-1.5">{errors.endDate}</p>}
          </div>
        </div>

        {/* Price summary */}
        {selectedCar && days > 0 && (
          <div className="mt-5 bg-slate-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>{days} jour{days > 1 ? 's' : ''} × {selectedCar.pricePerDay} €</span>
              <span className="font-semibold">{total} €</span>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Caution (sur place)</span>
              <span>{selectedCar.deposit} €</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-slate-200 pt-2">
              <span>Total location estimatif</span>
              <PriceDisplay price={total} period="" size="sm" />
            </div>
          </div>
        )}
      </div>

      {/* Personal info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 text-slate-950 rounded-full text-xs font-bold flex items-center justify-center">2</span>
          Vos informations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { key: 'lastName', label: 'Nom', required: true },
            { key: 'firstName', label: 'Prénom', required: true },
            { key: 'phone', label: 'Téléphone', required: true },
            { key: 'whatsapp', label: 'WhatsApp', required: false },
            { key: 'email', label: 'Email', required: false },
          ].map(({ key, label, required }) => (
            <div key={key} className={key === 'email' ? 'sm:col-span-2' : ''}>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={key === 'email' ? 'email' : 'text'}
                value={form[key as keyof BookingFormData] as string}
                onChange={(e) => update(key as keyof BookingFormData, e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm ${errors[key as keyof BookingFormErrors] ? 'border-red-400' : 'border-slate-200'}`}
                placeholder={label}
              />
              {errors[key as keyof BookingFormErrors] && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors[key as keyof BookingFormErrors]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Payment */}
        <div className="mt-4">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Mode de paiement souhaité
          </label>
          <div className="flex gap-4">
            {[
              { value: 'cash', label: 'Espèces' },
              { value: 'transfer', label: 'Virement bancaire' },
            ].map(({ value, label }) => (
              <label
                key={value}
                className={`flex items-center gap-3 flex-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  form.paymentMethod === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-200'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={value}
                  checked={form.paymentMethod === value}
                  onChange={() => update('paymentMethod', value as 'cash' | 'transfer')}
                  className="accent-blue-500"
                />
                <span className="text-sm font-medium text-slate-800">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 text-slate-950 rounded-full text-xs font-bold flex items-center justify-center">3</span>
          Livraison
        </h2>
        <label className="flex items-center gap-3 cursor-pointer mb-4">
          <input
            type="checkbox"
            checked={form.needsDelivery}
            onChange={(e) => update('needsDelivery', e.target.checked)}
            className="w-5 h-5 accent-blue-500 rounded"
          />
          <span className="text-sm font-medium text-slate-800">
            Je souhaite une livraison du véhicule
          </span>
        </label>
        {form.needsDelivery && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Ville / Adresse de livraison <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.deliveryAddress}
                onChange={(e) => update('deliveryAddress', e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm ${errors.deliveryAddress ? 'border-red-400' : 'border-slate-200'}`}
                placeholder="Ex : Hay Riad, Rabat"
              />
              {errors.deliveryAddress && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.deliveryAddress}
                </p>
              )}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm">
                ℹ️ Les frais de livraison varient selon la ville, la distance et les frais d&apos;autoroute éventuels. Ils vous seront communiqués lors de la confirmation.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Documents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 text-slate-950 rounded-full text-xs font-bold flex items-center justify-center">4</span>
          Documents nécessaires
        </h2>
        <p className="text-slate-500 text-sm mb-5">
          Sélectionnez vos documents. Ils seront présentés lors de la remise des clés.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FileUpload
              label="Permis de conduire RECTO"
              required
              file={form.drivingLicenseFront}
              onChange={(f) => update('drivingLicenseFront', f)}
              error={errors.drivingLicenseFront}
            />
            <FileUpload
              label="Permis de conduire VERSO"
              required
              file={form.drivingLicenseBack}
              onChange={(f) => update('drivingLicenseBack', f)}
              error={errors.drivingLicenseBack}
            />
          </div>
          <FileUpload
            label="Passeport"
            required
            file={form.passport}
            onChange={(f) => update('passport', f)}
            error={errors.passport}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FileUpload
              label="Carte nationale RECTO"
              file={form.nationalIdFront}
              onChange={(f) => update('nationalIdFront', f)}
            />
            <FileUpload
              label="Carte nationale VERSO"
              file={form.nationalIdBack}
              onChange={(f) => update('nationalIdBack', f)}
            />
          </div>
        </div>

        <div className="mt-5 bg-slate-50 rounded-xl p-4 space-y-1.5">
          <p className="text-xs font-semibold text-slate-700">Récapitulatif des documents :</p>
          <p className="text-xs text-slate-600">✅ Permis de conduire recto-verso — <strong>Obligatoire</strong></p>
          <p className="text-xs text-slate-600">✅ Passeport — <strong>Obligatoire</strong></p>
          <p className="text-xs text-slate-500">⬜ Carte nationale recto-verso — Optionnelle</p>
          <p className="text-xs text-slate-400 mt-2 italic">
            Note : Les fichiers sélectionnés sont préparés pour la soumission. Une connexion backend est nécessaire pour leur transmission sécurisée.
          </p>
        </div>
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-green-500/20"
      >
        <MessageCircle size={22} />
        Envoyer ma demande de réservation via WhatsApp
      </button>
      <p className="text-center text-slate-400 text-xs">
        Votre demande sera transmise directement à notre équipe sur WhatsApp.
      </p>
    </div>
  );
}
