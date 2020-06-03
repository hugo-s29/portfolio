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
};

export default lang;
