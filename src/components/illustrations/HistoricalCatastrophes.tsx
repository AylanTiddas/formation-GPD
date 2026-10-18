import React from 'react';

export const HistoricalCatastrophes: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          Pourquoi les BPDG Sauvent des Vies : 3 Catastrophes Historiques
        </span>
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
          Le Médicament n'est PAS une Marchandise Ordinaire
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        {/* 1970 USA */}
        <div className="p-3.5 rounded-xl bg-gradient-to-b from-rose-50 to-white border border-rose-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono font-black text-rose-700 text-sm">1970 • USA</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-200 text-rose-900 font-extrabold text-[10px]">&gt; 800 Décès</span>
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Contamination Solutés IV</h4>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Septicémies massives provoquées par une rupture d'étanchéité et stockage non maîtrisé lors du transport et de la distribution hospitalière.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-rose-100 text-[10px] text-rose-700 font-semibold">
            ➔ Règle BPDG : Contrôle strict de l'intégrité à réception & transport étanche.
          </div>
        </div>

        {/* 1972 France */}
        <div className="p-3.5 rounded-xl bg-gradient-to-b from-amber-50 to-white border border-amber-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono font-black text-amber-700 text-sm">1972 • FRANCE</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-extrabold text-[10px]">36 Nourrissons</span>
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Talc Morhange</h4>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Mélange accidentel et contamination par de l'hexachlorophène (toxique). 204 nourrissons intoxiqués suite à une défaillance de traçabilité des lots.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-amber-100 text-[10px] text-amber-700 font-semibold">
            ➔ Règle BPDG : Ségrégation physique absolue et traçabilité inviolable.
          </div>
        </div>

        {/* 1999 Allemagne */}
        <div className="p-3.5 rounded-xl bg-gradient-to-b from-purple-50 to-white border border-purple-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono font-black text-purple-700 text-sm">1999 • ALLEMAGNE</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-200 text-purple-900 font-extrabold text-[10px]">Arrêts Cardiaques</span>
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Erreurs Stockage KCl</h4>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Confusion mortelle entre ampoules de chlorure de potassium (KCl) concentré et eau distillée suite à un entreposage indifférencié en entrepôt.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-purple-100 text-[10px] text-purple-700 font-semibold">
            ➔ Règle BPDG : Prévention des confusions LASA & zones sous clé.
          </div>
        </div>
      </div>
    </div>
  );
};
