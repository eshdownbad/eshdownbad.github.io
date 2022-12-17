import ShareIcon from '~icons/akar-icons/share-box';

import { FunctionalComponent, JSX } from 'preact';
import { SocialLink } from './SocialLink';

export interface ISocialLinkData {
  icon: JSX.Element;
  title: string;
  link: string;
  backgroundAccent?: string;
  subtitle?: string;
}
export interface ILinksProps {
  links: ISocialLinkData[];
}

export const Links: FunctionalComponent<ILinksProps> = ({ links }) => {
  return (
    <>
      {links.map(link => (
        <SocialLink {...link}></SocialLink>
      ))}
      {'share' in navigator ? (
        <SocialLink
          title='Share'
          icon={<ShareIcon></ShareIcon>}
          link=''
          backgroundAccent='bg-sky-300'
          onClick={() => navigator.share({ url: window.location.href })}
        />
      ) : null}
    </>
  );
};
