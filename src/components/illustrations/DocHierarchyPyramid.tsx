import React from 'react';
import { Layers, ShieldCheck, FileText } from 'lucide-react';

interface DocHierarchyPyramidProps {
  onZoom?: () => void;
}

export const DocHierarchyPyramid: React.FC<DocHierarchyPyramidProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full bg-white border border-slate-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher la pyramide SMQ en plein écran"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-700" />
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            Pyramide Documentaire Officielle du SMQ
          </h3>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
          Système Documentaire • BPDG 2026
        </span>
      </div>

      {/* The 5-Tiers Pyramid Layout matching user attachment image (4).png */}
      <div className="space-y-2.5 max-w-2xl mx-auto py-2">
        {/* Tier 1: MQ */}
        <div className="flex items-stretch gap-2 max-w-sm mx-auto">
          <div className="w-36 bg-[#5b3780] text-white py-2.5 px-3 rounded-l-xl font-black text-sm flex items-center justify-center shadow-xs border-r-2 border-white/40">
            MQ
          </div>
          <div className="flex-1 bg-white border-2 border-[#5b3780] py-2 px-3 rounded-r-xl flex items-center shadow-xs relative">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
              Décrit le SMQ
            </span>
          </div>
        </div>

        {/* Tier 2: Procédures */}
        <div className="flex items-stretch gap-2 max-w-md mx-auto">
          <div className="w-40 bg-[#65a30d] text-white py-2.5 px-3 rounded-l-xl font-black text-xs sm:text-sm flex items-center justify-center shadow-xs border-r-2 border-white/40">
            Procédures
          </div>
          <div className="flex-1 bg-white border-2 border-[#65a30d] py-2 px-3 rounded-r-xl flex items-center shadow-xs">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
              Décrivent les processus
            </span>
          </div>
        </div>

        {/* Tier 3: IN / Mode opératoire */}
        <div className="flex items-stretch gap-2 max-w-lg mx-auto">
          <div className="w-48 bg-[#ea580c] text-white py-2.5 px-3 rounded-l-xl font-black text-xs sm:text-sm flex items-center justify-center text-center shadow-xs border-r-2 border-white/40">
            IN/ Mode opératoire
          </div>
          <div className="flex-1 bg-white border-2 border-[#ea580c] py-2 px-3 rounded-r-xl flex items-center shadow-xs">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
              Décrivent les activités, les taches
            </span>
          </div>
        </div>

        {/* Tier 4: Formulaires */}
        <div className="flex items-stretch gap-2 max-w-xl mx-auto">
          <div className="w-52 bg-[#991b1b] text-white py-2.5 px-3 rounded-l-xl font-black text-xs sm:text-sm flex items-center justify-center shadow-xs border-r-2 border-white/40">
            Formulaires
          </div>
          <div className="flex-1 bg-white border-2 border-[#991b1b] py-2 px-3 rounded-r-xl flex items-center shadow-xs">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
              Servent de supports aux enregistrements
            </span>
          </div>
        </div>

        {/* Tier 5: Enregistrements */}
        <div className="flex items-stretch gap-2 w-full">
          <div className="w-56 bg-[#0284c7] text-white py-3 px-3 rounded-l-xl font-black text-xs sm:text-sm flex items-center justify-center shadow-xs border-r-2 border-white/40">
            Enregistrements
          </div>
          <div className="flex-1 bg-white border-2 border-[#0284c7] py-2 px-3 rounded-r-xl flex items-center shadow-xs">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
              Fournissent la preuve du fonctionnement du SMQ
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Golden Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-200 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span><strong>Règle d'or :</strong> Ce qui n'est pas écrit n'existe pas.</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-sky-600 shrink-0" />
          <span><strong>Conservation légale :</strong> Minimum <strong>5 ans</strong> sous clé / sécurisé.</span>
        </div>
      </div>
    </div>
  );
};
