import React from 'react';

export const ColdChainThermometer: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
          Échelle Thermique Officielle Pharmacopée & Guide ANPP 2026 (Annexe 1)
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
          Tolérance : Froid +2°C à +8°C (5±3°C)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* SVG Graphic Thermometer */}
        <div className="md:col-span-5 flex justify-center">
          <svg viewBox="0 0 160 300" className="h-64 drop-shadow-sm select-none" fill="none">
            {/* Outer stem */}
            <rect x="70" y="20" width="20" height="230" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2.5" />
            {/* Bulb */}
            <circle cx="80" cy="265" r="26" fill="#0284c7" stroke="#0369a1" strokeWidth="3" />
            
            {/* Color Gradient Liquid Column */}
            <defs>
              <linearGradient id="thermoLiquid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="25%" stopColor="#eab308" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <rect x="74" y="45" width="12" height="205" rx="6" fill="url(#thermoLiquid)" />
            <circle cx="80" cy="265" r="20" fill="#0284c7" />

            {/* Graduations */}
            <line x1="95" y1="45" x2="110" y2="45" stroke="#e11d48" strokeWidth="2" />
            <text x="115" y="49" fill="#be123c" fontSize="10" fontWeight="800">&gt; +25°C</text>

            <line x1="95" y1="85" x2="110" y2="85" stroke="#16a34a" strokeWidth="2" />
            <text x="115" y="89" fill="#15803d" fontSize="9" fontWeight="700">+15°C / +25°C</text>

            <line x1="95" y1="125" x2="110" y2="125" stroke="#0d9488" strokeWidth="2" />
            <text x="115" y="129" fill="#0f766e" fontSize="9" fontWeight="700">+8°C / +15°C</text>

            {/* Target Cold Zone Highlight */}
            <rect x="52" y="150" width="56" height="50" rx="6" fill="#06b6d4" fillOpacity="0.2" stroke="#0891b2" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="95" y1="175" x2="115" y2="175" stroke="#0284c7" strokeWidth="2.5" />
            <text x="120" y="179" fill="#0369a1" fontSize="10" fontWeight="900">+2°C / +8°C</text>

            <line x1="95" y1="215" x2="110" y2="215" stroke="#4f46e5" strokeWidth="2" />
            <text x="115" y="219" fill="#4338ca" fontSize="9" fontWeight="700">-20°C</text>

            <line x1="95" y1="245" x2="110" y2="245" stroke="#6d28d9" strokeWidth="2" />
            <text x="115" y="249" fill="#6d28d9" fontSize="9" fontWeight="700">-70°C</text>
          </svg>
        </div>

        {/* 5 Regulatory Ranges Description */}
        <div className="md:col-span-7 space-y-2 text-xs">
          <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
            <span className="font-bold text-orange-800">1. Ambiant Contrôlé : +15°C à +25°C</span>
            <span className="text-[10px] text-orange-700 font-mono">HR ≤ 60% (Lieu sec)</span>
          </div>

          <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between">
            <span className="font-bold text-teal-800">2. Frais / Froid léger : +8°C à +15°C</span>
            <span className="text-[10px] text-teal-700">Suppositoires & sirops spécifiques</span>
          </div>

          <div className="p-2.5 rounded-xl bg-cyan-50 border-2 border-cyan-400 flex items-center justify-between shadow-sm">
            <div>
              <span className="font-extrabold text-cyan-900 block">3. Réfrigéré : +2°C à +8°C (Chaîne du froid)</span>
              <span className="text-[10px] text-cyan-700">Vaccins, insulines, dérivés sanguins, DMDIV</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-600 text-white font-bold text-[10px]">CRITIQUE</span>
          </div>

          <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between">
            <span className="font-bold text-indigo-800">4. Congélateur : -20°C (± 5°C)</span>
            <span className="text-[10px] text-indigo-700">Plasma et réactifs congelés</span>
          </div>

          <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-between">
            <span className="font-bold text-purple-800">5. Ultra-Basse T° : -70°C (± 10°C)</span>
            <span className="text-[10px] text-purple-700">Vaccins ARNm / Spécialités hospitalières</span>
          </div>
        </div>
      </div>
    </div>
  );
};
