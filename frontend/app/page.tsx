import ArticleShowcase from "./components/articles";
import Card from "./components/cards";
import InternshipSection from "./components/careers";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import NewsCoverage from "./components/news";
import PartnersSection from "./components/partners";
import Sec1 from "./components/sec1";
import Sec2 from "./components/sec2";
import TestimonialsSection from "./components/testimonials";
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
      <Sec2 />
      <PartnersSection />
      <TestimonialsSection />
      <NewsCoverage />
      <ArticleShowcase />
      <InternshipSection />
      <Footer/>
    </main>
  );
}
