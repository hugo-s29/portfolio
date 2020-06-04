export type locals = "fr" | "en";
export const locales = ["en", "fr"];
export interface IProject {
  id: string;
  name: string;
  link: string;
}

export interface ISeo {
  description: string;
  page_names: { [key: string]: string };
}
export interface ILanguage {
  sections: {
    home: string;
  };
  projects: IProject[];

  seo: ISeo;
}

import fr from "./fr";
import en from "./en";

export { fr, en };
