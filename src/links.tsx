import InstaLogo from "~icons/akar-icons/instagram-fill";
import TwitterLogo from "~icons/akar-icons/twitter-fill";
import TwitchLogo from "~icons/akar-icons/twitch-fill";
import GithubLogo from "~icons/akar-icons/github-fill";

import { JSX } from "preact";
export interface ISocialLinkData {
  logo: JSX.Element;
  site: string;
  link: string;
}

export const LINKS: ISocialLinkData[] = [
  {
    site: "Instagram",
    link: "https://www.instagram.com/eshdownbad/",
    logo: <InstaLogo class="fill-slate-500" />,
  },
  {
    site: "Twitter",
    link: "https://twitter.com/foxgrilsimp",
    logo: <TwitterLogo />,
  },
  {
    site: "Twitch",
    link: "https://www.twitch.tv/eshbruh",
    logo: <TwitchLogo />,
  },
  {
    site: "Github",
    link: "https://github.com/eshdownbad",
    logo: <GithubLogo />,
  },
];
