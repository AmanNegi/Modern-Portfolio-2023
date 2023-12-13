import { useEffect } from "react";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import Projects from "./projects/Projects";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Portfolio;
