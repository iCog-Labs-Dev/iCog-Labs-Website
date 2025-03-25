import Footer from "./Components/Footer";
import AnimatedLandingPage from "./Components/Hero";
import Hero from "./Components/Hero";
import Navbar from "./Components/navBar";
import ICogLabsSection from "./Components/Sec1";
import CoreValuesSection from "./Components/sec2";
import InsightsSection from "./Components/sec3";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <CoreValuesSection/>
      <InsightsSection/>
      <Footer />
    </main>
  );
}
