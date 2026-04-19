export type ResultStripItem = {
  client_name: string;
  metric: string;
  metric_label: string;
};

export type BrandItem = {
  name: string;
  logo?: string;
  url?: string;
};

export type StackGroup = {
  group_name: string;
  items: { name: string }[];
};

export type HomeServiceTeaser = {
  name: string;
  description: string;
  deliverables: string;
};

export type SiteOptions = {
  hero_title: string;
  hero_subtitle: string;
  hero_cta_label: string;
  hero_cta_url: string;

  home_seo_title: string;
  home_seo_description: string;
  home_keywords: string[];

  results_strip: ResultStripItem[];
  results_footnote: string;

  services: HomeServiceTeaser[];

  stack_groups: StackGroup[];

  about_preview: string;

  email: string;
  linkedin: string;
  github: string;
  github_handle: string;
  whatsapp: string;

  brands_kicker: string;
  brands_title: string;
  brands: BrandItem[];
};

export type ProblemStandalone = { title: string; body: string };
export type ProblemCombined = { axis: string; axis_slug: string; body: string };
export type Faq = { q: string; a: string };

export type Service = {
  number: string;
  title: string;
  short_title: string;
  kicker: string;
  excerpt: string;
  direct_answer: string;
  body_lead: string;
  problems_standalone: ProblemStandalone[];
  problems_combined: ProblemCombined[];
  deliverables: string[];
  stack: string[];
  related_case_slugs: string[];
  faqs: Faq[];
  seo_title: string;
  seo_description: string;
  keywords: string[];
};

export type CodeSnippet = {
  lang: string;
  file_label?: string;
  code: string;
  caption?: string;
};

export type ResultMetric = { value: string; label: string; context?: string };

export type CaseStackItem = { item: string };

export type Case = {
  title: string;
  excerpt: string;
  category: string;
  client_anon: string;
  sector: string;
  role: string;
  duration: string;
  stack: CaseStackItem[];
  featured_order: number;

  s1_context: string;
  s2_problem: string;
  s2_baseline: string;
  s3_approach: string;
  s4_execution: string;
  s4_snippets: CodeSnippet[];
  s5_results: ResultMetric[];
  s5_results_text: string;
  s6_reusable: string;

  seo_title: string;
  seo_description: string;
  keywords: string[];
};

export type TimelineRow = {
  year: string;
  company: string;
  role: string;
  note: string;
};
