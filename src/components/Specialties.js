import React from 'react';

const Specialties = ({ skills }) => {
  return (
    <div className="specialties">
      <h2>Specialties</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;