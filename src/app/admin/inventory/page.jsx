"use client";
import { useState } from 'react';
import { cars as initialCars } from '@/utils/mockData';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import Link from 'next/link';

export default function AdminInventory() {
  const [cars, setCars] = useState(initialCars);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      setCars(cars.filter(car => car.id !== id));
    }
  };

  const filteredCars = cars.filter(car => 
    car.make.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
        <Link href="/admin/inventory/add" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 transition">
          <Plus size={18} />
          Add Vehicle
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 bg-slate-50/50">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Mileage</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCars.map((car) => (
              <tr key={car.id} className="hover:bg-slate-50 transition group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={car.image} alt={car.model} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-slate-900">{car.make} {car.model}</p>
                      <p className="text-xs text-slate-500">{car.year} • {car.fuel}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">${car.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-slate-600">{car.mileage}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">Available</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(car.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}