import { FunctionComponent, JSX } from 'preact';
import { ISocialLinkData } from './links';

type ISocialLinkProps = ISocialLinkData & {
  onClick?: (ev: JSX.TargetedMouseEvent<HTMLAnchorElement>) => void;
};

export const SocialLink: FunctionComponent<ISocialLinkProps> = props => {
  const { icon, title } = props;

  return (
    <article class='group/root'>
      <div
        class={
          'w-full mx-auto rounded-xl mt-4 group ' +
          (props.backgroundAccent || 'border')
        }>
        <a
          {...(props.link ? { href: props.link, target: '_blank' } : {})}
          onClick={ev => {
            if (typeof props.onClick === 'function') {
              props.onClick(ev);
            }
          }}
          class='flex bg-black border rounded-xl flex-row w-full p-3 items-center justify-center text-2xl group-hover:bg-white group-hover:text-black duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem]'>
          <span class='pr-1 pt-1'>{icon}</span>
          <span class='flex-1 text-center'>{title}</span>
        </a>
      </div>
      {props.subtitle ? (
        <div class='text-center hidden group-hover/root:block text-gray-400 p-0'>
          <span> {props.subtitle}</span>
        </div>
      ) : null}
    </article>
  );
};
