import Link from 'next/link';
import { ShieldCheck, Zap, FileText, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b py-4 px-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur z-50">
        <div className="font-bold text-2xl flex items-center gap-2">
          <ShieldCheck className="text-blue-600" /> Guía LCSP
        </div>
        <Link href="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium">
          Entrar al Dashboard
        </Link>
      </header>

      <section className="py-20 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 text-slate-900">
          Gana licitaciones sin <span className="text-blue-600">errores</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Automatiza el DEUC, valida sobres y analiza pliegos con IA.
        </p>
        <Link href="/dashboard" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition">
          Ver Demo <ArrowRight />
        </Link>
      </section>

      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "IA Rápida", desc: "Análisis de pliegos en segundos." },
            { icon: ShieldCheck, title: "Anti-Errores", desc: "Validación automática de sobres." },
            { icon: FileText, title: "Auto-DEUC", desc: "Generación de XML al instante." }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
              <f.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
