import React from 'react'
import "./Skills.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import{skillList} from "./../../Assets/skillsData";
import SkillCard from "../../Components/SkillsCard/SkillCard";
function Skills() {
  return (
    <div className='section-container'>
      <Header 
      heading="My Skills"
      subHeading="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"></Header>
      <div className='skill-card-container'>
        {
          skillList.map(({skillName, skillUrl},index) => <SkillCard key={index} skillName={skillName} skillUrl={skillUrl}
          />)
        }
      </div>
      <Footer phrase="View my "
      link="Resume!"
      toAddress="/resume">
      </Footer>
    </div>
  )
}

export default Skills