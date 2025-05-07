import React from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

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
    <div className="section-container">
        <Header
        heading="My Projects."
        subHeading="Here are a few cool things I've worked on, do check them out!">
      </Header>
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
        <Footer
        phrase="Check out "
        link="my skills!"
        toAddress="/skills">
      </Footer>

    </div>
  );
}
