import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ErrorCorrectionVisualProps {
  onZoom?: () => void;
}

export const ErrorCorrectionVisual: React.FC<ErrorCorrectionVisualProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full bg-white border border-slate-300 rounded-2xl p-4 sm:p-6 shadow-sm font-sans select-none relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
      onClick={onZoom}
      title="Cliquer pour afficher en plein écran"
    >
      {/* Section Header */}
      <div className="pb-3 border-b-2 border-slate-800 mb-4">
        <h3 className="text-base sm:text-lg font-black text-sky-900 tracking-tight flex items-center gap-2">
          <span className="text-sky-700">5.3.</span> Correction des erreurs
        </h3>
        <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
          En cas d'erreur d'écriture, l'écriture <strong className="text-rose-700">Erronée</strong> doit être :
        </p>
        <ul className="text-xs text-slate-700 mt-1 space-y-1 pl-4 list-disc font-medium">
          <li>
            <strong>Barrée proprement d'un seul trait</strong> sans masquer ce qui était écrit et qui doit rester lisible, <strong>Corrigée</strong>,
          </li>
          <li>
            <strong>Datée et signée</strong>, Mettre la mention de l'erreur exemple : <strong>EE</strong> : erreur d'écriture.
          </li>
        </ul>

        {/* Visual Example Banner */}
        <div className="mt-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-sans font-bold">Exemple :</span>
            <span className="line-through text-rose-600 font-bold decoration-2 text-sm">4623</span>
            <span className="text-emerald-700 font-black text-sm">5623</span>
            <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-900 font-bold text-xs border border-sky-300">EE</span>
          </div>
          <div className="text-[11px] text-slate-600 font-sans font-semibold">
            Date, Nom, prénom et signature obligatoire
          </div>
        </div>
      </div>

      {/* Intro for Table */}
      <p className="text-[11px] text-slate-600 mb-2.5 italic">
        Ci-dessous la liste des corrections communes avec les définitions et leurs abréviations ; Si la raison de la correction est répertoriée, utiliser la (les) lettre(s) de désignation, si non, donner une brève explication.
      </p>

      {/* Official Table matching image (7).PNG */}
      <div className="border border-slate-300 rounded-xl overflow-hidden mb-4 shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 font-black">
              <th className="p-2 sm:p-2.5 border-r border-slate-300 w-24 text-center">Abréviation</th>
              <th className="p-2 sm:p-2.5 border-r border-slate-300 w-44">Explication</th>
              <th className="p-2 sm:p-2.5">Définition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-800 font-normal">
            {/* EE */}
            <tr className="hover:bg-slate-50/70 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-sky-800 bg-sky-50/40">
                EE
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900">
                Erreur d'écriture / sur-écriture
              </td>
              <td className="p-2 sm:p-2.5 text-[11px] text-slate-700 leading-snug">
                - Saisie d'un mauvais numéro ou d'un mot incorrect / une sur-écriture sur le document.
              </td>
            </tr>

            {/* EC */}
            <tr className="hover:bg-slate-50/70 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-amber-800 bg-amber-50/40">
                EC
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900">
                Erreur de Calcul
              </td>
              <td className="p-2 sm:p-2.5 text-[11px] text-slate-700 leading-snug">
                - Le calcul mathématique est incorrect.<br />
                - L'explication « Erreur de Calcul » n'est pas destinée à traiter les cas où la formule de départ est erronée, ou que l'information utilisée dans la formule est incorrecte.
              </td>
            </tr>

            {/* ED */}
            <tr className="hover:bg-slate-50/70 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-purple-800 bg-purple-50/40">
                ED
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900">
                Erreur de date
              </td>
              <td className="p-2 sm:p-2.5 text-[11px] text-slate-700 leading-snug">
                - La date écrite est incorrecte.
              </td>
            </tr>

            {/* TE */}
            <tr className="hover:bg-slate-50/70 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-rose-800 bg-rose-50/40">
                TE
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900">
                Tamponné par erreur
              </td>
              <td className="p-2 sm:p-2.5 text-[11px] text-slate-700 leading-snug">
                - Utilisation d'un tampon par erreur sur un document maître.<br />
                - Utilisation d'un autre tampon que celui souhaité.
              </td>
            </tr>

            {/* RC */}
            <tr className="hover:bg-slate-50/70 transition">
              <td className="p-2 sm:p-2.5 border-r border-slate-300 text-center font-mono font-black text-emerald-800 bg-emerald-50/40">
                RC
              </td>
              <td className="p-2 sm:p-2.5 border-r border-slate-300 font-bold text-slate-900">
                Ré-écriture pour plus de clarté
              </td>
              <td className="p-2 sm:p-2.5 text-[11px] text-slate-700 leading-snug">
                - L'entrée n'est pas claire ; il est acceptable lorsque plusieurs corrections ont été effectuées, ce qui rend la lecture difficile.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer with Authentic ORIGINAL Rubber Stamp */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
        <div className="inline-block border-2 border-blue-600 text-blue-700 px-3 py-1 rounded font-serif font-black tracking-widest uppercase text-xs transform -rotate-2 select-none shadow-2xs">
          ORIGINAL
        </div>
        <div className="text-[11px] text-slate-500 font-medium">
          Source : Procédure Qualité BPD • Chapitre 4 Guide ANPP
        </div>
      </div>
    </div>
  );
};
