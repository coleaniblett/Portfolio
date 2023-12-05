import DCRADesktopScreen from '../assets/DCRA/DCRA2358x1323_shrunk.png';
import DCRALaptopScreen from '../assets/DCRA/DCRA2097x1262_shrunk.png';
import DCRATabletScreen from '../assets/DCRA/DCRA846x1089_shrunk.png';
import DCRAMobileScreen from '../assets/DCRA/DCRA432x837_shrunk.png';
import AmyYehMusicDesktopScreen from '../assets/AmyYehMusic/AmyYehMusic2358x1323_shrunk.png';
import AmyYehMusicLaptopScreen from '../assets/AmyYehMusic/AmyYehMusic2097x1262_shrunk.png';
import AmyYehMusicTabletScreen from '../assets/AmyYehMusic/AmyYehMusic846x1089_shrunk.png';
import AmyYehMusicMobileScreen from '../assets/AmyYehMusic/AmyYehMusic432x837_shrunk.png';
import PortfolioDesktopScreen from '../assets/Portfolio/Portfolio2358x1323_shrunk.png';
import PortfolioLaptopScreen from '../assets/Portfolio/Portfolio2097x1262_shrunk.png';
import PortfolioTabletScreen from '../assets/Portfolio/Portfolio846x1089_shrunk.png';
import PortfolioMobileScreen from '../assets/Portfolio/Portfolio432x837_shrunk.png';

type screenshots = {
  desktop: any,
  laptop: any,
  tablet: any,
  mobile: any
}

type projectArray = {
  name: string,
  technologies: string[],
  description: string,
  liveURL: string,
  codeURL: string,
  screenshots: screenshots
}[];

export const projectData: projectArray = [
  {
    name: "The Distillation-Combination-Recommendation-Application",
    technologies: ["React", "API calls"],
    description: "A cocktail-recommendation app. Users input " 
      + "their available ingredients and receive a list of cocktails"
      + " determined through API calls to TheCocktailDB.",
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
    name: "Amy Yeh Music",
    technologies: ["React", "TypeScript", "Bootstrap CSS"],
    description: "A landing page for musician Amy Yeh made up of React " + 
      "components styled with a combination of Bootstrap and vanilla CSS.",
    liveURL: "https://coleaniblett.github.io/amy-yeh-music",
    codeURL: "https://github.com/coleaniblett/amy-yeh-music",
    screenshots: {
      desktop: AmyYehMusicDesktopScreen,
      laptop: AmyYehMusicLaptopScreen,
      tablet: AmyYehMusicTabletScreen,
      mobile: AmyYehMusicMobileScreen
    }
  },
  {
    name: "Resume/Portfolio Site",
    technologies: ["React", "Bootstrap CSS"],
    description: "Built with React, my previous portfolio site showcased my " + 
      "skills in HTML, CSS, and JavaScript. Although I've since moved on to a" +
      " new design, I'm proud of the work I did on this site.",
    liveURL: "https://coleaniblett.github.io/old-portfolio",
    codeURL: "https://github.com/coleaniblett/old-portfolio",
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