import React, { useState } from 'react';

const Content = ({ selectedLink, images }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleEnlarged = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className={`content ${isEnlarged ? 'enlarged' : ''}`} onClick={toggleEnlarged}>
            <img src={images[selectedLink]} alt={`Project ${selectedLink}`} className={`img-fluid ${isEnlarged ? 'enlarged-img' : ''}`} />
            <div className="content-overlay">
                <div className="content-text">
                    <h2 className="content-title">Project {selectedLink}</h2>
                </div>
            </div>
        </div>
    );
};

export default Content;