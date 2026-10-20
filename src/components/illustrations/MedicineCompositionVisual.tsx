import React from 'react';
import { Pill, Sparkles, HeartPulse, ShieldCheck, Stethoscope, Eye, Syringe } from 'lucide-react';

export const MedicineCompositionVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left: What is a medicine made of? */}
        <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5 pb-2 border-b border-slate-200">
            <Pill className="w-4 h-4 text-sky-600" />
            De Quoi est Composé un Médicament ?
          </h4>

          <div className="space-y-2 text-xs">
            {/* Active Substance */}
            <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-950 flex items-center justify-between">
              <div>
                <span className="font-extrabold block text-xs">1. Substance(s) Active(s) (PAP)</span>
                <span className="text-[11px] text-sky-800">Molécule qui produit l'effet thérapeutique (guérir, soigner).</span>
              </div>
              <span className="text-[10px] font-bold bg-sky-200 text-sky-900 px-2 py-0.5 rounded shrink-0">Action</span>
            </div>

            {/* Excipients */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center justify-between">
              <div>
                <span className="font-extrabold block text-xs">2. Excipients</span>
                <span className="text-[11px] text-emerald-800">Substances inertes assurant forme, goût, conservation et assimilation.</span>
              </div>
              <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded shrink-0">Support</span>
            </div>

            {/* Conditionnement */}
            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 flex items-center justify-between">
              <div>
                <span className="font-extrabold block text-xs">3. Articles de Conditionnement</span>
                <span className="text-[11px] text-amber-800">Primaire (contact : blister, flacon) & Secondaire (boîte carton avec étiquetage légal).</span>
              </div>
              <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded shrink-0">Protection</span>
            </div>
          </div>
        </div>

        {/* Right: What are the 4 roles of a medicine? */}
        <div className="md:col-span-6 bg-gradient-to-br from-slate-900 to-hydra-950 text-white rounded-xl p-4 space-y-3 shadow-xs">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5 pb-2 border-b border-white/20">
            <HeartPulse className="w-4 h-4 text-amber-300" />
            Quel est le Rôle d'un Médicament ? (4 Finalités)
          </h4>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-white/10 border border-white/10">
              <span className="text-amber-300 font-extrabold block text-xs">✔ Soigner</span>
              <p className="text-[10.5px] text-slate-200 mt-0.5">Guérir une infection ou traiter une maladie.</p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/10 border border-white/10">
              <span className="text-cyan-300 font-extrabold block text-xs">✔ Soulager</span>
              <p className="text-[10.5px] text-slate-200 mt-0.5">Atténuer la douleur, la fièvre ou les symptômes.</p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/10 border border-white/10">
              <span className="text-emerald-300 font-extrabold block text-xs">✔ Prévenir</span>
              <p className="text-[10.5px] text-slate-200 mt-0.5">Vaccins et traitements prophylactiques.</p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/10 border border-white/10">
              <span className="text-purple-300 font-extrabold block text-xs">✔ Diagnostiquer</span>
              <p className="text-[10.5px] text-slate-200 mt-0.5">Produits de contraste et tests radiologiques.</p>
            </div>
          </div>

          <div className="pt-2 border-t border-white/20 text-[11px] text-slate-300 font-medium">
            💡 <strong>Rappel éthique :</strong> Le médicament est destiné à des <strong>personnes vulnérables</strong> (enfants, malades, aînés). Rigueur, conscience et honnêteté sont obligatoires.
          </div>
        </div>
      </div>
    </div>
  );
};
