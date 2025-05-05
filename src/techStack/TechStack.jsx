import './TechStack.css'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaJava, 
  FaDocker, 
  FaAws,
  FaAngular
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiEjs, 
  SiFlask, 
  SiCplusplus, 
  SiGo, 
  SiMysql, 
  SiMongodb, 
  SiScikitlearn,
  SiRedhat,
  SiIbmcloud
} from 'react-icons/si'
import { useEffect, useState } from 'react'

export const TechStack = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "EJS", icon: <SiEjs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "React", icon: <FaReact /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Golang", icon: <SiGo /> },
        { name: "MySql", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "RHEL", icon: <SiRedhat /> },
        { name: "IBM Cloud", icon: <SiIbmcloud /> },
    ];

    // Split skills into two arrays
    const middleIndex = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, middleIndex);
    const secondRow = skills.slice(middleIndex);

    return (
        <div className='tech-stack-container'>
            <h1>Tech &nbsp;Stack</h1>
            <div className='tech-stack-content'>
                <div className='tech-stack-row row1'>
                    {firstRow.map((skill, index) => (
                        <div className='tech-stack-item' key={index}>
                            <span className="tech-icon">{skill.icon}</span>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className='tech-stack-row row2'>
                    {secondRow.map((skill, index) => (
                        <div className='tech-stack-item' key={index}>
                            <span className="tech-icon">{skill.icon}</span>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
