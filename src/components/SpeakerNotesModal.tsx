import React from 'react';
import { X, Mic } from 'lucide-react';
import { Slide } from '../types/presentation';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  slide: Slide;
  onClose: () => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  slide,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-16 right-6 w-96 max-w-[90vw] bg-white rounded-2xl p-4 shadow-2xl border-2 border-amber-300 z-40 animate-in fade-in slide-in-from-bottom-2 duration-150"
      role="dialog"
      aria-label="Notes du formateur"
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
        <span className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
          <Mic className="w-3.5 h-3.5 text-amber-600" /> Notes Formateur — Boussad Tamazirt
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-800 p-1 rounded-md transition"
          aria-label="Fermer les notes formateur"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs font-mono font-bold text-hydra-700 mb-1.5">
        Timing Recommandé : {slide.pacing}
      </p>
      <div className="bg-amber-50/50 p-2.5 rounded-xl border border-amber-200">
        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {slide.notes}
        </p>
      </div>
    </div>
  );
};
