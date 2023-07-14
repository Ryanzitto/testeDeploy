import Characters from "./components/SectionCharacters";
import HomeSection from "./components/SectionHome";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisodes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-24 font-black text-3xl text-zinc-800">
      <HomeSection />
      <Characters />
      <Locations />
      <Episodes />
    </main>
  );
}
