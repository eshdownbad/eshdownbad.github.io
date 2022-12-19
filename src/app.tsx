import { Background } from './components/background';
import { GithubCorner } from './components/GithubCorner';
import { Links } from './components/Links';
import { Title } from './components/title';
import { LINKS } from './data';

export function App() {
  return (
    <>
      <main class='flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-10'>
        <Title />
        <div class='animate__animated animate__slideInUp flex w-full flex-col items-center space-y-3 rounded-3xl border-2 border-white bg-black p-3 text-white lg:w-3/5 xl:w-2/5'>
          <Links links={LINKS} />
        </div>
      </main>
      <Background />
      <GithubCorner href='https://github.com/eshdownbad/eshdownbad.github.io' />
    </>
  );
}
