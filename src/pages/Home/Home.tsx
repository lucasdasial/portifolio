import { Bio } from "../../components/Bio/Bio";
import { Hero } from "../../components/Hero/Hero";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Bio />
      <Footer />
    </>
  );
}

export default Home;
