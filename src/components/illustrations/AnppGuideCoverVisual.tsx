import React from 'react';
import { BookOpen, ShieldCheck, Award } from 'lucide-react';

interface AnppGuideCoverVisualProps {
  onZoom?: () => void;
}

export const AnppGuideCoverVisual: React.FC<AnppGuideCoverVisualProps> = ({ onZoom }) => {
  return (
    <div
      className="w-full bg-[#4e8d35] rounded-2xl p-6 sm:p-8 text-white shadow-lg font-sans select-none relative overflow-hidden transition-all hover:brightness-105 cursor-pointer group border-4 border-[#3e742a]"
      onClick={onZoom}
      title="Cliquer pour afficher la couverture officielle en plein écran"
    >
      {/* Subtle background lines styling from original image */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0%" x2="100%" y2="80%" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="30%" y1="0%" x2="100%" y2="70%" stroke="#ffffff" strokeWidth="1" />
          <line x1="40%" y1="0%" x2="100%" y2="60%" stroke="#ffffff" strokeWidth="3" />
        </svg>
      </div>

      {/* Top Seals Row */}
      <div className="flex items-start justify-between mb-8 relative z-10">
        {/* Left: Algerian Ministerial Seal in Red / Green */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-red-600 bg-white/10 p-1 flex items-center justify-center text-center shadow-xs">
          <div className="w-full h-full rounded-full border border-red-500 flex flex-col items-center justify-center p-1 text-red-900 bg-white/90">
            <span className="text-[7px] sm:text-[8px] font-black leading-tight text-center">
              وزارة الصناعة الصيدلانية
            </span>
            <div className="w-4 h-4 my-0.5 border border-red-700 rounded-full flex items-center justify-center">
              <span className="text-[7px] text-red-800 font-bold">★</span>
            </div>
            <span className="text-[6.5px] font-bold text-center leading-none text-slate-800">
              MINISTÈRE INDUSTRIE
            </span>
          </div>
        </div>

        {/* Right: Official ANPP Caduceus Emblem */}
        <div className="bg-white/95 rounded-xl p-2.5 text-slate-900 flex items-center gap-2 shadow-sm border border-slate-200">
          <div className="flex flex-col text-right">
            <span className="text-xs sm:text-sm font-black text-emerald-800 font-serif leading-tight">
              الوكالة الوطنية للمواد الصيدلانية
            </span>
            <span className="text-[9.5px] font-bold text-slate-700 leading-tight">
              Agence Nationale des Produits Pharmaceutiques
            </span>
          </div>
          {/* Green Caduceus */}
          <div className="w-9 h-12 flex items-center justify-center border-l-2 border-emerald-600 pl-1.5">
            <svg viewBox="0 0 24 36" className="w-7 h-10 text-emerald-700 fill-current">
              <path d="M12 2 C13 2 14 3 14 4 C14 5 13 6 12 6 C11 6 10 5 10 4 C10 3 11 2 12 2 Z" />
              <rect x="11" y="6" width="2" height="28" fill="#15803d" />
              <path d="M6 10 C12 8, 18 14, 12 18 C6 22, 18 28, 12 32" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Institutional Typography Header */}
      <div className="text-center space-y-1 mb-8 relative z-10 text-slate-950 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
        <p className="tracking-widest">RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE</p>
        <p className="text-slate-900 font-black">MINISTÈRE DE L'INDUSTRIE PHARMACEUTIQUE</p>
        <p className="text-slate-900 font-black tracking-wide">AGENCE NATIONALE DES PRODUITS PHARMACEUTIQUES</p>
      </div>

      {/* Main Official Title in Giant Bold Letters */}
      <div className="text-left max-w-2xl my-8 relative z-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md uppercase">
          GUIDE DES BONNES PRATIQUES DE DISTRIBUTION ET DE STOCKAGE DES PRODUITS PHARMACEUTIQUES ET DES DISPOSITIFS MÉDICAUX À USAGE HUMAIN
        </h1>
      </div>

      {/* Bottom Sub-tag */}
      <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-xs text-white/90 relative z-10 gap-2">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-200" />
          <span className="font-bold">Édition Officielle de Référence 2026 • 19 Chapitres Réglementaires</span>
        </div>
        <span className="px-3 py-1 rounded-full bg-white/20 text-white font-mono text-[11px] font-bold">
          ANPP • ALGER
        </span>
      </div>
    </div>
  );
};
