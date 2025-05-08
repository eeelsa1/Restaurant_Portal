import React, { useRef } from "react";
import banner from "../images/banner.svg";
import SpecialtiesSection from "../components/specialtysection";
import QuoteSection from "../components/quotesection";
import LocationSection from "../components/locationsection";
import ChicanoSection from "../components/chicanosection";

function HomePage() {
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-20 pt-16">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img src={banner} alt="Hero" className="w-full h-full object-cover" />
      </section>

      {/* Specialties 區塊 */}
      <section className="px-4">
        <SpecialtiesSection scrollToMenu={scrollToMenu} />
      </section>

      {/* Quote 區塊 */}
      <section className="px-4">
        <QuoteSection />
      </section>

      {/* Location 區塊 */}
      <section className="px-4">
        <LocationSection />
      </section>

      {/* chicano 區塊 */}
      <section className="px-4">
        <ChicanoSection />
      </section>
    </div>
  );
}

export default HomePage;
