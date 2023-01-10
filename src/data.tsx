import InstaIcon from '~icons/akar-icons/instagram-fill';
import TwitterIcon from '~icons/akar-icons/twitter-fill';
import TwitchIcon from '~icons/akar-icons/twitch-fill';
import GithubIcon from '~icons/akar-icons/github-fill';
import SpotifyIcon from '~icons/akar-icons/spotify-fill';
import RedditIcon from '~icons/mdi/reddit';
import { ISocialLinkProps } from './components/Links';

export const LINKS: ISocialLinkProps[] = [
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
    title: 'Spotify',
    link: 'https://open.spotify.com/user/uc6uqvpz6winym2qkiep4y0vd',
    icon: <SpotifyIcon />,
    backgroundAccent: 'bg-green-500',
  },
  {
    title: 'Reddit',
    link: 'https://www.reddit.com/user/eshdownbad',
    icon: <RedditIcon />,
    backgroundAccent: 'bg-orange-500',
  },
];
