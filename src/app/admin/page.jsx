import { DollarSign, Car, Users, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "$2.4M", icon: DollarSign, color: "bg-green-100 text-green-600" },
          { label: "Active Listings", value: "42", icon: Car, color: "bg-blue-100 text-blue-600" },
          { label: "Total Leads", value: "156", icon: Users, color: "bg-purple-100 text-purple-600" },
          { label: "Growth", value: "+12%", icon: TrendingUp, color: "bg-orange-100 text-orange-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">Recent Inquiries</h3>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Vehicle Interest</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: "Emma Smith", car: "Mercedes C-Class", date: "2 hours ago", status: "New" },
              { name: "Sarah Smith", car: "BMW M4", date: "5 hours ago", status: "Contacted" },
              { name: "Mike Johnson", car: "Tesla Model S", date: "1 day ago", status: "Pending" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                <td className="px-6 py-4 text-slate-600">{row.car}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{row.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold 
                    ${row.status === 'New' ? 'bg-green-100 text-green-700' : 
                      row.status === 'Contacted' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}