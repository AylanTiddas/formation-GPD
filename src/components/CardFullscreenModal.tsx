import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface CardFullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  category?: string;
  currentIndex?: number;
  totalCount?: number;
  onNext?: () => void;
  onPrev?: () => void;
  children: React.ReactNode;
}

export const CardFullscreenModal: React.FC<CardFullscreenModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  badge = "Document Officiel BPDG",
  category,
  currentIndex,
  totalCount,
  onNext,
  onPrev,
  children
}) => {
  // Handle keyboard events: Escape to close, ArrowLeft for prev, ArrowRight for next
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowRight' && onNext) {
      e.preventDefault();
      onNext();
    } else if (e.key === 'ArrowLeft' && onPrev) {
      e.preventDefault();
      onPrev();
    }
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 md:p-6 transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-300/80 overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {badge}
                </span>
                {category && (
                  <span className="text-[10px] font-bold text-sky-300 hidden sm:inline">
                    • {category}
                  </span>
                )}
                {typeof currentIndex === 'number' && typeof totalCount === 'number' && (
                  <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                    Illustration {currentIndex + 1} / {totalCount}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-black tracking-tight text-white truncate mt-0.5">
                {title}
              </h3>
            </div>
          </div>

          {/* Quick Help & Close Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-300 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
              <span>Naviguer :</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 font-mono text-[10px] text-slate-200 border border-white/20">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 font-mono text-[10px] text-slate-200 border border-white/20">→</kbd>
              <span className="ml-1">Fermer :</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 font-mono text-[10px] text-slate-200 border border-white/20">Échap</kbd>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-rose-600/80 text-slate-200 hover:text-white transition border border-white/10 flex items-center gap-1 text-xs font-bold"
              title="Fermer la vue plein écran (Touche Échap)"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-semibold">Fermer</span>
            </button>
          </div>
        </div>

        {/* Modal Body / Visual Display with side navigation arrows */}
        <div className="relative flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-50 flex items-center justify-center min-h-[300px]">
          {/* Previous Arrow Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white shadow-xl flex items-center justify-center transition border border-white/20 backdrop-blur-sm group"
              title="Illustration précédente (Flèche Gauche)"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Next Arrow Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white shadow-xl flex items-center justify-center transition border border-white/20 backdrop-blur-sm group"
              title="Illustration suivante (Flèche Droite)"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Main Content Render */}
          <div className="w-full max-w-4xl mx-auto my-auto py-2">
            {children}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 shrink-0 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-800">
              {subtitle || "Support officiel de formation BPDG • SPA ABC MED"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {typeof currentIndex === 'number' && typeof totalCount === 'number' && (
              <span className="font-mono text-slate-500 font-bold">
                {currentIndex + 1} / {totalCount}
              </span>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition border border-slate-300"
            >
              Retour à la diapositive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
