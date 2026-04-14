// components/CurrencySelector.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { ChevronDown, Globe } from "lucide-react";

export default function CurrencySelector() {
  const { selectedCurrency, setSelectedCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = currencies.find(c => c.code === selectedCurrency);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        aria-label="Select currency"
      >
        <Globe className="w-4 h-4" />
        <span>{selected?.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Select Currency
          </div>
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                setSelectedCurrency(currency.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition flex items-center justify-between ${
                selectedCurrency === currency.code
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-slate-700"
              }`}
            >
              <span>
                {currency.symbol} {currency.code}
              </span>
              <span className="text-slate-400 text-xs">{currency.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}