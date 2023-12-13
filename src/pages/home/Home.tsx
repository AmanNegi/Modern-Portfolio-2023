import SideMenu from "../../components/SideMenu";
import AboutMe from "./components/AboutMe";

function Home() {
  return (
    <>
      <main className="h-auto md:h-full">
        <SideMenu />
        <AboutMe />
        <p className="px-8 mb-10 md:px-28 md:m-0 text-semiLightShade">
          I'm a passionate computer science student with a flair for mobile
          development. I've been crafting projects using Flutter and Android
          that make me proud. But that's not all – I'm broadening my horizons by
          diving into the realms of ReactJS and NextJS. Besides, I'm an eager
          beaver when it comes to contributing to open-source projects.
        </p>
      </main>
    </>
  );
}

export default Home;
