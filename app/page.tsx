import Characters from "./components/SectionCharacters";
import HomeSection from "./components/SectionHome";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisodes";
import Footer from "./components/FooterApp";
export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-neutral-800 overflow-x-hidden flex-col">
      <HomeSection />
      <Characters />
      <Locations />
      <Episodes />
      <Footer />
    </main>
  );
}
