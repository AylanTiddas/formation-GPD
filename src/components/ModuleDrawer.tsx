import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Slide } from '../types/presentation';

interface ModuleDrawerProps {
  isOpen: boolean;
  slides: Slide[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const ModuleDrawer: React.FC<ModuleDrawerProps> = ({
  isOpen,
  slides,
  currentIndex,
  onSelectSlide,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 left-0 h-full w-80 sm:w-96 bg-white border-r border-slate-200 shadow-2xl z-50 flex flex-col animate-in slide-in-from-left duration-200"
        role="dialog"
        aria-label="Sommaire de la formation"
      >
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-hydra-50/70 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-hydra-900 text-sm">Sommaire & Rythme (2h)</h3>
            <p className="text-xs text-slate-500">Accès direct aux 25 diapositives — SPA ABC MED</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-hydra-900 transition"
            aria-label="Fermer le sommaire"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scroll">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`w-full text-left p-2.5 rounded-xl transition flex items-start gap-2.5 group border ${
                  isActive
                    ? 'bg-hydra-50/90 border-hydra-300 shadow-xs'
                    : 'hover:bg-slate-50 border-transparent hover:border-slate-200'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                    isActive
                      ? 'bg-hydra-700 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-hydra-100 group-hover:text-hydra-800'
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="overflow-hidden flex-1">
                  <p className={`text-xs font-bold truncate ${isActive ? 'text-hydra-900' : 'text-slate-800'}`}>
                    {slide.title}
                  </p>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] text-slate-500 truncate">{slide.module}</span>
                    <span className="text-[9.5px] font-mono text-hydra-700 font-semibold">{slide.pacing}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};
