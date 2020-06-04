import { IProject, ILanguage } from "..";

const projects: IProject[] = [
  {
    id: "maze",
    name: "Maze generator",
    link: "",
  },
  {
    id: "dino",
    name: "Google Chrome's dinosaur game",
    link: "",
  },
];

const lang: ILanguage = {
  projects,
  sections: {
    home: "Projects",
  },
  seo: {
    description: "Hugo SALOU - developer",
    page_names: {
      home: "Home",
    },
  },
};

export default lang;
