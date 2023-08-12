import React from 'react';

const Sidebar = ({ links, setSelectedLink }) => {
    return (
        <div className="sidebar">
            {links.map((link, index) => (
                <div
                    key={index}
                    className="sidebar-link"
                    onClick={() => setSelectedLink(index)}
                >
                    {link}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;