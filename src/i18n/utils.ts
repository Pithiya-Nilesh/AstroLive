import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/AstroLive/');
  const lang1 = lang.slice(0, -1);
  console.log(lang1);

  if (lang1 in ui) return lang1 as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang1: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang1][key] || ui[defaultLang][key];
  }
}