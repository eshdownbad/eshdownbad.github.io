import { Links } from './components/links';
import { Title } from './components/title';

export function App() {
  return (
    <main class='flex flex-col items-center w-full p-1'>
      <div class='flex flex-col items-center m-4 p-4 bg-black text-white w-full md:w-4/5 lg:w-3/5 rounded-3xl  border border-zinc-600'>
        <Title />
        <Links />
      </div>
    </main>
  );
}
