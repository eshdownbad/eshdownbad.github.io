import { FunctionComponent, JSX } from "preact";
import { ISocialLinkData } from "../links";

interface ISocialLinkProps extends ISocialLinkData {}

export const SocialLink: FunctionComponent<ISocialLinkProps> = ({
  logo: icon,
  site,
  link,
}) => {
  return (
    <article class="w-full mx-auto border m-4">
      <a
        href={link}
        target="_blank"
        class="flex flex-row w-full p-3 items-center justify-center text-2xl hover:bg-white hover:text-black duration-300 hover:translate-x-2 hover:translate-y-[-0.5rem]"
      >
        <span class="pr-1 pt-1">{icon}</span>
        <span class="flex-1 text-center">{site}</span>
      </a>
    </article>
  );
};
