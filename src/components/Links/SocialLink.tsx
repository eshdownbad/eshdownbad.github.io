import { FunctionComponent, JSX } from 'preact';
import { ISocialLinkData } from '.';

type ISocialLinkProps = ISocialLinkData & {
  onClick?: (ev: JSX.TargetedMouseEvent<HTMLAnchorElement>) => void;
};

export const SocialLink: FunctionComponent<ISocialLinkProps> = props => {
  const { icon, title } = props;

  return (
    <article class='group/root w-full'>
      <div
        class={
          'group mx-auto w-full rounded-xl ' +
          (props.backgroundAccent || 'border')
        }>
        <a
          {...(props.link ? { href: props.link, target: '_blank' } : {})}
          onClick={ev => {
            if (typeof props.onClick === 'function') {
              props.onClick(ev);
            }
          }}
          class='flex w-full flex-row items-center justify-center rounded-xl border bg-black p-3 text-2xl duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem] group-hover:bg-white group-hover:text-black'>
          <span class='pr-1 pt-1'>{icon}</span>
          <span class='flex-1 text-center'>{title}</span>
        </a>
      </div>
      {props.subtitle ? (
        <div class='hidden p-0 text-center text-gray-400 group-hover/root:block'>
          <span> {props.subtitle}</span>
        </div>
      ) : null}
    </article>
  );
};
