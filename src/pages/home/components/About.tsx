function About() {
  return (
    <section className="h-screen w-[100%] bg-gradient-to-r from-darkBackground to-semiDarkBackground">
      <div className="h-[100%] w-[100%] flex flex-col items-start justify-center gap-10 pl-[15vw] font-grotesk font-normal">
        <h1 className="text-8xl text-headingColor ">I'm A Developer,</h1>
        <h1 className="text-8xl ml-[25vw] text-accentColor ">Freelancer,</h1>
        <h1 className="text-8xl text-headingColor ">Blog Writer,</h1>
      </div>
    </section>
  );
}

export default About;
