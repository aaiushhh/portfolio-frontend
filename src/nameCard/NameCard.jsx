import './NameCard.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getIntro } from '../api/api';
export const NameCard = () => {
  const [introData, setIntroData] = useState(null);

  useEffect(() => {
    const fetchIntro = async () => {
      const data = await getIntro();
      if (data) {
        setIntroData(data.intro);
      }
    };
    fetchIntro();
  }, []);
  
  return (
    <div className='name-card-container'>
      <div className='name-card-content'>
        <div className='name-card-content-header'>
          <h1>{introData?.name || "Aayush Srivastava"}</h1>
          <div>
            <a href={introData?.github || "#"} target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
            <a href={introData?.linkedin || "#"} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <p className='name-card-content-location'>{introData?.location || "Ahemdabad, Gujarat"}</p>
        <p className='name-card-content-description'>
          {introData?.description || "I’m a B.Tech CSE student specializing in cloud-based applications, with a focus on AI, ML, and full-stack development. I enjoy building efficient, data-driven solutions."}
        </p>
      </div>
    </div>
  );
};
