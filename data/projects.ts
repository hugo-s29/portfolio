export type IProject = {
  id: string;
  title: string;
  content: string;
  images_count: number;
  links: ILink;
};

export type ILink = {
  [key in ILinkTarget]?: string;
};

export type ILinkTarget =
  | "github"
  | "web"
  | "youtube"
  | "blog"
  | "dev"
  | "medium";

const Projects: IProject[] = [
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: `
    \`\`\`javascript
    
    console.log('CODE');
    \`\`\`
    `,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
  {
    id: "dino",
    title: "Jeu Dinosaure Chrome",
    content: ``,
    images_count: 0,
    links: {},
  },
];

export default Projects;
