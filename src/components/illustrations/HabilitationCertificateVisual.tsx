import React from 'react';
import { Award, Stamp, CheckSquare } from 'lucide-react';

interface HabilitationCertificateVisualProps {
  onZoom?: () => void;
}

export const HabilitationCertificateVisual: React.FC<HabilitationCertificateVisualProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full bg-white border-4 border-slate-900 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher le certificat en plein écran"
    >
      {/* Inner thin black border simulating original scanned document image (2).png */}
      <div className="border border-slate-900 p-4 sm:p-5 rounded-lg bg-white relative">
        {/* Title */}
        <div className="text-center pb-3 border-b-2 border-slate-900 mb-4">
          <h3 className="text-base sm:text-xl font-black tracking-widest text-slate-950 uppercase">
            CERTIFICAT D'HABILITATION AU POSTE
          </h3>
          <p className="text-[11px] text-slate-600 font-semibold mt-0.5">
            Document Réglementaire Obligatoire • Article 17 du Cahier des Charges & Chapitre 10 BPDG
          </p>
        </div>

        {/* Checkbox Rows matching image (2).png */}
        <div className="space-y-3 mb-5 text-xs sm:text-sm text-slate-900 font-bold">
          {/* Row 1: 1ère Habilitation vs Réhabilitation */}
          <div className="flex items-center justify-around py-1.5 px-3 bg-slate-50 border border-slate-300 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-900 rounded-xs flex items-center justify-center font-black text-xs text-slate-900 bg-white">
                ✔
              </span>
              <span className="tracking-wide">1<sup>ÈRE</sup> HABILITATION</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-900 rounded-xs flex items-center justify-center font-black text-xs bg-white"></span>
              <span className="tracking-wide">REHABILITATION</span>
            </label>
          </div>

          {/* Row 2: Nouveau recru / Changement / Retour */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 px-3 bg-slate-50 border border-slate-300 rounded-lg text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="tracking-wide">Nouveau recru</span>
              <span className="w-4 h-4 border-2 border-slate-900 rounded-xs flex items-center justify-center font-black text-xs text-slate-900 bg-white">
                ✔
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="tracking-wide">Changement de poste</span>
              <span className="w-4 h-4 border-2 border-slate-900 rounded-xs flex items-center justify-center font-black text-xs bg-white"></span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="tracking-wide">Retour au poste</span>
              <span className="w-4 h-4 border-2 border-slate-900 rounded-xs flex items-center justify-center font-black text-xs bg-white"></span>
            </label>
          </div>
        </div>

        {/* Name and Position Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-xs sm:text-sm font-semibold text-slate-900">
          <div className="border-b-2 border-dotted border-slate-400 pb-1 flex items-baseline gap-2">
            <span className="font-bold text-slate-700">Nom & Prénom :</span>
            <span className="font-extrabold text-slate-900 text-sm">Collaborateur(trice) SPA ABC MED</span>
          </div>
          <div className="border-b-2 border-dotted border-slate-400 pb-1 flex items-baseline gap-2">
            <span className="font-bold text-slate-700">Poste :</span>
            <span className="font-extrabold text-slate-900 text-sm">Opérateur Logistique / ADV / Qualité</span>
          </div>
        </div>

        {/* Central Official Attestation Paragraph */}
        <div className="p-3.5 bg-slate-50 border border-slate-300 rounded-xl mb-6 text-slate-900 text-xs sm:text-sm leading-relaxed text-center font-medium">
          « Ce document atteste que la personne nommée ci-dessus a <strong>terminée toutes les formations qualifiantes au poste avec succès</strong> et a la compétence pour accomplir ses tâches.<br />
          <strong className="text-slate-950 font-black">Ce document certifie l'autorisation de prise de fonction.</strong> »
        </div>

        {/* Approval & Rubber Stamp */}
        <div className="flex flex-wrap items-end justify-between pt-2 border-t-2 border-slate-900 gap-4 text-xs">
          <div className="space-y-1 text-slate-900 font-semibold">
            <div className="font-black text-slate-950">Approbation (Responsable hiérarchique ) :</div>
            <div>Nom & prénom : <span className="font-bold">Dr. Asma KETTOU (Pharmacien DT)</span></div>
            <div>Date & Visa : <span className="font-mono font-bold">19/10/2026 — ✍️ Validé</span></div>
          </div>

          {/* Authentic Blue Stamp ORIGINAL */}
          <div className="border-2 border-blue-600 text-blue-700 px-4 py-1.5 rounded font-serif font-black tracking-widest uppercase text-sm transform -rotate-3 select-none shadow-2xs">
            ORIGINAL
          </div>
        </div>
      </div>
    </div>
  );
};
