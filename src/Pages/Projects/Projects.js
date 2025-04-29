import React from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
  const projectList = [
    {
      projectName: 'Project 1',
      projectDesc:
        'This is a description of project 1. It is a full stack app built with React, Node.js, and MongoDB.',
      projectImage: 'https://via.placeholder.com/150',
      projectDemoLink: 'https://www.google.com',
      projectGithubLink: 'https://github.com/Shilpajha29/',
    },
    {
      projectName: 'Project 2',
      projectDesc:
        'A simple portfolio site created with HTML, CSS, and JavaScript.',
      projectImage: 'https://via.placeholder.com/150',
      projectDemoLink: 'https://example.com/demo2',
      projectGithubLink: 'https://github.com/Shilpajha29/project2',
    },
    {
      projectName: 'Project 3',
      projectDesc: 'A cool weather app using OpenWeather API and React.',
      projectImage: 'https://via.placeholder.com/150',
      projectDemoLink: 'https://example.com/weather',
      projectGithubLink: 'https://github.com/Shilpajha29/weather-app',
    },
  ];

  return (
    <div className="projects-page">
        <div className='projects-header'>
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
        </div>
        <div className="projects-list">
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectName={project.projectName}
                    projectDesc={project.projectDesc}
                    projectImage={project.projectImage}
                    projectLink={project.projectDemoLink}
                    githubLink={project.projectGithubLink}
                />
            ))}
        </div>
    </div>
  );
}
