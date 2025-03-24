import Footer from "./Components/Footer";
import AnimatedLandingPage from "./Components/Home";
import Hero from "./Components/Home";
import Home from "./Components/Home";
import Navbar from "./Components/navBar";
import ICogLabsSection from "./Components/Sec1";
import CoreValuesSection from "./Components/sec2";
import InsightsSection from "./Components/sec3";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <AnimatedLandingPage/>
      <ICogLabsSection/>
      <CoreValuesSection/>
      <InsightsSection/>
      <Footer />
    </main>
  );
}
