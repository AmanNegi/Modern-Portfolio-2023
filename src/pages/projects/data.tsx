import { Project } from "./Projects";
import copyableImage from "../../assets/copyable_banner.png";
import agroMilletsImage from "../../assets/agro_millets_banner.png";

const projectList: Array<Project> = [
  {
    name: "Copyable",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A web and mobile application build using{" "}
        <span className="font-regular font-grotesk">Flutter</span>, that can be
        used to save some text and instantly get it when needed. This app is
        build for content creators, developers, designers and many more people
        who come across writing the same things again and again.
      </p>
    ),
    tags: ["Flutter", "Flutter Web"],
    url: "https://amannegi.github.io/copyable",
    display: copyableImage,
    displayType: 0,
  },
  {
    name: "Agro-Millets",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A web and mobile application build using{" "}
        <span className="font-regular font-grotesk">Flutter</span>, that can be
        used to save some text and instantly get it when needed. This app is
        build for content creators, developers, designers and many more people
        who come across writing the same things again and again.
      </p>
    ),
    tags: ["Node.js", "React", "Flutter", "MongoDB"],
    url: "https://agro-millets.netlify.app",
    display: agroMilletsImage,
    displayType: 0,
  },
  {
    name: "Mystic Melodies",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A web and mobile application build using{" "}
        <span className="font-regular font-grotesk">Flutter</span>, that can be
        used to save some text and instantly get it when needed. This app is
        build for content creators, developers, designers and many more people
        who come across writing the same things again and again.
      </p>
    ),
    tags: ["Flutter", "MLH Hackathon", "Sponsor Winner"],
    url: "https://www.github.com/amannegi/mysticmelodies",
    displayType: 1,
    display: "j7Dslmie_4s",
  },
  {
    name: "Co-Ride",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A web and mobile application build using{" "}
        <span className="font-regular font-grotesk">Flutter</span>, that can be
        used to save some text and instantly get it when needed. This app is
        build for content creators, developers, designers and many more people
        who come across writing the same things again and again.
      </p>
    ),
    tags: ["Flutter", "Google Maps", "MLH Hackathon", "Second Overall Winner"],
    url: "https://www.github.com/amannegi/co-ride",
    displayType: 1,
    display: "GjIVa58AbSQ",
  },
];

export default projectList;
