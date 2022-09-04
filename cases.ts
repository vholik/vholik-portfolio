import OneArticle from "./pages/images/projects/articleholik/1.png";
import SecondArticle from "./pages/images/projects/articleholik/2.png";
import ThirdArticle from "./pages/images/projects/articleholik/3.png";
import FourthArticle from "./pages/images/projects/articleholik/4.png";
import articleCover from "./pages/images/projects/articleholik/cover.png";

import OneMovie from "./pages/images/projects/movieapp/1.png";
import SecondMovie from "./pages/images/projects/movieapp/2.png";
import ThirdMovie from "./pages/images/projects/movieapp/3.png";
import FourthMovie from "./pages/images/projects/movieapp/4.png";
import movieCover from "./pages/images/projects/movieapp/cover.png";

import OneNotes from "./pages/images/projects/notes/1.png";
import SecondNotes from "./pages/images/projects/notes/2.png";
import notesCover from "./pages/images/projects/notes/cover.png";

import OneStudio from "./pages/images/projects/nailsstudio/1.png";
import SecondStudio from "./pages/images/projects/nailsstudio/2.png";
import ThirdStudio from "./pages/images/projects/nailsstudio/3.png";
import FourthStudio from "./pages/images/projects/nailsstudio/4.png";
import studioCover from "./pages/images/projects/nailsstudio/cover.png";

import OneFuturist from "./pages/images/projects/futurist/1.png";
import SecondFuturist from "./pages/images/projects/futurist/2.png";
import ThirdFuturist from "./pages/images/projects/futurist/3.png";
import FourthFuturist from "./pages/images/projects/futurist/4.png";
import futuristCover from "./pages/images/projects/futurist/cover.png";

import Landing from "./pages/images/projects/giveaway landing/1.png";
import landingCover from "./pages/images/projects/giveaway landing/cover.png";

const cases = [
  {
    name: "Articles Holik",
    tags: ["Fullstack", "React", "Node"],
    year: 2022,
    id: "1",
    description:
      "Articleholik is a app that helps people share their ideas and thoughts. ",
    techStack: [
      "NextJs",
      "Typescript",
      "React",
      "Redux toolkit",
      "RTK Query",
      "NodeJs",
      "ExpressJs",
      "UX/UI",
    ],
    images: [
      articleCover,
      OneArticle,
      SecondArticle,
      ThirdArticle,
      FourthArticle,
    ],
    url: "https://articles-front-end.vercel.app/",
  },
  {
    name: "Movie App",
    tags: ["Redux", "React", "UX/UI"],
    year: 2022,
    id: "2",
    description:
      "Service that helps people to discover new movies and tv series, what to watch tonight and what to share with friends",
    techStack: ["React", "Redux ", "UX/UI"],
    images: [movieCover, OneMovie, SecondMovie, ThirdMovie, FourthMovie],
    url: "https://cinewatch-redux.herokuapp.com/",
  },
  {
    name: "Notes App",
    tags: ["React", "UX/UI"],
    year: 2022,
    id: "3",
    description: "Simple notes app",
    techStack: ["React", "UX/UI"],
    images: [notesCover, OneNotes, SecondNotes],
    url: "https://viktor-notes.herokuapp.com/",
  },
  {
    name: "Nail studio",
    tags: ["HTML&CSS", "JavaScript", "UX/UI"],
    year: 2022,
    id: "4",
    description: "Landing page for nails studio",
    techStack: ["HTML&CSS", "JavaScript", "UX/UI"],
    images: [studioCover, OneStudio, SecondStudio, ThirdStudio, FourthStudio],
    url: "https://katya-nails-ok.web.app/",
  },
  {
    name: "Futurist",
    tags: ["HTML&CSS", "JavaScript"],
    year: 2021,
    id: "5",
    description: "Landing page for english school",
    techStack: ["HTML&CSS", "JavaScript"],
    images: [
      futuristCover,
      OneFuturist,
      SecondFuturist,
      ThirdFuturist,
      FourthStudio,
    ],
    url: "https://futuristenglish.herokuapp.com/",
  },
  {
    name: "Crypto UX/UI",
    tags: ["UX/UI"],
    year: 2022,
    id: "6",
    description: "UX/UI for crypto service",
    techStack: ["UX/UI"],
    images: [landingCover, Landing],
    url: "https://www.figma.com/proto/tOIxLjShqfoxRbe60dmWwC/NFT?page-id=0%3A1&node-id=1%3A6&viewport=241%2C48%2C0.13&scaling=min-zoom",
  },
];

export default cases;
