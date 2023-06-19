import Footer from "../../components/Footer";
import Projects from "../projects/Projects";
import About from "./components/About";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <div className="h-[20vh] bg-semiDarkBackground"></div>
      <Footer />
    </>
  );
}

export default App;
