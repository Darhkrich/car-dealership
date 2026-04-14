"use client";
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function AddCar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/inventory" className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-slate-50 text-slate-600">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Add New Vehicle</h1>
      </div>

      <form className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-gray-100">Vehicle Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Make</label>
              <select className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Make...</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Model</label>
              <input type="text" className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. M4 Competition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
              <input type="number" className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="2024" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Price ($)</label>
              <input type="number" className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Mileage</label>
              <input type="text" className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 5,000 miles" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Transmission</label>
              <select className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-gray-100">Media</h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
            <input type="text" className="w-full p-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
            <p className="text-xs text-slate-500 mt-2">Paste a direct link to the vehicle image.</p>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Link href="/admin/inventory" className="px-6 py-3 bg-white border border-gray-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition">
            Cancel
          </Link>
          <button type="button" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
            <Save size={18} />
            Save Vehicle
          </button>
        </div>
      </form>
    </div>
  );
}