import { Links } from "./components/links";


export function App() {
  return (
    <main class="flex flex-col items-center w-full p-1">
      <div class="flex flex-col items-center m-4 p-4 bg-black text-white w-full md:w-4/5 lg:w-3/5 rounded-3xl ">
        <h1 class="font-bold text-3xl md:text-5xl lg:text-8xl">EshDownBad</h1>
        <Links />
      </div>
    </main>
  );
}
