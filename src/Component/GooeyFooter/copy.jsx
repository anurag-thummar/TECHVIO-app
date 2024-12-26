import React, { useEffect, useState } from 'react';
import './GooeyFooter.css'; // Import the CSS file

const copy = () => {
    const [balls, setBalls] = useState([]);

    // Generate balls when the component mounts
    useEffect(() => {
        const generateBalls = () => {
            const newBalls = [];
            const numBalls = Math.floor(window.innerWidth / 20); // Number of balls based on screen width
            for (let i = 0; i < numBalls; i++) {
                newBalls.push({
                    id: i,
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 2 + 's'
                });
            }
            setBalls(newBalls);
        };

        generateBalls();
        window.addEventListener('resize', generateBalls);

        return () => {
            window.removeEventListener('resize', generateBalls);
        };
    }, []);

    return (
        <>
            <footer>
                <div className="gooey-animations">
                    {balls.map(ball => (
                        <div
                            key={ball.id}
                            className="ball"
                            style={{ left: ball.left, animationDelay: ball.animationDelay }}
                        ></div>
                    ))}
                </div>
                <h1>This footer was made by <span>Wouter.</span></h1>
            </footer>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className="footer_style">
                <svg 
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        fill: "#042c4c",
                        width: "136%",
                        height: "53px",
                        transform: "rotate(180deg)",
                        position: "relative"
                    }}
                >
                    <path d="M0,0V46.29c47.35,29.19,103.78,26.18,152.81,3.92,43.48-19.88,84.09-44.22,131.36-48.17,36.29-3,71.56,9.42,104.81,22.98,40.29,16.51,83.24,29.42,128.17,27.11,48.11-2.49,95.3-19.27,141.36-35.74,32.67-11.89,65.27-24.94,100.2-26.18,42.4-1.51,81.77,17.74,122.32,29.18,38.83,10.79,77.7,15.78,117.19,8.57,30.89-5.51,60.22-17.12,89.41-27.63,32.25-11.68,64.75-23.94,100.2-21.95,40.77,2.33,78.15,16.13,116.19,29.18,30.27,10.23,59.77,20.3,91.36,21.95,30.3,1.58,59.3-7.67,87.36-20.3V0Z" opacity=".25" />
                    <path d="M0,0V15.81c47.35,29.19,103.78,26.18,152.81,3.92,43.48-19.88,84.09-44.22,131.36-48.17,36.29-3,71.56,9.42,104.81,22.98,40.29,16.51,83.24,29.42,128.17,27.11,48.11-2.49,95.3-19.27,141.36-35.74,32.67-11.89,65.27-24.94,100.2-26.18,42.4-1.51,81.77,17.74,122.32,29.18,38.83,10.79,77.7,15.78,117.19,8.57,30.89-5.51,60.22-17.12,89.41-27.63,32.25-11.68,64.75-23.94,100.2-21.95,40.77,2.33,78.15,16.13,116.19,29.18,30.27,10.23,59.77,20.3,91.36,21.95,30.3,1.58,59.3-7.67,87.36-20.3V0Z" opacity=".5" />
                    <path d="M0,0V5.81c47.35,29.19,103.78,26.18,152.81,3.92,43.48-19.88,84.09-44.22,131.36-48.17,36.29-3,71.56,9.42,104.81,22.98,40.29,16.51,83.24,29.42,128.17,27.11,48.11-2.49,95.3-19.27,141.36-35.74,32.67-11.89,65.27-24.94,100.2-26.18,42.4-1.51,81.77,17.74,122.32,29.18,38.83,10.79,77.7,15.78,117.19,8.57,30.89-5.51,60.22-17.12,89.41-27.63,32.25-11.68,64.75-23.94,100.2-21.95,40.77,2.33,78.15,16.13,116.19,29.18,30.27,10.23,59.77,20.3,91.36,21.95,30.3,1.58,59.3-7.67,87.36-20.3V0Z" />
                </svg>
            </div>
        </>
    );
};

export default copy;