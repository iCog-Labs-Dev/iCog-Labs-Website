import Card from "./components/cards";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Sec1 from "./components/sec1";
import { sec1Data } from "./data";




export default function HomePage() {
  return (
    <main className="bg-transparent">
      <Navbar />
      <Hero />
      <Sec1>
        <Card title={sec1Data[0].title} description={sec1Data[0].description} />
        <Card title={sec1Data[1].title} description={sec1Data[1].description} />
        <Card title={sec1Data[2].title} img={sec1Data[2].img} />
      </Sec1>
      
    </main>
  );
}