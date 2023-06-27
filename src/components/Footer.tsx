import { SiTwitter, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";

import cute_animal from "../assets/cute_animal.png";

const Footer = () => {
  return (
    <footer className="bg-white w-[100%] py-10 border-t-2 border-t-semiDarkBackground md:mt-[8vh]">
      <div className="h-[100%] flex flex-col items-center justify-evenly">
        <img
          className="object-contain h-[100px] w-[100px] mb-8"
          src={cute_animal}
          alt=""
        />
        <h1 className=" text-2xl md:text-3xl font-bold mb-4 hover:text-accentColor">{`Let's connect :)`}</h1>
        <div className="flex gap-8">
          <i
            onClick={() => {
              window.open("https://twitter.com/AsterJoules", "_blank");
            }}
            className="cursor-pointer text-xl md:text-3xl hover:text-[#1d9bf0]"
          >
            <SiTwitter />
          </i>

          <i
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/aman-negi-3a1a221a9/",
                "_blank"
              );
            }}
            className="cursor-pointer  text-xl md:text-3xl hover:text-[#0a66c2]"
          >
            <SiLinkedin />
          </i>

          <i
            onClick={() => {
              window.open("https://github.com/amannegi", "_blank");
            }}
            className="cursor-pointer text-xl md:text-3xl hover:text-gray-700"
          >
            <SiGithub />
          </i>

          <i
            onClick={() => {
              window.open("https://youtube.com/@AsterJoules", "_blank");
            }}
            className="cursor-pointer text-xl md:text-3xl hover:text-[#fe0000]"
          >
            <SiYoutube />
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
