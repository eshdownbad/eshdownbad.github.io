import InstaIcon from '~icons/akar-icons/instagram-fill';
import TwitterIcon from '~icons/akar-icons/twitter-fill';
import TwitchIcon from '~icons/akar-icons/twitch-fill';
import GithubIcon from '~icons/akar-icons/github-fill';
import DiscordIcon from '~icons/akar-icons/discord-fill';
import SpotifyIcon from '~icons/akar-icons/spotify-fill';
import { ISocialLinkData } from './components/Links';

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
  {
    title: 'Spotify',
    link: 'https://open.spotify.com/user/uc6uqvpz6winym2qkiep4y0vd',
    icon: <SpotifyIcon />,
    backgroundAccent: 'bg-green-500',
  },
];