export type locals = "fr" | "en";
export const locales = ["en", "fr"];

export interface ISeo {
  description: string;
  page_names: { [key: string]: string };
}
export interface ILanguage {
  sections: {
    home: string;
    project: string;
  };
  projects: {
    [id: string]: string;
  };

  seo: ISeo;
  name: locals;
}

export const wip = ["dino"];

import fr from "./fr";
import en from "./en";

export { fr, en };
