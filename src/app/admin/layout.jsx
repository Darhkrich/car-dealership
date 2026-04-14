import Link from 'next/link';
import { LayoutDashboard, Car, Users, Settings, LogOut, Bell } from 'lucide-react';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <span className="text-xl font-bold tracking-tight">
            Prestige<span className="text-blue-500">Admin</span>
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-xl text-white font-medium transition shadow-lg shadow-blue-900/20">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/inventory" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition">
            <Car size={20} />
            Inventory
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition">
            <Users size={20} />
            Customers
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition">
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 w-full transition">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Top Header */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-800">Admin Portal</h2>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-slate-800">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                AD
              </div>
              <span className="text-sm font-medium text-slate-700">Admin User</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}