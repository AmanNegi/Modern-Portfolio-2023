const Footer = () => {
  return (
    <section className="bg-semiLightShade">
      <div className="px-10 w-[100%] h-[0.25px] bg-opacity-20"></div>
      <footer className="w-[100%] py-10 md:pt-[8vh]">
        <div className="flex flex-col items-center md:mx-20 md:flex-row">
          <p className="text-black">Copyright {new Date().getFullYear()} - All right reserved</p>
          <div className="flex flex-grow"></div>
          <div className="flex flex-row items-center justify-center">
            {["GitHub", "Twitter", "LinkedIn", "Youtube"].map((e, index) => {
              return FooterItem({ title: e, index });
            })}
          </div>
        </div>
      </footer>
    </section>
  );
};

const FooterItem = ({ title, index }: { title: string; index: number }) => {
  return (
    <div
      onClick={() => {
        if (index == 0) {
          window.open("https://www.github.com/amannegi", "_blank");
        } else if (index == 1) {
          window.open("https://www.twitter.com/AsterJoules", "_blank");
        } else if (index == 2) {
          window.open(
            "https://www.linkedin.com/in/aman-negi-3a1a221a9/",
            "_blank"
          );
        } else {
          window.open("https://www.youtube.com/@asterjoules", "_blank");
        }
      }}
      key={title}
      className="ml-4 cursor-pointer"
    >
      <h3 className="hover:font-bold text-darkShade hover:text-accentShade">{title}</h3>
    </div>
  );
};

export default Footer;
