import myImage from "../../../assets/me.jpeg";

import Typewriter from "typewriter-effect";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiTwitter, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { BiLogoDevTo } from "react-icons/bi";

const AboutMe = () => {
  return (
    <section className="flex flex-col mx-8 my-4 lg:flex-row lg:mx-28 lg:my-14">
      <div
        id="image_container"
        className="h-[80vw] w-[100%] lg:h-[30vw] lg:w-[30vw] block lg:relative"
      >
        <img
          className="block rounded-tr-[159px] rounded-bl-[159px] rounded-tl-[50px] rounded-br-[50px] h-full w-full md:h-[60vh] md:w-[50vh] object-cover"
          src={myImage}
          loading="eager"
          alt="Aman Negi's Image in the nature"
        />
        <SocialWindow />
      </div>
      <div className="w-full lg:h-[60vh] px-4 lg:px-10 py-10 lg:py-28">
        <div className="flex flex-row gap-2">
          <p className="mb-4 text-xl text-white text-opacity-40">
            Konnichiwa ~ Hola ~ Hello ~ नमस्ते
          </p>
          <p className="text-xl">👋</p>
        </div>

        <h1 className="mb-2 text-xl text-white lg:text-4xl">I'm Aman Negi</h1>
        <div className="flex flex-row">
          <h1 className="mr-2 text-2xl text-white lg:text-6xl">I'm a </h1>

          <Typewriter
            options={{
              strings: [
                "Developer",
                "Blog Writer",
                "Freelancer",
                "Contributor",
              ],
              wrapperClassName: "typeWriterHeading",
              cursorClassName: "typeWriterHeading",
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Create a divider */}
        <div className="w-full h-[1px] bg-dividerColor opacity-50 mt-6 mb-6 lg:mb-2 lg:mt-12" />

        {/* Options are: */}
        <div className="flex flex-row flex-wrap justify-start gap-x-3">
          <div className="flex flex-row items-center justify-start">
            <MdOutlineAlternateEmail className="m-3 text-2xl text-iconsColor " />
            <h3 className="mr-2 ">asterjoules@gmail.com</h3>
          </div>
          <div className="flex flex-row items-center justify-start">
            <IoLocationSharp className="m-3 text-2xl text-iconsColor" />
            <h3 className="mr-2 ">Dehradun, India</h3>
          </div>
          {/* TODO: Add links here */}
          <div
            onClick={() => {
              window.open("https://www.brewyourtech.com", "_blank");
            }}
            className="flex flex-row items-center justify-start cursor-pointer"
          >
            <TbWorldWww className="m-3 text-2xl text-iconsColor" />
            <h3 className="mr-2 ">BrewYourTech</h3>
          </div>
          <div
            onClick={() => {
              window.open("https://devpost.com/amannegi", "_blank");
            }}
            className="flex flex-row items-center justify-start cursor-pointer"
          >
            <BiLogoDevTo className="m-3 text-2xl text-iconsColor" />
            <h3 className="mr-2 ">Devpost</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialWindow = () => {
  return (
    <div className="hidden lg:absolute text-socialsColor  bottom-[-10px] right-4 left-4 h-20 bg-gray-900 rounded-[150px] lg:flex flex-row items-center justify-center buttonShadow">
      <div className="flex gap-8">
        <i
          onClick={() => {
            window.open("https://twitter.com/AsterJoules", "_blank");
          }}
          className="cursor-pointer text-xl lg:text-3xl hover:text-[#1d9bf0]"
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
          className="cursor-pointer  text-xl lg:text-3xl hover:text-[#0a66c2]"
        >
          <SiLinkedin />
        </i>

        <i
          onClick={() => {
            window.open("https://github.com/amannegi", "_blank");
          }}
          className="text-xl cursor-pointer lg:text-3xl hover:text-white"
        >
          <SiGithub />
        </i>

        <i
          onClick={() => {
            window.open("https://youtube.com/@AsterJoules", "_blank");
          }}
          className="cursor-pointer text-xl lg:text-3xl hover:text-[#fe0000]"
        >
          <SiYoutube />
        </i>
      </div>
    </div>
  );
};

export default AboutMe;
