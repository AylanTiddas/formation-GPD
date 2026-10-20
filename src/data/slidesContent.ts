import { Slide, CaseStudy } from '../types/presentation';

export const SLIDES_DATA: Slide[] = [
  {
    id: 1,
    module: "Introduction & Cadre",
    pacing: "00:00 – 00:04 (4 min)",
    notes: "Accueil des participants chez SPA ABC MED (Groupe Hydrapharm). Présenter l'objectif de ces 2 heures : maîtriser les exigences du Cahier des charges officiel (Art. 1 à 36) et du Guide ANPP 2026 (19 chapitres + Annexe 1).",
    title: "BONNES PRATIQUES DE DISTRIBUTION EN GROS & DE STOCKAGE",
    subtitle: "Produits Pharmaceutiques & Dispositifs Médicaux à Usage Humain — SPA ABC MED | Groupe Hydrapharm",
    badge: "Guide ANPP 2026 & Cahier des Charges (Art. 1–36)"
  },
  {
    id: 2,
    module: "Introduction Générale",
    pacing: "00:04 – 00:08 (4 min)",
    notes: "Présenter les 4 compétences visées et le découpage chronométré des 13 modules pour tenir exactement en 2 heures sans surcharge cognitive.",
    title: "Objectifs Pédagogiques & Architecture (Format 2 Heures)",
    subtitle: "4 Compétences Opérationnelles • 13 Modules Structurés",
    badge: "Programme 2h00"
  },
  {
    id: 3,
    module: "Module 1 : Fondements & Enjeux",
    pacing: "00:08 – 00:13 (5 min)",
    notes: "Insister sur le fait que le médicament n'est pas une marchandise ordinaire. Rappeler les 3 catastrophes historiques (USA 1970, France 1972 Talc Morhange, Allemagne 1999 KCl) qui justifient chaque règle BPDG.",
    title: "Notions sur le Médicament & Pourquoi les BPDG sont Vitales",
    subtitle: "Composition, Statut Juridique Singulier & Leçons de l'Histoire",
    badge: "Enjeu Vital de Santé Publique"
  },
  {
    id: 4,
    module: "Module 1 : Cadre Réglementaire Algérien",
    pacing: "00:13 – 00:18 (5 min)",
    notes: "Présenter la pyramide réglementaire algérienne complète, les Articles 1 à 3 du Cahier des charges, ainsi que les Chapitres 1 à 4 du Guide ANPP 2026 (incluant les flux inverses et les dons).",
    title: "Le Cadre Réglementaire Algérien & Périmètre Officiel BPD / BPS",
    subtitle: "Loi 18-11, Décrets Exécutifs 21-82 & 19-379, Guide ANPP 2026",
    badge: "Guide ANPP 2026 (19 Chapitres + Annexe 1)"
  },
  {
    id: 5,
    module: "Module 2 : Cahier des Charges Grossiste",
    pacing: "00:18 – 00:26 (8 min)",
    notes: "Expliquer les 3 piliers chiffrés du Cahier des charges : 2/3 de la nomenclature nationale, 30 jours de stock permanent, et les 4 déclarations obligatoires au MIP (Art. 22, 25, 33, 34, 35).",
    title: "Obligations Générales du Grossiste Répartiteur & Déclarations MIP",
    subtitle: "Cahier des Charges (Art. 2, 4, 18, 22, 25, 33-35)",
    badge: "Service Public & Transparence"
  },
  {
    id: 6,
    module: "Module 3 : Système de Management de la Qualité",
    pacing: "00:26 – 00:31 (5 min)",
    notes: "Présenter l'architecture du SMQ (Chapitre 5 du Guide ANPP 2026) et les 8 garanties fondamentales exigées lors des inspections.",
    title: "Système de Management de la Qualité (SMQ) & 8 Garanties",
    subtitle: "Guide ANPP Chapitre 5 • Manuel Qualité, Processus & Amélioration Continue",
    badge: "Assurance Qualité & Change Control"
  },
  {
    id: 7,
    module: "Module 3 : Déviations, CAPA & ICH Q9",
    pacing: "00:31 – 00:36 (5 min)",
    notes: "Expliquer la différence entre Action Corrective et Action Préventive, la règle d'or de clôture par le PDT, et la formule de criticité ICH Q9 : C = G x P x D.",
    title: "Gestion des Déviations, Processus CAPA & Risques (ICH Q9)",
    subtitle: "Guide ANPP Chapitre 6 • Enregistrement Immédiat, Cause Racine & Boucle CAPA",
    badge: "Formule : Criticité = G × P × D"
  },
  {
    id: 8,
    module: "Module 4 : Personnel & Responsabilités PDT",
    pacing: "00:36 – 00:41 (5 min)",
    notes: "Détailler l'organisation RH (Art. 15 et 16 du Cahier des charges & Chap. 10 du Guide ANPP 2026) et les missions régaliennes du Pharmacien Directeur Technique (PDT), assisté des Pharmaciens Assistants.",
    title: "Organisation du Personnel & Missions du Pharmacien Directeur Technique (PDT)",
    subtitle: "Cahier des Charges (Art. 15 & 16) & Guide ANPP Chapitre 10",
    badge: "Interlocuteur Principal MIP / ANPP"
  },
  {
    id: 9,
    module: "Module 4 : Formation & Hygiène",
    pacing: "00:41 – 00:45 (4 min)",
    notes: "Rappeler que nul ne peut manipuler des produits sans habilitation formelle signée par le pharmacien (Art. 17), les 4 preuves documentaires de formation (Chap. 10) et les règles d'hygiène/EPI/bris de conditionnement (Art. 8 & Chap. 10).",
    title: "Formation Continue, Habilitation & Hygiène / Sécurité en Entrepôt",
    subtitle: "Cahier des Charges (Art. 8 & 17) & Guide ANPP Chapitre 10",
    badge: "Habilitation Écrite & EPI Obligatoires"
  },
  {
    id: 10,
    module: "Module 5 : Locaux & Zonage Réglementaire",
    pacing: "00:45 – 00:50 (5 min)",
    notes: "Insister sur les normes dimensionnelles impératives de l'Art. 7 et du Chapitre 11 du Guide ANPP (500 m² incluant au moins 200 m² d'aire de stockage continue, 90 m² DM, >= 590 m² total) et les 11 zones standards et sécurisées de l'entrepôt (Art. 8).",
    title: "Normes de Superficie Obligatoires & Zonage en Entrepôt",
    subtitle: "Cahier des Charges (Art. 7 à 9) & Guide ANPP Chapitre 11",
    badge: "Dont ≥ 200 m² d'Aire de Stockage Continue"
  },
  {
    id: 11,
    module: "Module 5 : Environnement, Mapping & WMS",
    pacing: "00:50 – 00:55 (5 min)",
    notes: "Couvrir l'hygrométrie (<= 60% HR), le Pest Control sans appâts toxiques ouverts, le mapping 3D été/hiver sur 7 jours consécutifs, et le système informatique sécurisé avec Audit Trail (Art. 10-13).",
    title: "Environnement, Mapping Thermique 24/7 & Système Informatique",
    subtitle: "Cahier des Charges (Art. 10, 11, 13) • HR ≤ 60% • Qualification QC/QI/QO/QP",
    badge: "Mapping 3D Été / Hiver (7 jours)"
  },
  {
    id: 12,
    module: "Module 6 : Bonnes Pratiques de Stockage & FEFO",
    pacing: "00:55 – 01:00 (5 min)",
    notes: "Rappeler l'interdiction absolue de poser un carton au sol (Guide ANPP Chap. 12), la primauté légale du FEFO sur le FIFO (Art. 9) et le double verrouillage physique + WMS des 4 statuts.",
    title: "Règles de Stockage, Règle d'Or FEFO & Code Couleur des Statuts",
    subtitle: "Guide ANPP Chapitre 12 & Cahier des Charges Art. 9",
    badge: "Double Verrouillage : Étiquette + WMS"
  },
  {
    id: 13,
    module: "Module 6 : Chaîne du Froid & Excursions",
    pacing: "01:00 – 01:05 (5 min)",
    notes: "Présenter le Chapitre 15 et l'Annexe 1 complète du Guide ANPP 2026 (les 5 plages thermiques + conditions ambiantes 15-30°C <= 60% HR + conteneurs opaques), les 5 règles d'or du froid (< 15 min à réception) et le protocole d'excursion en 4 étapes.",
    title: "La Chaîne du Froid : Plages Normalisées (Annexe 1) & Excursions",
    subtitle: "Guide ANPP Chapitre 15 & Annexe 1 (Limites Pharmacopée)",
    badge: "Réception Froid < 15 minutes • Lieu Sec ≤ 60% HR"
  },
  {
    id: 14,
    module: "Module 7 : Documentation & Principes ALCOA+",
    pacing: "01:05 – 01:09 (4 min)",
    notes: "Présenter la pyramide documentaire à 4 niveaux, le cycle de vie approuvé par le PDT (Art. 27-28) et les 5 principes ALCOA+ d'intégrité des données.",
    title: "Le Système Documentaire Pharmaceutique & Principes ALCOA+",
    subtitle: "Cahier des Charges (Art. 27 & 28) • Data Integrity",
    badge: "Data Integrity (Intégrité des Données)"
  },
  {
    id: 15,
    module: "Module 7 : Correction & Archivage 5 Ans",
    pacing: "01:09 – 01:13 (4 min)",
    notes: "Faire la démonstration interactive de la correction conforme (interdiction absolue du blanco assimilé à une fraude) et rappeler l'obligation de conservation de 5 ans (Art. 22, 27, 29).",
    title: "Correction d'Erreur d'Écriture & Archivage Légal (5 Ans)",
    subtitle: "Cahier des Charges (Art. 22, 27, 29)",
    badge: "Zéro Blanco / Tipp-Ex"
  },
  {
    id: 16,
    module: "Module 8 : Opérations (Qualification & Réception)",
    pacing: "01:13 – 01:18 (5 min)",
    notes: "Détailler les dossiers obligatoires de qualification fournisseurs (Art. 4) et clients (Art. 2), puis les 5 étapes de réception critique (Art. 19).",
    title: "Qualification Fournisseurs/Clients & Les 5 Étapes de Réception",
    subtitle: "Cahier des Charges (Art. 2, 4, 19)",
    badge: "Sécurisation Entrée & Sortie"
  },
  {
    id: 17,
    module: "Module 8 : Picking, Colisage & Expédition",
    pacing: "01:18 – 01:23 (5 min)",
    notes: "Expliquer la prévention des erreurs LASA (Look-Alike, Sound-Alike), la conservation des bons de pré-vente et pré-achat (Art. 20), le double contrôle de colisage (Art. 21) et les mentions obligatoires du Bordereau de Livraison avec remise contre décharge (Art. 20 & 22).",
    title: "Préparation (Picking), Colisage Sécurisé & Expédition contre Décharge",
    subtitle: "Cahier des Charges (Art. 20, 21, 22) & Guide ANPP Chapitre 13",
    badge: "Vigilance LASA & Bons Pré-Vente / Pré-Achat"
  },
  {
    id: 18,
    module: "Module 9 : Transport & Logistique Sécurisée",
    pacing: "01:23 – 01:30 (7 min)",
    notes: "Couvrir le Chapitre 14 du Guide ANPP : véhicules frigorifiques qualifiés, maintien de la température dirigée, chargement LIFO, ressuage des plaques eutectiques, transport sécurisé des psychotropes (Décret 19-379) et protocole en cas de panne.",
    title: "Transport sous Température Dirigée & Gestion des Urgences",
    subtitle: "Guide ANPP Chapitre 14 & Décret 19-379",
    badge: "Véhicules Qualifiés • Chargement LIFO"
  },
  {
    id: 19,
    module: "Module 10 : Réclamations, Retours & Rappels",
    pacing: "01:30 – 01:35 (5 min)",
    notes: "Expliquer le traitement des réclamations (Art. 23 & Chap. 7), les conditions cumulatives très strictes pour réintégrer un retour client (Guide ANPP Chap. 8 : aucun délai légal strict de 10 jours, délai acceptable fixé par procédure interne ex. 7 jours chez ABC MED, 6 preuves documentaires pour le froid, interdiction absolue de réintégrer un produit volé récupéré) et le rappel de lot avec Mock Recall annuel (Art. 24-25).",
    title: "Réclamations Clients, Retours (Chap. 8) & Rappels de Lots",
    subtitle: "Cahier des Charges (Art. 23 à 25) & Guide ANPP Chapitres 7 & 8",
    badge: "Procédure Retours • Mock Recall Annuel"
  },
  {
    id: 20,
    module: "Module 10 : Produits Falsifiés & Destruction",
    pacing: "01:35 – 01:40 (5 min)",
    notes: "Détecter les signes visuels de falsification (Chapitre 8 ANPP) et détailler la procédure légale de destruction avec déclaration préalable au MIP et PV officiel conservé 5 ans (Art. 25).",
    title: "Médicaments Falsifiés : Détection, Alerte & Destruction Légale",
    subtitle: "Guide ANPP Chapitre 8 & Cahier des Charges Art. 25",
    badge: "Alerte Immédiate ANPP & MIP"
  },
  {
    id: 21,
    module: "Module 11 : Dispositifs Médicaux & Psychotropes",
    pacing: "01:40 – 01:47 (7 min)",
    notes: "Comparer les exigences spécifiques des Dispositifs Médicaux (Art. 5, 7, 13, 14, 22, ISO 13485) et celles des Psychotropes/Stupéfiants (Décret exécutif n° 19-379 et règle des 2 ans d'exercice de l'Art. 6 avec sa dérogation en cas d'extension d'activité).",
    title: "Dispositifs Médicaux (DM) & Gestion des Psychotropes / Stupéfiants",
    subtitle: "Cahier des Charges (Art. 5, 6, 7, 8, 13, 14, 22, 29) & Décret n° 19-379",
    badge: "Règle des 2 Ans & Dérogation Extension (Art. 6)"
  },
  {
    id: 22,
    module: "Module 12 : Sous-Traitance, Audits & Inspections",
    pacing: "01:47 – 01:52 (5 min)",
    notes: "Présenter l'encadrement de la sous-traitance (Décret 21-82 Art. 11 alinéa 2 & Cahier des charges Art. 26), le programme d'auto-inspection (Art. 30-32) et les pouvoirs d'inspection et de sanction de l'ANPP/MIP.",
    title: "Activités Externalisées, Auto-Inspection & Inspections ANPP/MIP",
    subtitle: "Décret 21-82 (Art. 11) & Cahier des Charges (Art. 26, 30 à 32)",
    badge: "Conformité Quotidienne & Pérenne"
  },
  {
    id: 23,
    module: "Module 13 : Atelier Cas Pratiques",
    pacing: "01:52 – 01:56 (4 min)",
    notes: "Animer ce module de façon participative : lire le constat de chaque cas pratique, demander à la salle quelle est la réaction immédiate, puis cliquer pour révéler le plan d'action réglementaire.",
    title: "Atelier Cas Pratiques : Vos Réflexes en Entrepôt",
    subtitle: "Module 13 • Atelier Interactif de Mise en Situation",
    badge: "4 Mises en Situation Réelles"
  },
  {
    id: 24,
    module: "Module 13 : Synthèse Managériale",
    pacing: "01:56 – 01:58 (2 min)",
    notes: "Synthèse exécutive par l'équipe Qualité & Direction Technique (Dr. Asma KETTOU DT, Boussad Tamazirt RQ) : les 10 Commandements d'Or des BPDG en Algérie à afficher et appliquer chaque jour chez SPA ABC MED.",
    title: "Les 10 Commandements d'Or des BPDG en Algérie",
    subtitle: "Module 13 • Synthèse & Engagement Qualité",
    badge: "Charte d'Excellence Opérationnelle"
  },
  {
    id: 25,
    module: "Clôture & Évaluation écrite",
    pacing: "01:58 – 02:00 (2 min)",
    notes: "Conclure avec la citation qualité, ouvrir la session de Questions/Réponses, distribuer l'évaluation écrite aux participants et faire signer la feuille d'émargement.",
    title: "Merci pour votre Attention et votre Engagement",
    subtitle: "Clôture de la Session & Évaluation des Acquis (Art. 17)",
    badge: "Validation & Attestations"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "CAS N°1 : Alarme Froid à +11°C un Samedi Soir",
    situation: "La sonde d'ambiance de la chambre froide indique +11°C depuis 3 heures. Que faites-vous ?",
    actionConforme: [
      "1. Ne pas ouvrir la porte de la chambre froide (préserver l'inertie thermique).",
      "2. Vérifier le groupe froid et démarrer le groupe électrogène de secours si panne électrique.",
      "3. Bloquer informatiquement le lot en quarantaine dans le WMS.",
      "4. Extraire l'enregistrement thermique complet et alerter le PDT pour analyse d'impact."
    ],
    themeColor: 'cyan'
  },
  {
    id: 2,
    title: "CAS N°2 : Réception Palette Endommagée",
    situation: "Le camion livre 10 palettes, dont 1 présente un film plastique déchiré et 2 cartons mouillés et écrasés.",
    actionConforme: [
      "1. Noter des réserves précises et motivées sur le BL en présence du chauffeur.",
      "2. Isoler immédiatement les cartons mouillés en zone de rejet rouge sous clé.",
      "3. Contrôler minutieusement l'intégrité des autres boîtes de la palette.",
      "4. Rédiger une fiche de déviation transmise au PDT."
    ],
    themeColor: 'amber'
  },
  {
    id: 3,
    title: "CAS N°3 : Demande de Retour d'Insuline",
    situation: "Une officine souhaite retourner 5 boîtes d'insuline livrées la veille pour cause d'erreur de commande.",
    actionConforme: [
      "1. Refus a priori de réintégration immédiate en stock vendable.",
      "2. Mise en quarantaine physique et informatique sous statut violet.",
      "3. Exiger la preuve formelle et continue du maintien entre +2°C et +8°C chez le client (6 preuves du Chapitre 8).",
      "4. Seul le PDT peut statuer par écrit sur l'acceptation ou la destruction."
    ],
    themeColor: 'purple'
  },
  {
    id: 4,
    title: "CAS N°4 : Étiquetage Suspect sans Langue Arabe",
    situation: "Lors du picking, un préparateur remarque un lot d'antibiotique dont la boîte ne comporte aucune mention en langue arabe.",
    actionConforme: [
      "1. Arrêt immédiat de la préparation.",
      "2. Blocage physique (zone sous clé) et informatique du stock.",
      "3. Alerte urgente du PDT pour vérification auprès du fabricant et déclaration à l'ANPP / MIP (suspicion de produit non homologué ou falsifié)."
    ],
    themeColor: 'rose'
  }
];
