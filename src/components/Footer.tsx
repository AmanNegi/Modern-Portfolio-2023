import React from "react";
import { SiTwitter, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-white h-[20vh] w-[100%] ">
      <div className="h-[100%] flex flex-col items-center justify-evenly">
        <h1 className=" text-2xl md:text-3xl font-bold ">{`Let's connect :)`}</h1>
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
