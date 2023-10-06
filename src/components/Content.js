import React, { useState } from 'react';

const Content = ({ selectedLink, images }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleEnlarged = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className={`content ${isEnlarged ? 'enlarged' : ''}`} onClick={toggleEnlarged}>
            <img src={images[selectedLink]} alt={`Project ${selectedLink + 1}`} className={`img-fluid ${isEnlarged ? 'enlarged-img' : ''}`} />
            <div className="content-overlay">
                <div className="content-text">
                    <h2 className="content-title"> Click to open modal to view image for Project {selectedLink + 1}</h2>
                </div>
            </div>
        </div>
    );
};

export default Content;