import * as translation from "../data";
//@ts-ignore
import langParser from "navigator-languages-parser";
export const LocalStorage = {
  get(item: string) {
    if (!process.browser) return false;
    return localStorage.getItem(item);
  },
  set(item: string, data: string) {
    if (!process.browser) return false;
    return localStorage.setItem(item, data);
  },
};

export const locale = {
  getLang() {
    const lang: translation.locals = langParser.parseLanguages(
      translation.locales,
      "EN"
    );
    return translation[lang];
  },
};
