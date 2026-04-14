// components/ImageGallery.jsx
"use client";

import { useState } from "react";
import { Award } from "lucide-react";

export default function ImageGallery({ car }) {
  const [selectedImage, setSelectedImage] = useState(
    car.images?.primary || car.image || "/placeholder-car.jpg"
  );

  const galleryImages = car.images?.gallery || [selectedImage];
  const allImages = [selectedImage, ...galleryImages.filter(img => img !== selectedImage)];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      {/* Main Image */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-gray-100">
        <img
          src={selectedImage}
          alt={`${car.make} ${car.model} - Main`}
          className="w-full h-full object-cover"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {car.badge && (
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              {car.badge.text || car.badge}
            </span>
          )}
          {car.isCertifiedPreOwned && (
            <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Certified
            </span>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="p-4 grid grid-cols-4 sm:grid-cols-6 gap-3 border-t border-gray-100">
          {allImages.slice(0, 6).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                selectedImage === img
                  ? "border-blue-500 ring-2 ring-blue-500 ring-offset-2"
                  : "border-transparent hover:border-blue-300"
              }`}
            >
              <img
                src={img}
                alt={`${car.make} ${car.model} - View ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}