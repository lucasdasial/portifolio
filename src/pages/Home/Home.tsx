import { Bio } from "../../components/Bio/Bio";
import { Hero } from "../../components/Hero/Hero";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer/Footer";
import { Skills } from "../../components/Skills/Skills";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Bio />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
