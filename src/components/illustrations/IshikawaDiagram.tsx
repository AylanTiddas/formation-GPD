import React, { useState } from 'react';

export const IshikawaDiagram: React.FC = () => {
  const [gravity, setGravity] = useState(3);
  const [probability, setProbability] = useState(2);
  const [detectability, setDetectability] = useState(2);

  const criticality = gravity * probability * detectability;

  const getCritColor = (crit: number) => {
    if (crit <= 8) return { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', label: 'Risque Faible / Acceptable' };
    if (crit <= 18) return { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', label: 'Risque Moyen / CAPA requise' };
    return { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-700', label: 'Risque Critique / Action Immédiate' };
  };

  const status = getCritColor(criticality);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
          Investigation Cause Racine : Diagramme 5M d'Ishikawa & Risque ICH Q9
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
          Formule : Criticité = G × P × D
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* SVG Ishikawa 5M Diagram */}
        <div className="lg:col-span-7">
          <svg viewBox="0 0 460 210" className="w-full h-auto drop-shadow-sm select-none" fill="none">
            {/* Spine */}
            <line x1="30" y1="105" x2="360" y2="105" stroke="#005f99" strokeWidth="3" />
            <polygon points="360,98 385,105 360,112" fill="#005f99" />

            {/* Fish Head: Non-Conformité */}
            <rect x="385" y="80" width="70" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="420" y="102" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="800">DÉVIATION</text>
            <text x="420" y="116" textAnchor="middle" fill="#b91c1c" fontSize="8" fontWeight="600">NON-CONF.</text>

            {/* Bone 1: Main d'œuvre */}
            <line x1="100" y1="35" x2="160" y2="105" stroke="#0284c7" strokeWidth="2" />
            <rect x="50" y="18" width="90" height="22" rx="5" fill="#f0f9ff" stroke="#38bdf8" />
            <text x="95" y="32" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="700">1. Main-d'œuvre</text>

            {/* Bone 2: Matériel */}
            <line x1="200" y1="35" x2="260" y2="105" stroke="#0284c7" strokeWidth="2" />
            <rect x="150" y="18" width="90" height="22" rx="5" fill="#f0f9ff" stroke="#38bdf8" />
            <text x="195" y="32" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="700">2. Matériel & Chariots</text>

            {/* Bone 3: Méthode */}
            <line x1="300" y1="35" x2="340" y2="105" stroke="#0284c7" strokeWidth="2" />
            <rect x="260" y="18" width="85" height="22" rx="5" fill="#f0f9ff" stroke="#38bdf8" />
            <text x="302" y="32" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="700">3. Méthode / SOP</text>

            {/* Bone 4: Matière */}
            <line x1="120" y1="175" x2="170" y2="105" stroke="#047857" strokeWidth="2" />
            <rect x="70" y="170" width="85" height="22" rx="5" fill="#ecfdf5" stroke="#34d399" />
            <text x="112" y="184" textAnchor="middle" fill="#065f46" fontSize="8.5" fontWeight="700">4. Matière / Lot</text>

            {/* Bone 5: Milieu */}
            <line x1="240" y1="175" x2="280" y2="105" stroke="#047857" strokeWidth="2" />
            <rect x="190" y="170" width="95" height="22" rx="5" fill="#ecfdf5" stroke="#34d399" />
            <text x="237" y="184" textAnchor="middle" fill="#065f46" fontSize="8.5" fontWeight="700">5. Milieu / T° & HR</text>
          </svg>
        </div>

        {/* Interactive ICH Q9 Calculator */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 text-xs">
          <span className="font-extrabold text-slate-800 uppercase block text-[11px]">
            Simulateur de Criticité du Risque :
          </span>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Gravité (G 1-5) :</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setGravity(val)}
                    className={`w-6 h-6 rounded text-[11px] font-bold ${gravity === val ? 'bg-hydra-700 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Probabilité (P 1-5) :</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setProbability(val)}
                    className={`w-6 h-6 rounded text-[11px] font-bold ${probability === val ? 'bg-hydra-700 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Détectabilité (D 1-5) :</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setDetectability(val)}
                    className={`w-6 h-6 rounded text-[11px] font-bold ${detectability === val ? 'bg-hydra-700 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`p-2.5 rounded-lg border ${status.bg} ${status.border} text-center`}>
            <div className="font-mono text-lg font-black text-slate-900">
              Criticité C = {criticality} <span className="text-xs font-normal text-slate-500">({gravity} × {probability} × {detectability})</span>
            </div>
            <span className={`text-[11px] font-bold ${status.text}`}>
              {status.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
