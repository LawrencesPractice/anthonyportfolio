import React from 'react';
import words from '../words2.png';

const Specialties = ({ skills }) => {
  return (
    <div className="specialties" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Specialties</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
      <img src={words} alt="words" />
    </div>
  );
};

export default Specialties;