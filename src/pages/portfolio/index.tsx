import { useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import Projects from "./projects/Projects";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Scroll to the top of the page
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section ref={portfolioRef}>
      <SideMenu />
      <main className="bg-semiLightShade md:bg-bgColor">
        <div className="px-20 mb-10 text-center pt-14">
          <h1 className="text-3xl font-bold text-center underline md:text-5xl underline-offset-8 decoration-darkShade text-darkShade">
            Portfolio
          </h1>
        </div>

        <Projects />
        <div className="md:h-[10vh]"></div>
        <Footer />
      </main>
    </section>
  );
};

export default Portfolio;
