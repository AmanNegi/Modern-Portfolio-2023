import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import timelineElements from "./data/data";
import SideMenu from "../../components/SideMenu";

import { BiSolidSchool, BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";

import "./app.css";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const newIconStyle = { background: "#2B7A78", color: "#fff" };
  const oldIconStyle = { background: "#f9c74f", color: "#000" };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu />
      <div className="px-20 text-center pt-14 mb-14">
        <h1 className="text-3xl font-bold text-center underline md:text-5xl underline-offset-8 decoration-headingColor text-headingColor">
          Experience
        </h1>
      </div>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              textClassName="text-white"
              dateClassName="date"
              contentStyle={{
                backgroundColor: "#DEF2F1",
              }}
              contentArrowStyle={{
                borderRightColor: "#DEF2F1",
              }}
              iconStyle={isWorkIcon ? newIconStyle : oldIconStyle}
              icon={getIconById(element.id)}
            >
              <h3 className="text-xl font-bold text-darkShade">
                {element.title}
              </h3>
              <h5 className="text-darkShade text-opacity-80">
                {element.location}
              </h5>
              <p className="text-darkShade" id="description">
                {element.description}
              </p>

              <a
                className={`button ${isWorkIcon ? "newButton" : "oldButton"}`}
                target="_blank"
                href={element.url}
              >
                {element.buttonText}
              </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}

const getIconById = (id: number) => {
  switch (id) {
    case 1:
      return <BsGithub />;
    case 2:
      return <TbBrandFiverr />;
    case 3:
      return <BiSolidSchool />;
    case 4:
      return <BiWorld />;
    case 5:
      return <BiWorld />;
    case 6:
      return <SiFreelancer />;
    default:
      return <BiWorld />;
  }
};

export default Experience;
