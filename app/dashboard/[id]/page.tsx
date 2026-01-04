export default function ExpedienteDetalle({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen bg-slate-50">
      <div className="w-64 bg-white border-r p-4 hidden md:block">
        <h2 className="font-bold text-slate-700 mb-4">Fases</h2>
        <div className="p-2 bg-blue-50 text-blue-700 rounded font-medium text-sm">1. Análisis Pliegos</div>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h1 className="font-bold text-lg mb-6">Expediente #{params.id}</h1>
        <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Resumen Ejecutivo (IA)</h3>
            <p className="text-slate-600 text-sm">El análisis indica solvencia técnica de 3 obras.</p>
        </div>
      </div>
    </div>
  )
}
