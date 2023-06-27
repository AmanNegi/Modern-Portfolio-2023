import { Project } from "../Projects";
import { motion } from "framer-motion";

interface ProjectItemProps {
  project: Project;
  index: number;
}

function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <section key={project.name} className={getProjectItemClass(index)}>
      <div className="hidden md:block absolute left-[10vw] top-0 w-[1px] h-[100%] bg-dividerColor"></div>
      <div className="hidden md:block absolute right-[10vw] top-0 w-[1px] h-[100%] bg-dividerColor"></div>

      {index !== 0 && (
        <div className="hidden md:block absolute left-[0] top-[2vh] w-[100%] h-[1px] bg-dividerColor"></div>
      )}

      <div className="flex flex-col items-start md:w-[25vw] md:h-[100%] px-4 pt-8">
        <h1 className="text-3xl font-grotesk font-medium mb-2 text-headingColor">
          {project.name}
        </h1>
        {project.description}
        <div className="flex flex-wrap gap-4 mt-3">
          {project.tags.map((e, i) => {
            return (
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="text-white bg-slate-700 px-2 py-1 rounded-md"
                key={i}
              >{`#${e}`}</motion.div>
            );
          })}
        </div>
        <div className="flex flex-1"></div>
        <button
          onClick={() => {
            window.open(project.url, "_blank");
          }}
          className="w-[100%] h-[8vh] mt-3 md:mt-0  font-bold"
        >
          LAUNCH PROJECT
        </button>
      </div>

      <div className="w-[2vw]"></div>
      <div className=" flex flex-col items-start w-[100%] md:w-[50vw] h-[100%]">
        {project.displayType === 0 ? (
          <img
            className="object-cover h-[100%] w-[100%]"
            src={project.display}
            alt=""
          />
        ) : (
          <iframe
            className="object-cover h-[40vh] md:h-[100%] w-[100%]"
            src={`https://www.youtube.com/embed/${project.display}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        )}
      </div>
    </section>
  );

  function getProjectItemClass(index: number): string {
    let projectItemClass =
      "md:h-[100vh] w-[100%] pb-[8vh] md:pb-[0px] md:pt-[8vh] md:py-[12vh] relative flex items-center justify-center flex-col-reverse ";

    if (index % 2 == 0) {
      projectItemClass = projectItemClass + "md:flex-row";
    } else {
      projectItemClass = projectItemClass + "md:flex-row-reverse";
    }

    return projectItemClass;
  }
}

export default ProjectItem;
