import { IProject, ILanguage } from "..";

const projects: IProject[] = [
  {
    id: "maze",
    name: "Générateur de labyrinthe",
    link: "",
  },
  {
    id: "dino",
    name: "Jeu dinosaure de Google Chrome",
    link: "",
  },
];

const lang: ILanguage = {
  projects,
  sections: {
    home: "Projets",
  },
};

export default lang;
