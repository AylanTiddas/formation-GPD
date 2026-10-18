import React from 'react';

export const TransportLogisticsMap: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
          Logistique Sous Température Dirigée & Planification Grand Sud (Chapitre 14)
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
          Trajets Nocturnes & Relais Froid
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* SVG Graphic Map of Algeria with Logistic Hubs */}
        <div className="md:col-span-6 flex justify-center">
          <svg viewBox="0 0 320 300" className="w-full max-w-[280px] h-auto drop-shadow-sm select-none" fill="none">
            {/* Stylized Algeria shape */}
            <path
              d="M 50 40 L 110 30 L 220 25 L 290 40 L 270 80 L 240 120 L 220 180 L 190 270 L 140 280 L 100 230 L 70 170 L 40 120 L 50 40 Z"
              fill="#f0fdf4"
              stroke="#059669"
              strokeWidth="2"
            />

            {/* Northern Hub: Alger / Blida (SPA ABC MED) */}
            <circle cx="160" cy="45" r="8" fill="#0077b6" stroke="#ffffff" strokeWidth="2" />
            <text x="175" y="48" fill="#002540" fontSize="10" fontWeight="800">HUB CENTRAL SPA ABC MED</text>
            <text x="175" y="60" fill="#0369a1" fontSize="8">Plateforme Principale</text>

            {/* Regional Routes */}
            {/* Route Oran */}
            <line x1="160" y1="45" x2="100" y2="55" stroke="#0077b6" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="100" cy="55" r="5" fill="#10b981" />
            <text x="85" y="70" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="700">Ouest (Oran)</text>

            {/* Route Constantine / Annaba */}
            <line x1="160" y1="45" x2="230" y2="48" stroke="#0077b6" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="230" cy="48" r="5" fill="#10b981" />
            <text x="240" y="65" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="700">Est (Constantine)</text>

            {/* Grand Sud Routes - Night Transit */}
            <line x1="160" y1="45" x2="175" y2="120" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="175" cy="120" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <text x="190" y="124" fill="#92400e" fontSize="8.5" fontWeight="800">Relais Froid Ghardaïa</text>

            <line x1="175" y1="120" x2="165" y2="190" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="165" cy="190" r="6" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <text x="180" y="194" fill="#9a3412" fontSize="8.5" fontWeight="800">Relais Ouargla / Hassi M.</text>

            <line x1="165" y1="190" x2="160" y2="255" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="160" cy="255" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
            <text x="175" y="259" fill="#991b1b" fontSize="8.5" fontWeight="800">Tamanrasset / Djanet</text>
            <text x="175" y="270" fill="#b91c1c" fontSize="7.5">Créneaux nocturnes obligatoires</text>
          </svg>
        </div>

        {/* 3 Key Logistics Pillars */}
        <div className="md:col-span-6 space-y-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-extrabold text-hydra-900 block mb-0.5">1. Règle LIFO au Chargement (Art. 14)</span>
            <p className="text-slate-600 text-[11px]">
              <em>Last In, First Out</em> : Le premier client à livrer est chargé en dernier près des portes pour éviter les ouvertures répétées et préserver l'inertie thermique.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
            <span className="font-extrabold text-amber-900 block mb-0.5">2. Expéditions Grand Sud (Chap. 14)</span>
            <p className="text-slate-700 text-[11px]">
              Départ en créneaux nocturnes pour échapper au stress thermique caniculaire diurne (&gt; 45°C), camions frigorifiques bi-température et points relais qualifiés.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200">
            <span className="font-extrabold text-cyan-900 block mb-0.5">3. Pack-out & Ressuage des Plaques</span>
            <p className="text-slate-700 text-[11px]">
              Ressuage obligatoire des accumulateurs de froid avant fermeture et calage anti-contact pour écarter tout risque de congélation accidentelle des vaccins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
