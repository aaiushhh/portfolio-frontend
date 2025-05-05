import React, { useEffect, useState } from 'react';
import { getEducation } from '../api/api'; // Adjust the path if needed
import './Education.css'

function Education() {
  const [education, setEducation] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      const data = await getEducation();
      setEducation(data?.education || null);
    };
    fetchEducation();
  }, []);

  if (!education) {
    return <div className='education-container'>Loading...</div>;
  }

  return (
    <div className='education-container'>
      {/* <h1>Education</h1> */}
      <h2>{education.college}</h2>
      <p className='bachelor-detail'>
        {education.degree} with specialization in <span className='special'>{education.specialization}</span>
      </p>
      <ul>
        <li>{education.description}</li>
      </ul>
    </div>
  );
}

export default Education