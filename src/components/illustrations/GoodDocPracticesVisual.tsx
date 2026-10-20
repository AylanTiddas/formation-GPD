import React from 'react';
import { Check, X, Edit3, ShieldAlert, AlertTriangle } from 'lucide-react';

export const GoodDocPracticesVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Edit3 className="w-4 h-4 text-sky-600" />
          Bonnes Pratiques Documentaires (BPD) : Remplissage & Correction d'Écriture
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
          ALCOA+ & Chapitre 4 BPDG
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-4">
        {/* Left: The Tools - Blue Pen Only */}
        <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-extrabold uppercase text-slate-800 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> Outils d'Écriture Autorisés vs Interdits
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  <span><strong>Stylo à bille bleu indélébile</strong></span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">OBLIGATOIRE</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-600 font-bold" />
                  <span>Crayon de bois (effaçable)</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900">INTERDIT</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-600 font-bold" />
                  <span>Surligneurs & Marqueurs fluo</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900">INTERDIT (masque la copie)</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-600 font-bold" />
                  <span>Correcteur blanc (Tipp-Ex / blanco)</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900">PROSCRIT ABSOLU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Exact Official Rule for Correcting an Error */}
        <div className="md:col-span-6 bg-amber-50/60 border border-amber-200 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-extrabold uppercase text-amber-900 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              Règle Officielle : Correction d'une Erreur d'Écriture (EE)
            </h4>
            <p className="text-[11px] text-amber-950 mb-3">
              Ne jamais masquer l'information d'origine. La traçabilité doit rester lisible.
            </p>

            {/* Visual Example Card: 131 EE 130 01/01/2019 F.BOUKERT */}
            <div className="p-3 bg-white rounded-xl border border-amber-300 font-mono text-xs shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-500 font-sans">Exemple Concret en Entrepôt / Bureau :</div>
              <div className="flex items-center gap-3 text-base">
                <span className="line-through text-rose-600 font-bold decoration-2">131</span>
                <span className="text-xs font-black bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">EE</span>
                <span className="text-emerald-700 font-black">130</span>
              </div>
              <div className="text-xs text-slate-700 font-semibold flex items-center justify-between pt-1 border-t border-slate-100">
                <span>Date : <strong>01/01/2026</strong></span>
                <span>Visa : <strong>F. BOUKERT</strong> (Nom & Prénom complets)</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-amber-900 mt-2 font-medium">
            ✔ Rayer d’un trait simple • Inscrire la valeur juste • Mentionner <strong>EE</strong> • Dater et signer.
          </div>
        </div>
      </div>

      {/* 4 Golden Practical Rules */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <span className="font-bold text-slate-900 block mb-0.5">1. Zéro case vide</span>
          <p className="text-[10.5px] text-slate-600">Toujours inscrire <strong>R.A.S.</strong> (Rien à Signaler) ou <strong>N.A.</strong> (Non Applicable).</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <span className="font-bold text-slate-900 block mb-0.5">2. Zéro signe "</span>
          <p className="text-[10.5px] text-slate-600">Interdiction des guillemets de répétition (ditto). Réécrire entièrement la donnée.</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <span className="font-bold text-slate-900 block mb-0.5">3. En temps réel</span>
          <p className="text-[10.5px] text-slate-600">Remplir au moment même de l'opération, <strong>ni avant, ni après</strong> (contemporain).</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <span className="font-bold text-slate-900 block mb-0.5">4. Signature personnelle</span>
          <p className="text-[10.5px] text-slate-600">Ne jamais signer ni inscrire le nom d'un collègue à sa place sous aucun prétexte.</p>
        </div>
      </div>
    </div>
  );
};
