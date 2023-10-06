import React, { useState } from 'react';

const Footer = () => {
    const [showStructure, setShowStructure] = useState(false);

    const toggleStructure = () => {
        setShowStructure(!showStructure);
    };

    const footerStyle = {
        backgroundColor: '#2c3e50', // Replace with your desired background color
        color: '#ffffff', // Replace with your desired text color
        padding: '10px',
        textAlign: 'center',
        fontSize: '14px',
    };

    const buttonStyle = {
        marginTop: '10px',
        border: 'none',
        background: 'none',
        color: '#ffffff',
        cursor: 'pointer',
        textDecoration: 'underline',
    };

    const projectInfoStyle = {
        marginTop: '10px',
        display: showStructure ? 'block' : 'none',
    };

    return (
        <footer style={footerStyle}>
            Built in JavaScript with React
            <button style={buttonStyle} onClick={toggleStructure}>
                {showStructure ? 'Hide Project Structure' : 'Show Project Structure'}
            </button>
            <div style={projectInfoStyle}>
                Project Structure:
                <ul>
                    <li>src</li>
                    <ul>
                        <li>components</li>
                        <ul>
                            <li>Footer</li>
                            <ul>
                                <li>Footer.js</li>
                            </ul>
                            <li>TopNav</li>
                            <ul>
                                <li>TopNav.js</li>
                            </ul>
                            <li>Sidebar</li>
                            <ul>
                                <li>Sidebar.js</li>
                            </ul>
                            <li>Content</li>
                            <ul>
                                <li>Content.js</li>
                            </ul>
                            <li>Specialties</li>
                            <ul>
                                <li>Specialties.js</li>
                            </ul>
                        </ul>
                        <li>App.js</li>
                        <li>App.css</li>
                        <li>assets</li>
                        <ul>
                            <li>images</li>
                            <ul>
                                <li>project1.png</li>
                                <li>portfolio.svg</li>
                                <li>project3.png</li>
                            </ul>
                            <li>styles</li>
                            <ul>
                                <li>main.css</li>
                            </ul>
                        </ul>
                        <li>index.js</li>
                    </ul>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;