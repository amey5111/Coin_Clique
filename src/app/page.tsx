import HeaderStrip from "./components/Home/HeaderStrip";
import HeroBanner from "./components/Home/HeroBanner";
import SplitExHero from "./components/Home/SplitExHero";
import TrackExHero from "./components/Home/TrackExHero";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-blue-300">
      <HeroBanner />
      <HeaderStrip/>
      <TrackExHero />
      <SplitExHero />
    </div>
  );
}
