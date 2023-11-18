import React from 'react'
import ProjectItem from "../componets/ProjectItem";
import "../styles/Projects.css";
import {ProjectList} from "../helpers/ProjectList";

function Projects() {
  /* listing through all project items */
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
            return <ProjectItem id={idx} name={project.name} image={project.image} />;
        })}
        
      </div>
    </div>
  )
}

export default Projects
