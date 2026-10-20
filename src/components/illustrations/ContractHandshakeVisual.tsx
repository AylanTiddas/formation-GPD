import React from 'react';
import { Handshake, FileCheck, ShieldCheck } from 'lucide-react';

interface ContractHandshakeVisualProps {
  onZoom?: () => void;
}

export const ContractHandshakeVisual: React.FC<ContractHandshakeVisualProps> = ({ onZoom }) => {
  return (
    <div
      className="w-full bg-[#bfdbfe]/40 border-2 border-sky-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group flex flex-col items-center justify-center min-h-[340px]"
      onClick={onZoom}
      title="Cliquer pour afficher en plein écran"
    >
      {/* Visual illustration of Contract + Handshake matching image (5).png */}
      <div className="relative w-full max-w-md h-64 flex items-center justify-center">
        {/* Background Clipboard */}
        <div className="w-56 h-64 bg-slate-800 rounded-2xl shadow-xl p-2.5 flex flex-col items-center relative">
          {/* Silver clip at top */}
          <div className="w-24 h-6 bg-slate-300 rounded-t-lg border-2 border-slate-400 absolute -top-3 shadow-sm flex items-center justify-center">
            <div className="w-16 h-2 bg-slate-500 rounded-full"></div>
          </div>

          {/* Paper Sheet */}
          <div className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-between shadow-inner">
            {/* Title CONTRAT in red */}
            <div className="text-center pt-2 border-b border-slate-200 pb-2">
              <span className="text-sm font-black text-rose-600 tracking-widest uppercase">
                = CONTRAT =
              </span>
            </div>

            {/* Document lines simulation */}
            <div className="space-y-1.5 px-1 opacity-70">
              <div className="w-full h-1 bg-slate-400 rounded"></div>
              <div className="w-4/5 h-1 bg-slate-400 rounded"></div>
              <div className="w-full h-1 bg-slate-400 rounded"></div>
              <div className="w-3/4 h-1 bg-slate-400 rounded"></div>
              <div className="w-full h-1 bg-slate-400 rounded"></div>
              <div className="w-5/6 h-1 bg-slate-400 rounded"></div>
            </div>

            {/* Signatures & Stamps at bottom of paper */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 px-1">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full border border-sky-500 flex items-center justify-center opacity-80">
                  <div className="w-5 h-5 rounded-full border border-dashed border-sky-600"></div>
                </div>
                <span className="text-[7px] text-slate-500 font-mono italic">Donneur d'ordre</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-serif italic text-xs text-slate-800 font-bold -rotate-6">
                  Approuvé
                </div>
                <span className="text-[7px] text-slate-500 font-mono italic">Sous-traitant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Handshake in foreground */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center z-10 filter drop-shadow-lg pointer-events-none">
          <div className="relative w-72 h-32 flex items-center justify-between">
            {/* Left Arm: Brown suit, white shirt cuff */}
            <div className="flex items-center">
              <div className="w-24 h-16 bg-[#854d0e] rounded-l-2xl border-2 border-[#713f12] flex items-center justify-end pr-1 relative">
                {/* 3 buttons on sleeve */}
                <div className="flex flex-col gap-1 mr-1">
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>
                </div>
                {/* White cuff */}
                <div className="w-3 h-14 bg-white rounded-sm border border-slate-300"></div>
              </div>
              {/* Left Hand (Man) */}
              <div className="w-12 h-10 bg-[#fed7aa] rounded-r-lg border border-[#fdba74] -ml-1"></div>
            </div>

            {/* Right Arm: Vibrant Cyan/Blue jacket (Woman with red nails) */}
            <div className="flex items-center flex-row-reverse -ml-10">
              <div className="w-24 h-16 bg-[#0284c7] rounded-r-2xl border-2 border-[#0369a1] flex items-center justify-start pl-1 relative">
                {/* White cuff */}
                <div className="w-3 h-14 bg-white rounded-sm border border-slate-300"></div>
              </div>
              {/* Right Hand with Red Nail Polish */}
              <div className="w-12 h-10 bg-[#fed7aa] rounded-l-lg border border-[#fdba74] -mr-1 relative">
                <div className="w-2 h-1.5 bg-rose-600 rounded-full absolute top-1 left-1"></div>
                <div className="w-2 h-1.5 bg-rose-600 rounded-full absolute top-3 left-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption description below */}
      <div className="mt-3 text-center">
        <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide flex items-center justify-center gap-1.5">
          <Handshake className="w-4 h-4 text-sky-700" />
          Contrat Écrit Obligatoire & Cahier des Charges Tiers
        </h4>
        <p className="text-[11px] text-slate-600 font-medium mt-0.5">
          Obligation légale (Art. 26-28 & Chap. 14 BPDG) : tout transporteur ou sous-traitant doit être lié par un contrat écrit signé.
        </p>
      </div>
    </div>
  );
};
