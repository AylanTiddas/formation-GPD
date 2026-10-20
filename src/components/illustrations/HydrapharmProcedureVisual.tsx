import React from 'react';
import { FileCheck, Shield, CheckCircle } from 'lucide-react';

interface HydrapharmProcedureVisualProps {
  onZoom?: () => void;
}

export const HydrapharmProcedureVisual: React.FC<HydrapharmProcedureVisualProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full bg-white border border-slate-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher la procédure officielle en plein écran"
    >
      {/* Official Header */}
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
          <h3 className="text-xs sm:text-base font-black text-slate-900 tracking-wider uppercase">
            PROCÉDURE BONNES PRATIQUES DOCUMENTAIRES
          </h3>
          <span className="text-[10px] text-slate-500 font-semibold block">
            Système de Management de la Qualité • Chapitre 4 Guide ANPP
          </span>
        </div>

        {/* Meta Box (Top Right) */}
        <div className="text-[9.5px] font-mono border border-slate-300 rounded p-1.5 bg-slate-50 text-slate-700 leading-tight shrink-0 text-left">
          <div><strong className="text-slate-900">CODE :</strong> PR.2.AQ.014.1</div>
          <div><strong className="text-slate-900">DATE D'APPLICATION :</strong> 11/10/2026</div>
          <div><strong className="text-slate-900">DATE DE RÉVISION :</strong> 11/10/2029</div>
          <div><strong className="text-slate-900">PAGE :</strong> 1/10</div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-3">
        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
          Validation et approbation
        </h4>
      </div>

      {/* Visas and Signatures Table matching user attachment image (6).png */}
      <div className="border border-slate-300 rounded-xl overflow-hidden mb-4 shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 font-black">
              <th className="p-2 sm:p-2.5 border-r border-slate-300 w-28">Phase</th>
              <th className="p-2 sm:p-2.5 border-r border-slate-300">Nom</th>
              <th className="p-2 sm:p-2.5 border-r border-slate-300">Fonction</th>
              <th className="p-2 sm:p-2.5 border-r border-slate-300 w-24 text-center">Date</th>
              <th className="p-2 sm:p-2.5 w-32 text-center">Signature</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-800 text-xs">
            {/* Rédaction */}
            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900 bg-slate-50/50">
                Rédaction
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-extrabold text-slate-900">
                Abderrahmane KHALES
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700">
                Coordinateur Qualité Groupe
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-bold text-slate-800">
                23/09/2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-indigo-900 text-sm tracking-wider">
                  ✍️ A.Khales
                </span>
              </td>
            </tr>

            {/* Validation 1 */}
            <tr className="hover:bg-slate-50 transition">
              <td rowSpan={4} className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900 bg-slate-50/50 align-top">
                Validation
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-extrabold text-slate-900">
                Sarra BOUADDIS
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700">
                Directrice des affaires réglementaires groupe
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-bold text-slate-800">
                24/09/2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-indigo-900 text-sm">
                  ✍️ S.Bouaddis
                </span>
              </td>
            </tr>

            {/* Validation 2 */}
            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-extrabold text-slate-900">
                Wissem ACHOUR
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700">
                Responsable Process Improvement & Transformation
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-bold text-slate-800">
                24.09.2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-indigo-900 text-sm">
                  ✍️ Ach
                </span>
              </td>
            </tr>

            {/* Validation 3 */}
            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-extrabold text-slate-900">
                Taous BEDJAOUI
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700">
                Responsable Qualité Groupe
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-bold text-slate-800">
                27/09/2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-indigo-900 text-sm">
                  ✍️ T.Bedjaoui
                </span>
              </td>
            </tr>

            {/* Validation 4 */}
            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-extrabold text-slate-900">
                Wafa SEMID
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700">
                Vice-Présidente Qualité et Affaires Réglementaires
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-bold text-slate-800">
                28/09/2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-indigo-900 text-sm">
                  ✍️ W.Semid
                </span>
              </td>
            </tr>

            {/* Approbation */}
            <tr className="hover:bg-slate-50 transition bg-emerald-50/20">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-black text-emerald-900 bg-emerald-100/50">
                Approbation
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-black text-slate-900">
                Amar AIT ABDERRAHMANE
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-slate-700 font-semibold">
                DGA Gouvernance et Risques groupe
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-emerald-900">
                29/09/2026
              </td>
              <td className="p-2 sm:p-2.5 text-center">
                <span className="font-serif italic font-black text-emerald-950 text-base">
                  ✍️ Approbation DGA
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Notes */}
      <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 pt-2 border-t border-slate-200">
        <span className="flex items-center gap-1.5 font-bold text-slate-800">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          Circuit de visa obligatoire avant toute diffusion opérationnelle
        </span>
        <span className="font-mono text-slate-500">Conservation légale SMQ ≥ 5 ans</span>
      </div>
    </div>
  );
};
