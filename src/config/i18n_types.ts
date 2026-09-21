export interface TranslationDictionary {
  nav: Record<string, string>;
  topbar: Record<string, string>;
  hero: Record<string, string>;
  pricing: Record<string, string>;
  painpoints: Record<string, string>;
  coverage: Record<string, string>;
  b2b: Record<string, string>;
  order: Record<string, string>;
  faq: Record<string, string>;
  footer: Record<string, string>;
  form: Record<string, string>;
  wa: {
    intro: string;
    name: string;
    area: string;
    service: string;
    units: string;
    time: string;
    unit_suffix: string;
  };
}
