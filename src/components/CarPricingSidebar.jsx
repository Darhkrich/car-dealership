// components/CarPricingSidebar.jsx
"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { Shield, MapPin, Wrench } from "lucide-react";

export default function CarPricingSidebar({ car }) {
  const { formatPrice } = useCurrency();

  const formattedPrice = formatPrice(car.price);
  const msrpFormatted = car.msrp ? formatPrice(car.msrp) : null;
  const savings = car.msrp ? car.msrp - car.price : null;
  const monthlyEstimate = Math.round(car.price * 0.016);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 sticky top-24">
      <div className="mb-6">
        <p className="text-slate-500 text-sm font-medium mb-1">No-Haggle Price</p>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {formattedPrice}
          </h2>
          {msrpFormatted && savings > 0 && (
            <span className="text-sm text-slate-400 line-through">{msrpFormatted}</span>
          )}
        </div>
        {savings > 0 && (
          <p className="text-emerald-600 text-sm font-medium mt-1">
            Save {formatPrice(savings)} off MSRP
          </p>
        )}
        <p className="text-blue-600 text-sm mt-3 font-medium">
          Est. {formatPrice(monthlyEstimate)}/mo with 10% down
        </p>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-base sm:text-lg transition shadow-lg shadow-blue-200">
          Confirm Availability
        </button>
        <button className="w-full bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50 py-4 rounded-xl font-bold text-base sm:text-lg transition">
          Schedule Test Drive
        </button>
        <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-medium text-sm transition">
          Get Pre-Approved Financing
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900 text-sm">Free CarFax Report</p>
            <p className="text-slate-500 text-xs">Clean title, no accidents reported.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900 text-sm">Location</p>
            <p className="text-slate-500 text-xs">{car.location || "Prestige Motors, Beverly Hills"}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Wrench className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900 text-sm">Warranty</p>
            <p className="text-slate-500 text-xs">
              {car.isCertifiedPreOwned
                ? "Extended CPO warranty included"
                : "Remaining factory warranty"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}