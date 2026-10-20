import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Lock,
  Scale,
  BookOpenCheck,
  HeartPulse,
  Pill,
  AlertTriangle,
  Flame,
  FileCheck2,
  BookMarked,
  Layers,
  RefreshCw,
  GitPullRequest,
  CheckCheck,
  GitBranchPlus,
  OctagonAlert,
  Radar,
  Users,
  FileSignature,
  GraduationCap,
  Ban,
  Building2,
  ChevronDown,
  Warehouse,
  ThermometerSun,
  Activity,
  ServerCog,
  PackageCheck,
  CalendarClock,
  Snowflake,
  FolderTree,
  PenTool,
  Archive,
  ScanBarcode,
  FileCheck,
  Truck,
  Wrench,
  Siren,
  MessageSquareWarning,
  Undo2,
  BellRing,
  ScanEye,
  Stethoscope,
  KeyRound,
  Handshake,
  ClipboardList,
  Gavel,
  Maximize2,
  ShieldAlert
} from 'lucide-react';
import { RegulatoryPyramid } from './illustrations/RegulatoryPyramid';
import { WarehouseBlueprint } from './illustrations/WarehouseBlueprint';
import { ColdChainThermometer } from './illustrations/ColdChainThermometer';
import { FefoDiagram } from './illustrations/FefoDiagram';
import { IshikawaDiagram } from './illustrations/IshikawaDiagram';
import { HistoricalCatastrophes } from './illustrations/HistoricalCatastrophes';
import { PpeHygieneShowcase } from './illustrations/PpeHygieneShowcase';
import { AlcoaBadges } from './illustrations/AlcoaBadges';
import { TransportLogisticsMap } from './illustrations/TransportLogisticsMap';
import { HabilitationCertificateVisual } from './illustrations/HabilitationCertificateVisual';
import { DocHierarchyPyramid } from './illustrations/DocHierarchyPyramid';
import { HydrapharmProcedureVisual } from './illustrations/HydrapharmProcedureVisual';
import { GoodDocPracticesVisual } from './illustrations/GoodDocPracticesVisual';
import { ProductStatusLabelsVisual } from './illustrations/ProductStatusLabelsVisual';
import { Deviation5StepsVisual } from './illustrations/Deviation5StepsVisual';
import { WarehouseRulesVisual } from './illustrations/WarehouseRulesVisual';
import { ContractValidationVisual } from './illustrations/ContractValidationVisual';
import { MedicineCompositionVisual } from './illustrations/MedicineCompositionVisual';
import { SupplyChainVisual } from './illustrations/SupplyChainVisual';
import { FakeVsRealVisual } from './illustrations/FakeVsRealVisual';
import { RecallNoticeVisual } from './illustrations/RecallNoticeVisual';
import { TenChaptersBpdgVisual } from './illustrations/TenChaptersBpdgVisual';
import { CASE_STUDIES } from '../data/slidesContent';
import { CardFullscreenModal } from './CardFullscreenModal';
import { AnppGuideCoverVisual } from './illustrations/AnppGuideCoverVisual';
import { HydrapharmForbiddenPracticesVisual } from './illustrations/HydrapharmForbiddenPracticesVisual';
import { ErrorCorrectionVisual } from './illustrations/ErrorCorrectionVisual';
import { ContractHandshakeVisual } from './illustrations/ContractHandshakeVisual';
import { CoartemFakeVsRealVisual } from './illustrations/CoartemFakeVsRealVisual';

interface SlideContentProps {
  slideId: number;
  onGoToSlide: (index: number) => void;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slideId, onGoToSlide }) => {
  const [openCases, setOpenCases] = useState<Record<number, boolean>>({});

  const toggleCase = (id: number) => {
    setOpenCases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Fullscreen modal state for cards and authentic illustrations
  const [fullscreenModal, setFullscreenModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle?: string;
    badge?: string;
    cards: Array<{ title: string; subtitle?: string; badge?: string; content: React.ReactNode }>;
    currentIndex: number;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    badge: 'Document Réel BPDG',
    cards: [],
    currentIndex: 0,
  });

  const openFullscreen = (cards: Array<{ title: string; subtitle?: string; badge?: string; content: React.ReactNode }>, initialIndex = 0) => {
    if (!cards || cards.length === 0) return;
    const current = cards[initialIndex] || cards[0];
    setFullscreenModal({
      isOpen: true,
      title: current.title,
      subtitle: current.subtitle,
      badge: current.badge || "Document Officiel BPDG",
      cards,
      currentIndex: initialIndex,
    });
  };

  const closeFullscreen = () => {
    setFullscreenModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNextCard = () => {
    setFullscreenModal((prev) => {
      if (prev.cards.length <= 1) return prev;
      const nextIdx = (prev.currentIndex + 1) % prev.cards.length;
      const nextCard = prev.cards[nextIdx];
      return {
        ...prev,
        currentIndex: nextIdx,
        title: nextCard.title,
        subtitle: nextCard.subtitle,
        badge: nextCard.badge || prev.badge,
      };
    });
  };

  const handlePrevCard = () => {
    setFullscreenModal((prev) => {
      if (prev.cards.length <= 1) return prev;
      const prevIdx = (prev.currentIndex - 1 + prev.cards.length) % prev.cards.length;
      const prevCard = prev.cards[prevIdx];
      return {
        ...prev,
        currentIndex: prevIdx,
        title: prevCard.title,
        subtitle: prevCard.subtitle,
        badge: prevCard.badge || prev.badge,
      };
    });
  };

  const renderSlideContent = () => {
    switch (slideId) {
    // ==========================================
    // SLIDE 1 : COUVERTURE OFFICIELLE
    // ==========================================
    case 1:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-9 rounded-full bg-gradient-to-b from-emerald-600 via-slate-200 to-rose-600 shadow-xs"></div>
              <div>
                <p className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500">
                  République Algérienne Démocratique et Populaire
                </p>
                <p className="text-xs font-extrabold text-hydra-700 uppercase tracking-wider">
                  Ministère de l'Industrie Pharmaceutique (MIP) • Agence Nationale des Produits Pharmaceutiques (ANPP)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Guide ANPP 2026 & Cahier des Charges (Art. 1–36)
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-hydra-50 text-hydra-800 border border-hydra-200">
                Durée : 2 heures
              </span>
            </div>
          </div>

          <div className="my-auto py-4 grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hydra-50 border border-hydra-200 text-hydra-800 text-xs font-black uppercase tracking-widest">
                <Award className="w-4 h-4 text-pharma-600" />
                Formation Qualité & Réglementaire — BPDG / BPS
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-hydra-900 leading-[1.15]">
                BONNES PRATIQUES DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-hydra-700 via-hydra-500 to-pharma-600">DISTRIBUTION EN GROS</span> & DE STOCKAGE
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                À l'usage des Établissements Pharmaceutiques de Distribution en Gros :<br />
                <span className="text-hydra-900 font-bold">Produits Pharmaceutiques & Dispositifs Médicaux à Usage Humain</span>
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-hydra-50 text-hydra-600"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-slate-800 leading-snug">Maîtrise de la Qualité (BPx)</span>
                </div>
                <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600"><Lock className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-slate-800 leading-snug">Sécurisation Approvisionnement</span>
                </div>
                <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600"><Scale className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-slate-800 leading-snug">Conformité Nationale ANPP/MIP</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="hydra-brand-card p-6 rounded-3xl shadow-xl relative overflow-hidden border border-hydra-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest brand-sky">Direction Technique & Qualité</p>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 brand-white text-[10px] font-bold uppercase tracking-wider">Groupe Hydrapharm</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <h2 className="text-xl font-black brand-white">Dr. Asma KETTOU</h2>
                    <p className="text-xs font-bold brand-emerald">Pharmacien Directeur Technique (DT)</p>
                  </div>
                  <div className="pt-2 border-t border-white/15">
                    <h3 className="text-lg font-black brand-white">Boussad TAMAZIRT</h3>
                    <p className="text-xs font-bold brand-sky">Responsable Qualité (RQ) — Formateur</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold brand-white">SPA ABC MED</p>
                    <p className="text-xs brand-muted">Établissement Pharmaceutique de Distribution en Gros</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 text-xs font-mono brand-white font-bold">
                    Durée : 2h00
                  </div>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-hydra-800 flex items-center gap-2">
                  <BookOpenCheck className="w-4 h-4 text-pharma-600" />
                  Référentiels Officiels de la Formation
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-hydra-600 font-bold">•</span>
                    <span><strong className="text-slate-900">Guide ANPP (Édition 2026) :</strong> Bonnes Pratiques de Distribution et de Stockage (19 chapitres + Annexe 1).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hydra-600 font-bold">•</span>
                    <span><strong className="text-slate-900">Cahier des Charges Officiel (Art. 1 à 36) :</strong> Établissements pharmaceutiques de distribution en gros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-hydra-600 font-bold">•</span>
                    <span><strong className="text-slate-900">Loi n° 18-11</strong> • <strong className="text-slate-900">Décret 21-82</strong> • <strong className="text-slate-900">Décret 19-379</strong> (Psychotropes) • <strong className="text-slate-900">BPF Algérie 2022</strong> & <strong className="text-slate-900">ISO 13485:2016</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-3">
            <span>Utilisez les flèches <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono">→</kbd> pour naviguer</span>
            <span className="text-hydra-800 font-bold">Groupe Hydrapharm • 13 Modules • 25 Diapositives</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 2 : OBJECTIFS PÉDAGOGIQUES
    // ==========================================
    case 2:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Introduction Générale</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Objectifs Pédagogiques & Architecture (Format 2 Heures)</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                4 Compétences Clés • 13 Modules
              </span>
            </div>

            {/* Direct Visual from user attachment: The 10 Official BPDG Chapters */}
            <div className="mb-4">
              <TenChaptersBpdgVisual />
            </div>

            {/* 3 Corporate Branches Transversal Synthesis */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-hydra-900 to-slate-900 text-white shadow-sm mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-2">
                🎯 Boussole Transversale par Métier : Ce que CHAQUE structure doit retenir
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <div className="font-extrabold text-cyan-300 flex items-center gap-1.5 mb-1">
                    <span>📦 Entrepôt & Logistique</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    Hygiène et EPI stricts, interdictions (fumer, manger, mâcher), surélévation sur palettes, rotation FEFO, étiquettes statuts, pack-out froid sans contact et signalement immédiat de toute déviation.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <div className="font-extrabold text-emerald-300 flex items-center gap-1.5 mb-1">
                    <span>💼 Commercial & ADV</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    Vente exclusive aux clients officiellement agréés (officines, cliniques), respect du stock permanent de 30 jours (2/3 nomenclature), qualification des commandes et respect du délai contractuel fixé pour les retours (ex. 7 jours chez ABC MED).
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <div className="font-extrabold text-amber-300 flex items-center gap-1.5 mb-1">
                    <span>🏢 Administration & Supports</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    Certificats d'habilitation au poste (1ère habilitation/réhabilitation), fiches de poste, écriture au stylo bleu indélébile sans blanco, archivage légal 5 ans, contrats écrits des sous-traitants et intégrité WMS.
                  </p>
                </div>
              </div>
            </div>

            {/* 13 Modules Navigation Grid */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-sky-800">Partie I : Fondements, Locaux & Stockage (55 min)</h3>
                  <span className="text-[11px] font-mono text-slate-500">Modules 1 à 6</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <button type="button" onClick={() => onGoToSlide(2)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M1.</strong> Notions & Cadre Réglementaire</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(4)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M2.</strong> Obligations Grossiste (2/3, 30j)</span>
                    <span className="text-[10px] font-mono text-slate-500">8m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(5)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M3.</strong> SMQ, Déviations, CAPA & ICH Q9</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(7)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M4.</strong> Personnel, PDT, Formation, Hygiène</span>
                    <span className="text-[10px] font-mono text-slate-500">9m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(9)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M5.</strong> Locaux (≥ 590 m²), Zonage, Mapping</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(11)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-hydra-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-sky-700">M6.</strong> Stockage FEFO & Chaîne du Froid</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800">Partie II : Opérations, Flux Spécifiques & Audit (55 min)</h3>
                  <span className="text-[11px] font-mono text-slate-500">Modules 7 à 13</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <button type="button" onClick={() => onGoToSlide(13)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M7.</strong> Documentation, ALCOA+ & 5 ans</span>
                    <span className="text-[10px] font-mono text-slate-500">8m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(15)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M8.</strong> Opérations : Réception à Expédition</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(17)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M9.</strong> Transport & Logistique Dirigée</span>
                    <span className="text-[10px] font-mono text-slate-500">7m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(18)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M10.</strong> Réclamations, Retours, Rappels</span>
                    <span className="text-[10px] font-mono text-slate-500">10m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(20)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M11.</strong> DM & Psychotropes</span>
                    <span className="text-[10px] font-mono text-slate-500">7m</span>
                  </button>
                  <button type="button" onClick={() => onGoToSlide(21)} className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left flex items-center justify-between transition border border-slate-200">
                    <span><strong className="text-emerald-700">M12-13.</strong> Sous-traitance & Cas Pratiques</span>
                    <span className="text-[10px] font-mono text-slate-500">13m</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Cliquez sur un module ci-dessus pour y accéder directement.</span>
            <span className="text-emerald-700 font-semibold">SPA ABC MED • Direction Qualité</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 3 : MODULE 1 (A) - LE MÉDICAMENT
    // ==========================================
    case 3:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 1 • Fondements & Santé Publique</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Notions sur le Médicament & Pourquoi les BPDG sont Vitales</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
                Enjeu Vital de Santé Publique
              </span>
            </div>

            {/* Direct Visual from user attachment: Composition & 4 Roles of Medicine */}
            <div className="mb-4">
              <MedicineCompositionVisual />
            </div>

            {/* Historical Catastrophes Warning */}
            <div className="mb-2">
              <HistoricalCatastrophes />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 1/13 • Fondements & Santé Publique</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 4 : MODULE 1 (B) - PYRAMIDE RÉGLEMENTAIRE
    // ==========================================
    case 4: {
      const slide4Cards = [
        {
          title: "Hiérarchie des Textes Juridiques Algériens",
          subtitle: "Pyramide à 4 paliers : Loi 18-11 ➔ Décrets ➔ Cahier des Charges ➔ Guide ANPP 2026",
          badge: "Architecture Juridique Officielle",
          content: <RegulatoryPyramid />
        },
        {
          title: "Couverture Officielle du Guide ANPP 2026",
          subtitle: "Guide des Bonnes Pratiques de Distribution et de Stockage (MIP / ANPP)",
          badge: "Document Réel d'Entreprise",
          content: <AnppGuideCoverVisual />
        },
        {
          title: "1. Lois & Décrets Exécutifs Fondateurs",
          subtitle: "Cadre légal de santé publique et réglementation des psychotropes",
          badge: "Niveau 1 & 2",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-sky-800 flex items-center gap-2">
                <Scale className="w-5 h-5 text-sky-600" /> 1. Lois & Décrets Exécutifs
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Loi n° 18-11 du 2 juillet 2018 relative à la santé :</strong>
                  Socle juridique suprême instituant les règles de fabrication, distribution et dispensation des produits pharmaceutiques.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Décret exécutif n° 21-82 (23 fév. 2021) :</strong>
                  Conditions d'agrément, installation et direction technique des établissements pharmaceutiques.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Décret exécutif n° 19-379 (31 déc. 2019) :</strong>
                  Contrôle administratif, technique et sécuritaire renforcé des substances psychotropes.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Décret n° 20-324 :</strong>
                  Missions et prérogatives régaliennes de l'Agence Nationale des Produits Pharmaceutiques (ANPP).
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Cahier des Charges des Distributeurs en Gros (Art. 1 à 36)",
          subtitle: "Exigences techniques, organisationnelles et de stocks permanents",
          badge: "Niveau 3",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-emerald-800 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-600" /> 2. Cahier des Charges Officiel
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Système d'Assurance Qualité (Art. 1 à 3) :</strong>
                  Obligation de disposer d'un SMQ documenté, adapté à la distribution et au stockage sécurisé des médicaments.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Superficies Minimales Réglementaires (Art. 7) :</strong>
                  ≥ 500 m² pour les médicaments (avec ≥ 200 m² d'un seul tenant pour le stockage), ≥ 90 m² pour les Dispositifs Médicaux, ≥ 590 m² pour activité mixte.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Stock Permanent & Nomenclature (Art. 4 & 18) :</strong>
                  Obligation de détenir 2/3 de la nomenclature nationale et un stock permanent minimum couvrant 30 jours de ventes.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "3. Guides Techniques & Référentiels (Chap. 19)",
          subtitle: "Guide ANPP 2026, BPF 2022 et Norme ISO 13485:2016",
          badge: "Niveau 4",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-amber-800 flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-600" /> 3. Guides Techniques & Référentiels
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Guide ANPP 2026 :</strong>
                  19 chapitres opérationnels + Annexe 1 définissant l'application terrain des Bonnes Pratiques de Distribution et de Stockage.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Double étiquetage linguistique :</strong>
                  Mentions obligatoires sur les conditionnements en arabe et français conformément au décret.
                </li>
              </ul>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">
                  Module 1 • Pyramide des Textes (Guide ANPP Chap. 1–4 & Cahier des Charges Art. 1–3)
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Le Cadre Réglementaire Algérien & Périmètre Officiel BPD / BPS</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Guide ANPP 2026 (19 Chapitres + Annexe 1)
              </span>
            </div>

            {/* Visuals Grid: Pyramid & Real Official Cover */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 items-stretch">
              <div 
                className="lg:col-span-8 cursor-pointer group relative"
                onClick={() => openFullscreen(slide4Cards, 0)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <RegulatoryPyramid />
              </div>
              <div 
                className="lg:col-span-4 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide4Cards, 1)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <AnppGuideCoverVisual onZoom={() => openFullscreen(slide4Cards, 1)} />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-3.5 mb-3 text-xs">
              <div 
                className="glass-card p-3.5 rounded-2xl border-t-2 border-t-sky-500 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide4Cards, 2)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-sky-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-extrabold uppercase tracking-wider text-sky-800 mb-1.5 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-sky-600" /> 1. Lois & Décrets Exécutifs
                </h3>
                <ul className="space-y-1 text-slate-700">
                  <li>• <strong className="text-slate-900">Loi n° 18-11 du 2 juillet 2018 :</strong> relative à la santé (Code de santé publique).</li>
                  <li>• <strong className="text-slate-900">Décret exécutif n° 21-82 (23 fév. 2021) :</strong> établissements pharmaceutiques & agrément.</li>
                  <li>• <strong className="text-slate-900">Décret exécutif n° 19-379 (31 déc. 2019) :</strong> contrôle administratif, technique et sécuritaire des psychotropes.</li>
                  <li>• <strong className="text-slate-900">Décret n° 20-324 :</strong> attributions de l'ANPP.</li>
                </ul>
              </div>

              <div 
                className="glass-card p-3.5 rounded-2xl border-t-2 border-t-emerald-500 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide4Cards, 3)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-emerald-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" /> 2. Cahier des Charges (Art. 1 à 36)
                </h3>
                <ul className="space-y-1 text-slate-700">
                  <li>• <strong className="text-slate-900">Art. 1 à 3 :</strong> Système d'assurance qualité approprié et description précise des installations techniques actuelles.</li>
                  <li>• <strong className="text-slate-900">Superficies (Art. 7) :</strong> ≥ 500 m² méd. (dont ≥ 200 m² continu de stockage), ≥ 90 m² DM, ≥ 590 m² mixte.</li>
                  <li>• <strong className="text-slate-900">Stocks (Art. 4 & 18) :</strong> Stock permanent de 30 jours et 2/3 de la nomenclature nationale.</li>
                  <li>• <strong className="text-slate-900">Art. 36 :</strong> Entrée en vigueur dès signature.</li>
                </ul>
              </div>

              <div 
                className="glass-card p-3.5 rounded-2xl border-t-2 border-t-amber-500 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide4Cards, 4)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-amber-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-extrabold uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4 text-amber-600" /> 3. Guides Techniques (Chap. 19)
                </h3>
                <ul className="space-y-1 text-slate-700">
                  <li>• <strong className="text-slate-900">Guide ANPP 2026 :</strong> 19 chapitres + Annexe 1 (limites de la Pharmacopée).</li>
                  <li>• <strong className="text-slate-900">BPF Algérie 2022 :</strong> Bonnes Pratiques de Fabrication.</li>
                  <li>• <strong className="text-slate-900">Norme ISO 13485:2016 :</strong> SMQ applicable aux Dispositifs Médicaux.</li>
                  <li>• <strong className="text-slate-900">OMS :</strong> WHO TRS n° 986 (2014) Annexe 7.</li>
                  <li>• Mentions obligatoires en <strong className="text-slate-900">arabe et français</strong>.</li>
                </ul>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-bold text-hydra-800 block mb-1">Définition Officielle BPD & BPS (Guide ANPP 2026 — Chapitres 2, 3 & 4) :</span>
              <p className="italic text-slate-700">
                « Les BPD et BPS représentent la partie de l'assurance de la qualité qui garantit que la qualité des produits de santé (médicaments et dispositifs médicaux à usage humain conditionnés et prêts à l'emploi) est maintenue à tous les stades de la chaîne d'approvisionnement, et qui protège le système contre les produits falsifiés, non approuvés, importés illégalement, volés ou de qualité inférieure. »
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 1/13 • Pyramide Réglementaire & Guide ANPP 2026</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 5 : MODULE 2 - OBLIGATIONS GROSSISTE
    // ==========================================
    case 5:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 2 • Cahier des Charges (Art. 2, 4, 18, 22, 25, 33-35)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Obligations Générales du Grossiste Répartiteur & Déclarations MIP</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Service Public & Transparence
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3.5 mb-4">
              <div className="glass-card p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center gap-4 shadow-xs">
                <div className="text-3xl font-black text-sky-700 font-mono">2/3</div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Nomenclature Nationale (Art. 4 & 18)</p>
                  <p className="text-xs text-slate-600">Détenir et distribuer au moins deux tiers (2/3) des produits enregistrés en Algérie.</p>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-4 shadow-xs">
                <div className="text-3xl font-black text-emerald-700 font-mono">30 J</div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Stock Permanent Minimum (Art. 18)</p>
                  <p className="text-xs text-slate-600">Couvrir en permanence au moins 30 jours de vente (médicaments essentiels & DM).</p>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-4 shadow-xs">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800"><Building2 className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Clients Autorisés (Art. 2)</p>
                  <p className="text-xs text-slate-600">Exclusivement Officines & Établissements de santé publics/privés agréés.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-5 glass-card p-4 rounded-2xl space-y-2.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600" /> Règles d'Approvisionnement & Clientèle
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• <strong className="text-slate-900">Objectif de santé publique :</strong> prévenir les pénuries et assurer l'égal accès des citoyens aux thérapeutiques.</li>
                  <li>• <strong className="text-slate-900">Approvisionnement exclusif :</strong> uniquement auprès de fabricants ou importateurs agréés par le Ministère.</li>
                  <li>• <strong className="text-slate-900">Produits hospitaliers :</strong> distribution réservée aux hôpitaux pour les produits à affectation hospitalière.</li>
                  <li>• <strong className="text-slate-900">Vente inter-grossistes (Art. 2) :</strong> autorisée <strong>UNIQUEMENT</strong> dans le cadre d'une convention formelle avec un établissement de fabrication agréé.</li>
                  <li className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-semibold">
                    ✖ Interdiction formelle de vente directe au public ou à des structures non médicales.
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
                <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-sky-500">
                  <span className="text-[11px] font-bold text-sky-700 uppercase">1. Déclaration des Stocks (Art. 34)</span>
                  <p className="text-xs text-slate-600 mt-1">Transmettre <strong className="text-slate-900">MENSUELLEMENT</strong> (et au besoin hebdomadairement) l'état des stocks disponibles des médicaments et DM essentiels par voie électronique sécurisée au MIP.</p>
                </div>

                <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-amber-500">
                  <span className="text-[11px] font-bold text-amber-700 uppercase">2. Déclaration des Périmés (Art. 34)</span>
                  <p className="text-xs text-slate-600 mt-1">Transmettre <strong className="text-slate-900">TRIMESTRIELLEMENT</strong> la liste nominative et les quantités précises des produits périmés. Suivi rigoureux en zone de rejet sécurisée jusqu'à destruction.</p>
                </div>

                <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-emerald-500">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase">3. Inventaire Annuel & Bilan (Art. 22 & 35)</span>
                  <p className="text-xs text-slate-600 mt-1">Transmettre chaque <strong className="text-slate-900">fin d'année</strong> l'état d'inventaire complet + déposer le <strong className="text-slate-900">bilan d'activité annuel</strong> selon le canevas MIP. Archivage <strong className="text-slate-900">≥ 5 ans</strong>.</p>
                </div>

                <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-rose-500">
                  <span className="text-[11px] font-bold text-rose-700 uppercase">4. Déclarations d'Urgence (Art. 25 & 33)</span>
                  <p className="text-xs text-slate-600 mt-1">Déclarer <strong className="text-slate-900">SANS DÉLAI</strong> au MIP tout rappel de lot, retrait ou destruction. Obligation de distribution sur <strong className="text-slate-900">réquisition ministérielle</strong> en cas d'urgence sanitaire (Art. 33).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 2/13 • Obligations du Grossiste Répartiteur</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 6 : MODULE 3 (A) - SMQ & 8 GARANTIES
    // ==========================================
    case 6:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 3 • Guide ANPP Chapitre 5</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Système de Management de la Qualité (SMQ) & 8 Garanties</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Assurance Qualité & Change Control
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-5 space-y-3">
                <div className="glass-card p-4 rounded-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-600" /> Piliers Majeurs du SMQ
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• <strong className="text-slate-900">Politique Qualité :</strong> signée par la Direction et le PDT, affichée et comprise.</li>
                    <li>• <strong className="text-slate-900">Manuel Qualité :</strong> décrit le périmètre du SMQ, les processus et leurs interactions.</li>
                    <li>• <strong className="text-slate-900">Organisation & responsabilités :</strong> organigramme à jour, fiches de poste et délégations.</li>
                    <li>• <strong className="text-slate-900">Système documentaire :</strong> procédures écrites (SOP), instructions et enregistrements.</li>
                    <li>• <strong className="text-slate-900">Revue de Direction :</strong> évaluation formelle annuelle de l'efficacité du SMQ.</li>
                    <li>• <strong className="text-slate-900">Gestion du changement (Change Control) :</strong> évaluation préalable de tout changement d'installation ou équipement.</li>
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-emerald-600" /> Événements & Amélioration Continue
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• <strong className="text-slate-900">Déviations & CAPA :</strong> enregistrement immédiat, cause racine et efficacité.</li>
                    <li>• <strong className="text-slate-900">Gestion des Risques (ICH Q9) :</strong> intégrée à chaque étape logistique.</li>
                    <li>• <strong className="text-slate-900">Événements externes :</strong> réclamations, retours et rappels de lots.</li>
                    <li>• <strong className="text-slate-900">Auto-inspections :</strong> audits internes planifiés évaluant la conformité.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 glass-card p-4 rounded-2xl">
                <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-2">
                  <CheckCheck className="w-4 h-4 text-amber-600" /> Les 8 Garanties Fondamentales du Système Qualité (Exigences ANPP)
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-sky-700">GARANTIE 01</span>
                    <p className="text-slate-700 mt-1">Médicaments réceptionnés, stockés, préparés et expédiés en stricte conformité avec le <strong>Guide ANPP 2026</strong> et le Cahier des charges.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-sky-700">GARANTIE 02</span>
                    <p className="text-slate-700 mt-1">Responsabilités de la direction et de l'encadrement pharmaceutique <strong>clairement formalisées</strong>, comprises et exercées.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-sky-700">GARANTIE 03</span>
                    <p className="text-slate-700 mt-1">Médicaments livrés aux <strong>seuls clients autorisés</strong> dans des délais garantissant la continuité des traitements des patients.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-sky-700">GARANTIE 04</span>
                    <p className="text-slate-700 mt-1">Enregistrements complets réalisés <strong>EN TEMPS RÉEL</strong> au moment précis de l'exécution de chaque opération.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-emerald-700">GARANTIE 05</span>
                    <p className="text-slate-700 mt-1">Déviations aux procédures écrites immédiatement signalées, documentées et soumises à une <strong>investigation de cause racine</strong>.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-emerald-700">GARANTIE 06</span>
                    <p className="text-slate-700 mt-1">Mesures correctives et préventives (<strong>CAPA</strong>) proportionnées au risque déployées pour empêcher toute récurrence.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-emerald-700">GARANTIE 07</span>
                    <p className="text-slate-700 mt-1">Activités externalisées (transport, gardiennage, maintenance) régies par des <strong>contrats écrits</strong> et rigoureusement surveillées.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-emerald-700">GARANTIE 08</span>
                    <p className="text-slate-700 mt-1">Ensemble du SMQ <strong>évalué annuellement</strong> et ajusté dans une optique d'amélioration continue et de conformité pérenne.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 3/13 • Système de Management de la Qualité</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 7 : MODULE 3 (B) - DÉVIATIONS, CAPA & ICH Q9
    // ==========================================
    case 7:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">
                  Module 3 • Amélioration Continue & Guide ANPP Chapitre 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Gestion des Déviations, Processus CAPA & Risques (ICH Q9)</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                Formule : Criticité = G × P × D
              </span>
            </div>

            {/* Added Interactive Ishikawa & Risk Simulation Component */}
            <div className="mb-3">
              <IshikawaDiagram />
            </div>

            {/* Conduite a tenir en cas de déviation en 5 étapes - Direct from user attachments */}
            <div className="mb-3">
              <Deviation5StepsVisual />
            </div>

            <div className="grid lg:grid-cols-2 gap-3 text-xs">
              <div className="glass-card p-3 rounded-2xl space-y-1.5">
                <span className="font-black text-sky-800 uppercase block">Méthodologie d'Analyse Cause Racine (Art. 6 & 13) :</span>
                <p className="text-slate-700 leading-snug">
                  • <strong>5 Pourquoi & Ishikawa :</strong> remonter à la source véritable (méthode, matériel, milieu, matière, main-d'œuvre).<br />
                  • <strong>Action Corrective (AC) :</strong> corriger immédiatement l'anomalie constatée.<br />
                  • <strong>Action Préventive (AP) :</strong> modifier la procédure ou l'infrastructure pour empêcher définitivement la récidive.
                </p>
                <div className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-bold text-[10.5px]">
                  ✖ INTERDICTION FORMELLE : Dissimuler une déviation constitue une faute professionnelle grave.
                </div>
              </div>

              <div className="glass-card p-3 rounded-2xl space-y-1.5">
                <span className="font-black text-emerald-800 uppercase block">Management des Risques ICH Q9 :</span>
                <p className="text-slate-700 leading-snug">
                  • <strong>1. Identifier</strong> les dangers à chaque étape (rupture froid, vol, inversion, casse).<br />
                  • <strong>2. Évaluer</strong> la criticité C = Gravité (G) × Probabilité (P) × Détectabilité (D).<br />
                  • <strong>3. Maîtriser</strong> par des barrières (alarmes, détrompeurs, double contrôle).<br />
                  • <strong>4. Réviser</strong> en revue de direction et après chaque incident majeur.
                </p>
                <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-[10.5px]">
                  ✔ Logistique & Transport : qualification saisonnière été/hiver des caisses et itinéraires.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 3/13 • Déviations, CAPA & Management des Risques</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 8 : MODULE 4 (A) - PERSONNEL & MISSIONS PDT
    // ==========================================
    case 8: {
      const slide8Cards = [
        {
          title: "Certificat d'Habilitation au Poste",
          subtitle: "Fac-similé officiel SPA ABC MED • Art. 17 Cahier des charges & Chapitre 10 BPDG",
          badge: "Document Réel d'Entreprise",
          content: <HabilitationCertificateVisual />
        },
        {
          title: "Structure & Organigramme RH Pharmaceutique",
          subtitle: "Organisation, effectifs qualifiés et règle d'anti-cumul des responsabilités",
          badge: "Art. 15-16",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-sky-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-600" /> Structure & Organigramme (Art. 15-16 & Chap. 10)
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Effectif qualifié et intègre :</strong>
                  Présence d'un personnel en nombre suffisant, formé et habilité pour chaque mission critique de distribution.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Règle anti-cumul (Art. 15) :</strong>
                  Interdiction absolue du cumul injustifié de responsabilités pouvant générer des conflits d'intérêts ou un risque qualité.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Pharmaciens Assistants (Art. 16) :</strong>
                  Assistent le PDT dans la surveillance des opérations et assurent la continuité de service en cas d'absence.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "Les 8 Attributions Clés du Pharmacien Directeur Technique",
          subtitle: "Missions régaliennes et responsabilités légales du PDT devant l'ANPP et le MIP",
          badge: "Responsabilité Pharmaceutique",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-amber-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" /> Les 8 Attributions Clés du Pharmacien Directeur Technique (PDT)
              </h3>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-semibold flex items-center justify-between">
                <span>Pharmacien DT Titulaire (SPA ABC MED) : <strong className="text-amber-900">Dr. Asma KETTOU</strong></span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-200/70 text-amber-900 font-mono font-bold">Art. 15-16 Cahier des charges</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">1. Maintien du SMQ</p>
                  <p className="text-slate-600 mt-1">Supervise le manuel qualité, les SOP, les fiches de poste et la traçabilité des flux.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">2. Conformité AMM (Art. 18)</p>
                  <p className="text-slate-600 mt-1">Vérifie l'enregistrement ANPP ou l'ATU valide à chaque arrivage avant commercialisation.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">3. Statut des Lots & Retours</p>
                  <p className="text-slate-600 mt-1">Autorité exclusive pour libérer, mettre en quarantaine ou rejeter un lot.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">4. Psychotropes (Décret 19-379)</p>
                  <p className="text-slate-600 mt-1">Détient personnellement la clé de l'armoire blindée et le registre coté et paraphé.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">5. Qualification Partenaires</p>
                  <p className="text-slate-600 mt-1">Valide les agréments des fournisseurs, officines et contrats de sous-traitance (Art. 26).</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">6. Rappels de Lots & Falsifiés</p>
                  <p className="text-slate-600 mt-1">Pilote le rappel d'urgence en &lt; 1 heure et déclare sans délai au MIP et à l'ANPP.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">7. Habilitation du Personnel</p>
                  <p className="text-slate-600 mt-1">Valide les formations et signe les certificats d'habilitation au poste.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-black text-slate-900 text-sm">8. Interlocuteur MIP / ANPP</p>
                  <p className="text-slate-600 mt-1">Accueille les inspecteurs officiels et garantit la conformité légale de l'établissement.</p>
                </div>
              </div>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 4 • Cahier des Charges (Art. 15 & 16) & Guide ANPP Chapitre 10</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Organisation du Personnel & Missions du Pharmacien Directeur Technique (PDT)</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Interlocuteur Principal MIP / ANPP
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-4 mb-4">
              <div className="lg:col-span-6 space-y-3">
                <div 
                  className="glass-card p-4 rounded-2xl cursor-pointer hover:shadow-md transition relative group"
                  onClick={() => openFullscreen(slide8Cards, 1)}
                  title="Cliquer pour afficher en plein écran"
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-sky-600">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-600" /> Structure & Organigramme (Art. 15-16 & Chap. 10)
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• <strong className="text-slate-900">Effectif qualifié et intègre :</strong> en nombre suffisant pour l'activité.</li>
                    <li>• <strong className="text-slate-900">Organigramme approuvé :</strong> PDT, pharmaciens assistants, AQ, logistique, commercial.</li>
                    <li>• <strong className="text-slate-900">Règle anti-cumul (Art. 15) :</strong> pas de chevauchement injustifié de responsabilités.</li>
                    <li>• <strong className="text-slate-900">Pharmaciens Assistants (Art. 16) :</strong> assistent le PDT et exercent la suppléance légale.</li>
                  </ul>
                </div>

                {/* Direct Visual from user attachment: Certificat d'habilitation with zoom trigger */}
                <div 
                  className="cursor-pointer group relative"
                  onClick={() => openFullscreen(slide8Cards, 0)}
                >
                  <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                    <Maximize2 className="w-3 h-3" /> Plein Écran
                  </div>
                  <HabilitationCertificateVisual onZoom={() => openFullscreen(slide8Cards, 0)} />
                </div>
              </div>

              <div 
                className="lg:col-span-6 glass-card p-4 rounded-2xl flex flex-col justify-between cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide8Cards, 2)}
                title="Cliquer pour afficher les 8 attributions en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-amber-600">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" /> Les 8 Attributions Clés du Pharmacien Directeur Technique (PDT)
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">1. Maintien du SMQ</p>
                      <p className="text-[11px] text-slate-600">Supervise manuel qualité, SOP, fiches de poste et traçabilité.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">2. Conformité AMM (Art. 18)</p>
                      <p className="text-[11px] text-slate-600">Vérifie l'enregistrement ANPP ou l'ATU valide à chaque arrivage.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">3. Statut des Lots & Retours</p>
                      <p className="text-[11px] text-slate-600">Autorité exclusive pour libérer ou rejeter un lot.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">4. Psychotropes (Décret 19-379)</p>
                      <p className="text-[11px] text-slate-600">Détient personnellement la clé et le registre coté et paraphé.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">5. Qualification Partenaires</p>
                      <p className="text-[11px] text-slate-600">Valide agréments fournisseurs/clients et sous-traitants (Art. 26).</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">6. Rappels de Lots & Falsifiés</p>
                      <p className="text-[11px] text-slate-600">Pilote le rappel d'urgence &lt; 1h et déclare sans délai au MIP/ANPP.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">7. Habilitation du Personnel</p>
                      <p className="text-[11px] text-slate-600">Valide les formations et signe les certificats d'habilitation.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs">8. Interlocuteur MIP / ANPP</p>
                      <p className="text-[11px] text-slate-600">Accueille les inspections inopinées et garantit la conformité légale.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Principe légal :</strong> Le PDT est garant devant la loi de la qualité sanitaire des médicaments distribués par SPA ABC MED.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 4/13 • Personnel & Responsabilités Pharmaceutiques</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 9 : MODULE 4 (B) - FORMATION & HYGIÈNE
    // ==========================================
    case 9:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 4 • Cahier des Charges (Art. 8 & 17) & Guide ANPP Chapitre 10</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Formation Continue, Habilitation & Hygiène / Sécurité en Entrepôt</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Habilitation Écrite & EPI Obligatoires
              </span>
            </div>

            {/* Direct Visual from user attachment: Interdictions & Tenues en Entrepôt */}
            <div className="mb-4">
              <WarehouseRulesVisual />
            </div>

            <div className="grid lg:grid-cols-2 gap-4 text-xs">
              <div className="glass-card p-4 rounded-2xl space-y-2">
                <h3 className="font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" /> Programme de Formation & 4 Preuves Documentaires (Art. 17 & Chap. 10)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong>Formation initiale :</strong> obligatoire pour tout nouvel arrivant avant sa prise de poste opérationnelle.</li>
                  <li>• <strong>Formation continue annuelle :</strong> BPD/BPS, SOP, chaîne du froid, ALCOA+, hygiène et sécurité.</li>
                  <li>• <strong>Modules spécifiques (Chap. 10) :</strong> matières hautement actives, toxiques, psychotropes et thermosensibles.</li>
                  <li>• <strong>4 Éléments obligatoires archivés :</strong> 1. Feuille d'émargement signée, 2. Supports utilisés, 3. Résultats des évaluations (QCM), 4. Actions correctives si échec.</li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2">
                <h3 className="font-black uppercase tracking-wider text-rose-800 flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600" /> Procédure en Cas de Bris de Conditionnement (Chap. 10 & 11)
                </h3>
                <p className="text-slate-700">
                  En cas de bris d'ampoule, flacon renversé ou poudre dispersée :<br />
                  1. Évacuer la zone immédiate et baliser.<br />
                  2. Porter les EPI adaptés (gants nitriles/étanches, masque de protection).<br />
                  3. Utiliser le kit absorbant d'urgence dédié (neutralisation).<br />
                  4. Éliminer les résidus en conteneur DASRI identifié.<br />
                  5. Rédiger une fiche de déviation et nettoyer la zone pour prévenir toute contamination croisée.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 4/13 • Formation Continue & Hygiène Opérationnelle</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 10 : MODULE 5 (A) - LOCAUX & ZONAGE
    // ==========================================
    case 10:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 5 • Cahier des Charges (Art. 7 à 9) & Guide ANPP Chapitre 11</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Normes de Superficie Obligatoires & Zonage en Entrepôt</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Dont ≥ 200 m² d'Aire de Stockage Continue
              </span>
            </div>

            {/* Added Isometric Warehouse Blueprint Illustration */}
            <div className="mb-3">
              <WarehouseBlueprint />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="glass-card p-3 rounded-xl space-y-1">
                <span className="font-extrabold text-emerald-800 uppercase block">6 Zones Opérationnelles Standards (Art. 8) :</span>
                <p className="text-slate-700 leading-relaxed">
                  1. <strong>Quai Réception :</strong> abrité, contrôle camion et température.<br />
                  2. <strong>Quarantaine Entrée :</strong> attente libération PDT (Jaune).<br />
                  3. <strong>Stockage Principal :</strong> allées numérotées, palettes surélevées.<br />
                  4. <strong>Picking :</strong> préparation des commandes selon FEFO.<br />
                  5. <strong>Contrôle & Colisage :</strong> vérification avant fermeture.<br />
                  6. <strong>Quai Expédition :</strong> abrité, sas thermique et chargement ordonné.
                </p>
              </div>

              <div className="glass-card p-3 rounded-xl space-y-1 border-l-4 border-l-amber-500">
                <span className="font-extrabold text-amber-800 uppercase block">5 Zones Spécifiques & Sécurisées (Art. 8 & Chap. 15) :</span>
                <p className="text-slate-700 leading-relaxed">
                  • <strong>Chambre Froide (+2°C/+8°C) :</strong> qualifiée, alarme 24/7.<br />
                  • <strong>Local Psychotropes :</strong> FERMÉ À CLÉ, alarme, sous garde PDT.<br />
                  • <strong>Zone d'Isolement / Rejet :</strong> sous clé (périmés, rappels, falsifiés).<br />
                  • <strong>Zone Dédiée DM :</strong> ≥ 90 m² sans interférence.<br />
                  • <strong>Local Inflammables & Gaz :</strong> ventilé, coupe-feu (Art. 19).
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 5/13 • Locaux, Superficies & Zonage</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 11 : MODULE 5 (B) - MAPPING, ALARMES & SI
    // ==========================================
    case 11:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 5 • Cahier des Charges (Art. 10, 11, 13)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Environnement, Mapping Thermique 24/7 & Système Informatique</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Qualification QC / QI / QO / QP
              </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 text-xs">
              <div className="glass-card p-4 rounded-2xl space-y-2.5">
                <h3 className="font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <ThermometerSun className="w-4 h-4 text-sky-600" /> 1. Environnement & Pest Control (Art. 13)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong className="text-slate-900">Thermohygromètres étalonnés :</strong> raccordement métrologique périodique et enregistrement continu.</li>
                  <li>• <strong className="text-slate-900">Humidité relative :</strong> maintien impératif <strong className="text-hydra-800">≤ 60% HR</strong> (formes sèches, gélules, blisters, emballages).</li>
                  <li>• <strong className="text-slate-900">Renouvellement d'air :</strong> élimination des poches de chaleur sous toiture.</li>
                  <li>• <strong className="text-slate-900">Pest Control (Lutte anti-nuisibles) :</strong> plan numéroté des pièges mécaniques et UV, prestataire agréé.</li>
                  <li className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-bold">
                    ✖ Interdiction formelle d'appâts toxiques ouverts (poisons) en zone de stockage.
                  </li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2.5 border-t-4 border-t-cyan-500">
                <h3 className="font-black uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-600" /> 2. Mapping 3D & Secours 24/7
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong className="text-slate-900">Cartographie 3D initiale :</strong> sondes en hauteur, milieu et bas pendant <strong className="text-cyan-800 font-bold">au moins 7 jours consécutifs</strong> (à vide ET en charge).</li>
                  <li>• <strong className="text-slate-900">Mapping saisonnier :</strong> été (stress canicule) + hiver (stress froid) pour positionner les sondes permanentes aux points les plus critiques.</li>
                  <li>• <strong className="text-slate-900">Système d'alarme 24/7 :</strong> relevé toutes les 10 min, seuils d'alerte, alarme sonore/visuelle + SMS/appel d'astreinte aux pharmaciens.</li>
                  <li>• <strong className="text-slate-900">Groupe électrogène de secours</strong> automatique en cas de coupure de courant.</li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2.5 border-t-4 border-t-emerald-500">
                <h3 className="font-black uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <ServerCog className="w-4 h-4 text-emerald-600" /> 3. Maintenance & SI Sécurisé (Art. 10-11)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong className="text-slate-900">Maintenance préventive :</strong> calendrier formalisé des climatisations, compresseurs et chariots avec registre visé par le PDT.</li>
                  <li>• <strong className="text-slate-900">Dossiers de qualification :</strong> QC (Conception), QI (Installation), QO (Opérationnelle), QP (Performance).</li>
                  <li>• <strong className="text-slate-900">Système Informatique (WMS/ERP) :</strong>
                    <ul className="pl-2 mt-1 space-y-0.5 text-slate-600">
                      <li>– Accès nominatifs uniques avec mot de passe (comptes partagés interdits).</li>
                      <li>– <strong>Audit Trail :</strong> traçabilité inaltérable de toute création, modification ou annulation.</li>
                      <li>– Sauvegardes déportées régulières et testées.</li>
                      <li>– Verrouillage automatique des statuts et du FEFO.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 5/13 • Maîtrise Environnementale, Mapping & Informatique</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 12 : MODULE 6 (A) - STOCKAGE & FEFO
    // ==========================================
    case 12:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 6 • Guide ANPP Chapitre 12 & Cahier des Charges Art. 9</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Règles de Stockage, Règle d'Or FEFO & Code Couleur des Statuts</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Double Verrouillage : Étiquette + WMS
              </span>
            </div>

            {/* Added FEFO vs FIFO & 4 Pallet Statuses Illustration */}
            <div className="mb-3">
              <FefoDiagram />
            </div>

            {/* Direct Visual from user attachment: 5 Colored Status Labels & Pallet Sheet */}
            <div className="mb-3.5">
              <ProductStatusLabelsVisual />
            </div>

            <div className="grid lg:grid-cols-2 gap-3.5 text-xs">
              <div className="glass-card p-3.5 rounded-2xl space-y-1.5">
                <span className="font-black text-sky-800 uppercase block">Règles d'Entreposage Physique (Chapitre 12) :</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• <strong className="text-slate-900">Surélévation obligatoire :</strong> palettes ou rayonnages (<strong className="text-rose-700">STRICTEMENT INTERDIT à même le sol</strong>).</li>
                  <li>• <strong className="text-slate-900">Dégagement murs et sols :</strong> espacement minimal de <strong className="text-hydra-800">30 à 50 cm</strong> des parois pour ventilation et inspection.</li>
                  <li>• <strong className="text-slate-900">Palettes propres et stables :</strong> sans clous saillants, filmées et respectant la hauteur maximale de gerbage fabricant.</li>
                </ul>
              </div>

              <div className="glass-card p-3.5 rounded-2xl space-y-1.5">
                <span className="font-black text-emerald-800 uppercase block">Gestion des Dates Courtes & Déclaration MIP (Art. 34) :</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Extraction mensuelle des produits dont la péremption approche (ex: &lt; 6 mois).</li>
                  <li>• Blocage préventif automatique dans le WMS au seuil critique fixé par le PDT.</li>
                  <li>• Interdiction pénale absolue de distribuer des médicaments périmés.</li>
                  <li>• Déclaration trimestrielle obligatoire de la liste des périmés au MIP.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 6/13 • Bonnes Pratiques de Stockage & Statuts</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 13 : MODULE 6 (B) - CHAÎNE DU FROID & EXCURSIONS
    // ==========================================
    case 13:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 6 • Guide ANPP Chapitre 15 & Annexe 1 (Limites Pharmacopée)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">La Chaîne du Froid : Plages Normalisées (Annexe 1) & Excursions</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold">
                Réception Froid &lt; 15 minutes • Lieu Sec ≤ 60% HR
              </span>
            </div>

            {/* Added Calibrated Cold Chain Thermometer Illustration */}
            <div className="mb-4">
              <ColdChainThermometer />
            </div>

            <div className="grid lg:grid-cols-12 gap-4 text-xs">
              <div className="lg:col-span-5 glass-card p-4 rounded-2xl space-y-2">
                <h3 className="font-black uppercase tracking-wider text-cyan-800 flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-cyan-600" /> 5 Exigences Opérationnelles Froid
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li><strong className="text-slate-900">1. Traitement prioritaire :</strong> réceptionner et transférer en chambre froide dans les <strong className="text-cyan-800 font-bold">15 minutes</strong> suivant l'arrivée.</li>
                  <li><strong className="text-slate-900">2. Déballage en chambre froide :</strong> ne jamais laisser les palettes stagner sur le quai chaud.</li>
                  <li><strong className="text-slate-900">3. Enregistreurs autonomes (data loggers) :</strong> lecture et vérification immédiates.</li>
                  <li><strong className="text-slate-900">4. Zéro contact direct</strong> entre produit et accumulateurs congelés (risque de congélation létale).</li>
                  <li><strong className="text-slate-900">5. Déclassement immédiat</strong> si la température est descendue sous 0°C pour vaccins et insulines.</li>
                </ul>
              </div>

              <div className="lg:col-span-7 glass-card p-4 rounded-2xl">
                <h3 className="font-black uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" /> Protocole d'Excursion Thermique en 4 Étapes
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-amber-800">1. ISOLEMENT IMMÉDIAT</span>
                    <p className="text-slate-600 mt-0.5">Bloquer dans le WMS. Étiquette jaune QUARANTAINE - EXCURSION THERMIQUE. Ne pas déplacer ni détruire sans avis.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-sky-800">2. EXTRACTION DONNÉES</span>
                    <p className="text-slate-600 mt-0.5">Télécharger le tracé complet de la sonde. Relever la T° max/min et la durée exacte du dépassement.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-purple-800">3. ALERTE PHARMACIEN</span>
                    <p className="text-slate-600 mt-0.5">Rédiger la fiche de déviation. Le PDT contacte le titulaire d'AMM pour analyse des données de stabilité.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono font-bold text-emerald-800">4. DÉCISION & CLÔTURE</span>
                    <p className="text-slate-600 mt-0.5">Autorisation écrite de remise en vente OU déclassement pour destruction par le PDT + plan CAPA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 6/13 • Chaîne du Froid & Protocole d'Excursion</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 14 : MODULE 7 (A) - DOCUMENTATION & ALCOA+
    // ==========================================
    case 14: {
      const slide14Cards = [
        {
          title: "Pyramide Documentaire Officielle du SMQ",
          subtitle: "Les 5 niveaux documentaires : MQ ➔ Procédures ➔ Instructions ➔ Formulaires ➔ Enregistrements",
          badge: "Document Réel d'Entreprise",
          content: <DocHierarchyPyramid />
        },
        {
          title: "Procédure Officielle Bonnes Pratiques Documentaires",
          subtitle: "Fac-similé Hydrapharm Group PR.2.AQ.014.1 avec visas de Rédaction, Validation et Approbation",
          badge: "Document Réel d'Entreprise",
          content: <HydrapharmProcedureVisual />
        },
        {
          title: "Principes ALCOA+ d'Intégrité des Données",
          subtitle: "Attributable, Légible, Contemporain, Original, Exact, Complet, Cohérent, Durable et Disponible",
          badge: "Intégrité des Données",
          content: <AlcoaBadges />
        },
        {
          title: "Règle Légale d'Approbation & Cycle de Vie (Art. 28)",
          subtitle: "Exigences du Cahier des charges pour l'élaboration et la révision des documents",
          badge: "Cahier des Charges Art. 28",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-sky-800 flex items-center gap-2">
                <FolderTree className="w-5 h-5 text-sky-600" /> Règle Légale d'Approbation & Cycle de Vie
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Approbation formelle obligatoire (Art. 28) :</strong>
                  Toute la documentation (procédures, instructions, contrats) doit être rédigée, vérifiée, approuvée, signée et datée par des personnes formellement autorisées et qualifiées (PDT et responsables de service).
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Cycle de vie maîtrisé :</strong>
                  1. Rédaction par le métier ➔ 2. Vérification croisée ➔ 3. Approbation PDT ➔ 4. Diffusion contrôlée avec retrait immédiat des versions obsolètes ➔ 5. Revue périodique pour mise à jour continue.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Archivage légal obligatoire :</strong>
                  Conservation sécurisée au minimum <strong>5 ans</strong> sous format papier ou électronique sécurisé avec Audit Trail.
                </li>
              </ul>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 7 • Cahier des Charges (Art. 27 & 28)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Le Système Documentaire Pharmaceutique & Principes ALCOA+</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Data Integrity (Intégrité des Données)
              </span>
            </div>

            {/* Visuals: 5-Level Quality Documentation Pyramid & Hydrapharm Procedure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3.5 items-stretch">
              <div 
                className="lg:col-span-6 cursor-pointer group relative"
                onClick={() => openFullscreen(slide14Cards, 0)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <DocHierarchyPyramid onZoom={() => openFullscreen(slide14Cards, 0)} />
              </div>
              <div 
                className="lg:col-span-6 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide14Cards, 1)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <HydrapharmProcedureVisual onZoom={() => openFullscreen(slide14Cards, 1)} />
              </div>
            </div>

            {/* ALCOA+ Badges with zoom trigger */}
            <div 
              className="mb-3 cursor-pointer group relative"
              onClick={() => openFullscreen(slide14Cards, 2)}
            >
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                <Maximize2 className="w-3 h-3" /> Plein Écran
              </div>
              <AlcoaBadges />
            </div>

            <div className="grid lg:grid-cols-2 gap-3.5 text-xs">
              <div 
                className="glass-card p-3.5 rounded-2xl space-y-1.5 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide14Cards, 3)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-sky-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-sky-600" /> Règle Légale d'Approbation (Art. 28)
                </h3>
                <p className="text-slate-700 leading-snug">
                  Toute la documentation (procédures, instructions, contrats) doit être <strong>approuvée, signée et datée</strong> par des personnes autorisées et qualifiées (PDT et responsables de service).
                </p>
                <div className="p-1.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 font-bold text-[10.5px]">
                  ✔ Rôle clé : Éviter les erreurs liées à la communication orale et tracer les décisions.
                </div>
              </div>

              <div 
                className="glass-card p-3.5 rounded-2xl space-y-1.5 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide14Cards, 3)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-emerald-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" /> Cycle de Vie Maîtrisé du Document (Art. 28)
                </h3>
                <p className="text-slate-700 leading-snug">
                  1. <strong>Rédaction</strong> par le métier • 2. <strong>Vérification</strong> croisée • 3. <strong>Approbation PDT</strong> • 4. <strong>Diffusion contrôlée</strong> avec retrait des versions obsolètes • 5. <strong>Revue périodique</strong> pour mise à jour continue.
                </p>
                <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-[10.5px]">
                  ✔ Archivage légal au minimum 5 ans sous format papier ou électronique sécurisé.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 7/13 • Système Documentaire & Principes ALCOA+</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 15 : MODULE 7 (B) - CORRECTION & ARCHIVAGE 5 ANS
    // ==========================================
    case 15: {
      const slide15Cards = [
        {
          title: "Exemples de Pratiques Documentaires Interdites",
          subtitle: "Enregistrement Hydrapharm Group ENR.01.[PR.2.AQ.014].1 • Les 9 interdits majeurs",
          badge: "Document Réel d'Entreprise",
          content: <HydrapharmForbiddenPracticesVisual />
        },
        {
          title: "Correction des Erreurs & Abréviations Officielles",
          subtitle: "Procédure Section 5.3 • Règle du trait simple, dater, signer et dictionnaire EE/EC/ED/TE/RC",
          badge: "Document Réel d'Entreprise",
          content: <ErrorCorrectionVisual />
        },
        {
          title: "Traçabilité & Archivage Légal Obligatoire (≥ 5 Ans)",
          subtitle: "Articles 22, 27 et 29 du Cahier des charges des distributeurs de produits pharmaceutiques",
          badge: "Cahier des Charges",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-lg font-black uppercase text-sky-800 flex items-center gap-2">
                  <Archive className="w-5 h-5 text-sky-600" /> Traçabilité & Archivage Légal Obligatoire
                </h3>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-black">
                  CONSERVATION ≥ 5 ANS
                </span>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Données Obligatoires à Conserver (Art. 22) :</strong>
                  Date de chaque opération, dénomination, DCI, forme, dosage, quantité précise, numéro de lot, date de péremption, coordonnées du fournisseur/client et décharges signées.
                </li>
                <li className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block text-base mb-1">Sécurisation du Local d'Archives (Art. 27 & 29) :</strong>
                  Registres cotés et paraphés par le PDT. Local sous clé, propre, sec, ignifuge et protégé des rongeurs.
                </li>
              </ul>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 7 • Cahier des Charges (Art. 22, 27, 29)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Correction d'Erreur d'Écriture & Archivage Légal (5 Ans)</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
                Zéro Blanco / Tipp-Ex • Intégrité ALCOA+
              </span>
            </div>

            {/* Direct Visuals from user attachments: 9 Forbidden Practices & 5.3 Error Correction Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 items-stretch">
              <div 
                className="lg:col-span-6 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide15Cards, 0)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <HydrapharmForbiddenPracticesVisual onZoom={() => openFullscreen(slide15Cards, 0)} />
              </div>

              <div 
                className="lg:col-span-6 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide15Cards, 1)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <ErrorCorrectionVisual onZoom={() => openFullscreen(slide15Cards, 1)} />
              </div>
            </div>

            {/* Archiving Requirements Card with Zoom */}
            <div 
              className="glass-card p-4 rounded-2xl space-y-3 cursor-pointer hover:shadow-md transition relative group"
              onClick={() => openFullscreen(slide15Cards, 2)}
              title="Cliquer pour afficher les exigences d'archivage en plein écran"
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-sky-600">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <Archive className="w-4 h-4 text-sky-600" /> Traçabilité & Archivage : Obligation de 5 Ans (Art. 22 & 29)
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 font-mono text-xs font-bold">≥ 5 ANS</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Données Obligatoires à Conserver ≥ 5 ans (Art. 22) :</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Date exacte de chaque opération de vente ou d'achat.</li>
                    <li>• Dénomination, DCI, forme pharmaceutique (ou désignation DM).</li>
                    <li>• Quantité précise, numéro de lot et date de péremption (ou n° de série DM).</li>
                    <li>• Noms et adresses complètes du fournisseur et du client.</li>
                    <li>• Décharges signées et bordereaux de livraison justifiant la remise.</li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <p className="font-bold text-emerald-800">Sécurisation du Local d'Archives (Art. 27 & 29) :</p>
                  <p className="text-slate-700">
                    Registres cotés et paraphés par le PDT (Art. 29). Local propre, sec, sous clé, protégé contre l'humidité, incendie et rongeurs. Sauvegardes informatiques déportées.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 7/13 • Correction d'Écriture & Archivage 5 Ans</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 16 : MODULE 8 (A) - QUALIFICATION & RÉCEPTION
    // ==========================================
    case 16: {
      const slide16Cards = [
        {
          title: "Contrat Écrit Obligatoire & Qualification des Tiers",
          subtitle: "Fac-similé officiel BPDG • Convention écrite obligatoire régissant les responsabilités qualité (Art. 26)",
          badge: "Document Réel d'Entreprise",
          content: <ContractHandshakeVisual />
        },
        {
          title: "Qualification & Surveillance des Prestataires",
          subtitle: "Audit annuel, vérification des agréments et cahier des charges opposable",
          badge: "Cahier des Charges Art. 26",
          content: <ContractValidationVisual />
        },
        {
          title: "Les 5 Étapes Obligatoires de Contrôle à la Réception",
          subtitle: "Article 19 du Cahier des charges : Véhicule, Documents, Intégrité, Chaîne du froid (< 15 min), Statut",
          badge: "Article 19",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-amber-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" /> Les 5 Étapes Obligatoires de Réception (Art. 19)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-black text-sky-700 block mb-1">1. VÉHICULE</span>
                  <p className="text-slate-600 leading-snug">État et propreté du camion, intégrité des scellés/plombage, contrôle du ticket thermique.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-black text-sky-700 block mb-1">2. DOCUMENTS</span>
                  <p className="text-slate-600 leading-snug">Concordance BL vs Facture vs Bon de Commande. N° lots, dates de péremption, certificat de libération.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-black text-sky-700 block mb-1">3. INTÉGRITÉ</span>
                  <p className="text-slate-600 leading-snug">Inspection visuelle des cartons (écrasés, traces liquides) + étiquetage légal en <strong>arabe et français</strong>.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-300">
                  <span className="font-mono font-black text-cyan-800 block mb-1">4. FROID (&lt; 15 min)</span>
                  <p className="text-slate-700 leading-snug">Déchargement prioritaire immédiat (&lt; 15 min), lecture des data loggers et transfert direct en chambre froide.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300">
                  <span className="font-mono font-black text-emerald-800 block mb-1">5. STATUT & VISA</span>
                  <p className="text-slate-700 leading-snug">Si conforme : quarantaine WMS avant libération PDT. Si non conforme : refus sur BL, zone rouge, alerte PDT.</p>
                </div>
              </div>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 8 • Cahier des Charges (Art. 2, 4, 19)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Qualification Fournisseurs/Clients & Les 5 Étapes de Réception</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Sécurisation Entrée & Sortie
              </span>
            </div>

            {/* Direct Visuals: Real Contract Handshake & Written Validation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3.5 items-stretch">
              <div 
                className="lg:col-span-6 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide16Cards, 0)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <ContractHandshakeVisual onZoom={() => openFullscreen(slide16Cards, 0)} />
              </div>

              <div 
                className="lg:col-span-6 cursor-pointer group relative flex flex-col"
                onClick={() => openFullscreen(slide16Cards, 1)}
              >
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3" /> Plein Écran
                </div>
                <ContractValidationVisual />
              </div>
            </div>

            <div 
              className="glass-card p-4 rounded-2xl cursor-pointer hover:shadow-md transition relative group"
              onClick={() => openFullscreen(slide16Cards, 2)}
              title="Cliquer pour afficher les 5 étapes en plein écran"
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-amber-600">
                <Maximize2 className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-2.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Les 5 Étapes Obligatoires de Réception (Art. 19)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-bold text-sky-700">1. VÉHICULE</span>
                  <p className="text-slate-600 mt-1">État et propreté du camion, intégrité des scellés/plombage, contrôle du ticket de température.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-bold text-sky-700">2. DOCUMENTS</span>
                  <p className="text-slate-600 mt-1">Concordance BL vs Facture vs Bon de Commande. N° lots, dates de péremption, certificat de libération.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-bold text-sky-700">3. INTÉGRITÉ</span>
                  <p className="text-slate-600 mt-1">Inspection visuelle des cartons (écrasés, traces liquides) + étiquetage légal en <strong>arabe et français</strong>.</p>
                </div>
                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-300">
                  <span className="font-mono font-bold text-cyan-800">4. FROID (&lt; 15 min)</span>
                  <p className="text-slate-700 mt-1">Déchargement prioritaire immédiat (&lt; 15 min), lecture des data loggers et transfert direct en chambre froide.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-bold text-emerald-700">5. STATUT & VISA</span>
                  <p className="text-slate-600 mt-1">Si conforme : quarantaine WMS avant libération PDT. Si non conforme : refus sur BL, zone rouge, alerte PDT.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 8/13 • Qualification & Contrôles à la Réception</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 17 : MODULE 8 (B) - PICKING, COLISAGE & EXPÉDITION
    // ==========================================
    case 17:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 8 • Cahier des Charges (Art. 20, 21, 22) & Guide ANPP Chapitre 13</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Préparation (Picking), Colisage Sécurisé & Expédition contre Décharge</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Vigilance LASA & Bons Pré-Vente / Pré-Achat
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <ScanBarcode className="w-4 h-4 text-sky-600" /> Préparation des Commandes (Picking) & Colisage (Art. 20-21)
                </h3>

                <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-900">Règles Strictes de Picking (Chap. 13)</p>
                    <ul className="space-y-1 text-slate-600">
                      <li>• <strong>Bons de commande (Art. 20) :</strong> conserver tous les bons de commandes, <strong>y compris pré-vente et pré-achat</strong>.</li>
                      <li>• <strong>FEFO / PEPS absolu :</strong> respect strict des dates.</li>
                      <li>• <strong>Prévention LASA :</strong> séparation physique des conditionnements ou dosages proches.</li>
                      <li>• Boîtes d'origine intactes et scellées.</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <p className="font-bold text-emerald-800">Contrôle & Colisage (Art. 21)</p>
                    <ul className="space-y-1 text-slate-600">
                      <li>• <strong>Double contrôle systématique</strong> avant fermeture.</li>
                      <li>• Cartons robustes et adhésif personnalisé inviolable.</li>
                      <li>• Étiquetage externe complet : adresse, T°, pictogrammes (Haut, Fragile).</li>
                      <li>• Colisage froid : conteneur qualifié + enregistreur thermique identifié sur BL.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-semibold">
                  ✖ INTERDICTION : Ne jamais mélanger dans un même colis des produits lourds écrasants et des ampoules ou flacons en verre fragiles.
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" /> Expédition, Bordereau de Livraison & Décharge (Art. 20 & 22)
                </h3>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-900">Mentions Obligatoires sur le Bordereau de Livraison (BL) / Facture (Art. 20 & 22) :</p>
                  <ul className="grid sm:grid-cols-2 gap-1 text-slate-600">
                    <li>• Date et heure exactes d'expédition.</li>
                    <li>• Nom commercial, DCI, forme et dosage.</li>
                    <li>• Quantité exacte livrée par ligne.</li>
                    <li>• N° de lot et date de péremption (ou n° de série DM).</li>
                    <li className="sm:col-span-2">• Coordonnées complètes fournisseur/client + n° de scellés.</li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-amber-800">Remise contre Décharge & Archivage 5 Ans (Art. 22 & 29) :</p>
                  <ul className="space-y-1 text-slate-600">
                    <li>• <strong className="text-slate-900">Remise exclusive en mains propres :</strong> directement au pharmacien d'officine ou responsable hospitalier.</li>
                    <li>• <strong className="text-rose-700 font-bold">Interdiction formelle de dépôt non surveillé</strong> devant une officine fermée.</li>
                    <li>• <strong className="text-slate-900">Décharge obligatoire :</strong> signature manuscrite + <strong>cachet officiel</strong> + date et heure de réception.</li>
                    <li>• Archivage de la décharge pendant au moins 5 ans (Art. 22).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 8/13 • Préparation, Colisage & Expédition</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 18 : MODULE 9 - TRANSPORT & URGENCES
    // ==========================================
    case 18:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 9 • Guide ANPP Chapitre 14 & Décret 19-379</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Transport sous Température Dirigée & Gestion des Urgences</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                Véhicules Qualifiés • Chargement LIFO
              </span>
            </div>

            {/* Added Algeria Transport & Cold Hub Map Illustration */}
            <div className="mb-4">
              <TransportLogisticsMap />
            </div>

            <div className="grid lg:grid-cols-2 gap-4 text-xs">
              <div className="glass-card p-3.5 rounded-2xl space-y-1.5 border-l-4 border-l-purple-500">
                <span className="font-black text-purple-900 uppercase block">Transport des Psychotropes & Stupéfiants (Décret 19-379) :</span>
                <p className="text-slate-700">
                  • Emballages <strong>neutres et scellés</strong> sans mention extérieure apparente de stupéfiants.<br />
                  • <strong>Trajet direct</strong> sans arrêts injustifiés ni stationnements non surveillés.<br />
                  • Remise exclusive en mains propres contre décharge du pharmacien.<br />
                  • Déclaration immédiate aux forces de sécurité et au MIP en cas de vol ou d'agression.
                </p>
              </div>

              <div className="glass-card p-3.5 rounded-2xl space-y-1.5 border-l-4 border-l-amber-500">
                <span className="font-black text-amber-900 uppercase block">Protocole en Cas de Panne Frigorifique en Transit (Chap. 14) :</span>
                <p className="text-slate-700">
                  1. Alerte immédiate du distributeur et du PDT.<br />
                  2. <strong>Maintenir les portes fermées</strong> de la caisse isotherme (inertie thermique).<br />
                  3. Mesures d'urgence : camion frigorifique de secours, ajout de glace carbonique qualifiée ou déroutement vers un entrepôt relais.<br />
                  4. Quarantaine à l'arrivée et décision écrite formelle du PDT.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 9/13 • Transport & Logistique sous Température Dirigée</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 19 : MODULE 10 (A) - RÉCLAMATIONS, RETOURS & RAPPELS
    // ==========================================
    case 19: {
      const slide19Cards = [
        {
          title: "Procédure Officielle de Traitement des Réclamations",
          subtitle: "Fac-similé Hydrapharm Group • Circuit officiel de visa, traçabilité et enquête",
          badge: "Document Réel d'Entreprise",
          content: <HydrapharmProcedureVisual />
        },
        {
          title: "1. Traitement des Réclamations Clients (Art. 23)",
          subtitle: "Distinction réclamation logistique vs qualité produit et délais de traitement",
          badge: "Cahier des Charges Art. 23",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-sky-800 flex items-center gap-2">
                <MessageSquareWarning className="w-5 h-5 text-sky-600" /> Gestion des Réclamations (Art. 23)
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Désignation formelle :</strong>
                  Personne responsable désignée sous supervision directe du PDT (Art. 23).
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Enregistrement sans délai :</strong>
                  N° de lot, nature précise du problème, client plaignant et évaluation d'impact.
                </li>
                <li className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block text-base mb-1">Distinction obligatoire (Chap. 7) :</strong>
                  Erreur logistique (manquant, casse, inversion) traitée en interne vs anomalie qualité produit (signalement sans délai au fabricant / titulaire de DE et à l'ANPP).
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Retours Clients : Les 5 Conditions Strictes (Chap. 8)",
          subtitle: "Délai interne maîtrisé (ex. 7 jours ABC MED) et 6 preuves documentaires obligatoires pour le froid",
          badge: "Guide ANPP Chapitre 8",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-amber-800 flex items-center gap-2">
                <Undo2 className="w-5 h-5 text-amber-600" /> Retours : 5 Conditions Cumulatives
              </h3>
              <ol className="space-y-2.5 text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>a) Conditionnement d'origine intact :</strong> non ouvert, non souillé, non périmé.
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>b) Délai acceptable défini en interne :</strong> fixé par la procédure de l'établissement (ex. <strong>7 jours</strong> chez ABC MED, pas de délai rigide de 10 jours).
                </li>
                <li className="p-3 rounded-xl bg-cyan-50 border border-cyan-200">
                  <strong>c) Preuve continue de chaîne du froid :</strong> 6 preuves documentaires exigées (livraison, réception client, maintien thermique, réemballage, collecte et réintégration).
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>d) Décision écrite du Pharmacien DT :</strong> examen obligatoire et visa formel du PDT.
                </li>
                <li className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <strong>e) Réintégration FEFO :</strong> réintégration en stock vendable selon la date de péremption la plus proche.
                </li>
              </ol>
            </div>
          )
        },
        {
          title: "3. Rappel de Lots d'Urgence & Mock Recall (Art. 24-25)",
          subtitle: "Astreinte 24/7, blocage < 1h et notification immédiate MIP/ANPP",
          badge: "Urgence Sanitaire",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-rose-200 shadow-sm space-y-4 text-sm">
              <h3 className="text-lg font-black uppercase text-rose-800 flex items-center gap-2">
                <BellRing className="w-5 h-5 text-rose-600" /> Rappel de Lots d'Urgence
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">Astreinte 24/7 (Chap. 16) :</strong>
                  Coordonnées d'urgence et dossiers de distribution immédiatement accessibles.
                </li>
                <li className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                  <strong className="text-rose-900 block text-base mb-1">Blocage en &lt; 1 heure :</strong>
                  Verrouillage informatique WMS + étiquetage « PRODUIT RAPPELÉ » en zone sécurisée sous clé.
                </li>
                <li className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block text-base mb-1">Simulation annuelle obligatoire :</strong>
                  Test régulier de réactivité via un <strong>Mock Recall</strong> complet avec rapport de réconciliation.
                </li>
              </ul>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 10 • Cahier des Charges (Art. 23 à 25) & Guide ANPP Chapitres 7 & 8</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Réclamations Clients, Retours (Chap. 8) & Rappels de Lots</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
                Procédure Retours • Mock Recall Annuel
              </span>
            </div>

            {/* Direct Visual from user attachment: Official Hydrapharm Procedure PRO.M03.A with Zoom */}
            <div 
              className="mb-4 cursor-pointer group relative"
              onClick={() => openFullscreen(slide19Cards, 0)}
            >
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                <Maximize2 className="w-3 h-3" /> Plein Écran
              </div>
              <HydrapharmProcedureVisual onZoom={() => openFullscreen(slide19Cards, 0)} />
            </div>

            <div className="grid lg:grid-cols-3 gap-3.5 text-xs">
              <div 
                className="glass-card p-3.5 rounded-2xl space-y-1.5 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide19Cards, 1)}
                title="Cliquer pour afficher en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-sky-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <MessageSquareWarning className="w-4 h-4 text-sky-600" /> 1. Gestion des Réclamations (Art. 23)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Personne responsable désignée sous supervision du PDT (Art. 23).</li>
                  <li>• Enregistrement immédiat : n° de lot, nature du problème, client plaignant, impact.</li>
                  <li>• <strong>Distinction obligatoire (Chap. 7) :</strong>
                    <br />– Erreur logistique : manquant, casse, retard.
                    <br />– Qualité du produit : informer <strong>sans délai le fabricant et/ou titulaire de la DE</strong>.
                  </li>
                  <li>• Suivi des délais de traitement (7–15 jours) et analyse des tendances en revue de direction.</li>
                </ul>
              </div>

              <div 
                className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-amber-500 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide19Cards, 2)}
                title="Cliquer pour afficher les conditions de retour en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-amber-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black uppercase tracking-wider text-amber-800 flex items-center gap-2">
                  <Undo2 className="w-4 h-4 text-amber-600" /> 2. Retours : 5 Conditions Strictes (Chap. 8)
                </h3>
                <ol className="space-y-1 text-slate-700">
                  <li><strong>a) Conditionnement d'origine intact</strong>, non ouvert, non périmé.</li>
                  <li><strong>b) Délai acceptable non imposé par la loi :</strong> fixé par la procédure interne de l'établissement (ex. <strong>7 jours</strong> chez ABC MED — aucun délai légal rigide de 10 jours n'est imposé).</li>
                  <li><strong>c) Preuve de stockage conforme</strong>. Pour le froid, produire les <strong>6 preuves documentaires</strong> (livraison, examen, ouverture, réemballage, collecte, réintégration).</li>
                  <li><strong>d) Examen et décision écrite obligatoire du PDT</strong>.</li>
                  <li><strong>e) Réintégration en stock vendable selon la règle FEFO</strong>.</li>
                </ol>
                <div className="p-1.5 rounded bg-rose-50 border border-rose-200 text-[10.5px] text-rose-800 font-bold">
                  ✖ Les médicaments volés qui ont été récupérés ne doivent JAMAIS être remis en stock (Chap. 8).
                </div>
              </div>

              <div 
                className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-rose-500 cursor-pointer hover:shadow-md transition relative group"
                onClick={() => openFullscreen(slide19Cards, 3)}
                title="Cliquer pour afficher le rappel de lots en plein écran"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-rose-600">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black uppercase tracking-wider text-rose-800 flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-rose-600" /> 3. Rappel de Lots d'Urgence (Art. 24-25)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong>Astreinte 24/7 (Chap. 16) :</strong> coordonnées et dossiers de distribution immédiatement consultables.</li>
                  <li>• <strong>Blocage en &lt; 1 heure :</strong> arrêt WMS + étiquetage « PRODUIT RAPPELÉ » en zone sous clé.</li>
                  <li>• <strong>Notification immédiate :</strong> Ministère (MIP), ANPP (Art. 25), fabricant et tous les clients livrés.</li>
                  <li>• Rapport final de réconciliation des quantités.</li>
                  <li className="p-1.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10.5px]">
                    ✔ Simulation annuelle obligatoire : <strong>Mock Recall</strong> testant la réactivité de l'équipe.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 10/13 • Réclamations, Retours & Rappels d'Urgence</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 20 : MODULE 10 (B) - FALSIFIÉS & DESTRUCTION
    // ==========================================
    case 20: {
      const slide20Cards = [
        {
          title: "Cas Réel de Médicament Falsifié : Coartem® 20/120 mg",
          subtitle: "Fac-similé comparatif terrain • Différences de teinte, typographie et mentions légales",
          badge: "Document Réel d'Entreprise",
          content: <CoartemFakeVsRealVisual />
        },
        {
          title: "Notification Officielle de Rappel de Lot d'Urgence",
          subtitle: "Cahier des charges Art. 24-25 & Guide ANPP Chapitre 8 • Blocage immédiat < 1h",
          badge: "Alerte Réglementaire",
          content: <RecallNoticeVisual />
        },
        {
          title: "Procédure Légale de Destruction & PV Officiel (Art. 25)",
          subtitle: "Incinération contrôlée, PV visé par le PDT et conservation des justificatifs ≥ 5 ans",
          badge: "Destruction Réglementaire",
          content: (
            <div className="bg-white p-6 rounded-2xl border border-rose-200 shadow-sm space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-lg font-black uppercase text-rose-800 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-600" /> Procédure de Destruction des Falsifiés & Périmés
                </h3>
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-mono text-xs font-black">
                  ARTICLE 25
                </span>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">1. Quarantaine de Sécurité :</strong>
                  Transfert immédiat des produits falsifiés, périmés ou rappelés dans la zone fermée sous clé « REJETÉS / À DÉTRUIRE ».
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-base mb-1">2. Déclaration Préalable :</strong>
                  Information formelle du Ministère de l'Industrie Pharmaceutique et de l'ANPP avant toute opération de destruction physique.
                </li>
                <li className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block text-base mb-1">3. Procès-Verbal de Destruction :</strong>
                  Établissement du PV officiel contradictoire signé par le Pharmacien Directeur Technique et le prestataire d'incinération agréé. Archivage légal ≥ 5 ans.
                </li>
              </ul>
            </div>
          )
        }
      ];

      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 10 • Guide ANPP Chapitre 8 & Cahier des Charges Art. 25</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Médicaments Falsifiés : Détection, Alerte & Destruction Légale</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
                Alerte Immédiate ANPP & MIP
              </span>
            </div>

            {/* Direct Visual from user attachment: Real Coartem Comparison with Zoom */}
            <div 
              className="mb-4 cursor-pointer group relative"
              onClick={() => openFullscreen(slide20Cards, 0)}
            >
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                <Maximize2 className="w-3 h-3" /> Plein Écran
              </div>
              <CoartemFakeVsRealVisual onZoom={() => openFullscreen(slide20Cards, 0)} />
            </div>

            {/* Direct Visual: Official Recall Notice with Zoom */}
            <div 
              className="mb-2 cursor-pointer group relative"
              onClick={() => openFullscreen(slide20Cards, 1)}
            >
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                <Maximize2 className="w-3 h-3" /> Plein Écran
              </div>
              <RecallNoticeVisual />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 10/13 • Lutte Anti-Falsification & Destruction Réglementaire</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
    }

    // ==========================================
    // SLIDE 21 : MODULE 11 - DM & PSYCHOTROPES
    // ==========================================
    case 21:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 11 • Cahier des Charges (Art. 5, 6, 7, 8, 13, 14, 22, 29) & Décret n° 19-379</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Dispositifs Médicaux (DM) & Gestion des Psychotropes / Stupéfiants</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-purple-50 text-purple-800 border border-purple-200 text-xs font-bold">
                Règle des 2 Ans & Dérogation Extension (Art. 6)
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl space-y-3 border-t-4 border-t-sky-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-sky-600" /> 1. Dispositions aux DM (Art. 5, 7, 13, 14)
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-mono text-xs font-bold">ISO 13485:2016</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-mono font-black text-sky-700 text-base">≥ 90 m²</div>
                    <div className="text-[10px] text-slate-500">Zone dédiée DM (Art. 7)</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-black text-emerald-700 text-xs">HOMOLOGATION</div>
                    <div className="text-[10px] text-slate-500">ANPP obligatoire (Art. 5)</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-black text-amber-700 text-xs">N° SÉRIE / LOT</div>
                    <div className="text-[10px] text-slate-500">Matériovigilance (Art. 22)</div>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• Approvisionnement exclusif auprès de fabricants ou importateurs agréés (Art. 5).</li>
                  <li>• Conservation sous température ambiante avec contrôle de l'<strong>humidité</strong>, de la <strong>lumière</strong> et du <strong>stress mécanique</strong> (Art. 14).</li>
                  <li>• DMDIV (Diagnostics In Vitro) : stockage impératif au froid (+2°C à +8°C) avec enregistrement continu (Art. 13).</li>
                  <li>• Fiches de Données de Sécurité (FDS) et notices techniques tenues à disposition des inspecteurs.</li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-3 border-t-4 border-t-purple-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-purple-900 flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-purple-600" /> 2. Psychotropes & Stupéfiants (Décret 19-379 & Art. 6)
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-xs font-bold">Décret 19-379</span>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-1">
                  <p className="font-bold text-purple-900">Condition des 2 Ans d'Exercice & Exception Légale (Art. 6) :</p>
                  <p className="text-slate-700">
                    Distribution des psychotropes autorisée <strong>QU'APRÈS DEUX (2) ANS d'exercice effectif</strong>.<br />
                    <span className="text-emerald-800 font-bold">✓ Exception (Art. 6 al. 4) :</span> Non applicable aux établissements créés dans le cadre d'une <strong>extension d'activité d'un établissement déjà agréé et justifiant de 2 années d'expérience</strong>.
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• <strong>Gestion exclusive par les pharmaciens (Art. 6) :</strong> assurée par le PDT assisté de l'assistant.</li>
                  <li>• <strong>Sécurité physique (Art. 8) :</strong> endroit <strong>FERMÉ À CLEF</strong>, alarme, vidéosurveillance. Clé détenue sous la responsabilité du PDT.</li>
                  <li>• <strong>Registre coté et paraphé (Art. 29) :</strong> enregistrement immédiat sans blanc ni rature, bilan mensuel de réconciliation et archivage ≥ 5 ans.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 11/13 • Dispositifs Médicaux & Psychotropes</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 22 : MODULE 12 - SOUS-TRAITANCE & INSPECTIONS
    // ==========================================
    case 22:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-hydra-600">Module 12 • Décret 21-82 (Art. 11) & Cahier des Charges (Art. 26, 30 à 32)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Activités Externalisées, Auto-Inspection & Inspections ANPP/MIP</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Conformité Quotidienne & Pérenne
              </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 text-xs">
              <div className="glass-card p-4 rounded-2xl space-y-2">
                <h3 className="font-black uppercase tracking-wider text-sky-800 flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-sky-600" /> 1. Activités Externalisées (Art. 26)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• <strong>Cadre légal :</strong> Décret 21-82 (Art. 11 al. 2) & Art. 26 (transport, gardiennage, maintenance, stockage tiers).</li>
                  <li>• <strong className="text-amber-800">Non-délégation de responsabilité :</strong> le grossiste donneur d'ordre conserve TOUJOURS l'entière responsabilité pharmaceutique.</li>
                  <li>• <strong>Audit préalable</strong> par le PDT avant signature du contrat.</li>
                  <li>• Contrat écrit formalisant le respect des BPDG, le maintien de la T°, le droit d'audit inopiné et l'<strong>interdiction de sous-traitance en cascade</strong>.</li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-emerald-500">
                <h3 className="font-black uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-emerald-600" /> 2. Auto-Inspection Annuelle (Art. 30-32)
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Obligation légale sous la responsabilité du PDT selon un <strong>calendrier annuel planifié</strong> (Art. 30-31).</li>
                  <li>• <strong>Indépendance :</strong> nul ne doit auditer sa propre activité.</li>
                  <li>• Rapport officiel détaillant les constats et le plan CAPA (Art. 32).</li>
                  <li>• Le PDT veille à la mise en œuvre réelle et à l'efficacité des mesures (tenu à disposition de l'ANPP).</li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-rose-500">
                <h3 className="font-black uppercase tracking-wider text-rose-800 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-rose-600" /> 3. Inspections Officielles & Sanctions
                </h3>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Inspecteurs assermentés de l'<strong>ANPP et du MIP</strong> : visites planifiées ou <strong>inopinées (surprises)</strong> avec accès total à tous les locaux et registres.</li>
                  <li>• Contrôle des <strong>30 jours de stock</strong> et des <strong>2/3 de la nomenclature</strong>.</li>
                  <li>• <strong className="text-rose-800">Échelle des sanctions (Loi 18-11) :</strong>
                    <br />1. Remarques et injonctions de mise en conformité.
                    <br />2. Mise en demeure administrative (15 à 30 jours).
                    <br />3. Suspension temporaire d'agrément.
                    <br />4. Retrait définitif d'agrément & fermeture.
                    <br />5. Poursuites pénales (amendes et prison).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 12/13 • Sous-Traitance, Auto-Inspection & Inspections Officielles</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 23 : MODULE 13 (A) - ATELIER CAS PRATIQUES
    // ==========================================
    case 23:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Module 13 • Atelier Interactif de Mise en Situation</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Atelier Cas Pratiques : Vos Réflexes en Entrepôt</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                Cliquez pour révéler la conduite à tenir
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {CASE_STUDIES.map((c) => {
                const isOpen = !!openCases[c.id];
                const borderColor =
                  c.themeColor === 'cyan'
                    ? 'border-l-cyan-500'
                    : c.themeColor === 'amber'
                    ? 'border-l-amber-500'
                    : c.themeColor === 'purple'
                    ? 'border-l-purple-500'
                    : 'border-l-rose-500';

                return (
                  <div key={c.id} className={`glass-card p-4 rounded-2xl flex flex-col justify-between border-l-4 ${borderColor}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold uppercase text-slate-900">{c.title}</span>
                      </div>
                      <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <strong>Constat :</strong> {c.situation}
                      </p>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => toggleCase(c.id)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 flex items-center justify-between transition"
                      >
                        <span>{isOpen ? 'Masquer la décision BPDG' : 'Révéler la conduite à tenir réglementaire'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="mt-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1 animate-in fade-in duration-150">
                          <p className="font-extrabold text-emerald-800">Action conforme :</p>
                          {c.actionConforme.map((action, i) => (
                            <p key={i}>{action}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 13/13 • Atelier Pratique de Mise en Situation</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 24 : MODULE 13 (B) - 10 COMMANDEMENTS
    // ==========================================
    case 24:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Module 13 • Synthèse & Engagement Qualité</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Les 10 Commandements d'Or des BPDG en Algérie</h2>
              </div>
              <span className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                Charte d'Excellence Opérationnelle
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-sky-500">
                <h3 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-1">Règles d'Excellence Opérationnelle (1 à 5)</h3>
                
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center shrink-0">01</span>
                  <p className="text-slate-700"><strong>QUALITÉ & SÉCURITÉ :</strong> La qualité est la responsabilité de <strong>CHACUN</strong> à son poste de travail.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center shrink-0">02</span>
                  <p className="text-slate-700"><strong>FONDEMENT RÉGLEMENTAIRE :</strong> Appliquer strictement le <strong>Guide ANPP 2026</strong> et le Cahier des charges.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center shrink-0">03</span>
                  <p className="text-slate-700"><strong>SÉCURITÉ DES STOCKS :</strong> Maintenir en permanence au moins <strong>30 jours de stock</strong> et <strong>2/3 de la nomenclature</strong>.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 font-mono font-bold flex items-center justify-center shrink-0">04</span>
                  <p className="text-slate-700"><strong>CHAÎNE DU FROID SACRÉE :</strong> Respecter scrupuleusement la plage <strong>+2°C à +8°C</strong> sans aucune rupture.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold flex items-center justify-center shrink-0">05</span>
                  <p className="text-slate-700"><strong>RÈGLE D'OR FEFO :</strong> Toujours expédier le produit dont la péremption est la plus proche (<em>premier expiré, premier sorti</em>).</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl space-y-2 border-t-4 border-t-emerald-500">
                <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">Règles de Vigilance & d'Intégrité (6 à 10)</h3>
                
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold flex items-center justify-center shrink-0">06</span>
                  <p className="text-slate-700"><strong>DOCUMENTATION INTÈGRE :</strong> Enregistrer en direct selon <strong>ALCOA+</strong>, sans jamais utiliser de blanco.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold flex items-center justify-center shrink-0">07</span>
                  <p className="text-slate-700"><strong>SÉGRÉGATION PHYSIQUE :</strong> Isoler immédiatement <strong>sous clé</strong> tout produit déclassé, périmé ou rejeté.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 font-mono font-bold flex items-center justify-center shrink-0">08</span>
                  <p className="text-slate-700"><strong>VIGILANCE FALSIFICATION :</strong> Signaler sans délai tout emballage suspect ou anomalie d'étiquetage.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 font-mono font-bold flex items-center justify-center shrink-0">09</span>
                  <p className="text-slate-700"><strong>TRAÇABILITÉ INTÉGRALE :</strong> Conserver l'ensemble des données et registres cotés pendant <strong>au moins 5 ans</strong>.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center shrink-0">10</span>
                  <p className="text-slate-700"><strong>AUTORITÉ PHARMACEUTIQUE :</strong> Se référer toujours au <strong>Pharmacien Directeur Technique (PDT)</strong> pour toute décision critique.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Module 13/13 • Les 10 Commandements d'Or des BPDG</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );

    // ==========================================
    // SLIDE 25 : CLÔTURE & ÉVALUATION
    // ==========================================
    case 25:
    default:
      return (
        <div className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scroll p-4 sm:p-8">
          <div className="my-auto space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-widest">
                Clôture de la Session & Évaluation des Acquis (Art. 17)
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Merci pour votre Attention et votre Engagement</h2>
              <blockquote className="text-sm sm:text-base italic text-hydra-700 font-medium">
                « La qualité d'un médicament ne se contrôle pas seulement : elle se construit et se préserve à chaque étape de la distribution. »
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto items-stretch">
              <div className="glass-card p-4 rounded-2xl space-y-2.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-sky-800">Session Interactive & Validation des Acquis</h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center">1</span>
                    <span className="text-slate-700"><strong>Questions / Réponses</strong> & échanges avec le Responsable Qualité et le PDT.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">2</span>
                    <span className="text-slate-700"><strong>Évaluation écrite individuelle</strong> des connaissances, remise à chaque participant.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">3</span>
                    <span className="text-slate-700"><strong>Signature de la feuille d'émargement</strong> et remise des attestations de formation.</span>
                  </div>
                </div>
              </div>

              <div className="glass-card hydra-brand-card p-5 rounded-2xl bg-gradient-to-br from-hydra-800 via-hydra-700 to-pharma-700 text-white shadow-lg flex flex-col justify-center space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-sky-200">Direction Technique & Management Qualité</p>
                <div className="space-y-2">
                  <div className="border-b border-white/15 pb-2">
                    <p className="text-lg font-black text-white">Dr. Asma KETTOU</p>
                    <p className="text-emerald-300 font-semibold text-xs">Pharmacien Directeur Technique (DT) — SPA ABC MED</p>
                  </div>
                  <div>
                    <p className="text-lg font-black text-white">Boussad TAMAZIRT</p>
                    <p className="text-sky-200 font-semibold text-xs">Responsable Qualité (RQ) — Formateur</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs pt-1 font-mono">Contact : abcmed.technique@groupehydrapharm.com</p>
                <div className="pt-2 border-t border-white/20 text-[11px] text-sky-100">
                  Formation certifiée conforme au Guide ANPP 2026 & Cahier des charges officiel.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Fin de la Formation BPDG (2 Heures)</span>
            <span>SPA ABC MED — Groupe Hydrapharm</span>
          </div>
        </div>
      );
  }
};

  return (
    <>
      {renderSlideContent()}

      {/* Universal Fullscreen Modal for interactive card inspection with arrows and escape key */}
      <CardFullscreenModal
        isOpen={fullscreenModal.isOpen}
        onClose={closeFullscreen}
        title={fullscreenModal.title}
        subtitle={fullscreenModal.subtitle}
        badge={fullscreenModal.badge}
        currentIndex={fullscreenModal.currentIndex}
        totalCount={fullscreenModal.cards.length}
        onNext={fullscreenModal.cards.length > 1 ? handleNextCard : undefined}
        onPrev={fullscreenModal.cards.length > 1 ? handlePrevCard : undefined}
      >
        {fullscreenModal.cards[fullscreenModal.currentIndex]?.content}
      </CardFullscreenModal>
    </>
  );
};
