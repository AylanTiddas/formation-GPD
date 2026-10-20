import React from 'react';
import { Ban, HardHat, Shield, Shirt, Footprints, Lock } from 'lucide-react';

export const WarehouseRulesVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Shield className="w-4 h-4 text-rose-600" />
          Règles d'Hygiène, de Sécurité & Tenues de Travail en Entrepôt (Chapitre 2 BPDG)
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
          Zéro Tolérance Contamination
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-3">
        {/* Left: 3 Absolute Prohibitions */}
        <div className="md:col-span-5 bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-900 mb-2.5 flex items-center gap-1.5">
              <Ban className="w-4 h-4 text-rose-600" />
              Interdictions Strictes en Zones de Stockage & Préparation
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-rose-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">✕</span>
                <span className="font-extrabold text-slate-900">Strictement INTERDIT de FUMER</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-rose-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">✕</span>
                <span className="font-extrabold text-slate-900">Strictement INTERDIT de MANGER & BOIRE</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-rose-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">✕</span>
                <span className="font-extrabold text-slate-900">Strictement INTERDIT de MÂCHER (Chewing-gum)</span>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-[10.5px] text-rose-900 font-semibold bg-white/80 p-2 rounded-lg border border-rose-200">
            ⚠️ Sanitaires, vestiaires et zones de repos sont <strong>strictement séparés</strong> des zones produits.
          </div>
        </div>

        {/* Right: Required PPE by Zone */}
        <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
              <HardHat className="w-4 h-4 text-hydra-700" />
              Équipements de Protection Individuelle (EPI) par Zone
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-sky-900 block text-xs">Zone de Stockage & Manutention :</span>
                  <span className="text-[11px] text-slate-600">Caristes, préparateurs, magasiniers</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-slate-800">
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900">Casque</span>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900">Blouse</span>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900">Chaussures sécu</span>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-emerald-900 block text-xs">Zone de Vignettage & Contrôle :</span>
                  <span className="text-[11px] text-slate-600">Opérateurs de conditionnement</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-slate-800">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">Blouse propre</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">Chaussures sécu</span>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-amber-900 block text-xs">Visiteurs & Auditeurs Externes :</span>
                  <span className="text-[11px] text-slate-600">Accompagnement obligatoire</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-slate-800">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">Casque visiteur</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">Enregistrement registre</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2.5 text-[10.5px] text-slate-600 flex items-center gap-1.5 pt-2 border-t border-slate-200">
            <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>Tous les effets personnels (sacs, téléphones, manteaux) doivent être rangés dans des <strong>casiers vestiaires fermés</strong>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
