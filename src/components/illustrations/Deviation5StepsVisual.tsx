import React from 'react';
import { AlertCircle, Shield, PhoneCall, FileEdit, ClipboardCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: "1",
    title: "Mettre en Sécurité",
    sub: "Isoler physiquement le lot ou colis douteux. Interdiction de picking ou d’expédition.",
    bg: "bg-rose-50 border-rose-300 text-rose-900",
    badge: "Réflexe Immédiat",
    icon: <Shield className="w-5 h-5 text-rose-600" />
  },
  {
    num: "2",
    title: "Alerter N+1 & AQ",
    sub: "Informer immédiatement le chef d'équipe, le Pharmacien Assistant et l'Assurance Qualité.",
    bg: "bg-amber-50 border-amber-300 text-amber-900",
    badge: "Communication",
    icon: <PhoneCall className="w-5 h-5 text-amber-600" />
  },
  {
    num: "3",
    title: "Documenter avec l'AQ",
    sub: "Renseigner la Fiche de Déviation (description factuelle, photos, relevés, lots concernés).",
    bg: "bg-sky-50 border-sky-300 text-sky-900",
    badge: "Fiche Déviation",
    icon: <FileEdit className="w-5 h-5 text-sky-600" />
  },
  {
    num: "4",
    title: "Enregistrer l'Écart",
    sub: "Attribution d'un numéro chrono au registre officiel des déviations du SMQ.",
    bg: "bg-indigo-50 border-indigo-300 text-indigo-900",
    badge: "Traçabilité SMQ",
    icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />
  },
  {
    num: "5",
    title: "Plan d'Action CAPA",
    sub: "Analyse des causes racines et déploiement d’actions correctives pour éviter la récurrence.",
    bg: "bg-emerald-50 border-emerald-300 text-emerald-900",
    badge: "Amélioration",
    icon: <AlertCircle className="w-5 h-5 text-emerald-600" />
  }
];

export const Deviation5StepsVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          Conduite à Tenir en Cas de Déviation : Les 5 Étapes Clés
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
          Réflexe Qualité Tous Services
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {STEPS.map((step, idx) => (
          <div key={step.num} className={`p-3 rounded-xl border ${step.bg} flex flex-col justify-between shadow-xs transition hover:shadow-md`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-white font-black text-xs flex items-center justify-center shadow-xs border border-black/10">
                  {step.num}
                </span>
                {step.icon}
              </div>
              <h5 className="text-xs font-black mb-1">{step.title}</h5>
              <p className="text-[10.5px] leading-snug opacity-90">{step.sub}</p>
            </div>
            <div className="mt-2 pt-1 border-t border-black/10 text-[9px] font-bold uppercase tracking-wider">
              {step.badge}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
        <span className="font-extrabold text-slate-900 shrink-0">Définition BPDG :</span>
        <p className="text-[11px]">
          Une <strong>déviation</strong> est tout écart non planifié par rapport à une procédure écrite, une consigne de stockage (ex: excursion de température) ou une spécification produit. <em>Signaler immédiatement une déviation protège le patient et l'entreprise !</em>
        </p>
      </div>
    </div>
  );
};
