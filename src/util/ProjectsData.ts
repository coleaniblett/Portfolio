import DCRA from '../assets/images/DCRA2097x1262_shrunk.png';
import AmyYehMusic from '../assets/images/AmyYehMusic2097x1262_shrunk.png';
import Portfolio from '../assets/images/Portfolio2097x1262_shrunk.png';
import Katoche from '../assets/images/katoche.gif';

type projectArray = {
  name: string,
  technologies: string[],
  shortDescription: string,
  longDescription: string,
  liveURL: string,
  codeURL: string,
  image: any
}[];

export const projectData: projectArray = [
  {
    name: "The Distillation-Combination-Recommendation-Application",
    technologies: ["React", "Asynchronous JavaScript"],
    shortDescription: "Recipe-recommendation app based on TheCocktailDB API.",
    longDescription: "This front-end web application allows users to input a list of ingredients and returns a list of suggested cocktail recipes. API consumption is optimized through the use of concurrent operations. Hosted on the cloud with S3, CloudFront, and Route 53.",
    liveURL: "https://distillation-combination-recommendation-application.com/",
    codeURL: "https://github.com/coleaniblett/Distillation-Combination-Recommendation-Application",
    image: DCRA
  },
  {
    name: "Amy Yeh Music",
    technologies: ["React", "TypeScript", "Bootstrap CSS"],
    shortDescription: "Professional landing page.",
    longDescription: "This landing page introduces visitors to the professional services of musician and composer Amy Yeh. Primarily styled using Bootstrap, with some vanilla CSS.",
    liveURL: "https://coleaniblett.github.io/amy-yeh-music",
    codeURL: "https://github.com/coleaniblett/amy-yeh-music",
    image: AmyYehMusic
  },
  {
    name: "Resume/Portfolio Site",
    technologies: ["React", "Bootstrap CSS"],
    shortDescription: "My previous website.",
    longDescription: "This portfolio site previously showcased several of my earlier projects. Although I've since moved on to a new design, I'm proud of the work I did on this site.",
    liveURL: "https://coleaniblett.github.io/old-portfolio",
    codeURL: "https://github.com/coleaniblett/old-portfolio",
    image: Portfolio
  },
  {
    name: "Katoche",
    technologies: ["C++"],
    shortDescription: "Text-based adventure game, inspired by Zork.",
    longDescription: "This console application depicts an interactive puzzle-based dungeon. A robust user input parser and command interpreter allows players to interact with game world using natural language. Developed using object-oriented programming principles.",
    liveURL: "",
    codeURL: "https://github.com/coleaniblett/Katoche",
    image: Katoche
  }
]