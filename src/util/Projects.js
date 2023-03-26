import DCRAMockups from '../assets/DCRAMockups.png';

export const projects = [
  {
    image: DCRAMockups,
    name: "The Distillation-Combination-Recommendation-Application",
    technologies: ["React", "API calls"],
    description: "A cocktail-recommendation app built with React. Users input " 
      + "their available ingredients and receive a list of recommended cocktails"
      + " determined through API calls to TheCocktailDB."
  },
  {
    image: DCRAMockups,
    name: "Amy Yeh Music",
    technologies: ["React", "Bootstrap CSS"],
    description: "A landing page for musician Amy Yeh made up of React " + 
      "components styled with a combination of Bootstrap and vanilla CSS."
  },
  {
    image: DCRAMockups,
    name: "Katoche",
    technologies: ["C++", "OOP"],
    description: "A text-based adventure game. Users describe player commands "
      + "in natural language to be interpreted by a parser, solving puzzles " +
      "while exploring an underground dungeon."
  }
]