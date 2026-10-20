import React, { useState } from 'react';

export const AlcoaBadges: React.FC = () => {
  const [demoState, setDemoState] = useState<'bad' | 'good'>('good');

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
          Intégrité des Données : Principes ALCOA+ & Règle Anti-Blanco (Art. 27-28)
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
          Archivage Légal ≥ 5 Ans
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs mb-4">
        <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200">
          <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">A</span>
          <strong className="block text-sky-950 font-extrabold text-[11px]">Attributable</strong>
          <span className="text-[9.5px] text-slate-500">Auteur identifié (visa)</span>
        </div>

        <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200">
          <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">L</span>
          <strong className="block text-cyan-950 font-extrabold text-[11px]">Lisible</strong>
          <span className="text-[9.5px] text-slate-500">Encre indélébile</span>
        </div>

        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">C</span>
          <strong className="block text-emerald-950 font-extrabold text-[11px]">Contemporain</strong>
          <span className="text-[9.5px] text-slate-500">En direct (temps réel)</span>
        </div>

        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
          <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">O</span>
          <strong className="block text-amber-950 font-extrabold text-[11px]">Original</strong>
          <span className="text-[9.5px] text-slate-500">Document primaire direct</span>
        </div>

        <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 col-span-2 sm:col-span-1">
          <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">A+</span>
          <strong className="block text-purple-950 font-extrabold text-[11px]">Exact</strong>
          <span className="text-[9.5px] text-slate-500">Fidèle & complet</span>
        </div>
      </div>

      {/* Interactive Correction Demo Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-slate-800">
            Démonstration Visuelle : Comment Corriger une Erreur sur Registre ?
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDemoState('bad')}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition ${
                demoState === 'bad' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-rose-700 border-rose-300'
              }`}
            >
              ✖ Erreur : Blanco / Rature
            </button>
            <button
              type="button"
              onClick={() => setDemoState('good')}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition ${
                demoState === 'good' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-700 border-emerald-300'
              }`}
            >
              ✔ Conforme : Règle ALCOA+
            </button>
          </div>
        </div>

        <div className="p-3 bg-white border rounded-lg font-mono text-xs">
          {demoState === 'bad' ? (
            <div className="text-rose-800 bg-rose-50/70 p-2.5 rounded border border-rose-200">
              Lot <span className="bg-slate-300 text-slate-300 px-2 py-0.5 rounded select-none">XXXXXX</span> <strong>AC124</strong>
              <div className="mt-1 text-[11px] text-rose-700 font-sans font-bold">
                [NON CONFORME EN INSPECTION] : Correcteur blanc (Blanco) utilisé. Texte initial masqué, absence de signature, date et motif. Risque de sanction pour falsification.
              </div>
            </div>
          ) : (
            <div className="text-emerald-900 bg-emerald-50/70 p-2.5 rounded border border-emerald-300">
              Lot <span className="line-through text-rose-600">AB123</span> <strong className="text-slate-900 bg-emerald-100 px-1 rounded">AC124</strong>
              <span className="text-slate-600 text-[11px] font-sans ml-2">
                — <em>(Visa Pharmacien DT Dr. Asma KETTOU, 15/10/2026 - Motif : Erreur de frappe)</em>
              </span>
              <div className="mt-1 text-[11px] text-emerald-800 font-sans font-semibold">
                [CONFORME ALCOA+] : Biffé d'un seul trait fin horizontal. Le texte d'origine demeure lisible. Nouvelle valeur inscrite avec signature, date et motif.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
