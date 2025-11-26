import React from 'react';
import './TrustedBy.css';

const offerings = [
    "WEBSITE DEVELOPMENT",
    "UI/UX DESIGN",
    "WEBSITE REDESIGN & REVAMP",
    "DEPLOYMENT & HOSTING SETUP",
    "REACT",
    "FIREBASE",
    "AUTHENTICATION",
    "FRONTEND ARCHITECTURE",
    "BACKEND INTEGRATION",
    "SEO OPTIMIZATION",
    "PERFORMANCE TUNING"
];

// Duplicate the list to ensure seamless scrolling
const marqueeList = [...offerings, ...offerings, ...offerings];

const TrustedBy = () => {
    return (
        <section className="trusted-section">
            <div className="marquee-container">
                <div className="marquee-content">
                    {marqueeList.map((item, index) => (
                        <div key={index} className="offering-item">
                            <span>{item}</span>
                            <span className="separator">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
