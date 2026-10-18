import React from 'react';

export const WarehouseBlueprint: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-hydra-600"></span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-hydra-900">
            Schéma Architectural de Zonage Conforme (Art. 7-8 & Chap. 11)
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Superficie Totale ≥ 590 m² (Mixte)
        </span>
      </div>

      <svg viewBox="0 0 620 320" className="w-full h-auto max-h-72 mx-auto drop-shadow-sm select-none" fill="none">
        {/* Background Building Envelope */}
        <rect x="10" y="10" width="600" height="300" rx="14" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="6 3" />
        <text x="25" y="30" fill="#64748b" fontSize="11" fontWeight="700">ENVELOPPE ÉTABLISSEMENT — SUPERFICIE TOTALE ≥ 590 m²</text>

        {/* Zone 1: Administration & Vestiaires (Séparés) */}
        <rect x="25" y="45" width="130" height="90" rx="8" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="90" y="75" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="800">BUREAUX & ADMIN</text>
        <text x="90" y="92" textAnchor="middle" fill="#0284c7" fontSize="8.5">Direction & PDT</text>
        <text x="90" y="108" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="600">Vestiaires séparés</text>

        {/* Zone 2: Quai Réception Abrité */}
        <rect x="25" y="145" width="130" height="70" rx="8" fill="#f0fdf4" stroke="#4ade80" strokeWidth="1.5" />
        <text x="90" y="172" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="800">QUAI RÉCEPTION</text>
        <text x="90" y="188" textAnchor="middle" fill="#166534" fontSize="8.5">Abrité intempéries</text>
        <text x="90" y="202" textAnchor="middle" fill="#15803d" fontSize="8">Contrôle camion & T°</text>

        {/* Zone 3: Quarantaine d'entrée */}
        <rect x="25" y="225" width="130" height="70" rx="8" fill="#fef9c3" stroke="#facc15" strokeWidth="1.5" />
        <text x="90" y="252" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="800">QUARANTAINE ENTRÉE</text>
        <text x="90" y="268" textAnchor="middle" fill="#713f12" fontSize="8.5">Attente validation PDT</text>
        <text x="90" y="282" textAnchor="middle" fill="#854d0e" fontSize="8">Statut Jaune</text>

        {/* Zone 4: Aire Principale de Stockage Médicaments (>= 200 m² continue) */}
        <rect x="170" y="45" width="270" height="170" rx="8" fill="#eff6ff" stroke="#60a5fa" strokeWidth="2" />
        <text x="305" y="72" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="800">STOCKAGE MÉDICAMENTS (FEFO)</text>
        <text x="305" y="90" textAnchor="middle" fill="#2563eb" fontSize="9.5" fontWeight="700">Aire Continue ≥ 200 m² (dans 500 m²)</text>

        {/* Racks inside storage */}
        <rect x="185" y="105" width="45" height="95" rx="4" fill="#dbeafe" stroke="#93c5fd" />
        <rect x="245" y="105" width="45" height="95" rx="4" fill="#dbeafe" stroke="#93c5fd" />
        <rect x="305" y="105" width="45" height="95" rx="4" fill="#dbeafe" stroke="#93c5fd" />
        <rect x="365" y="105" width="60" height="95" rx="4" fill="#e0f2fe" stroke="#7dd3fc" />
        <text x="207" y="155" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="700">Allée 1</text>
        <text x="267" y="155" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="700">Allée 2</text>
        <text x="327" y="155" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="700">Allée 3</text>
        <text x="395" y="155" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">Picking</text>

        {/* Zone 5: Préparation & Contrôle Colisage */}
        <rect x="170" y="225" width="270" height="70" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="305" y="252" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="800">ZONE DE PRÉPARATION & EXPÉDITION</text>
        <text x="305" y="268" textAnchor="middle" fill="#475569" fontSize="8.5">Double contrôle colisage • Colis inviolables</text>
        <text x="305" y="282" textAnchor="middle" fill="#0f172a" fontSize="8">Quai Expédition avec sas</text>

        {/* Right side: 5 Specific & Secure Rooms */}
        {/* Chambre Froide 2-8°C */}
        <rect x="455" y="45" width="140" height="55" rx="6" fill="#ecfeff" stroke="#06b6d4" strokeWidth="2" />
        <text x="525" y="68" textAnchor="middle" fill="#0891b2" fontSize="9.5" fontWeight="800">CHAMBRE FROIDE</text>
        <text x="525" y="84" textAnchor="middle" fill="#0e7490" fontSize="8.5" fontWeight="700">+2°C à +8°C (Alarmes 24/7)</text>

        {/* Local Psychotropes & Stupéfiants sous clé */}
        <rect x="455" y="107" width="140" height="50" rx="6" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
        <text x="525" y="128" textAnchor="middle" fill="#7e22ce" fontSize="9.5" fontWeight="800">PSYCHOTROPES (Art. 6 & 8)</text>
        <text x="525" y="144" textAnchor="middle" fill="#6b21a8" fontSize="8">Fermé à clef (Clé PDT)</text>

        {/* Zone d'Isolement / Rejet rouge sous clé */}
        <rect x="455" y="164" width="140" height="45" rx="6" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1.5" />
        <text x="525" y="183" textAnchor="middle" fill="#be123c" fontSize="9" fontWeight="800">ZONE REJET / ISOLEMENT</text>
        <text x="525" y="198" textAnchor="middle" fill="#9f1239" fontSize="7.5">Sous clé • Périmés & Retraits</text>

        {/* Zone Dédiée DM >= 90 m² */}
        <rect x="455" y="216" width="140" height="42" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="525" y="233" textAnchor="middle" fill="#047857" fontSize="9.5" fontWeight="800">ZONE DÉDIÉE DM (Art. 7)</text>
        <text x="525" y="248" textAnchor="middle" fill="#065f46" fontSize="8">Superficie ≥ 90 m²</text>

        {/* Local Inflammables & Toxiques */}
        <rect x="455" y="265" width="140" height="30" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <text x="525" y="283" textAnchor="middle" fill="#c2410c" fontSize="8.5" fontWeight="800">INFLAMMABLES & GAZ (Art. 19)</text>

        {/* Flow arrows */}
        <path d="M90 215 L90 225" stroke="#15803d" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M155 260 L170 260" stroke="#005f99" strokeWidth="2" />
      </svg>

      <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-200 text-center text-[10px]">
        <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200">
          <strong className="text-hydra-900">Médicaments :</strong> ≥ 500 m² (≥ 200 m² continu)
        </div>
        <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200">
          <strong className="text-emerald-700">Dispositifs Médicaux :</strong> ≥ 90 m²
        </div>
        <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200">
          <strong className="text-rose-700">Sécurité :</strong> Accès contrôlé, alarme, caméras
        </div>
      </div>
    </div>
  );
};
