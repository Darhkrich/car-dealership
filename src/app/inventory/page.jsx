// app/inventory/page.js
"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import { cars, filterCars, getMakes } from "@/utils/mockData";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  Filter,
  LayoutGrid,
  List,
} from "lucide-react";

// Filter configuration
const FUEL_TYPES = ["All", "Petrol", "Diesel", "Electric", "Hybrid"];
const TRANSMISSIONS = ["All", "Automatic", "Manual"];
const YEARS = ["All", "2024", "2023", "2022", "2021", "2020"];
const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $50k", min: 0, max: 50000 },
  { label: "$50k - $75k", min: 50000, max: 75000 },
  { label: "$75k - $100k", min: 75000, max: 100000 },
  { label: "$100k - $150k", min: 100000, max: 150000 },
  { label: "Over $150k", min: 150000, max: Infinity },
];
const SORT_OPTIONS = [
  { label: "Newest First", value: "year-desc" },
  { label: "Oldest First", value: "year-asc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Mileage: Low to High", value: "mileage-asc" },
  { label: "Mileage: High to Low", value: "mileage-desc" },
];

export default function Inventory() {
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedCPO, setSelectedCPO] = useState(false);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list (optional)

  const makes = ["All", ...getMakes()];

  // Filter and sort cars
  const filteredCars = useMemo(() => {
    let filtered = filterCars({
      make: selectedMake === "All" ? undefined : selectedMake,
      minPrice: selectedPriceRange.min,
      maxPrice: selectedPriceRange.max === Infinity ? undefined : selectedPriceRange.max,
      minYear: selectedYear === "All" ? undefined : parseInt(selectedYear),
      maxYear: selectedYear === "All" ? undefined : parseInt(selectedYear),
      fuel: selectedFuel === "All" ? undefined : selectedFuel,
      transmission: selectedTransmission === "All" ? undefined : selectedTransmission,
      isCertifiedPreOwned: selectedCPO ? true : undefined,
    });

    // Apply search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (car) =>
          car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.trim?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (sortBy.value) {
        case "year-desc":
          return b.year - a.year;
        case "year-asc":
          return a.year - b.year;
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "mileage-asc":
          return a.mileage - b.mileage;
        case "mileage-desc":
          return b.mileage - a.mileage;
        default:
          return 0;
      }
    });
  }, [
    searchTerm,
    selectedMake,
    selectedPriceRange,
    selectedYear,
    selectedFuel,
    selectedTransmission,
    selectedCPO,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedMake("All");
    setSelectedPriceRange(PRICE_RANGES[0]);
    setSelectedYear("All");
    setSelectedFuel("All");
    setSelectedTransmission("All");
    setSelectedCPO(false);
    setSortBy(SORT_OPTIONS[0]);
  };

  const activeFiltersCount = [
    searchTerm && 1,
    selectedMake !== "All" && 1,
    selectedPriceRange.label !== "Any Price" && 1,
    selectedYear !== "All" && 1,
    selectedFuel !== "All" && 1,
    selectedTransmission !== "All" && 1,
    selectedCPO && 1,
  ].filter(Boolean).length;

  // Close filter drawer on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterDrawerOpen]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Make */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Make</label>
        <select
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white"
        >
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
        <select
          value={selectedPriceRange.label}
          onChange={(e) => {
            const range = PRICE_RANGES.find((r) => r.label === e.target.value);
            setSelectedPriceRange(range);
          }}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {PRICE_RANGES.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Model Year</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Fuel Type */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Fuel Type</label>
        <select
          value={selectedFuel}
          onChange={(e) => setSelectedFuel(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {FUEL_TYPES.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>
      </div>

      {/* Transmission */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Transmission</label>
        <select
          value={selectedTransmission}
          onChange={(e) => setSelectedTransmission(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {TRANSMISSIONS.map((trans) => (
            <option key={trans} value={trans}>
              {trans}
            </option>
          ))}
        </select>
      </div>

      {/* Certified Pre-Owned Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Certified Pre-Owned Only</span>
        <button
          onClick={() => setSelectedCPO(!selectedCPO)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            selectedCPO ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              selectedCPO ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-slate-900 pt-28 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Inventory
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Browse {cars.length} premium vehicles with our advanced real-time search and filter tools.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
        {/* Search Bar & Mobile Filter Toggle */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            {/* Desktop Sort Dropdown */}
            <div className="hidden lg:block w-56">
              <select
                value={sortBy.value}
                onChange={(e) => {
                  const selected = SORT_OPTIONS.find((opt) => opt.value === e.target.value);
                  setSortBy(selected);
                }}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-3 rounded-lg transition"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Active Filters Chips */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-slate-500 mr-2">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm("")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedMake !== "All" && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Make: {selectedMake}
                  <button onClick={() => setSelectedMake("All")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedPriceRange.label !== "Any Price" && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Price: {selectedPriceRange.label}
                  <button onClick={() => setSelectedPriceRange(PRICE_RANGES[0])}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedYear !== "All" && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Year: {selectedYear}
                  <button onClick={() => setSelectedYear("All")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedFuel !== "All" && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Fuel: {selectedFuel}
                  <button onClick={() => setSelectedFuel("All")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTransmission !== "All" && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Trans: {selectedTransmission}
                  <button onClick={() => setSelectedTransmission("All")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCPO && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  CPO Only
                  <button onClick={() => setSelectedCPO(false)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-sm text-red-500 hover:text-red-700 font-medium ml-auto"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Desktop Filters Sidebar + Results Grid */}
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-red-500 hover:text-red-700 font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-1">
            {/* Results Header with count and view toggle (mobile sort is shown in drawer) */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <p className="text-slate-600 font-medium">
                  <span className="text-slate-900 font-bold">{filteredCars.length}</span>{" "}
                  {filteredCars.length === 1 ? "vehicle" : "vehicles"} found
                </p>
                {/* Mobile Sort - shown on small screens */}
                <div className="lg:hidden">
                  <select
                    value={sortBy.value}
                    onChange={(e) => {
                      const selected = SORT_OPTIONS.find((opt) => opt.value === e.target.value);
                      setSortBy(selected);
                    }}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* View toggle (optional) */}
              <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-slate-100" : ""}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-slate-100" : ""}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Grid/List */}
            {filteredCars.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
                    : "space-y-4"
                }
              >
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 py-16 px-4 text-center">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No vehicles found</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">
                  We couldn't find any vehicles matching your criteria. Try adjusting your filters
                  or broadening your search.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isFilterDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsFilterDrawerOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 max-h-[85vh] overflow-y-auto ${
            isFilterDrawerOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-700" />
              <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <FilterContent />

            <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-16" />
    </main>
  );
}