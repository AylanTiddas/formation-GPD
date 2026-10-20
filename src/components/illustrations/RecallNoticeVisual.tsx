import React from 'react';
import { BellRing, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const RecallNoticeVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-300 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none relative overflow-hidden">
      {/* Header Cartouche */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-black">
            <BellRing className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">AT PHARMA / GROUPE HYDRAPHARM</span>
            <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase">
              NOTE OFFICIELLE DE RAPPEL DE LOT
            </h4>
          </div>
        </div>
        <div className="text-right text-[10px] font-mono text-slate-600">
          <div>Alger, le <strong>07/03/2026</strong></div>
          <span className="text-rose-700 font-extrabold uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            URGENCE SANITAIRE
          </span>
        </div>
      </div>

      {/* Target Product Table */}
      <div className="mb-3 border border-slate-200 rounded-xl overflow-hidden text-xs">
        <div className="bg-slate-100 p-2 font-bold text-slate-700 text-[11px] border-b border-slate-200">
          Spécialité & Lots Pharmaceutiques Concernés par le Rappel
        </div>
        <div className="p-2.5 bg-slate-50 space-y-1">
          <div className="grid grid-cols-12 text-[11px] font-bold text-slate-700 pb-1 border-b border-slate-200">
            <span className="col-span-6">PRODUIT</span>
            <span className="col-span-3">N° DE LOT</span>
            <span className="col-span-3">DATE EXPIRATION</span>
          </div>
          <div className="grid grid-cols-12 text-[11px] text-slate-800 py-0.5">
            <span className="col-span-6 font-semibold">PULMICORT TURBUHALER 200 µg/dose</span>
            <span className="col-span-3 font-mono text-rose-700 font-bold">PA5H</span>
            <span className="col-span-3">30/09/2026</span>
          </div>
          <div className="grid grid-cols-12 text-[11px] text-slate-800 py-0.5">
            <span className="col-span-6 font-semibold">PULMICORT TURBUHALER 200 µg/dose</span>
            <span className="col-span-3 font-mono text-rose-700 font-bold">PA5T</span>
            <span className="col-span-3">31/12/2026</span>
          </div>
        </div>
      </div>

      {/* Instructions for Wholesalers & Pharmacies */}
      <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200 text-xs text-slate-800 space-y-1 mb-3">
        <span className="font-extrabold text-rose-900 block">Actions Immédiates Requises sous 1 Heure :</span>
        <ul className="space-y-0.5 text-[11px] text-slate-700">
          <li>• <strong>Arrêt immédiat</strong> de toute vente ou distribution des lots mentionnés.</li>
          <li>• <strong>Mise en quarantaine sous clé</strong> avec étiquette visible « PRODUIT RAPPELÉ ».</li>
          <li>• <strong>Notification à tous les clients livrés</strong> avec demande de retour physique.</li>
        </ul>
      </div>

      {/* Footer Signatures & Stamp */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Direction Technique :</span>
          <span className="font-extrabold text-slate-900 text-[11px]">Le Pharmacien Directeur Technique (Visa & Sceau)</span>
        </div>
        <div className="border-2 border-dashed border-rose-600 text-rose-700 px-3 py-1 rounded-lg text-center transform -rotate-2 select-none">
          <span className="text-[11px] font-black tracking-widest uppercase block">RAPPEL CONFIRMÉ</span>
          <span className="text-[8.5px] font-bold block text-rose-800">MIP / ANPP</span>
        </div>
      </div>
    </div>
  );
};
