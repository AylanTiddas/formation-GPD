import React from 'react';
import { AlertOctagon, CheckCircle2, XCircle, ShieldAlert, Eye, Search } from 'lucide-react';

export const FakeVsRealVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          Détection des Médicaments Falsifiés (Contrefaçons) : Vrai vs Faux
        </span>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
          Tolérance Zéro • Menace Vitale
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3">
        {/* Authentic Box */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border-2 border-emerald-400 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                VRAI (PRODUIT AUTHENTIQUE)
              </span>
              <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">CONFORME</span>
            </div>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li>✔ Impression nette, typographie régulière, couleurs officielles du laboratoire.</li>
              <li>✔ Mentions légales obligatoires en <strong>langues arabe et française</strong>.</li>
              <li>✔ Numéro de lot, date de fabrication et de péremption parfaitement lisibles et cohérents.</li>
              <li>✔ Dispositif d'inviolabilité intact (vignette scellée, colle d'origine, hologramme).</li>
              <li>✔ Provenance exclusive d'un fabricant ou importateur officiellement agréé.</li>
            </ul>
          </div>
          <div className="mt-3 pt-2 border-t border-emerald-200 text-[11px] text-emerald-800 font-bold">
            👉 Autorisé pour la distribution en gros aux officines.
          </div>
        </div>

        {/* Fake Box */}
        <div className="p-3.5 rounded-xl bg-rose-50/70 border-2 border-rose-400 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                FAUX (PRODUIT FALSIFIÉ / SUSPECT)
              </span>
              <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-2 py-0.5 rounded">DANGER MORTEL</span>
            </div>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li>✖ Fautes d'orthographe sur l'étui ou la notice, logo baveux ou couleurs délavées.</li>
              <li>✖ Absence des mentions obligatoires en arabe ou blister mal thermoformé.</li>
              <li>✖ Numéro de lot inexistant ou ne correspondant pas au certificat d'analyse.</li>
              <li>✖ Traces d'ouverture, reconditionnement grossier ou scellés brisés.</li>
              <li>✖ Offre d'achat suspecte (prix anormalement bas, quantités inhabituelles).</li>
            </ul>
          </div>
          <div className="mt-3 pt-2 border-t border-rose-200 text-[11px] text-rose-800 font-bold">
            👉 Isolement immédiat en zone dédiée sous clé + déclaration sans délai à l'ANPP.
          </div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span className="text-[11px]">
          <strong>Règle ANPP (Chapitre 8) :</strong> Tout lot suspect doit être immédiatement retiré de la vente, consigné dans la zone sous clé des produits falsifiés et notifié à l'ANPP et au fabricant.
        </span>
      </div>
    </div>
  );
};
