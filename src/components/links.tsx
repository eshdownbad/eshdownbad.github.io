import InstaIcon from '~icons/akar-icons/instagram-fill';
import TwitterIcon from '~icons/akar-icons/twitter-fill';
import TwitchIcon from '~icons/akar-icons/twitch-fill';
import GithubIcon from '~icons/akar-icons/github-fill';
import ShareIcon from '~icons/akar-icons/share-box';
import DiscordIcon from '~icons/akar-icons/discord-fill';

import { JSX } from 'preact';
import { SocialLink } from './social-link';

export interface ISocialLinkData {
  icon: JSX.Element;
  title: string;
  link: string;
  backgroundAccent?: string;
  subtitle?: string;
}

export const LINKS: ISocialLinkData[] = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/eshdownbad/',
    icon: <InstaIcon class='fill-slate-500' />,
    backgroundAccent: 'bg-fuchsia-400',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/foxgrilsimp',
    icon: <TwitterIcon />,
    backgroundAccent: 'bg-blue-600',
  },
  {
    title: 'Twitch',
    link: 'https://www.twitch.tv/eshbruh',
    icon: <TwitchIcon />,
    backgroundAccent: 'bg-purple-500',
  },
  {
    title: 'Github',
    link: 'https://github.com/eshdownbad',
    icon: <GithubIcon />,
    backgroundAccent: 'bg-slate-400',
  },
  {
    title: 'Discord Server',
    link: 'https://discord.gg/khnKxXJRtE',
    icon: <DiscordIcon />,
    backgroundAccent: 'bg-indigo-700',
    subtitle: 'its dead, join if you want to send me a friend request :)',
  },
];

export const Links = () => {
  return (
    <section class='w-full lg:w-2/3 '>
      {LINKS.map(link => (
        <SocialLink {...link}></SocialLink>
      ))}
      {'share' in navigator ? (
        <SocialLink
          title='Share'
          icon={<ShareIcon></ShareIcon>}
          link=''
          backgroundAccent='bg-emerald-300'
          onClick={() => navigator.share({ url: window.location.href })}
        />
      ) : null}
    </section>
  );
};
