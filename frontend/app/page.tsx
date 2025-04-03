import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Hero from "./Components/Hero";
import Navbar from "./Components/navbar";
import InsightsSection from "./Components/sec3";



export default function HomePage() {
  return (
    <main className="bg-transparent">
      
      <Navbar />
      <Hero />
      <Grid />
      <InsightsSection />
      <Footer/>
    </main>
  );
}
