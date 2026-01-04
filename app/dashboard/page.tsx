import Link from 'next/link';
import { Plus, FileText, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Expedientes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={20} /> Nuevo Expediente
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard/1" className="bg-white p-6 rounded-xl shadow-sm border hover:border-blue-400 transition group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <FileText size={24} />
            </div>
            <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">En Proceso</span>
          </div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600">Limpieza Viaria Móstoles</h3>
          <p className="text-sm text-slate-500 mb-4">EXP-2024-0043</p>
        </Link>
      </div>
    </div>
  )
}
