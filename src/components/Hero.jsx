// components/Hero.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ChevronRight, Sparkles, Shield, Award } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic or navigation
    console.log("Search:", { searchQuery, location });
    // Example: router.push(`/inventory?q=${searchQuery}&location=${location}`);
  };

  const trustedBadges = [
    { icon: Shield, text: "Certified Pre-Owned" },
    { icon: Award, text: "5-Star Service" },
    { icon: Sparkles, text: "Premium Collection" },
  ];

  return (
    <section className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-screen lg:max-h-[900px] flex items-center overflow-hidden">
      {/* Background Image with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury car showroom with premium vehicles"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Multi-layer gradient overlay for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white/90 text-sm font-medium">
              Discover Your Perfect Drive
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-100">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
              Extraordinary.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 mb-6 sm:mb-8 max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-200">
            Discover a curated collection of premium vehicles tailored to your lifestyle. 
            Competitive financing, certified inspections, and white-glove delivery to your door.
          </p>

          {/* Trust Badges - Mobile Stack, Desktop Row */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up animation-delay-300">
            {trustedBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <badge.icon className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 sm:p-2 flex flex-col sm:flex-row gap-2 sm:gap-0 shadow-2xl shadow-black/30 max-w-2xl animate-fade-in-up animation-delay-400"
          >
            <div className="flex-1 flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 sm:py-2 border border-white/10 sm:border-0">
              <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base focus:outline-none"
                aria-label="Search vehicles"
              />
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20 self-center" />
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 sm:py-2 border border-white/10 sm:border-0 sm:max-w-[180px]">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base focus:outline-none"
                aria-label="Enter location"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3.5 sm:py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
            >
              <span>Search Inventory</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Stats */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-10 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">150+</div>
              <div className="text-sm sm:text-base text-slate-300/80">Premium Vehicles</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
              <div className="text-sm sm:text-base text-slate-300/80">
                ★★★★★ (2k+ reviews)
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm sm:text-base text-slate-300/80">Customer Support</div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-8 sm:mt-10 animate-fade-in-up animation-delay-600">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors group"
            >
              View all inventory
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Desktop only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* CSS Animations (Add to globals.css if not present) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
}