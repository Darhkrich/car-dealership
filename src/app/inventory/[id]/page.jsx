// app/inventory/[id]/page.js
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import ImageGallery from "@/components/ImageGallery"; // <-- Import client component
import { getCarById, getSimilarCars, formatPrice, formatMileage } from "@/utils/mockData";
import {
  Check,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Shield,
  MapPin,
  Award,
  Zap,
  Droplets,
  Wrench,
  ChevronRight,
  ArrowLeft,
  Share2,
  Heart,
} from "lucide-react";
import Link from "next/link";
import CarPricingSidebar from "@/components/CarPricingSidebar"
export async function generateStaticParams() {
  const { cars } = await import("@/utils/mockData");
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
}

export default async function CarDetails({ params }) {
  const { id } = await params;
  const car = getCarById(id);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Vehicle Not Found</h1>
          <p className="text-slate-600 mb-6">
            The vehicle you're looking for might have been sold or is no longer available.
          </p>
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse Inventory
          </Link>
        </div>
      </div>
    );
  }

  const similarCars = getSimilarCars(car, 3);

  const specs = [
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Gauge, label: "Mileage", value: formatMileage(car.mileage) + " " + car.mileageUnit },
    { icon: Fuel, label: "Fuel Type", value: car.fuel },
    { icon: Cog, label: "Transmission", value: car.transmission },
    { icon: Zap, label: "Horsepower", value: car.horsepower + " hp" },
    { icon: Droplets, label: "Drivetrain", value: car.drivetrain || "RWD" },
  ];

  const formattedPrice = formatPrice(car.price);
  const msrpFormatted = car.msrp ? formatPrice(car.msrp) : null;
  const savings = car.msrp ? car.msrp - car.price : null;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-blue-600 transition">
              Inventory
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate">
              {car.year} {car.make} {car.model}
            </span>
          </nav>

          {/* Mobile Title */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 lg:hidden">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {car.year} {car.make} {car.model}
              </h1>
              {car.trim && <p className="text-slate-500 mt-1">{car.trim}</p>}
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-white border border-gray-200 transition">
                <Share2 className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-white border border-gray-200 transition">
                <Heart className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Desktop Title */}
              <div className="hidden lg:block">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                      {car.year} {car.make} {car.model}
                    </h1>
                    {car.trim && <p className="text-slate-500 mt-1">{car.trim}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full hover:bg-white border border-gray-200 transition">
                      <Share2 className="w-5 h-5 text-slate-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-white border border-gray-200 transition">
                      <Heart className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Gallery - Now Interactive */}
              <ImageGallery car={car} />

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
                <p className="text-slate-600 leading-relaxed">
                  {car.description ||
                    `Experience the ${car.year} ${car.make} ${car.model}. This exceptional vehicle combines performance, luxury, and cutting-edge technology.`}
                </p>
                {car.vin && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-slate-500">
                      <span className="font-medium text-slate-700">VIN:</span> {car.vin}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      <span className="font-medium text-slate-700">Stock #:</span>{" "}
                      {car.stock || "N/A"}
                    </p>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Specifications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {specs.map((spec, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl">
                      <spec.icon className="w-5 h-5 text-blue-600 mb-2" />
                      <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider">
                        {spec.label}
                      </p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
                {car.engine && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                    <p className="text-sm text-slate-500 mb-1">Engine</p>
                    <p className="text-slate-900 font-medium">{car.engine}</p>
                  </div>
                )}
              </div>

              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {car.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - Price & Actions */}
         <CarPricingSidebar car={car} />
          </div>

          {/* Similar Cars */}
          {similarCars.length > 0 && (
            <section className="mt-16 sm:mt-20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    You May Also Like
                  </h2>
                  <p className="text-slate-500 mt-1">Similar vehicles you might be interested in</p>
                </div>
                <Link
                  href="/inventory"
                  className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition group"
                >
                  View All
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {similarCars.map((similarCar) => (
                  <CarCard key={similarCar.id} car={similarCar} />
                ))}
              </div>
              <Link
                href="/inventory"
                className="sm:hidden inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition mt-6"
              >
                View All Inventory
                <ChevronRight className="w-4 h-4" />
              </Link>
            </section>
          )}
        </div>
      </div>

      <div className="h-8" />
    </main>
  );
}