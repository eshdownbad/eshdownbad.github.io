import { FunctionComponent, JSX } from 'preact';
import { ISocialAnchor, ISocialLinkProps } from '.';

export const SocialLink: FunctionComponent<ISocialLinkProps> = props => {
  const { icon, title } = props;
  var tag = <a></a>;
  return (
    <article class='link group/root w-full'>
      <div
        class={
          'group mx-auto w-full rounded-xl ' +
          (props.backgroundAccent || 'border')
        }>
        {'onClick' in props ? (
          <button
            onClick={ev => {
              console.log('hmmm');
              props.onClick(ev);
            }}
            class='flex w-full flex-row items-center justify-center rounded-xl border bg-black p-3 text-2xl duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem] group-hover:bg-white group-hover:text-black'>
            <span class='h-full'>{icon}</span>
            <span class='flex-1 text-center'>{title}</span>
          </button>
        ) : (
          <a
            href={(props as ISocialAnchor).link}
            target='_blank'
            class='flex w-full flex-row items-center justify-center rounded-xl border bg-black p-3 text-2xl duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem] group-hover:bg-white group-hover:text-black'>
            <span class='h-full'>{icon}</span>
            <span class='flex-1 text-center'>{title}</span>
          </a>
        )}
      </div>
    </article>
  );
};
