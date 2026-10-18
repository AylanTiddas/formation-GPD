import React from 'react';

export const FefoDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          Règle d'Or FEFO (First Expired, First Out) vs FIFO (Art. 9)
        </span>
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
          Priorité Légale Absolue
        </span>
      </div>

      {/* Concrete Comparative Graphic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs">
        {/* Wrong FIFO approach */}
        <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-rose-800 uppercase">Approche FIFO (Inappropriée)</span>
            <span className="text-[10px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded">Risque Péremption</span>
          </div>
          <div className="space-y-1.5 text-slate-700">
            <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
              <span>Lot A — Reçu le <strong>01/10</strong> (Périm : 12/2027)</span>
              <span className="text-slate-400 font-mono">1er Entré</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
              <span>Lot B — Reçu le <strong>15/10</strong> (Périm : 06/2027)</span>
              <span className="text-slate-400 font-mono">2e Entré</span>
            </div>
            <p className="text-[11px] text-rose-700 font-medium pt-1">
              ✖ En FIFO pur, Lot A sortirait avant Lot B, risquant de périmer Lot B en stock !
            </p>
          </div>
        </div>

        {/* Compliant FEFO approach */}
        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-300">
          <div className="flex items-center justify-between mb-2">
            <span className="font-extrabold text-emerald-800 uppercase">Règle FEFO / PEPS (Obligation BPDG)</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">✔ Conforme Art. 9</span>
          </div>
          <div className="space-y-1.5 text-slate-700">
            <div className="p-2 bg-emerald-100/60 rounded-lg border border-emerald-300 flex justify-between items-center">
              <div>
                <strong className="text-emerald-900 block">Lot B (Périm : 06/2027)</strong>
                <span className="text-[10px] text-emerald-700">Péremption la plus proche</span>
              </div>
              <span className="px-2 py-1 bg-emerald-600 text-white font-extrabold text-[10px] rounded">1er À EXPÉDIER</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <div>
                <span className="text-slate-800 block">Lot A (Périm : 12/2027)</span>
                <span className="text-[10px] text-slate-500">Péremption plus lointaine</span>
              </div>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-semibold text-[10px] rounded">2e à expédier</span>
            </div>
            <p className="text-[11px] text-emerald-800 font-medium pt-1">
              ✔ Le lot qui expire le plus tôt est expédié en premier, quel que soit son ordre d'arrivée !
            </p>
          </div>
        </div>
      </div>

      {/* 4 Color Status Pallets Graphic */}
      <div className="border-t border-slate-100 pt-3">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
          Double Verrouillage des 4 Statuts : Étiquette Physique Visible + Blocage WMS
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 border-2 border-emerald-500 text-emerald-900">
            <span className="block font-black text-xs uppercase">1. LIBÉRÉ</span>
            <span className="text-[10px] font-bold text-emerald-700">ÉTIQUETTE VERTE</span>
            <p className="text-[9.5px] text-slate-600 mt-1">Conforme • Picking autorisé</p>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 border-2 border-amber-400 text-amber-900">
            <span className="block font-black text-xs uppercase">2. QUARANTAINE</span>
            <span className="text-[10px] font-bold text-amber-700">ÉTIQUETTE JAUNE</span>
            <p className="text-[9.5px] text-slate-600 mt-1">Investigation • Vente bloquée</p>
          </div>
          <div className="p-2.5 rounded-xl bg-rose-50 border-2 border-rose-500 text-rose-900">
            <span className="block font-black text-xs uppercase">3. REJETÉ</span>
            <span className="text-[10px] font-bold text-rose-700">ÉTIQUETTE ROUGE</span>
            <p className="text-[9.5px] text-slate-600 mt-1">Zone sous clé • Destruction</p>
          </div>
          <div className="p-2.5 rounded-xl bg-indigo-50 border-2 border-indigo-400 text-indigo-900">
            <span className="block font-black text-xs uppercase">4. RAPPEL/RETOUR</span>
            <span className="text-[10px] font-bold text-indigo-700">ÉTIQUETTE VIOLETTE</span>
            <p className="text-[9.5px] text-slate-600 mt-1">Isolement • Avis écrit PDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
