import { motion } from "framer-motion";
import { Project } from "../Projects";
import { twMerge } from "tailwind-merge";

function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <section
      key={project.name}
      className="md:h-[100vh] w-[100%] pb-[8vh] md:pb-[0px] md:pt-[8vh] md:py-[12vh] py-[4vh] relative flex items-center justify-center"
    >
      <div
        className={twMerge(
          "flex flex-col-reverse items-start h-full rounded-lg md:shadow-lg md:shadow-semiDarkShade bg-semiLightShade",
          index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div
          className={twMerge(
            "flex flex-col items-start md:w-[25vw] pt-8 h-full px-4",
            index % 2 == 0 ? "md:pl-10 md:pr-6" : "md:pl-4 md:pr-8"
          )}
        >
          <h1 className="mb-2 text-xl font-bold md:text-3xl text-headingColor">
            {project.name}
          </h1>
          <div className="flex-grow">
            <p className="text-darkShade">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {project.tags.map((e, i) => {
              return (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 py-1 text-white rounded-md bg-slate-700"
                  key={i}
                >{`#${e}`}</motion.div>
              );
            })}
          </div>
          <div className="flex flex-1" />
          <button
            onClick={() => {
              window.open(project.url, "_blank");
            }}
            className="w-[100%] h-[8vh] mt-3 md:mt-0 font-bold text-lightShade bg-accentShade hover:bg-semiDarkShade rounded-lg transition-all"
          >
            LAUNCH PROJECT
          </button>
          <div className="flex flex-grow" />
        </div>
        <div className="w-[2vw]"></div>
        <div className="w-full md:w-[50vw] h-full">
          {project.displayType === 0 ? (
            <img
              className={twMerge(
                "object-cover h-[100%] w-[100%]",
                index % 2 == 0
                  ? "md:rounded-tr-lg md:rounded-br-lg"
                  : "md:rounded-bl-lg md:rounded-tl-lg"
              )}
              src={project.display}
              loading="lazy"
              alt=""
            />
          ) : (
            <iframe
              className={twMerge(
                "object-cover h-full w-[100%]",
                index % 2 == 0
                  ? "md:rounded-tr-lg md:rounded-br-lg"
                  : "md:rounded-bl-lg md:rounded-tl-lg"
              )}
              src={`https://www.youtube.com/embed/${project.display}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          )}
        </div>
      </div>
    </section>
  );
}
interface ProjectItemProps {
  project: Project;
  index: number;
}

export default ProjectItem;
