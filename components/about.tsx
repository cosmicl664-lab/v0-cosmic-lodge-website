// Import the required modules
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <img src="/path/to/above-the-fold-image.jpg" alt="Above the fold" />
            {/* Images below the fold with lazy loading */}
            <img src="/path/to/first-below-the-fold-image.jpg" alt="First below the fold" loading="lazy" />
            <img src="/path/to/second-below-the-fold-image.jpg" alt="Second below the fold" loading="lazy" />
            <img src="/path/to/third-below-the-fold-image.jpg" alt="Third below the fold" loading="lazy" />
        </div>
    );
};

export default About;