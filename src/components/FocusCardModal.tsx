import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface FocusCardModalProps {
  isOpen: boolean;
  cardHtml: string;
  cardIndex: number;
  totalCards: number;
  slideTitle: string;
  moduleName: string;
  onNextCard: () => void;
  onPrevCard: () => void;
  onClose: () => void;
}

export const FocusCardModal: React.FC<FocusCardModalProps> = ({
  isOpen,
  cardHtml,
  cardIndex,
  totalCards,
  slideTitle,
  moduleName,
  onNextCard,
  onPrevCard,
  onClose
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        onNextCard();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNextCard, onPrevCard, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150 select-text"
      role="dialog"
      aria-modal="true"
      aria-label="Vue plein écran de la carte"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Side Arrow Left for fast and prominent mouse clicking */}
      {totalCards > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevCard();
          }}
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-60 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-hydra-700 shadow-2xl border border-slate-300 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
          title="Carte précédente (Flèche Gauche ou clic)"
          aria-label="Carte précédente"
        >
          <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-1 text-slate-700 group-hover:text-hydra-700" />
        </button>
      )}

      {/* Floating Side Arrow Right for fast and prominent mouse clicking */}
      {totalCards > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNextCard();
          }}
          className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-60 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-hydra-700 shadow-2xl border border-slate-300 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
          title="Carte suivante (Flèche Droite ou clic)"
          aria-label="Carte suivante"
        >
          <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1 text-slate-700 group-hover:text-hydra-700" />
        </button>
      )}

      {/* Modal Container */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 relative">
        {/* Top Header Bar of the Focus Modal */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="p-1.5 rounded-lg bg-hydra-100 text-hydra-700">
              <Maximize2 className="w-4 h-4" />
            </span>
            <div className="overflow-hidden">
              <span className="text-[10px] font-black uppercase tracking-wider text-hydra-700 block truncate">
                {moduleName} • Vue Plein Écran
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                {slideTitle}
              </h3>
            </div>
          </div>

          {/* Navigation and Close Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Card counter */}
            <span className="font-mono text-xs font-bold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-700 shadow-2xs">
              Carte {cardIndex + 1} / {totalCards}
            </span>

            {/* Header Arrows */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onPrevCard}
                className="p-1.5 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-hydra-900 transition flex items-center gap-1 text-xs font-bold shadow-2xs cursor-pointer"
                title="Carte précédente (Flèche Gauche)"
                aria-label="Carte précédente"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Précédent</span>
              </button>

              <button
                type="button"
                onClick={onNextCard}
                className="p-1.5 sm:px-2.5 rounded-xl bg-hydra-600 hover:bg-hydra-700 text-white transition flex items-center gap-1 text-xs font-bold shadow-2xs cursor-pointer"
                title="Carte suivante (Flèche Droite)"
                aria-label="Carte suivante"
              >
                <span className="hidden sm:inline">Suivant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200 transition cursor-pointer"
              title="Fermer et revenir à la diapositive (Touche Échap)"
              aria-label="Fermer la vue plein écran"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Focused Card with magnified, high-contrast readable typography */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scroll bg-gradient-to-b from-white via-slate-50/40 to-slate-50/80">
          <div
            className="focus-card-content text-slate-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: cardHtml }}
          />
        </div>

        {/* Modal Bottom Keyboard Shortcuts Guide */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 shrink-0 gap-2">
          <span className="flex items-center gap-2">
            <span>Naviguer entre les cartes :</span>
            <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs text-slate-800 font-bold shadow-2xs">←</kbd>
            <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs text-slate-800 font-bold shadow-2xs">→</kbd>
            <span className="text-[11px] text-slate-400 hidden sm:inline">(ou cliquez sur les flèches latérales)</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-hydra-800 hover:text-hydra-900 font-bold hover:underline cursor-pointer"
          >
            <span>Revenir à la diapositive complète :</span>
            <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs text-slate-800 font-bold shadow-2xs">Échap</kbd>
          </button>
        </div>
      </div>
    </div>
  );
};
