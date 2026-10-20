import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, Search } from 'lucide-react';

interface CoartemFakeVsRealVisualProps {
  onZoom?: () => void;
}

export const CoartemFakeVsRealVisual: React.FC<CoartemFakeVsRealVisualProps> = ({ onZoom }) => {
  return (
    <div
      className="w-full bg-slate-100 border border-slate-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher la comparaison réelle en plein écran"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-300 mb-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            Cas Réel de Médicament Falsifié : Coartem® 20/120 mg
          </span>
          <span className="text-[10px] text-slate-500 font-semibold block">
            Comparaison visuelle terrain • Chapitre 8 Guide ANPP & Art. 25
          </span>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
          Vigilance Anti-Contrefaçon
        </span>
      </div>

      {/* Realistic photographic comparison container rotated matching image (9).png */}
      <div className="relative w-full max-w-lg mx-auto py-6 px-2 flex flex-col items-center justify-center min-h-[300px]">
        {/* Angled container holding the two boxes */}
        <div className="relative w-full max-w-md transform -rotate-12 transition-transform group-hover:rotate-0 duration-500">
          
          {/* Top Box: FAUX */}
          <div className="relative mb-6 transform translate-x-4">
            {/* White Label with FAUX text */}
            <div className="absolute -top-3 left-12 z-20 bg-white border border-slate-400 px-4 py-1 shadow-md">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider">
                FAUX
              </span>
            </div>

            {/* The Counterfeit Box */}
            <div className="w-72 sm:w-80 h-28 bg-[#fef08a] border-2 border-yellow-400 rounded shadow-lg p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-sans font-black text-base text-slate-900">
                    Coartem<sup className="text-[8px]">®</sup> <span className="text-rose-600 font-black">20/120</span>
                  </div>
                  <div className="text-[8px] text-slate-600 italic">artemether, lumefantrine</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-black tracking-widest text-slate-800">NOVARTIS</div>
                </div>
              </div>
              <div className="flex items-end justify-between text-[8px] text-slate-600 border-t border-yellow-300 pt-1">
                <span>24 compr. 20/120 mg</span>
                <span className="text-[7.5px] text-rose-700 font-bold bg-rose-50 px-1 rounded">Teinte délavée • Police floue</span>
              </div>
            </div>
          </div>

          {/* Bottom Box: VRAI */}
          <div className="relative transform -translate-x-4">
            {/* White Label with VRAI text */}
            <div className="absolute -top-3 left-12 z-20 bg-white border border-slate-400 px-4 py-1 shadow-md">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider">
                VRAI
              </span>
            </div>

            {/* The Authentic Box */}
            <div className="w-72 sm:w-80 h-28 bg-gradient-to-r from-amber-400 to-orange-500 border-2 border-orange-600 rounded shadow-xl p-3 flex flex-col justify-between relative overflow-hidden text-slate-950">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-sans font-black text-base text-slate-950">
                    Coartem<sup className="text-[8px]">®</sup> <span className="text-rose-700 font-black">20/120</span>
                  </div>
                  <div className="text-[8.5px] text-slate-800 font-medium italic">artemether, lumefantrine</div>
                </div>
                <div className="text-right">
                  <div className="text-[9.5px] font-black tracking-widest text-slate-900">NOVARTIS</div>
                </div>
              </div>
              <div className="flex items-end justify-between text-[8.5px] text-slate-900 font-bold border-t border-orange-400/80 pt-1">
                <span>24 compr. 20/120 mg</span>
                <span className="text-[8px] text-emerald-950 bg-emerald-100 px-1.5 py-0.5 rounded font-black">Teinte orange vive • Impression nette</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Key Detection Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-200 text-xs">
        <div className="p-2 rounded-lg bg-white border border-slate-200">
          <strong className="text-rose-700 block">1. Altération chromatique :</strong>
          <span className="text-[11px] text-slate-600">Le faux présente une couleur jaune pâle au lieu du orange chaud d'origine.</span>
        </div>
        <div className="p-2 rounded-lg bg-white border border-slate-200">
          <strong className="text-rose-700 block">2. Typographie & Alignement :</strong>
          <span className="text-[11px] text-slate-600">Bavures d'encrage et graisse de police non conforme au standard fabricant.</span>
        </div>
        <div className="p-2 rounded-lg bg-white border border-slate-200">
          <strong className="text-emerald-700 block">3. Réflexe d'urgence :</strong>
          <span className="text-[11px] text-slate-600">Isolement immédiat en zone sous clé + notification &lt; 1h au PDT et à l'ANPP.</span>
        </div>
      </div>
    </div>
  );
};
