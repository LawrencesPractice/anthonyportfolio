import React from 'react';

const TopNav = ({ links, setSelectedLink }) => {
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <span className="email">AnthonyNi@example.com</span>
      </div>
      <div className="top-nav-middle">
        <div className="half-circle"></div> {/* Half circle element */}
        <span className="brand">Anthony Ni</span>
      </div>
      <ul className="top-nav-links">
        {links.map((link, index) => (
          <li
            key={index}
            className="top-nav-link"
            onClick={() => handleLinkClick(index)}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;