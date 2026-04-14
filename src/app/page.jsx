// app/page.js
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import { cars, getFeaturedCars, getMakes, filterCars } from "@/utils/mockData";
import {
  ShieldCheck,
  Trophy,
  Clock,
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredCars, setFeaturedCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  // Get unique makes for filter buttons
  const makes = useMemo(() => ["All", ...getMakes().slice(0, 4)], []);

  // Initialize data
  useEffect(() => {
    setFeaturedCars(getFeaturedCars());
    setFilteredCars(cars.slice(0, 6)); // Show first 6 by default
  }, []);

  // Handle filter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredCars(cars.slice(0, 6));
    } else {
      const filtered = filterCars({ make: activeFilter }).slice(0, 6);
      setFilteredCars(filtered);
    }
  }, [activeFilter]);

  const stats = [
    {
      value: "1,200+",
      label: "Premium Vehicles Sold",
      icon: TrendingUp,
      description: "This year alone",
    },
    {
      value: "4.9",
      label: "Customer Rating",
      icon: Star,
      description: "Based on 2,500+ reviews",
    },
    {
      value: "15+",
      label: "Years of Excellence",
      icon: Award,
      description: "Serving luxury clients",
    },
    {
      value: "100%",
      label: "Satisfaction Guarantee",
      icon: Users,
      description: "7-day money back",
    },
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: "120-Point Inspection",
      description:
        "Every vehicle undergoes a rigorous 120-point mechanical and safety inspection by factory-certified technicians. Full transparency with digital inspection reports.",
      highlight: "Certified Pre-Owned Available",
    },
    {
      icon: Trophy,
      title: "Best Price Guarantee",
      description:
        "We monitor market prices daily using real-time data. If you find a lower price within 7 days, we'll refund the difference—no haggling required.",
      highlight: "Price Match Promise",
    },
    {
      icon: Clock,
      title: "7-Day Test Ownership",
      description:
        "Take up to 7 days or 250 miles to ensure your new vehicle fits your lifestyle. Not satisfied? Return it for a full refund, no questions asked.",
      highlight: "Hassle-Free Returns",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Porsche 911 Owner",
      content:
        "The most seamless car buying experience I've ever had. The 7-day test ownership gave me complete confidence in my purchase.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Sarah Johnson",
      role: "BMW M4 Owner",
      content:
        "Incredible selection and transparent pricing. The delivery to my doorstep was flawless, and the car exceeded expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "David Rodriguez",
      role: "Tesla Model S Owner",
      content:
        "Knowledgeable staff who actually care about matching you with the right vehicle. The certified inspection gave me peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Trust Badges Bar - Mobile Scrollable */}
      <div className="bg-slate-50 border-b border-gray-200 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-12 min-w-max">
            {[
              "Certified Pre-Owned",
              "Free Vehicle History",
              "Nationwide Delivery",
              "7-Day Returns",
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      {featuredCars.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    Handpicked For You
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                  Featured Vehicles
                </h2>
                <p className="text-slate-500 mt-2 text-sm sm:text-base max-w-2xl">
                  Our most sought-after premium vehicles, selected for their exceptional condition and value.
                </p>
              </div>
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition group"
              >
                View All Inventory
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Statistics Section - Enhanced */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Trusted by Thousands of Drivers
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Our commitment to excellence has made us one of the most trusted names in luxury automotive retail.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl mb-3 sm:mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base font-medium text-slate-300">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Inventory Section with Filters */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Latest Arrivals
              </h2>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">
                Just added to our showroom—be the first to experience these exceptional vehicles.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {makes.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveFilter(brand)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
                    activeFilter === brand
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                      : "bg-white text-slate-600 border border-gray-200 hover:border-slate-400 hover:shadow-md"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-slate-500">No vehicles match the selected filter.</p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-blue-600 font-medium hover:text-blue-700"
              >
                View all inventory
              </button>
            </div>
          )}

          {filteredCars.length > 0 && (
            <div className="text-center mt-10 sm:mt-12">
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 text-slate-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 group"
              >
                Browse Complete Inventory
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Value Propositions - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              The Prestige Difference
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
              We don't just sell cars—we deliver a premium ownership experience built on trust, transparency, and unparalleled service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {prop.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {prop.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>{prop.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Find Your Dream Car?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
                Schedule a test drive today or speak with one of our luxury vehicle specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-slate-100 transition shadow-lg shadow-blue-900/20"
              >
                Browse Inventory
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Contact Sales
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 text-center">
            <div>
              <h3 className="text-lg font-bold mb-4">CompanyName</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Curating exceptional vehicles for discerning drivers since 2008.
              </p>
              <div className="space-y-2 text-sm text-slate-400 text-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>(000) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>sales@pcompanyname.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {["Inventory", "Financing", "About Us", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-slate-400 hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe for exclusive offers and new arrival alerts.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Prestige Motors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-slate-400 hover:text-white transition">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}