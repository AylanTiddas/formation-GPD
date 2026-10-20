import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { calculateProgressPercentage } from '../utils/timer';

interface FooterProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext
}) => {
  const progress = calculateProgressPercentage(currentIndex, totalSlides);

  return (
    <>
      {/* Visual Progress Bar */}
      <div className="w-full h-1.5 bg-slate-200 shrink-0 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-hydra-800 via-hydra-500 to-pharma-500 transition-all duration-300 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>

      <footer className="h-14 px-4 sm:px-6 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Diapositive précédente"
          >
            <ArrowLeft className="w-4 h-4" /> Précédent
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="px-4 py-1.5 rounded-xl bg-hydra-600 hover:bg-hydra-700 text-white text-xs font-extrabold flex items-center gap-1.5 transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Diapositive suivante"
          >
            Suivant <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-hydra-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Diapositive {currentIndex + 1} / {totalSlides} ({progress}%)
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full border border-slate-200">
          <span className="font-semibold text-hydra-800">🔍 Clic sur une carte :</span>
          <span>Plein écran (← → naviguer, Échap quitter)</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Dr. Asma KETTOU (DT) • Boussad Tamazirt (RQ)</span>
          <span className="text-slate-300">|</span>
          <span className="text-hydra-700 font-extrabold">SPA ABC MED (Groupe Hydrapharm)</span>
        </div>
      </footer>
    </>
  );
};
