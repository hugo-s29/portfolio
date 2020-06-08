import fr from "./fr";
import en from "./en";
import { code } from "./code/wrapper";

export type locals = "fr" | "en";
export const locales = ["en", "fr"];

export interface ISeo {
  description: string;
  page_names: { [key: string]: string };
}
type code_name = keyof typeof code;

export type ILanguage = {
  sections: {
    home: string;
    project: string;
  };
  projects: {
    [id in code_name]: string;
  };

  seo: ISeo;
  name: locals;
};

export const wip = ["dino"];

export { fr, en };
