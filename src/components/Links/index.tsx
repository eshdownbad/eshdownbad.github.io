import ShareIcon from '~icons/akar-icons/share-box';

import { FunctionalComponent, JSX } from 'preact';
import { SocialLink } from './SocialLink';

export interface ISocialElement {
  icon: JSX.Element;
  title: string;
  backgroundAccent?: string;
}
export interface ISocialButton extends ISocialElement {
  onClick: (ev: JSX.TargetedMouseEvent<HTMLElement>) => void;
}
export interface ISocialAnchor extends ISocialElement {
  link: string;
}

export type ISocialLinkProps = ISocialAnchor | ISocialButton;
export interface ILinksProps {
  links: ISocialLinkProps[];
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
