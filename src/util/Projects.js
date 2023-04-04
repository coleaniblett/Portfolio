import DesktopMockup from '../assets/DesktopMockup - Transparent.png';
import DCRADesktopScreen from '../assets/DCRA/DCRA2358x1323.png';
import DCRALaptopScreen from '../assets/DCRA/DCRA2097x1262.png';
import DCRATabletScreen from '../assets/DCRA/DCRA846x1089.png';
import DCRAMobileScreen from '../assets/DCRA/DCRA432x837.png';
import AmyYehMusicDesktopScreen from '../assets/AmyYehMusic/AmyYehMusic2358x1323.png';
import AmyYehMusicLaptopScreen from '../assets/AmyYehMusic/AmyYehMusic2097x1262.png';
import AmyYehMusicTabletScreen from '../assets/AmyYehMusic/AmyYehMusic846x1089.png';
import AmyYehMusicMobileScreen from '../assets/AmyYehMusic/AmyYehMusic432x837.png';
import PortfolioDesktopScreen from '../assets/Portfolio/Portfolio2358x1323.png';
import PortfolioLaptopScreen from '../assets/Portfolio/Portfolio2097x1262.png';
import PortfolioTabletScreen from '../assets/Portfolio/Portfolio846x1089.png';
import PortfolioMobileScreen from '../assets/Portfolio/Portfolio432x837.png';

export const projects = [
  {
    image: DesktopMockup,
    name: "The Distillation-Combination-Recommendation-Application",
    technologies: ["React", "API calls"],
    description: "A cocktail-recommendation app built with React. Users input " 
      + "their available ingredients and receive a list of recommended cocktails"
      + " determined through API calls to TheCocktailDB.",
    type: "desktop",
    liveURL: "https://coleaniblett.github.io/Distillation-Combination-Recommendation-Application/",
    codeURL: "https://github.com/coleaniblett/Distillation-Combination-Recommendation-Application",
    screenshots: {
      desktop: DCRADesktopScreen,
      laptop: DCRALaptopScreen,
      tablet: DCRATabletScreen,
      mobile: DCRAMobileScreen
    }
  },
  {
    image: DesktopMockup,
    name: "Amy Yeh Music",
    technologies: ["React", "TypeScript", "Bootstrap CSS"],
    description: "A landing page for musician Amy Yeh made up of React " + 
      "components styled with a combination of Bootstrap and vanilla CSS.",
    type: "tablet",
    liveURL: undefined,
    codeURL: "https://github.com/coleaniblett/Musician-Landing-Page",
    screenshots: {
      desktop: AmyYehMusicDesktopScreen,
      laptop: AmyYehMusicLaptopScreen,
      tablet: AmyYehMusicTabletScreen,
      mobile: AmyYehMusicMobileScreen
    }
  },
  {
    image: DesktopMockup,
    name: "Resume/Portfolio Site",
    technologies: ["React", "Bootstrap CSS"],
    description: "Built with React, my previous portfolio site showcased my skills in HTML, CSS, and JavaScript. Although I've since moved on to a new design, I'm proud of the work I did on this site.",
    type: "phone",
    liveURL: undefined,
    codeURL: "https://github.com/coleaniblett/portfolio",
    screenshots: {
      desktop: PortfolioDesktopScreen,
      laptop: PortfolioLaptopScreen,
      tablet: PortfolioTabletScreen,
      mobile: PortfolioMobileScreen
    }
  },
  /*{
    image: DesktopMockup,
    name: "Katoche",
    technologies: ["C++", "OOP"],
    description: "A text-based adventure game. Users describe player commands "
      + "in natural language to be interpreted by a parser, solving puzzles " +
      "while exploring an underground dungeon.",
    type: "laptop",
    liveURL: undefined,
    codeURL: "https://github.com/coleaniblett/Katoche",
    screenshots: {
      desktop: DCRADesktopScreen,
      laptop: DCRALaptopScreen,
      tablet: DCRATabletScreen,
      mobile: DCRAMobileScreen
    }
  }*/
]