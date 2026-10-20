import React from 'react';
import { Layers, Users, Building, FileText, Package, AlertTriangle, Handshake, CheckSquare, Truck, ShieldOff } from 'lucide-react';

interface ChapterItem {
  num: number;
  title: string;
  sub: string;
  icon: React.ReactNode;
  bgGrad: string;
}

const CHAPTERS: ChapterItem[] = [
  { num: 1, title: "GESTION DE LA QUALITÉ", sub: "SMQ, revue de direction, gestion des risques et CAPA", icon: <Layers className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 2, title: "PERSONNEL", sub: "Fiches de poste, formation continue, habilitation et hygiène", icon: <Users className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 3, title: "LOCAUX ET ÉQUIPEMENT", sub: "Zonage, contrôle des températures, maintenance et étalonnages", icon: <Building className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 4, title: "DOCUMENTATION", sub: "Pyramide SMQ, bonnes pratiques d'écriture et archivage 5 ans", icon: <FileText className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 5, title: "OPÉRATIONS", sub: "Qualification des tiers, réception, stockage FEFO et destruction", icon: <Package className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 6, title: "RÉCLAMATIONS, RETOURS, FALSIFIÉS & RAPPELS", sub: "Traitement réclamations, procédure interne retours, alerte < 1h", icon: <AlertTriangle className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 7, title: "ACTIVITÉS EXTERNALISÉES", sub: "Contrats écrits obligatoires et audit des sous-traitants", icon: <Handshake className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 8, title: "AUTO-INSPECTIONS", sub: "Programme annuel planifié, impartialité et suivi des CAPA", icon: <CheckSquare className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 9, title: "TRANSPORT", sub: "Camions frigorifiques qualifiés, Data Logger et intégrité", icon: <Truck className="w-3.5 h-3.5" />, bgGrad: "from-sky-700 to-sky-800" },
  { num: 10, title: "COURTIERS (NON CONCERNÉS)", sub: "Dispositions spécifiques aux courtiers (hors périmètre ABC MED)", icon: <ShieldOff className="w-3.5 h-3.5" />, bgGrad: "from-slate-600 to-slate-700" }
];

export const TenChaptersBpdgVisual: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm font-sans select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-600" />
          Les 10 Chapitres des Bonnes Pratiques de Distribution en Gros (BPDG)
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
          Architecture Normative Officielle
        </span>
      </div>

      {/* The 10 Chapters List with Circular Badges */}
      <div className="space-y-1.5">
        {CHAPTERS.map((ch) => (
          <div
            key={ch.num}
            className={`flex items-center gap-2.5 p-2 rounded-xl bg-gradient-to-r ${ch.bgGrad} text-white shadow-xs transition hover:brightness-105`}
          >
            <div className="w-6 h-6 rounded-full bg-white text-sky-800 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
              {ch.num}
            </div>
            <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
              <span className="text-xs font-black tracking-tight uppercase truncate">
                {ch.title}
              </span>
              <span className="hidden sm:inline text-[10.5px] text-slate-200 opacity-90 truncate">
                {ch.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
