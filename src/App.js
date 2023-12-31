import React, { useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Specialties from './components/Specialties';
import Footer from './components/Footer';
import './App.css';

import projectImage from './project1.png';
import portfolioImage from './portfolio.svg';
import projectImage3 from './project3.png';

const App = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  const topNavLinks = ['Bio', 'Portfolio'];
  const sidebarLinks = ['Project 1', 'Project 2', 'Project 3'];
  const images = [portfolioImage, projectImage, projectImage3];
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <div className="app-container">
      <TopNav links={topNavLinks} setSelectedLink={setSelectedLink} />
      <div className="app-content">
        <Sidebar links={sidebarLinks} setSelectedLink={setSelectedLink} />
        <Content selectedLink={selectedLink} images={images} />
      </div>
      <Specialties skills={skills} />
      <Footer />
    </div>
  );
};

export default App;