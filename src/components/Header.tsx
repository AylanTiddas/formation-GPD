import React from 'react';
import {
  LayoutGrid,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Mic,
  Printer,
  Maximize,
  Download,
  ShieldCheck,
  Check
} from 'lucide-react';
import { Slide } from '../types/presentation';
import { formatSecondsToHms } from '../utils/timer';
import { downloadStandaloneHtmlFile } from '../utils/htmlGenerator';

interface HeaderProps {
  currentSlide: Slide;
  totalSlides: number;
  remainingSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onToggleDrawer: () => void;
  onToggleSpeakerNotes: () => void;
  onToggleFullScreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  remainingSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  onToggleDrawer,
  onToggleSpeakerNotes,
  onToggleFullScreen
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  const handleDownload = () => {
    downloadStandaloneHtmlFile();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <header className="h-16 px-4 sm:px-6 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm flex items-center justify-between z-30 shrink-0">
      {/* Left: Branding & Module Drawer Button */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onToggleDrawer}
          className="p-2 rounded-xl bg-hydra-50 hover:bg-hydra-100 text-hydra-800 border border-hydra-200 transition flex items-center gap-2 shadow-xs"
          title="Sommaire des 13 Modules"
          aria-label="Ouvrir le sommaire des modules"
        >
          <LayoutGrid className="w-4 h-4 text-hydra-600" />
          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline text-hydra-900">13 Modules</span>
        </button>

        <div className="h-7 w-[1px] bg-slate-200 hidden md:block"></div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-hydra-800 via-hydra-600 to-pharma-500 flex items-center justify-center shadow-xs font-black text-white text-xs tracking-tighter shrink-0">
            ABC
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-hydra-900 whitespace-nowrap">SPA ABC MED</span>
              <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full bg-hydra-50 text-hydra-700 border border-hydra-200 hidden md:inline-block">
                Groupe Hydrapharm
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">
              Par <strong className="text-pharma-700 font-semibold">Boussad Tamazirt</strong> — RQ
            </p>
          </div>
        </div>
      </div>

      {/* Center: Current Module & Pacing Indicator */}
      <div className="hidden xl:flex items-center gap-3 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
        <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pharma-50 text-pharma-700 border border-pharma-200">
          {currentSlide.module}
        </span>
        <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-hydra-600" />
          Rythme 2h : <strong className="text-hydra-900">{currentSlide.pacing}</strong>
        </span>
      </div>

      {/* Right: Live 2-Hour Timer & Tools */}
      <div className="flex items-center gap-2">
        {/* 2H Session Timer */}
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isTimerRunning ? 'bg-pharma-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-hydra-900">
              {formatSecondsToHms(remainingSeconds)}
            </span>
          </div>
          <button
            type="button"
            onClick={onToggleTimer}
            className="p-1 hover:bg-slate-200/80 rounded text-slate-600 hover:text-hydra-900 transition"
            title={isTimerRunning ? "Mettre en pause (2h)" : "Démarrer le chronomètre (2h)"}
            aria-label={isTimerRunning ? "Mettre en pause le chronomètre" : "Démarrer le chronomètre"}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={onResetTimer}
            className="p-1 hover:bg-slate-200/80 rounded text-slate-400 hover:text-hydra-900 transition"
            title="Réinitialiser à 02:00:00"
            aria-label="Réinitialiser le chronomètre à 2 heures"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Download Standalone HTML Single-File Button */}
        <button
          type="button"
          onClick={handleDownload}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition shadow-xs ${
            downloaded
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-hydra-600 hover:bg-hydra-700 text-white border-hydra-600'
          }`}
          title="Télécharger le fichier unique HTML autonome sans erreurs"
        >
          {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
          <span className="hidden lg:inline">{downloaded ? 'Téléchargé !' : 'Fichier HTML Unique'}</span>
        </button>

        {/* Formateur Guide 2H */}
        <button
          type="button"
          onClick={onToggleSpeakerNotes}
          className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
          title="Guide & Timing Formateur (Touche N)"
          aria-label="Ouvrir le guide formateur"
        >
          <Mic className="w-3.5 h-3.5 text-amber-700" />
          <span className="hidden md:inline">Guide 2h</span>
        </button>

        {/* Print / Export PDF */}
        <button
          type="button"
          onClick={() => window.print()}
          className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition"
          title="Imprimer ou Exporter en PDF"
          aria-label="Imprimer la présentation"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen */}
        <button
          type="button"
          onClick={onToggleFullScreen}
          className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition"
          title="Plein Écran (Touche F)"
          aria-label="Basculer en plein écran"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
