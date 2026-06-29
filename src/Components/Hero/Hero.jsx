import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto mt-2 px-4">
      <div className="grid lg:flex rounded-3xl overflow-hidden bg-white shadow-sm">

        <HeroLeft />

        <HeroRight />

      </div>
    </section>
  );
}