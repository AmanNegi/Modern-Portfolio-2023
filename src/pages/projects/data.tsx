import { Project } from "./Projects";

import copyableImage from "../../assets/copyable_banner.png";
import freshNestBanner from "../../assets/fresh_nest_banner.png";
import flutterUiKitBanner from "../../assets/flutter_ui_kit_banner.png";
import selfRemedyBanner from "../../assets/self_remedy_banner.png";
import localVendorBanner from "../../assets/local_vendor_banner.png";
import trimTimeBanner from "../../assets/trim_time_banner.png";

const projectList: Array<Project> = [
  {
    name: "FreshNest",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A full stack app bridging local vegetable sellers, farmers, and
        consumers. It's a convenient, transparent marketplace connecting
        customers with fresh, locally grown vegetables. No
        intermediaries—farmers and sellers showcase produce directly, enabling a
        farm-to-table connection. Support local agriculture with FreshNest.
      </p>
    ),
    tags: ["Node.js", "React", "Flutter", "MongoDB"],
    url: "https://farm-nest.netlify.app",
    display: freshNestBanner,
    displayType: 0,
  },
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
    name: "Mystic Melodies",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        Mystic Melodies, is a music streaming app that lets you explore the rich
        and diverse traditional sounds of India. It contains a list of regions
        and their traditional songs, which we can listen to through the app
        effortlessly. I noticed that, with the abundance of popular Western
        music, it could be difficult for young people to find their own
        cultures' rich and diverse musical traditions.
      </p>
    ),
    tags: ["Flutter", "MLH Hackathon", "Sponsor Winner 🏆"],
    url: "https://www.github.com/amannegi/mysticmelodies",
    displayType: 1,
    display: "j7Dslmie_4s",
  },
  {
    name: "TrimTime",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        Introducing TrimTime, developed by myself and
        <a
          className="font-bold text-accentColor"
          href="https://twitter.com/NabhagMotivaras"
        >
          {" "}
          Nabhag
        </a>{" "}
        in an MLH Hackathon. Say goodbye to long waits with our revolutionary
        barber app. Register seats in advance, optimize schedules, and receive
        real-time updates. Personalized profiles, reviews, and loyalty programs
        enhance transparency. Elevate your barbering experience today!
      </p>
    ),
    tags: ["MLH Hackathon", "Flutter", "NodeJS", "MongoDB", "Typescript"],
    url: "https://devpost.com/software/trimtime",
    display: trimTimeBanner,
    displayType: 0,
  },
  {
    name: "Co-Ride",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        Co-Ride is an application that connects people traveling in the same
        direction, reducing single-occupancy vehicles, air pollution, fuel
        consumption, and carbon emissions. Share rides, save money, reduce
        congestion, and foster community.
      </p>
    ),
    tags: [
      "Flutter",
      "Google Maps",
      "MLH Hackathon",
      "Second Overall Winner 🥈",
    ],
    url: "https://www.github.com/amannegi/co-ride",
    displayType: 1,
    display: "GjIVa58AbSQ",
  },
  {
    name: "Flutter UI Kit",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        A robust collection of 20+ demo screens. Each screen is meticulously
        documented and refactored for optimal performance. You can find the
        complete source code for each page in the repository, making it easy to
        customize and integrate into your projects. Level up your Flutter app
        development with FlutterUIKit!
      </p>
    ),
    tags: ["Flutter", "500+ downloads", "50+ stars 🌟"],
    url: "https://github.com/amannegi/flutteruikit",
    display: flutterUiKitBanner,
    displayType: 0,
  },

  {
    name: "Local Vendor App",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        Empowering local vendors and customers. A cost-effective solution for
        vendors to create their own apps. Admins manage items, provide chat
        support, and send push notifications. Users browse, order, book tables,
        and chat with support. Enhancing choice and connecting local businesses
        with customers.
      </p>
    ),
    tags: ["Flutter", "MLH Hackathon", "Third Overall Winner 🥉"],
    url: "https://github.com/amannegi/localvendorapp",
    display: localVendorBanner,
    displayType: 0,
  },

  {
    name: "Self Remedy",
    description: (
      <p className="max-h-[50%] text-ellipsis overflow-hidden">
        An educational and collaborative app inspired by Wikipedia and
        open-source projects. It provides information about diseases, allowing
        users to learn and contribute. Users can add or edit disease details,
        making it a comprehensive resource. Ideal for both learning and basic
        medical assistance, Self Remedy promotes knowledge sharing and
        user-driven healthcare empowerment.
      </p>
    ),
    tags: ["Flutter", "MLH Hackathon"],
    url: "https://github.com/amannegi/selfremedy",
    display: selfRemedyBanner,
    displayType: 0,
  },
];

export default projectList;
