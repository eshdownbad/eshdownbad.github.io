import { FunctionComponent, JSX } from 'preact';
import { ISocialLinkData } from './links';

type ISocialLinkProps = ISocialLinkData & {
  onClick?: (ev: JSX.TargetedMouseEvent<HTMLAnchorElement>) => void;
};

export const SocialLink: FunctionComponent<ISocialLinkProps> = props => {
  const { icon, site } = props;
  return (
    <article
      class={
        'w-full mx-auto rounded-xl m-4 ' + (props.backgroundAccent || 'border')
      }>
      <a
        {...(props.link ? { href: props.link, target: '_blank' } : {})}
        onClick={ev => {
          if (typeof props.onClick === 'function') {
            props.onClick(ev);
          }
        }}
        class='flex bg-black border rounded-xl flex-row w-full p-3 items-center justify-center text-2xl hover:bg-white hover:text-black duration-300 hover:translate-x-2 hover:translate-y-[-0.5rem]'>
        <span class='pr-1 pt-1'>{icon}</span>
        <span class='flex-1 text-center'>{site}</span>
      </a>
    </article>
  );
};
