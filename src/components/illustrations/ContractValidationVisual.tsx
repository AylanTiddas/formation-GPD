import React from 'react';
import { Handshake, FileCheck, ShieldCheck, CheckCircle2, AlertTriangle, Building2, Truck } from 'lucide-react';

export const ContractValidationVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Handshake className="w-4 h-4 text-hydra-700" />
          Qualification des Partenaires & Contrats Écrits (Chapitres 5 & 7 BPDG)
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-hydra-50 text-hydra-800 border border-hydra-200">
          Art. 2, 5 & 26 Cahier des Charges
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 text-xs">
        {/* Tier 1: Fournisseurs */}
        <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-sky-950 uppercase text-[11px]">1. Fournisseurs Agréés</span>
              <Building2 className="w-4 h-4 text-sky-700" />
            </div>
            <p className="text-[11px] text-sky-900 leading-snug mb-2">
              S'approvisionner <strong>exclusivement</strong> auprès de fabricants ou grossistes titulaires d'une décision d'enregistrement / agrément ANPP valide.
            </p>
          </div>
          <div className="pt-2 border-t border-sky-200 text-[10px] text-sky-800 font-bold">
            ✔ Vérification préalable du statut légal
          </div>
        </div>

        {/* Tier 2: Clients */}
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-emerald-950 uppercase text-[11px]">2. Clients Destinataires</span>
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
            </div>
            <p className="text-[11px] text-emerald-900 leading-snug mb-2">
              Livrer <strong>uniquement</strong> aux officines d'officine et établissements de santé (publics/privés) autorisés par le Ministère à délivrer au public.
            </p>
          </div>
          <div className="pt-2 border-t border-emerald-200 text-[10px] text-emerald-800 font-bold">
            ✔ Zéro livraison à des intermédiaires illégaux
          </div>
        </div>

        {/* Tier 3: Sous-traitance & Transport */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-amber-950 uppercase text-[11px]">3. Activités Externalisées</span>
              <Truck className="w-4 h-4 text-amber-700" />
            </div>
            <p className="text-[11px] text-amber-900 leading-snug mb-2">
              Tout transporteur ou prestataire doit faire l'objet d'un <strong>Contrat écrit de sous-traitance</strong> et d'un <strong>Cahier des charges Qualité</strong> + audit régulier.
            </p>
          </div>
          <div className="pt-2 border-t border-amber-200 text-[10px] text-amber-800 font-bold">
            ✔ Responsabilité non délégable du grossiste
          </div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span className="text-[11px]">
          <strong>Exigence du Cahier des Charges :</strong> L'établissement doit détenir un <strong>stock minimum de 30 jours</strong> de vente pour les médicaments essentiels et <strong>deux tiers (2/3)</strong> de la nomenclature nationale.
        </span>
      </div>
    </div>
  );
};
