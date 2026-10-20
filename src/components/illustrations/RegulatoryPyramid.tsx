import React, { useState } from 'react';
import { Scale, FileText, BookOpen, ShieldAlert, Maximize2, X, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TierData {
  id: number;
  level: string;
  badge: string;
  title: string;
  subTitle: string;
  keyPoints: string[];
  referenceText: string;
  forceDesc: string;
  colorScheme: {
    bgGrad: string;
    border: string;
    accent: string;
    pillBg: string;
    pillText: string;
  };
}

const TIERS: TierData[] = [
  {
    id: 1,
    level: "NIVEAU 1 • SOMMET LÉGISLATIF",
    badge: "Force Juridique Suprême",
    title: "LOI N° 18-11 DU 2 JUILLET 2018",
    subTitle: "Loi Fondamentale Relative à la Santé Publique",
    referenceText: "Code de la Santé Publique • Articles 169 à 250",
    keyPoints: [
      "Définit le médicament comme un bien de santé engagé et non une marchandise ordinaire.",
      "Impose l'obligation d'un Pharmacien Directeur Technique (PDT) agréé à la tête de la distribution.",
      "Fixe les sanctions pénales et administratives en cas d'altération de la qualité ou de falsification."
    ],
    forceDesc: "Portée contraignante maximale sur le territoire national",
    colorScheme: {
      bgGrad: "from-[#002540] to-[#003d66]",
      border: "border-sky-900",
      accent: "text-amber-300",
      pillBg: "bg-amber-400/20",
      pillText: "text-amber-200"
    }
  },
  {
    id: 2,
    level: "NIVEAU 2 • CADRE RÉGLEMENTAIRE D'APPLICATION",
    badge: "Décrets Exécutifs Ministériels",
    title: "DÉCRETS EXÉCUTIFS N° 21-82 & N° 19-379",
    subTitle: "Agrément des Établissements Pharmaceutiques & Contrôle des Psychotropes",
    referenceText: "D.E 21-82 (23 fév. 2021) • D.E 19-379 (31 déc. 2019) • D.E 20-324 (MIP / ANPP)",
    keyPoints: [
      "Conditions d'agrément, nomination et responsabilités exclusives du Pharmacien Directeur Technique.",
      "Règles impératives de sécurité, transport sécurisé et registres cotés pour substances psychotropes.",
      "Obligations de déclaration des programmes et des stocks de sécurité auprès du MIP."
    ],
    forceDesc: "Application réglementaire stricte et opposable à tous les grossistes",
    colorScheme: {
      bgGrad: "from-[#004b7a] to-[#0284c7]",
      border: "border-sky-700",
      accent: "text-sky-200",
      pillBg: "bg-sky-400/20",
      pillText: "text-sky-100"
    }
  },
  {
    id: 3,
    level: "NIVEAU 3 • CONDITIONS TECHNIQUES D'EXPLOITATION",
    badge: "Cahier des Charges Officiel",
    title: "CAHIER DES CHARGES OFFICIEL (ARTICLES 1 À 36)",
    subTitle: "Conditions d'Installation, Superficies Minimales & Stock Permanent",
    referenceText: "Arrêté ministériel fixant le cahier des charges de la distribution en gros",
    keyPoints: [
      "Superficie minimale totale ≥ 590 m² (dont ≥ 500 m² médicaments avec ≥ 200 m² continu, ≥ 90 m² DM).",
      "Obligation légale de détenir en permanence un stock de 30 jours et 2/3 de la nomenclature nationale.",
      "Zonage réglementaire obligatoire, sas, locaux psychotropes sécurisés et chaîne du froid."
    ],
    forceDesc: "Contrôlé obligatoirement lors des inspections d'octroi ou de maintien d'agrément",
    colorScheme: {
      bgGrad: "from-[#0284c7] to-[#0096c7]",
      border: "border-cyan-600",
      accent: "text-cyan-100",
      pillBg: "bg-cyan-400/20",
      pillText: "text-cyan-50"
    }
  },
  {
    id: 4,
    level: "NIVEAU 4 • SOCLE OPÉRATIONNEL & BONNES PRATIQUES",
    badge: "Guide ANPP Édition 2026",
    title: "GUIDE OFFICIEL DES BPDG & BPS (19 CHAPITRES + ANNEXE 1)",
    subTitle: "Bonnes Pratiques de Distribution en Gros, BPF 2022 & Norme ISO 13485",
    referenceText: "ANPP 2026 • OMS Série de rapports techniques n° 986 Annexe 7",
    keyPoints: [
      "19 chapitres opérationnels détaillés : SMQ, déviations, CAPA, ALCOA+, FEFO et rappels de lots.",
      "Annexe 1 : Maîtrise rigoureuse des 5 plages de température et protocole d'excursion.",
      "Exigences de traçabilité, qualification de la flotte, gestion des réclamations et auto-inspections."
    ],
    forceDesc: "Guide de référence technique quotidien pour tous les collaborateurs de l'entrepôt",
    colorScheme: {
      bgGrad: "from-[#047857] to-[#059669]",
      border: "border-emerald-700",
      accent: "text-emerald-100",
      pillBg: "bg-emerald-400/20",
      pillText: "text-emerald-50"
    }
  }
];

export const RegulatoryPyramid: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<TierData | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTier(null);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm relative">
      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-hydra-700"></span>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
            Hiérarchie des Textes Juridiques & Réglementaires Algériens
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            Guide ANPP 2026
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          className="text-xs font-bold text-hydra-700 hover:text-hydra-900 bg-hydra-50 hover:bg-hydra-100 px-2.5 py-1 rounded-lg border border-hydra-200 flex items-center gap-1.5 transition"
          title="Agrandir en grand format pour une meilleure lisibilité"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Agrandir</span>
        </button>
      </div>

      {/* Main Pyramid Graphical & Structured Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left Indicator: Juridical Force Arrow */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center text-center py-2">
          <span className="text-[9px] font-black uppercase text-rose-700 rotate-180 tracking-widest [writing-mode:vertical-lr]">
            Force Contraignante Suprême
          </span>
          <div className="w-1.5 h-32 bg-gradient-to-b from-rose-600 via-amber-500 to-emerald-600 rounded-full my-2"></div>
          <span className="text-[9px] font-black uppercase text-emerald-700 [writing-mode:vertical-lr] tracking-widest">
            Précision Opérationnelle
          </span>
        </div>

        {/* Center: The High-Legibility Pyramid Architecture */}
        <div className="lg:col-span-11 space-y-2.5">
          {TIERS.map((tier, idx) => {
            // Width styling to reflect pyramid hierarchy visually while maintaining 100% text legibility
            const widthClasses = [
              "max-w-xl mx-auto", // Tier 1
              "max-w-2xl mx-auto", // Tier 2
              "max-w-3xl mx-auto", // Tier 3
              "w-full"             // Tier 4
            ];

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`${widthClasses[idx]} group cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5`}
              >
                <div
                  className={`bg-gradient-to-r ${tier.colorScheme.bgGrad} rounded-xl p-3 sm:p-3.5 text-white shadow-sm hover:shadow-md border ${tier.colorScheme.border} flex items-center justify-between gap-3`}
                >
                  {/* Left: Level Badge & Icons */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/20 font-black text-xs text-white">
                      {tier.id === 1 && <Scale className="w-4 h-4 text-amber-300" />}
                      {tier.id === 2 && <FileText className="w-4 h-4 text-sky-200" />}
                      {tier.id === 3 && <BookOpen className="w-4 h-4 text-cyan-200" />}
                      {tier.id === 4 && <CheckCircle2 className="w-4 h-4 text-emerald-200" />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-200">
                          {tier.level}
                        </span>
                        <span className={`text-[9px] font-bold px-2 py-0.2 rounded-full ${tier.colorScheme.pillBg} ${tier.colorScheme.pillText} border border-white/10`}>
                          {tier.badge}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-black tracking-tight text-white truncate group-hover:text-amber-200 transition">
                        {tier.title}
                      </h4>
                      <p className="text-[11px] text-slate-200 font-medium truncate">
                        {tier.subTitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Click to view details button */}
                  <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg border border-white/20 transition">
                    <span className="hidden sm:inline">Détails</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sub-Legend with clean regulatory indicators */}
      <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 mt-4 px-2 pt-2.5 border-t border-slate-100">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          Force contraignante : <strong className="text-slate-800">Décroissante du haut vers le bas (Loi &gt; Décret &gt; Cahier des charges &gt; Guide)</strong>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Précision opérationnelle : <strong className="text-slate-800">Croissante du haut vers le bas (Guide ANPP = Détails de terrain)</strong>
        </span>
      </div>

      {/* MODAL 1: Detail Popover for a clicked tier */}
      {selectedTier && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-hydra-700 bg-hydra-50 px-2 py-0.5 rounded">
                  {selectedTier.level}
                </span>
                <span className="text-[10px] font-bold text-slate-500">{selectedTier.badge}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className={`p-3.5 rounded-xl bg-gradient-to-r ${selectedTier.colorScheme.bgGrad} text-white mb-3`}>
              <h3 className="text-base font-black text-white mb-0.5">{selectedTier.title}</h3>
              <p className="text-xs text-slate-200 font-medium">{selectedTier.subTitle}</p>
              <div className="mt-2 pt-2 border-t border-white/20 text-[10.5px] font-mono text-amber-200">
                {selectedTier.referenceText}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <span className="text-xs font-bold text-slate-800 block">Exigences clés pour SPA ABC MED :</span>
              {selectedTier.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-4">
              <strong>Impact juridique :</strong> {selectedTier.forceDesc}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="px-4 py-1.5 rounded-xl bg-hydra-800 hover:bg-hydra-900 text-white text-xs font-bold transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Full Screen Zoom of the complete Pyramid */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-300 max-h-[90vh] overflow-y-auto custom-scroll animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-hydra-700">Vue Grand Format Agrandie</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pyramide Officielle des Textes Juridiques — BPDG Algérie
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`bg-gradient-to-r ${tier.colorScheme.bgGrad} rounded-2xl p-4 sm:p-5 text-white border ${tier.colorScheme.border} shadow-sm`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                      {tier.level}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tier.colorScheme.pillBg} ${tier.colorScheme.pillText} border border-white/20`}>
                      {tier.badge}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white mb-1">
                    {tier.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mb-3 font-medium">
                    {tier.subTitle}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-2 pt-3 border-t border-white/20 text-xs">
                    {tier.keyPoints.map((kp, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-2.5 text-white/90 leading-snug">
                        • {kp}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Référentiel : Guide ANPP 2026 & Cahier des Charges Officiel</span>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-4 py-2 rounded-xl bg-hydra-800 text-white font-bold hover:bg-hydra-900 transition"
              >
                Retour à la diapositive (Échap)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
