// context/CurrencyContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Exchange rates relative to USD (base currency)
// In production, fetch from an API like exchangerate-api.com
const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  GHS: 11.5,
  JPY: 151.2,
  CAD: 1.36,
  AUD: 1.52,
  CHF: 0.90,
  CNY: 7.24,
  INR: 83.5,
};

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "GHS", symbol: '₵',  name: "Ghana Cedis" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
]

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Load saved currency from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("preferredCurrency");
    if (saved && currencies.some(c => c.code === saved)) {
      setSelectedCurrency(saved);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("preferredCurrency", selectedCurrency);
  }, [selectedCurrency]);

  const convertPrice = (usdPrice) => {
    const rate = EXCHANGE_RATES[selectedCurrency] || 1;
    return usdPrice * rate;
  };

  const formatPrice = (usdPrice, options = {}) => {
    const converted = convertPrice(usdPrice);
    const currency = currencies.find(c => c.code === selectedCurrency);
    const symbol = currency?.symbol || "$";

    // For JPY, no decimal places typically
    const maximumFractionDigits = selectedCurrency === "JPY" ? 0 : 0;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits,
      ...options,
    }).format(converted);
  };

  const getCurrencySymbol = () => {
    return currencies.find(c => c.code === selectedCurrency)?.symbol || "$";
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        convertPrice,
        formatPrice,
        getCurrencySymbol,
        currencies,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}