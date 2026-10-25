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
  // Second, lighter half of the two-tone H1.
  hero_title_tail: string;
  hero_subtitle: string;
  hero_cta_label: string;
  hero_cta_url: string;

  home_seo_title: string;
  home_seo_description: string;
  home_keywords: string[];

  results_strip: ResultStripItem[];
  results_footnote: string;


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

export type ServiceGroup = 'consultoria' | 'desenvolvimento' | 'nicho';

export type ServiceStep = { title: string; body: string };

export type Service = {
  // Sort order inside the group, also printed as "01", "02".
  number: string;
  group: ServiceGroup;
  // H1. Starts with the focus keyword.
  title: string;
  short_title: string;
  kicker: string;
  focus_keyword: string;
  excerpt: string;
  // First paragraph after the H1, answers the search in 2 or 3 sentences.
  direct_answer: string;
  body_lead: string;
  problems_standalone: ProblemStandalone[];
  problems_combined: ProblemCombined[];
  steps: ServiceStep[];
  deliverables: string[];
  stack: string[];
  // "Eu implemento" block, ties the consulting pitch to real code.
  implementation: { title: string; body: string; snippet?: CodeSnippet };
  related_case_slugs: string[];
  related_post_slugs: string[];
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

export type Post = {
  title: string;
  excerpt: string;
  tag:
    | 'Front-end'
    | 'SEO Técnico'
    | 'Martech'
    | 'Automação com LLM'
    | 'Plugin WP';
  published_at: string;
  // Last real content edit. Feeds dateModified, the sitemap and the visible date.
  updated_at?: string;
  read_time_min: number;
  body: string;
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
