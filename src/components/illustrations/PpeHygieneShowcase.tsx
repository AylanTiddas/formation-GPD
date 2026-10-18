import React from 'react';

export const PpeHygieneShowcase: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-hydra-600"></span>
          Équipements de Protection Individuelle (EPI) & Interdictions Formelles (Art. 8 & Chap. 10)
        </span>
        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
          Zéro Tolérance en Zone de Stockage
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: EPI Pack */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5">
          <span className="text-xs font-black text-hydra-800 uppercase block">
            ✔ Panoplie Réglementaire de l'Opérateur en Entrepôt :
          </span>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-hydra-100 text-hydra-700 font-bold text-xs flex items-center justify-center">1</span>
              <div>
                <strong className="text-slate-800 block text-[11px]">Chasuble</strong>
                <span className="text-[9.5px] text-slate-500">Haute visibilité</span>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-hydra-100 text-hydra-700 font-bold text-xs flex items-center justify-center">2</span>
              <div>
                <strong className="text-slate-800 block text-[11px]">Casque</strong>
                <span className="text-[9.5px] text-slate-500">Protection chute</span>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-hydra-100 text-hydra-700 font-bold text-xs flex items-center justify-center">3</span>
              <div>
                <strong className="text-slate-800 block text-[11px]">Chaussures</strong>
                <span className="text-[9.5px] text-slate-500">Sécurité coquées</span>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-hydra-100 text-hydra-700 font-bold text-xs flex items-center justify-center">4</span>
              <div>
                <strong className="text-slate-800 block text-[11px]">Gants adaptés</strong>
                <span className="text-[9.5px] text-slate-500">Thermiques / manutention</span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-[11px] text-emerald-800 font-medium">
            ✔ <strong>Habilitation écrite requise (Art. 17) :</strong> Tout opérateur doit être formé et porteur de son autorisation nominative visée par le PDT.
          </div>
        </div>

        {/* Right: 6 Strict Prohibitions */}
        <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-3.5 space-y-2.5">
          <span className="text-xs font-black text-rose-800 uppercase block">
            ✖ 6 Interdictions Formelles en Zones de Stockage & Préparation :
          </span>

          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Manger</strong> des aliments</span>
            </div>
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Boire</strong> (sauf fontaine dédiée)</span>
            </div>
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Fumer ou vapoter</strong></span>
            </div>
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Mâcher</strong> chewing-gums</span>
            </div>
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Médicaments personnels</strong></span>
            </div>
            <div className="p-1.5 bg-white rounded border border-rose-200 flex items-center gap-1.5">
              <span className="text-rose-600 font-black">✖</span>
              <span><strong>Sacs, plantes & animaux</strong></span>
            </div>
          </div>

          <p className="text-[10px] text-rose-700 italic">
            Les vestiaires, réfectoires et toilettes doivent être physiquement séparés des aires de manutention et stockage (Art. 8).
          </p>
        </div>
      </div>
    </div>
  );
};
