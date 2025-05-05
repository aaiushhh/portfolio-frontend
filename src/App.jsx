import './App.css'
import { Navbar } from './navbar/Navbar'
import { NameCard } from './nameCard/NameCard'
import { TechStack } from './techStack/TechStack'
import Project from './Project/Project'
import Education from './education/Education'
// import Certifications from './certifications/Certifications'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import { useEffect, useState } from 'react';
import { getProjects } from './api/api'; // Import the API function

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects on mount
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="app-container" id="app-cont">
      <div className="nav-container" id='navbar'>
        <Navbar />
      </div>
      <div className="content-container">
        <div className="section" id="about">
          {/* <div className='space'></div> */}
          <NameCard />
          <TechStack />
          <Education />
          
          {/* <div className='space'></div> */}
        </div>
        <div className="section" id="experience">
          {/* <h2>Experience Section</h2> */}
          <Experience />
          {/* Add your experience content here */}
        </div>
        <div className="section" id="projects">
          {/* Dynamically render Project components */}
          {projects.map((project, idx) => (
            <Project key={project.id || idx} project={project} />
          ))}
        </div>
        {/* <br /><br /> */}
        <div className="section" id="contact">
          <Contact />
          {/* <h2>Contact Section</h2> */}
          {/* Add your contact content here */}
        </div>
      </div>
    </div>
  )
}

export default App
