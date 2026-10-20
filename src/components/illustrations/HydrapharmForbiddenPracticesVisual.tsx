import React from 'react';
import { Ban, AlertCircle } from 'lucide-react';

interface HydrapharmForbiddenPracticesVisualProps {
  onZoom?: () => void;
}

export const HydrapharmForbiddenPracticesVisual: React.FC<HydrapharmForbiddenPracticesVisualProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full bg-white border border-slate-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher en plein écran"
    >
      {/* Official Document Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b-2 border-slate-800 mb-4 gap-2">
        {/* Hydrapharm Group Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-600 flex items-center justify-center p-1 bg-white shrink-0">
            <div className="w-4 h-4 rounded-full border-2 border-slate-800 border-t-cyan-500"></div>
          </div>
          <div>
            <div className="font-black text-xs tracking-tight text-slate-900 leading-none">
              HYDRAPHARM
            </div>
            <div className="text-[9px] font-bold text-cyan-700 tracking-widest leading-none">
              GROUP
            </div>
          </div>
        </div>

        {/* Center Title */}
        <div className="text-center flex-1 min-w-[200px] px-2">
          <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-wider uppercase">
            EXEMPLES DE PRATIQUES INTERDITES
          </h3>
          <span className="text-[10px] text-slate-500 font-semibold block">
            Bonnes Pratiques Documentaires (BPD) • Intégrité ALCOA+
          </span>
        </div>

        {/* Meta Box (Top Right) */}
        <div className="text-[9.5px] font-mono border border-slate-300 rounded p-1.5 bg-slate-50 text-slate-700 leading-tight shrink-0 text-left">
          <div><strong className="text-slate-900">CODE :</strong> ENR.01.[PR.2.AQ.014].1</div>
          <div><strong className="text-slate-900">DATE D'APPLICATION :</strong> 11/10/2026</div>
          <div><strong className="text-slate-900">DATE DE RÉVISION :</strong> 11/10/2029</div>
          <div><strong className="text-slate-900">PAGE :</strong> 1/1</div>
        </div>
      </div>

      {/* 3x3 Grid of 9 Prohibited Practices matching uploaded image (8).PNG */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
        {/* 1. Pas de Post-It */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Post-it stickers graphic */}
            <div className="w-12 h-10 bg-yellow-200 border border-yellow-300 shadow-xs transform -rotate-3 rounded-xs flex items-center justify-center">
              <span className="text-[8px] text-yellow-800 font-serif">Note...</span>
            </div>
            <div className="w-10 h-9 bg-yellow-300 border border-yellow-400 shadow-xs transform rotate-6 rounded-xs absolute top-1 right-2 opacity-85"></div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">Pas de Post-It</span>
        </div>

        {/* 2. Pas de crayon */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Pencil graphic */}
            <div className="w-14 h-2 bg-amber-400 border border-amber-600 transform -rotate-45 relative rounded-xs">
              <div className="w-2.5 h-2 bg-slate-800 absolute right-0"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full absolute -left-1"></div>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">Pas de crayon</span>
        </div>

        {/* 3. Pas de Correcteur */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Tipp-Ex bottle graphic */}
            <div className="w-8 h-10 bg-white border border-slate-400 rounded-sm shadow-xs flex flex-col items-center p-0.5">
              <div className="w-3 h-2 bg-blue-700 rounded-xs mb-0.5"></div>
              <div className="w-full h-3 bg-red-600 text-[6px] text-white font-bold text-center leading-3">BLANCO</div>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">Pas de Correcteur</span>
        </div>

        {/* 4. Ne pas laisser d'espace blanc non renseigné */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Blank box graphic */}
            <div className="w-14 h-7 bg-white border-2 border-slate-300 rounded flex items-center justify-center">
              <span className="text-[7.5px] text-slate-300 italic">[zone vide]</span>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1 leading-tight">
            Ne pas laisser d'espace blanc non renseigné
          </span>
        </div>

        {/* 5. Pas de Marqueurs fluorescents */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Highlighters graphic */}
            <div className="flex flex-col gap-0.5">
              <div className="w-12 h-2.5 bg-yellow-400 rounded-xs border border-yellow-600 shadow-2xs"></div>
              <div className="w-12 h-2.5 bg-emerald-400 rounded-xs border border-emerald-600 shadow-2xs"></div>
              <div className="w-12 h-2.5 bg-pink-400 rounded-xs border border-pink-600 shadow-2xs"></div>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">
            Pas de Marqueurs fluorescents
          </span>
        </div>

        {/* 6. Pas de Surcharge */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            {/* Overwritten text graphic */}
            <div className="relative">
              <span className="text-sm font-black text-slate-900 tracking-tight">co</span>
              <span className="text-sm font-black text-slate-700 tracking-tighter opacity-80">rre</span>
              <span className="text-sm font-black text-slate-900 absolute left-2 -top-0.5">cti</span>
              <span className="text-sm font-black text-slate-800">on</span>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">Pas de Surcharge</span>
        </div>

        {/* 7. Ne pas utiliser les accolades */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1 text-[8px] font-sans">
            <div className="flex items-center gap-1">
              <div className="flex flex-col text-slate-700 text-left leading-tight">
                <span>ASPARTAM</span>
                <span>Méglumine</span>
                <span>Lactose</span>
              </div>
              <span className="text-lg text-slate-900 font-light">{"}"}</span>
              <span className="text-[7.5px] font-bold text-slate-900">Excipients</span>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">
            Ne pas utiliser les accolades
          </span>
        </div>

        {/* 8. Pas de Ratures */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1">
            <div className="relative font-bold text-slate-700 text-xs">
              <span>TAILLE DE</span>
              <span className="inline-block px-1 bg-black text-black select-none rounded-xs ml-1">██████</span>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1">Pas de Ratures</span>
        </div>

        {/* 9. Ne pas utiliser les signes de répétition */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-between text-center min-h-[110px] relative overflow-hidden group-hover:border-rose-300 transition">
          <div className="relative w-16 h-12 flex items-center justify-center my-1 text-center">
            <div className="border border-slate-300 p-1 bg-white rounded text-[8px] font-bold text-slate-800">
              <div>LOT CONFORME</div>
              <div className="text-xs font-mono font-black text-slate-600">" "</div>
            </div>
            {/* Prohibition Slash */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-rose-600 flex items-center justify-center relative">
                <div className="w-[3px] h-12 bg-rose-600 transform rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <span className="text-xs font-black text-slate-900 mt-1 leading-tight">
            Ne pas utiliser les signes de répétition
          </span>
        </div>
      </div>

      {/* Footer with Authentic ORIGINAL Rubber Stamp */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
        <div className="inline-block border-2 border-blue-600 text-blue-700 px-3 py-1 rounded font-serif font-black tracking-widest uppercase text-xs transform -rotate-2 select-none shadow-2xs">
          ORIGINAL
        </div>
        <div className="text-[11px] text-slate-500 font-medium">
          Source : Procédure Opérationnelle Hydrapharm Group • Règle ALCOA+
        </div>
      </div>
    </div>
  );
};
