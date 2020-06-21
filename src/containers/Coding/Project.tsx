import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./Coding.css"
import defIcon from "../../ressources/default-icon.png"

type project = {
    img:string,
    name:string,
    description:string,
    url:string,
    created:string,
    lastUpdate:string,
    tags:string[],
}

export function Project(project:project){
    var created = new Date(project.created)
    var latest = new Date(project.lastUpdate)
    var projectYear:string = (created.getFullYear() === latest.getFullYear())?created.getFullYear()+"":created.getFullYear() + "-" + latest.getFullYear()

    var tags:JSX.Element[] = []
    project.tags.forEach(tag => {
        tags.push(
            <span>
                {tag}
            </span>
        )
    });
    return(
        <>
            <div className="time-project"><span>{projectYear}</span></div>
            <div className="project-container">
                <div className="project-image"><img src={(project.img)?project.img:defIcon} alt="Project Avatar"/></div>
                <div className="project-details">
                    <h2>{project.name}</h2>
                    <div className="tag-container">{tags}</div>
                    <p className="project-description">{project.description}</p>
                    <a className="project-button" href={project.url}>Go to Project <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
            </div>
        </>
    )
}
//<div>latest change: {latest.toLocaleDateString('en-US')}</div>
export default Project