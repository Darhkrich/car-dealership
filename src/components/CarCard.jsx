// components/CarCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Calendar, Cog, Sparkles, Zap, Award } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
// Badge variant styling map
const badgeStyles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-slate-800 text-white",
  success: "bg-emerald-600 text-white",
  warning: "bg-amber-500 text-white",
  danger: "bg-red-600 text-white",
  default: "bg-gray-600 text-white",
};

export default function CarCard({ car }) {
  const { formatPrice } = useCurrency(); // <-- ADD HOOK

  if (!car) return null;
  // Destructure with fallbacks for backward compatibility
  const {
    id,
    make,
    model,
    year,
    price,
    mileage,
    mileageUnit = "miles",
    fuel,
    transmission,
    isCertifiedPreOwned = false,
    badge,
    images,
    image, // fallback for old data structure
  } = car;

  const formattedPrice = formatPrice(price); // <-- USE formatPrice

  const primaryImage = images?.primary || image || "/placeholder-car.jpg";
  const badgeData = badge || (car.badge ? { text: car.badge, variant: "primary" } : null);
 
  const formattedMileage = typeof mileage === "number" 
    ? mileage.toLocaleString("en-US") 
    : mileage;

  return (
    <article className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gray-100">
        {/* Badge */}
        {badgeData && (
          <span
            className={`absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md ${
              badgeStyles[badgeData.variant] || badgeStyles.default
            }`}
          >
            {badgeData.text}
          </span>
        )}

        {/* Certified Badge */}
        {isCertifiedPreOwned && (
          <span className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            CPO
          </span>
        )}

        <Image
          src={primaryImage}
          alt={`${make} ${model} - ${year}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          priority={false}
        />

        {/* Gradient overlay for price readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Price overlay on hover (mobile shows always) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
            {formattedPrice}
          </p>
          <p className="text-white/80 text-sm">
            {make} {model}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 sm:p-5">
        {/* Title and Year */}
        <div className="mb-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
            {make} {model}
          </h3>
          <div className="flex items-center gap-2 text-sm text-slate-500 mt-0.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{year}</span>
            <span className="text-slate-300">•</span>
            <Cog className="w-3.5 h-3.5" />
            <span className="truncate">{transmission}</span>
          </div>
        </div>

        {/* Price (mobile visible, desktop hidden because hover shows) */}
        <p className="text-xl font-bold text-slate-900 mb-3 sm:hidden">
          {formattedPrice}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Gauge className="w-4 h-4 text-blue-600 mb-1" />
            <span className="text-xs font-medium text-slate-700">
              {formattedMileage}
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
              {mileageUnit}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Fuel className="w-4 h-4 text-blue-600 mb-1" />
            <span className="text-xs font-medium text-slate-700">{fuel}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
              Fuel
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            {isCertifiedPreOwned ? (
              <Award className="w-4 h-4 text-blue-600 mb-1" />
            ) : (
              <Sparkles className="w-4 h-4 text-blue-600 mb-1" />
            )}
            <span className="text-xs font-medium text-slate-700">
              {isCertifiedPreOwned ? "Certified" : "Premium"}
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
              Quality
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/inventory/${id}`}
          className="block w-full mt-3 text-center bg-slate-50 text-slate-900 border border-slate-200 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          aria-label={`View details for ${make} ${model}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}