import { StaticImageData } from "next/image";

import FrontEndBG from "../../assets/images/backgrounds/frontend.png";
import WebDesignBG from "../../assets/images/backgrounds/webdes.png";
import GameDevBG from "../../assets/images/backgrounds/Sunset.png";
import InfraBG from "../../assets/images/backgrounds/Infrabg.png";

import InfraThumbnail from "../../assets/images/thumbnails/infrastructure.png";
import FrontEndThumbnail from "../../assets/images/thumbnails/frontEnd.png";
import GameDevelopmentThumbnail from "../../assets/images/thumbnails/gameDev.png";
import WebDesignThumbnail from "../../assets/images/thumbnails/webDesign.png";

import FrontEndSchedule from "../../assets/images/ตารางสอน/FrontEnd.png";
import WebDesignSchedule from "../../assets/images/ตารางสอน/WebDesign.png";
import InfrastructureSchedule from "../../assets/images/ตารางสอน/Infrastructure.png";
import GameDevelopmentSchedule from "../../assets/images/ตารางสอน/GameDev.png";

import {
  frontEnd,
  gameDevelopment,
  infrastructure,
  TeamTopic,
  webDesign,
} from "./team-topics";

export interface Team {
  title: string;
  thumbnail: StaticImageData;
  background: StaticImageData;
  path: string;
  topics: TeamTopic[];
  schedule: StaticImageData;
}

interface Teams {
  [key: string]: Team;
}

export const teamsArr: Team[] = [
  {
    title: "Front-end",
    thumbnail: FrontEndThumbnail,
    background: FrontEndBG,
    path: "/learn/teams/front-end",
    topics: frontEnd,
    schedule: FrontEndSchedule,
  },
  {
    title: "Web design",
    thumbnail: WebDesignThumbnail,
    background: WebDesignBG,
    path: "/learn/teams/web-design",
    topics: webDesign,
    schedule: WebDesignSchedule,
  },
  {
    title: "Game development",
    thumbnail: GameDevelopmentThumbnail,
    background: GameDevBG,
    path: "/learn/teams/game-development",
    topics: gameDevelopment,
    schedule: GameDevelopmentSchedule,
  },
  {
    title: "Infrastructure",
    thumbnail: InfraThumbnail,
    background: InfraBG,
    path: "/learn/teams/infrastructure",
    topics: infrastructure,
    schedule: InfrastructureSchedule,
  },
];

export const teams: Teams = {
  "front-end": teamsArr[0],
  "web-design": teamsArr[1],
  "game-development": teamsArr[2],
  infrastructure: teamsArr[3],
};
