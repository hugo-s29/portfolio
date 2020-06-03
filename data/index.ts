export type locals = "fr" | "en";
export const locales = ["en", "fr"];
export interface IProject {
  id: string;
  name: string;
  link: string;
}
export interface ILanguage {
  sections: {
    home: string;
  };
  projects: IProject[];
}

import fr from "./fr";
import en from "./en";

export { fr, en };
