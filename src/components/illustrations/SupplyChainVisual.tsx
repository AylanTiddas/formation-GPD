import React from 'react';
import { Factory, Truck, Warehouse, Store, ArrowRight, ShieldCheck } from 'lucide-react';

export const SupplyChainVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Les Bonnes Pratiques de Distribution en Gros (BPDG) dans la Chaîne de Santé
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          De l'Usine au Patient
        </span>
      </div>

      {/* Visual Chain flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center my-3">
        {/* Step 1: Fabricant */}
        <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center mb-1.5 shadow-xs">
            <Factory className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase text-sky-800">1. FABRICANT</span>
          <p className="text-[10.5px] text-slate-600 font-medium">Usine de production (Régie par les BPF)</p>
        </div>

        {/* Step 2: Fret / Transport Amont */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center mb-1.5 shadow-xs">
            <Truck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase text-slate-800">2. TRANSPORT AMONT</span>
          <p className="text-[10.5px] text-slate-600 font-medium">Transit sous T° dirigée & douanes</p>
        </div>

        {/* Step 3: Entrepôt Grossiste ABC MED */}
        <div className="p-3 rounded-xl bg-hydra-50 border-2 border-hydra-600 text-center flex flex-col items-center shadow-xs">
          <div className="w-10 h-10 rounded-full bg-hydra-700 text-white flex items-center justify-center mb-1.5 shadow-xs">
            <Warehouse className="w-5 h-5" />
          </div>
          <span className="text-[10.5px] font-black uppercase text-hydra-900">3. SPA ABC MED</span>
          <p className="text-[10.5px] text-hydra-800 font-bold">Grossiste Répartiteur (BPDG / BPS)</p>
        </div>

        {/* Step 4: Distribution Aval */}
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1.5 shadow-xs">
            <Truck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase text-emerald-800">4. LIVRAISON AVAL</span>
          <p className="text-[10.5px] text-slate-600 font-medium">Flotte dédiée sous T° contrôlée</p>
        </div>

        {/* Step 5: Officine / Hôpital */}
        <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mb-1.5 shadow-xs">
            <Store className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase text-purple-800">5. OFFICINE / HÔPITAL</span>
          <p className="text-[10.5px] text-slate-600 font-medium">Dispensation au patient final</p>
        </div>
      </div>

      {/* Definition Box */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
        <strong>Définition BPDG :</strong> Les Bonnes Pratiques de Distribution en Gros représentent la partie de l’assurance qualité qui garantit que les médicaments sont transportés, stockés et manipulés selon des normes rigoureuses, <strong>depuis le site du fabricant jusqu’à la pharmacie d'officine</strong>, sans aucune altération de leur qualité ni rupture de la chaîne du froid.
      </div>
    </div>
  );
};
