import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
  return (
    <div className='project-card-container'>
      <div className='project-image'>
        <img src={props.projectImage} alt='project-image'/>
      </div>
      <div className='project-info'>
        <h2>{props.projectName}</h2>
        <p>{props.projectDesc}</p>
        <div className='project-links'>
            <a href={props.projectDemoLink} target="_blank" rel="noopener noreferrer">
            View Live
            </a>
            <a href={props.projectGithubLink} target="_blank" rel="noopener noreferrer">
            Github
            </a>
        </div>
      </div>
    </div>
  );
}
