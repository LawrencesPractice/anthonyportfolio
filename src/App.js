import React, { useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  const links = ['Project 1', 'Project 2', 'Project 3'];

  const images = [
    '/path/to/project1-image.jpg',
    '/path/to/project2-image.jpg',
    '/path/to/project3-image.jpg',
  ];

  return (
    <div className="app-container">
      <TopNav />
      <div className="app-content">
        <Sidebar links={links} setSelectedLink={setSelectedLink} />
        <Content selectedLink={selectedLink} images={images} />
      </div>
    </div>
  );
};

export default App;