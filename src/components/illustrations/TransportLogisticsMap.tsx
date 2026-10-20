import React from 'react';
import { Truck, Thermometer, ShieldCheck, ArrowRightLeft, AlertCircle } from 'lucide-react';

export const TransportLogisticsMap: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Truck className="w-4 h-4 text-cyan-600" />
          Véhicule Frigorifique Qualifié & Architecture de Transport sous Température Dirigée (Chap. 14)
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
          Caisse Isotherme Qualifiée & Sondes Calibrées
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* SVG Technical Cutaway of Qualified Pharma Refrigerated Truck */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-xl p-3">
          <svg viewBox="0 0 420 200" className="w-full h-auto drop-shadow-sm select-none" fill="none">
            {/* Defs for gradients */}
            <defs>
              <linearGradient id="truckBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="cabinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#004b7a" />
                <stop offset="100%" stopColor="#002540" />
              </linearGradient>
              <linearGradient id="coldFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Road surface */}
            <line x1="10" y1="175" x2="410" y2="175" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 4" />

            {/* Wheels */}
            <circle cx="85" cy="165" r="18" fill="#1e293b" />
            <circle cx="85" cy="165" r="9" fill="#94a3b8" />
            <circle cx="280" cy="165" r="18" fill="#1e293b" />
            <circle cx="280" cy="165" r="9" fill="#94a3b8" />
            <circle cx="340" cy="165" r="18" fill="#1e293b" />
            <circle cx="340" cy="165" r="9" fill="#94a3b8" />

            {/* Truck Cabin (Right side facing forward) */}
            <path
              d="M 20 160 L 20 85 L 75 85 L 95 110 L 95 160 Z"
              fill="url(#cabinGrad)"
              stroke="#002540"
              strokeWidth="2"
            />
            {/* Cabin Windshield */}
            <polygon points="65,92 90,112 70,112 65,92" fill="#bae0fd" stroke="#004b7a" strokeWidth="1" />
            {/* Cabin Door Handle & Headlight */}
            <rect x="42" y="125" width="8" height="2" fill="#ffffff" />
            <rect x="20" y="135" width="4" height="10" fill="#facc15" />
            <text x="50" y="145" textAnchor="middle" fill="#bae0fd" fontSize="7" fontWeight="800">ABC MED</text>

            {/* Refrigeration Unit (Groupe Froid) mounted front-top */}
            <rect x="95" y="55" width="28" height="30" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <circle cx="109" cy="70" r="7" fill="#003559" />
            <text x="109" y="50" textAnchor="middle" fill="#0284c7" fontSize="7.5" fontWeight="800">GROUPE FROID</text>

            {/* Insulated Cargo Box (Caisse Isotherme) */}
            <rect x="100" y="70" width="295" height="92" rx="4" fill="url(#truckBody)" stroke="#005f99" strokeWidth="2.5" />

            {/* Insulated Walls Indicator (Double skin) */}
            <rect x="104" y="74" width="287" height="84" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

            {/* Air circulation ceiling duct & cold airflow */}
            <rect x="110" y="77" width="260" height="7" rx="2" fill="url(#coldFlow)" />
            <path d="M 125 80 L 350 80" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="240" y="89" textAnchor="middle" fill="#0284c7" fontSize="6.5" fontWeight="700">Flux d'air froid circulant permanent (+2°C / +8°C)</text>

            {/* Internal Cargo - Pallets loaded according to LIFO */}
            {/* Pallet 1: Client 3 (Deep inside, loaded first) */}
            <rect x="125" y="112" width="40" height="42" rx="2" fill="#dbeafe" stroke="#93c5fd" />
            <rect x="125" y="154" width="40" height="5" fill="#ca8a04" />
            <text x="145" y="132" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="800">CLIENT 3</text>
            <text x="145" y="142" textAnchor="middle" fill="#3b82f6" fontSize="6">Dernier livré</text>

            {/* Pallet 2: Client 2 */}
            <rect x="175" y="112" width="40" height="42" rx="2" fill="#dbeafe" stroke="#93c5fd" />
            <rect x="175" y="154" width="40" height="5" fill="#ca8a04" />
            <text x="195" y="132" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="800">CLIENT 2</text>
            <text x="195" y="142" textAnchor="middle" fill="#3b82f6" fontSize="6">2e livraison</text>

            {/* Pallet 3: Insulated Box for Thermosensitive Products (+2°C/+8°C) */}
            <rect x="225" y="102" width="50" height="52" rx="3" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1.5" />
            <rect x="225" y="154" width="50" height="5" fill="#ca8a04" />
            <text x="250" y="122" textAnchor="middle" fill="#0891b2" fontSize="7" fontWeight="800">FROID +2/+8°C</text>
            <text x="250" y="132" textAnchor="middle" fill="#0e7490" fontSize="6">Caisses qualifiées</text>
            <text x="250" y="142" textAnchor="middle" fill="#0891b2" fontSize="5.5">Vaccins / Insulines</text>

            {/* Pallet 4: Client 1 (Loaded last, near door -> LIFO) */}
            <rect x="285" y="112" width="45" height="42" rx="2" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
            <rect x="285" y="154" width="45" height="5" fill="#ca8a04" />
            <text x="307" y="130" textAnchor="middle" fill="#15803d" fontSize="7.5" fontWeight="900">CLIENT 1</text>
            <text x="307" y="140" textAnchor="middle" fill="#16a34a" fontSize="6" fontWeight="700">1er À DÉCHARGER</text>
            <text x="307" y="148" textAnchor="middle" fill="#15803d" fontSize="5.5">Règle LIFO</text>

            {/* Thermal Sensor Probe 1 (Front/Top) */}
            <circle cx="130" cy="98" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            <line x1="130" y1="98" x2="140" y2="92" stroke="#ef4444" strokeWidth="1" />
            <text x="145" y="93" fill="#b91c1c" fontSize="6" fontWeight="700">Sonde T° 1</text>

            {/* Thermal Sensor Probe 2 (Rear Door - Critical hot spot) */}
            <circle cx="345" cy="98" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            <line x1="345" y1="98" x2="355" y2="92" stroke="#ef4444" strokeWidth="1" />
            <text x="360" y="93" fill="#b91c1c" fontSize="6" fontWeight="700">Sonde Porte</text>

            {/* Thermal Strip Curtain at rear door */}
            <line x1="388" y1="74" x2="388" y2="158" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 2" />
            <text x="388" y="67" textAnchor="middle" fill="#0284c7" fontSize="6" fontWeight="700">Rideau lanières</text>

            {/* Rear Door Opening Handle */}
            <rect x="393" y="110" width="3" height="20" rx="1" fill="#475569" />
          </svg>
          <div className="flex items-center justify-between w-full text-[10px] text-slate-500 mt-2 px-1 border-t border-slate-200 pt-1.5">
            <span>Isolation : <strong>Polyuréthane renforcé</strong></span>
            <span>Contrôle T° : <strong>Enregistreur continu & alarmes cabine</strong></span>
          </div>
        </div>

        {/* 3 Key Logistics Pillars - Pure operational BPDG guidelines */}
        <div className="lg:col-span-6 space-y-2.5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-hydra-100 text-hydra-800 font-black text-xs flex items-center justify-center">1</span>
              <span className="font-extrabold text-hydra-900">Règle LIFO au Chargement (Art. 14)</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              <strong>Last In, First Out :</strong> Le premier client à livrer est chargé en dernier près des portes arrière. Cela permet un déchargement rapide sans déplacer les autres palettes et évite les ouvertures prolongées maintenant l'inertie thermique.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-cyan-200 text-cyan-900 font-black text-xs flex items-center justify-center">2</span>
              <span className="font-extrabold text-cyan-950">Qualification de la Flotte & Enregistrement Continu</span>
            </div>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              Véhicules frigorifiques qualifiés (QI, QO, QP), caisses isothermes étanches, étalonnage périodique des capteurs et thermographes. <strong>Preuve de température imprimée ou électronique</strong> remise sur demande au client destinataire.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 font-black text-xs flex items-center justify-center">3</span>
              <span className="font-extrabold text-emerald-950">Pack-Out Sécurisé & Ressuage des Plaques Froid</span>
            </div>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              Ressuage obligatoire des accumulateurs eutectiques avant fermeture des caisses et calage anti-contact pour éliminer tout risque de congélation accidentelle des vaccins et insulines (+2°C à +8°C).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
