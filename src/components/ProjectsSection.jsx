import React from "react";
import ProjectsItems from "../assets/images/ProjectsItems";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
    return(
        <div className='py-5' id='projects'>
            <div className='container'>
                <h2 className='mb-5'>My Projects</h2>
                <div className='row g-4'>
                    {
                        ProjectsItems.map((project) => <ProjectCard key={project.id} projectImage={project.ProjectImg} projectName={project.ProjectTitle} projectDesc={project.ProjectDescription} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;