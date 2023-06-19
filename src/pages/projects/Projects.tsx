import ProjectItem from "./components/ProjectItem";
import projectList from "./data";

export enum DisplayType {
  IMAGE = 0,
  VIDEO = 1,
}

export interface Project {
  name: string;
  description: JSX.Element;
  tags: Array<string>;
  url: string;
  display: string;
  displayType: number;
}

function Projects() {
  return (
    <>
      {projectList.map((e, index) => (
        <ProjectItem key={e.name} project={e} index={index} />
      ))}
    </>
  );
}

export default Projects;
