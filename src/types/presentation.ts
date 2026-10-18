export interface Slide {
  id: number;
  module: string;
  pacing: string;
  notes: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  situation: string;
  actionConforme: string[];
  themeColor: 'cyan' | 'amber' | 'purple' | 'rose';
}
