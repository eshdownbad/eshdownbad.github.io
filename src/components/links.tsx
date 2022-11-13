import InstaIcon from "~icons/akar-icons/instagram-fill";
import TwitterIcon from "~icons/akar-icons/twitter-fill";
import TwitchIcon from "~icons/akar-icons/twitch-fill";
import GithubIcon from "~icons/akar-icons/github-fill";
import ShareIcon from "~icons/akar-icons/share-box";
import { JSX } from "preact";
import { SocialLink } from "./social-link";

export interface ISocialLinkData {
  icon: JSX.Element;
  site: string;
  link: string;
}

export const LINKS: ISocialLinkData[] = [
  {
    site: "Instagram",
    link: "https://www.instagram.com/eshdownbad/",
    icon: <InstaIcon class="fill-slate-500" />,
  },
  {
    site: "Twitter",
    link: "https://twitter.com/foxgrilsimp",
    icon: <TwitterIcon />,
  },
  {
    site: "Twitch",
    link: "https://www.twitch.tv/eshbruh",
    icon: <TwitchIcon />,
  },
  {
    site: "Github",
    link: "https://github.com/eshdownbad",
    icon: <GithubIcon />,
  },
];

export const Links = () => {
  return (
    <section class="w-full lg:w-2/3">
      {LINKS.map((link) => (
        <SocialLink {...link}></SocialLink>
      ))}
      <SocialLink
        site="Share"
        icon={<ShareIcon></ShareIcon>}
        link=""
        onClick={() => navigator.share({ url: window.location.href })}
      ></SocialLink>
    </section>
  );
};
