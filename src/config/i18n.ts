import { idTranslations } from './i18n_id';
import { enTranslations } from './i18n_en';
import type { TranslationDictionary } from './i18n_types';

export type { TranslationDictionary };

export const translations: Record<'id' | 'en', TranslationDictionary> = {
  id: idTranslations,
  en: enTranslations,
};
