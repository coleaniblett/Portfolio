import DesktopMockup from '../assets/DesktopMockup - Transparent.png';
import DCRADeskptopScreen from '../assets/DCRA2097x1262.png';

export const projects = [
  {
    image: DesktopMockup,
    screenImage: DCRADeskptopScreen,
    name: "The Distillation-Combination-Recommendation-Application",
    technologies: ["React", "API calls"],
    description: "A cocktail-recommendation app built with React. Users input " 
      + "their available ingredients and receive a list of recommended cocktails"
      + " determined through API calls to TheCocktailDB.",
    type: "desktop"
  },
  {
    image: DesktopMockup,
    screenImage: DCRADeskptopScreen,
    name: "Amy Yeh Music",
    technologies: ["React", "Bootstrap CSS"],
    description: "A landing page for musician Amy Yeh made up of React " + 
      "components styled with a combination of Bootstrap and vanilla CSS.",
    type: "tablet"
  },
  {
    image: DesktopMockup,
    screenImage: DCRADeskptopScreen,
    name: "Katoche",
    technologies: ["C++", "OOP"],
    description: "A text-based adventure game. Users describe player commands "
      + "in natural language to be interpreted by a parser, solving puzzles " +
      "while exploring an underground dungeon.",
    type: "laptop"
  }
]