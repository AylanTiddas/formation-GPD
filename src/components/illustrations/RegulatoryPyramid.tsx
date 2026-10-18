import React from 'react';

export const RegulatoryPyramid: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="text-center mb-2">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-hydra-700 bg-hydra-50 px-3 py-1 rounded-full border border-hydra-200">
          Hiérarchie des Textes Juridiques Algériens
        </span>
      </div>

      <svg viewBox="0 0 540 220" className="w-full h-auto max-h-56 mx-auto drop-shadow-sm select-none" fill="none">
        <defs>
          <linearGradient id="pyr1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003559" />
            <stop offset="100%" stopColor="#004b7a" />
          </linearGradient>
          <linearGradient id="pyr2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#005f99" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>
          <linearGradient id="pyr3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0096c7" />
            <stop offset="100%" stopColor="#00a878" />
          </linearGradient>
          <linearGradient id="pyr4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Tier 1: Loi 18-11 */}
        <polygon points="270,12 215,60 325,60" fill="url(#pyr1)" stroke="#ffffff" strokeWidth="2" />
        <text x="270" y="38" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">LOI N° 18-11</text>
        <text x="270" y="52" textAnchor="middle" fill="#bae0fd" fontSize="9" fontWeight="600">Santé Publique</text>

        {/* Tier 2: Décrets exécutifs */}
        <polygon points="213,64 160,112 380,112 327,64" fill="url(#pyr2)" stroke="#ffffff" strokeWidth="2" />
        <text x="270" y="86" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">DÉCRETS EXÉCUTIFS 21-82 & 19-379</text>
        <text x="270" y="102" textAnchor="middle" fill="#e0effe" fontSize="9" fontWeight="500">Agrément Établissements & Contrôle Psychotropes</text>

        {/* Tier 3: Cahier des charges Art. 1 à 36 */}
        <polygon points="158,116 105,164 435,164 382,116" fill="url(#pyr3)" stroke="#ffffff" strokeWidth="2" />
        <text x="270" y="138" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">CAHIER DES CHARGES OFFICIEL (Art. 1 à 36)</text>
        <text x="270" y="154" textAnchor="middle" fill="#f0fdf4" fontSize="9" fontWeight="500">Conditions techniques de distribution en gros & Stock 30 jours</text>

        {/* Tier 4: Guide ANPP 2026 & Normes */}
        <polygon points="103,168 50,214 490,214 437,168" fill="url(#pyr4)" stroke="#ffffff" strokeWidth="2" />
        <text x="270" y="188" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">GUIDE ANPP 2026 (19 Chapitres + Annexe 1)</text>
        <text x="270" y="204" textAnchor="middle" fill="#ecfdf5" fontSize="9" fontWeight="500">BPF Algérie 2022 • ISO 13485 (DM) • OMS TRS 986 Annexe 7</text>
      </svg>
      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-2 border-t border-slate-200 pt-1.5">
        <span>Force contraignante : <strong>Décroissante du haut vers le bas</strong></span>
        <span>Précision opérationnelle : <strong>Croissante du haut vers le bas</strong></span>
      </div>
    </div>
  );
};
