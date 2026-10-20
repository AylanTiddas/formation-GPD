import React from 'react';
import { Tag, CheckCircle2, AlertOctagon, Clock, HelpCircle, XCircle } from 'lucide-react';

interface StatusLabel {
  id: string;
  name: string;
  meaning: string;
  action: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  icon: React.ReactNode;
}

const STATUS_LABELS: StatusLabel[] = [
  {
    id: 'accepted',
    name: 'Accepté / Libéré',
    meaning: 'Produit conforme, réception validée, apte à la vente.',
    action: 'Stockage en zone vendable. Préparation commandes FEFO.',
    bgClass: 'bg-[#55b359] text-white',
    borderClass: 'border-green-600',
    textClass: 'text-white',
    icon: <CheckCircle2 className="w-4 h-4" />
  },
  {
    id: 'quarantine',
    name: 'Quarantaine',
    meaning: 'En attente de contrôle de réception ou d’investigation.',
    action: 'Blocage physique et informatique strict. Interdiction de picking.',
    bgClass: 'bg-[#f59e0b] text-white',
    borderClass: 'border-amber-600',
    textClass: 'text-white',
    icon: <Clock className="w-4 h-4" />
  },
  {
    id: 'incomplete',
    name: 'Incomplet',
    meaning: 'Colis ou palette présentant un manquant ou anomalie de quantité.',
    action: 'Mise en réserve d’identification avant régularisation.',
    bgClass: 'bg-[#facc15] text-slate-900',
    borderClass: 'border-yellow-500',
    textClass: 'text-slate-900',
    icon: <HelpCircle className="w-4 h-4 text-slate-900" />
  },
  {
    id: 'refused',
    name: 'Refusé',
    meaning: 'Non conforme aux spécifications, bris, ou refus réception.',
    action: 'Isolement immédiat en zone Rejetés/Refusés. Retour fournisseur.',
    bgClass: 'bg-[#dc2626] text-white',
    borderClass: 'border-red-700',
    textClass: 'text-white',
    icon: <XCircle className="w-4 h-4" />
  },
  {
    id: 'expired',
    name: 'Périmé',
    meaning: 'Date de péremption échue ou dépassée.',
    action: 'Retrait immédiat de la vente. Zone destruction sous clé.',
    bgClass: 'bg-[#b91c1c] text-white',
    borderClass: 'border-red-900',
    textClass: 'text-white',
    icon: <AlertOctagon className="w-4 h-4" />
  }
];

export const ProductStatusLabelsVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Tag className="w-4 h-4 text-emerald-600" />
          Identification Visuelle des Caisses & Palettes : Les 5 Étiquettes de Statut
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          Sécurité Zéro Confusion (Chap. 3 & 5)
        </span>
      </div>

      {/* The 5 Colored Status Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-4">
        {STATUS_LABELS.map((status) => (
          <div
            key={status.id}
            className={`${status.bgClass} rounded-xl p-3 border-2 ${status.borderClass} shadow-xs flex flex-col justify-between transition transform hover:-translate-y-0.5`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5 opacity-90">
                <span className="text-[9px] font-black uppercase tracking-wider">STATUT</span>
                {status.icon}
              </div>
              <h5 className="text-sm font-black tracking-tight leading-tight mb-1">
                {status.name}
              </h5>
              <p className="text-[10px] opacity-90 leading-snug">
                {status.meaning}
              </p>
            </div>
            <div className="mt-2 pt-1.5 border-t border-black/10 text-[9.5px] font-bold">
              👉 {status.action}
            </div>
          </div>
        ))}
      </div>

      {/* Palette Label Card Model (Fiche Palette) */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-200">
          <span className="font-extrabold text-slate-900 text-xs">
            📋 Règle d'Identification : Toute palette doit obligatoirement porter sa FICHE PALETTE
          </span>
          <span className="text-[10.5px] text-slate-500 font-mono">
            Modèle ENR.M05.ARE.010
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-700 text-[11px]">
          <div className="p-1.5 bg-white rounded-lg border border-slate-200">
            <span className="text-[9px] text-slate-500 block">DÉSIGNATION :</span>
            <strong>Nom Commercial & Dosage</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-slate-200">
            <span className="text-[9px] text-slate-500 block">FORME GALÉNIQUE :</span>
            <strong>Boîte / Flacon / Ampoule</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-slate-200">
            <span className="text-[9px] text-slate-500 block">N° DE LOT :</span>
            <strong className="font-mono text-sky-800">LOT-2026-X</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-slate-200">
            <span className="text-[9px] text-slate-500 block">DATE DE PÉREMPTION :</span>
            <strong className="text-rose-700">EXP (Règle FEFO)</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
